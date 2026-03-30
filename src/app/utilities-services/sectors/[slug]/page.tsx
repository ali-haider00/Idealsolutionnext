import PageBanner from '@/components/ui/PageBanner';

interface SectorPageProps {
  params: {
    slug: string;
  };
}

const sectorData: Record<string, { title: string; description: string; services: string[]; challenges: string[] }> = {
  manufacturing: {
    title: 'Manufacturing Sector',
    description: 'Specialized energy solutions for manufacturing facilities with high consumption needs and complex requirements.',
    services: [
      'High-volume electricity contracts',
      'Industrial gas supply',
      'Energy efficiency audits',
      'Load management solutions',
      'Backup power systems'
    ],
    challenges: [
      'High energy consumption patterns',
      'Complex machinery requirements',
      'Production schedule optimization',
      'Environmental compliance'
    ]
  },
  retail: {
    title: 'Retail Sector',
    description: 'Utility services tailored for retail businesses of all sizes, from small shops to large chains.',
    services: [
      'Fixed-rate energy contracts',
      'Smart metering solutions',
      'HVAC optimization',
      'Lighting efficiency upgrades',
      'Multi-site management'
    ],
    challenges: [
      'Variable energy usage',
      'Multiple site management',
      'Customer experience considerations',
      'Seasonal demand fluctuations'
    ]
  },
  hospitality: {
    title: 'Hospitality Sector',
    description: 'Energy and utilities solutions for hotels, restaurants, cafes, and other hospitality venues.',
    services: [
      '24/7 energy supply',
      'Kitchen equipment optimization',
      'Climate control systems',
      'Water heating solutions',
      'Guest room energy management'
    ],
    challenges: [
      'Round-the-clock operations',
      'Guest comfort requirements',
      'High hot water demand',
      'Food safety compliance'
    ]
  },
  healthcare: {
    title: 'Healthcare Sector',
    description: 'Reliable utilities and energy solutions for medical facilities and healthcare providers.',
    services: [
      'Backup power systems',
      'Critical infrastructure support',
      'Climate control for medical equipment',
      'Water purification systems',
      'Energy monitoring and reporting'
    ],
    challenges: [
      'Critical power requirements',
      'Strict regulatory compliance',
      'Patient comfort and safety',
      'Specialized equipment needs'
    ]
  },
  education: {
    title: 'Education Sector',
    description: 'Energy solutions for schools, colleges, universities, and educational institutions.',
    services: [
      'Campus-wide energy management',
      'Lighting and HVAC optimization',
      'Renewable energy integration',
      'Energy education programs',
      'Budget-friendly solutions'
    ],
    challenges: [
      'Limited budgets',
      'Seasonal usage patterns',
      'Aging infrastructure',
      'Sustainability goals'
    ]
  },
  'office-buildings': {
    title: 'Office Buildings',
    description: 'Comprehensive utility management for commercial office spaces and business centers.',
    services: [
      'Building management systems',
      'Lighting automation',
      'HVAC optimization',
      'Sub-metering solutions',
      'Green building certifications'
    ],
    challenges: [
      'Tenant satisfaction',
      'Energy efficiency standards',
      'Maintenance coordination',
      'Cost allocation'
    ]
  }
};

export default function SectorPage({ params }: SectorPageProps) {
  const sector = sectorData[params.slug];

  if (!sector) {
    return (
      <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Sector Not Found</h1>
          <p className="text-xl text-[var(--text-muted)]">The sector you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageBanner
        title={sector.title}
        breadcrumb={`Home / Sectors / ${sector.title}`}
        backgroundImage="/assets/aboutbanner2.jpg"
      />

      <section className="py-20 px-4 bg-[var(--bg-main)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-main)] mb-6">
              {sector.title}
            </h2>
            <p className="text-lg text-[var(--text-muted)] max-w-3xl mx-auto">
              {sector.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[var(--text-main)] mb-6">Our Services</h3>
              <ul className="space-y-3">
                {sector.services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[var(--primary-500)] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--text-muted)]">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[var(--text-main)] mb-6">Common Challenges</h3>
              <ul className="space-y-3">
                {sector.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[var(--secondary-500)] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--text-muted)]">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[var(--text-main)] mb-6">Get Started</h3>
            <p className="text-[var(--text-muted)] mb-8">
              Ready to optimize your {sector.title.toLowerCase()} utilities? Our experts are here to help you save money and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[var(--secondary-500)] hover:bg-[var(--secondary-600)] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                Schedule a Consultation
              </button>
              <button className="px-8 py-4 border-2 border-[var(--primary-500)] text-[var(--primary-600)] font-semibold rounded-full hover:bg-[var(--primary-500)] hover:text-white transition-all duration-300">
                Download Sector Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
