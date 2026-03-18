import { FiServer, FiGlobe, FiLayout, FiZap, FiBox } from 'react-icons/fi';

import { LuBot } from 'react-icons/lu';

const services = [
  {
    icon: <FiGlobe size={32} />,
    title: 'Full-Stack Product Development',
    description:
      'End-to-end product delivery from database schema to polished UI — React, Next.js frontends backed by robust server-side logic and clean data layers.',
    tags: ['React', 'Next.js', 'TypeScript', 'Prisma'],
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: <FiServer size={32} />,
    title: 'Scalable Backend Development',
    description:
      'Production-grade backend systems using Node.js, Express, and Go. I design APIs and services built to handle thousands of concurrent users with high availability.',
    tags: ['Node.js', 'Express', 'Go', 'PostgreSQL', 'Redis'],
    gradient: 'from-cyan-500 to-blue-600',
  },

  {
    icon: <FiLayout size={32} />,
    title: 'System Architecture & Design',
    description:
      'Designing scalable distributed systems with event-driven patterns, microservices, and clean architecture standards that scale with your business.',
    tags: ['Microservices', 'Event-Driven', 'DDD', 'System Design'],
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: <LuBot size={32} />,
    title: 'AI Services and Agents',
    description:
      'Building intelligent AI agents and integrating AI services into your applications. From custom chatbots to automated workflows — I help you leverage the power of AI.',
    tags: ['AI', 'Agents', 'LLMs', 'RAG'],
    gradient: 'from-orange-500 to-rose-500',
  },
  {
    icon: <FiZap size={32} />,
    title: 'Real-Time Systems',
    description:
      'Building low-latency real-time features using WebSockets and Kafka. From live leaderboards to collaborative tools — sub-100ms experiences.',
    tags: ['WebSockets', 'Kafka', 'Redis Pub/Sub', 'OneSignal'],
    gradient: 'from-pink-500 to-fuchsia-600',
  },
  {
    icon: <FiBox size={32} />,
    title: 'DevOps & CI/CD Automation',
    description:
      'Automating deployment pipelines with Docker, GitHub Actions, and Ansible. Reducing delivery time and eliminating manual deployment headaches.',
    tags: ['Docker', 'AWS', 'GitHub Actions', 'Ansible'],
    gradient: 'from-sky-500 to-indigo-600',
  },
];

const ServicesSection = () => (
  <section id='services' className='py-20 bg-[var(--gray-50)]'>
    <div className='max-w-6xl mx-auto px-4'>
      <h2 className='text-4xl font-bold mb-4 text-center text-[var(--foreground)]'>
        What I Can Build For You
      </h2>
      <p className='text-center text-[var(--gray-700)] text-lg mb-12 max-w-2xl mx-auto'>
        I partner with startups and teams to design and ship end-to-end scalable
        products — from MVP to production.
      </p>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {services.map((service) => (
          <div
            key={service.title}
            className='group bg-[var(--background)] rounded-2xl p-6 border border-[var(--gray-200)] shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col'
          >
            {/* Icon */}
            <div
              className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
              {service.icon}
            </div>

            <h3 className='text-xl font-bold mb-3 text-[var(--foreground)]'>
              {service.title}
            </h3>
            <p className='text-[var(--gray-700)] text-sm leading-relaxed mb-5 flex-1'>
              {service.description}
            </p>

            {/* Tags */}
            <div className='flex flex-wrap gap-2 mt-auto'>
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className='text-xs font-medium px-2.5 py-1 rounded-md bg-[var(--gray-100)] text-[var(--foreground)] border border-[var(--gray-200)]'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className='text-center mt-14'>
        <p className='text-[var(--gray-700)] text-lg mb-5'>
          Have a project in mind?
        </p>
        <a
          href='#contact'
          className='inline-block px-10 py-4 rounded-full bg-gradient-to-r from-[var(--primary)] to-blue-600 text-white font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300'
        >
          💬 Let&apos;s Talk
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection;
