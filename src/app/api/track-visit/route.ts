import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('cf-connecting-ip') ||
      request.headers.get('x-real-ip') ||
      'Unknown IP';
    const userAgent = request.headers.get('user-agent') || 'Unknown Device';

    let locationInfo = 'Unknown Location';
    let locationIp = ip;

    try {
      if (process.env.IPGEOLOCATION_API_KEY && ip && ip !== 'Unknown IP') {
        const requestOptions: RequestInit = {
          method: 'GET',
          headers: new Headers(),
          redirect: 'follow',
        };

        const ipParam =
          ip === '::1' || ip === '127.0.0.1' || ip === 'Unknown IP'
            ? ''
            : `&ip=${ip}`;
        const locationResponse = await fetch(
          `https://api.ipgeolocation.io/v3/ipgeo?apiKey=${process.env.IPGEOLOCATION_API_KEY}${ipParam}`,
          requestOptions,
        );

        if (locationResponse.ok) {
          const locationData = await locationResponse.json();
          locationInfo = JSON.stringify(locationData.location);
          locationIp = locationData.ip;

          console.log('Location fetched successfully:', locationInfo);
          console.log('IP used for location fetch:', locationIp);
        }
      }
    } catch (locationErr) {
      console.error('Location fetch failed (ignored):', locationErr);
    }

    if (process.env.DATABASE_URL) {
      console.log('Database URL found:', process.env.DATABASE_URL);
      console.log('Connecting to database to log visit...');
      const sql = neon(process.env.DATABASE_URL, {
        fetchOptions: { signal: AbortSignal.timeout(60000) },
      });

      await sql`
        CREATE TABLE IF NOT EXISTS visitor_logs (
          id SERIAL PRIMARY KEY,
          ip VARCHAR(255),
          user_agent TEXT,
          location TEXT,
          visited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `;

      let visitedAt = new Date().toISOString();
      try {
        const parsedNode = JSON.parse(locationInfo);
        if (parsedNode?.time_zone?.current_time) {
          visitedAt = parsedNode.time_zone.current_time;
        }
      } catch (e) {
        // Ignored if locationInfo is not valid JSON
      }

      await sql`
        INSERT INTO visitor_logs (ip, user_agent, location, visited_at)
        VALUES (${locationIp}, ${userAgent}, ${locationInfo}, ${visitedAt})
      `;
    }

    return NextResponse.json(
      { success: true, message: 'Visit tracked successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Failed to track visit:', error);
    return NextResponse.json(
      { success: false, message: 'Tracking skipped' },
      { status: 200 },
    );
  }
}
