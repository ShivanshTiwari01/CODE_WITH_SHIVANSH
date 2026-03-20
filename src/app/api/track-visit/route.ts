import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { UAParser } from 'ua-parser-js';

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('cf-connecting-ip') ||
      request.headers.get('x-real-ip') ||
      'Unknown IP';

    const userAgent = request.headers.get('user-agent') || 'Unknown Device';

    const parser = new UAParser(userAgent);
    const result = parser.getResult();

    const deviceDetails = {
      browser: result.browser.name,
      browser_version: result.browser.version,
      os: result.os.name,
      os_version: result.os.version,
      device_type: result.device.type || 'desktop',
      device_vendor: result.device.vendor || 'unknown',
      device_model: result.device.model || 'unknown',
    };

    console.log(
      'Tracking visit - IP:',
      ip,
      'User-Agent:',
      userAgent,
      'Device Details:',
      deviceDetails,
    );

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
        }
      }
    } catch (locationErr) {
      console.error('Location fetch failed (ignored):', locationErr);
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);

      let visitedAt = new Date().toISOString();
      try {
        const parsedNode = JSON.parse(locationInfo);
        if (parsedNode?.time_zone?.current_time) {
          visitedAt = parsedNode.time_zone.current_time;
        }
      } catch (e) {
        // Ignored if locationInfo is not valid JSON
      }

      const { error } = await supabase.from('visitor_logs').insert({
        ip: locationIp,
        location: locationInfo,
        device_details: deviceDetails,
        visited_at: visitedAt,
      });

      if (error) {
        console.error('Supabase insert error:', error);
      }
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
