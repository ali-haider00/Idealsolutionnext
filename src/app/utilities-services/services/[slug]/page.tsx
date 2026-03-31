import PageBanner from '@/components/ui/PageBanner';
import { CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const serviceData: Record<string, { 
  title: string; 
  subtitle: string;
  bannerImage: string;
  intro: {
    heading: string;
    description: string;
    images: string[];
  };
  features: {
    heading: string;
    description: string;
    list: string[];
  };
  conclusion: {
    heading: string;
    text: string;
  };
}> = {
  'business-electricity': {
    title: 'Business Electricity',
    subtitle: 'Reliable Electricity Solutions Built for Modern Businesses.',
    bannerImage: '/assets/urbine.png',
    intro: {
      heading: 'Business Electricity',
      description: 'Electricity is essential to daily business operations. IDEAL SOLUTIONS helps businesses compare electricity prices, secure competitive rates, and switch suppliers with ease — ensuring reliability, transparency, and cost control.',
      images: ['/assets/Untitled-design-27.png', '/assets/pexels-rkftr-4089662.jpg']
    },
    features: {
      heading: 'Key Features',
      description: 'Our business electricity service is designed for efficiency, reliability, and value.',
      list: [
        'Lower electricity bills with competitive pricing.',
        'Access to trusted UK electricity suppliers.',
        'Simple and hassle-free switching process.',
        'Custom electricity plans based on usage.',
        'Expert energy consultation and support.',
        'Transparent pricing with no hidden fees.'
      ]
    },
    conclusion: {
      heading: 'Smarter Power for Your Business',
      text: 'With IDEAL SOLUTIONS, switching business electricity is easy, reliable, and cost-effective. Let us help you take control of your energy costs while ensuring uninterrupted power.'
    }
  },
  'business-gas': {
    title: 'Business Gas',
    subtitle: 'Smarter Business Gas Solutions for a More Efficient Future.',
    bannerImage: '/assets/pexels-magda-ehlers-pexels-2569842.jpg',
    intro: {
      heading: 'Business Gas',
      description: 'At IDEAL SOLUTIONS, we make managing your business gas simple, affordable, and stress-free. By comparing rates from leading UK suppliers, we help you secure most competitive deals while ensuring a smooth and transparent switching process.',
      images: ['/assets/urbine-4.png', '/assets/pexels-pixabay-266896.jpg']
    },
    features: {
      heading: 'Key Features',
      description: 'Our business gas comparison service delivers maximum savings with minimal effort.',
      list: [
        'Instant reduction in business gas costs.',
        'Fast, smooth, and fully managed switching.',
        'Compare trusted suppliers like EDF and British Gas.',
        'Flexible plans tailored to your business usage.',
        'Expert guidance throughout process.',
        'No hidden charges — just honest savings.'
      ]
    },
    conclusion: {
      heading: 'Power Your Business with Confidence',
      text: 'Switching your business gas supplier with IDEAL SOLUTIONS is a smart move toward lower costs, better service, and long-term efficiency. We handle everything so you can focus on growing your business.'
    }
  },
  'business-insurance': {
    title: 'Business Insurance',
    subtitle: 'Protecting Your Business with Comprehensive Coverage.',
    bannerImage: '/assets/pexels-shkrabaanthony-5816286.jpg',
    intro: {
      heading: 'Business Insurance',
      description: 'Every business faces risks. IDEAL SOLUTIONS helps you find tailored insurance policies that protect your assets, employees, and operations — all at competitive prices.',
      images: ['/assets/pexels-fauxels-3183183.jpg', '/assets/pexels-yankrukov-8867250.jpg']
    },
    features: {
      heading: 'Key Features',
      description: 'Our business insurance solutions are designed to provide peace of mind.',
      list: [
        'Tailored insurance solutions for your industry.',
        'Coverage for property, liability, and employees.',
        'Competitive pricing from trusted insurers.',
        'Simple policy comparison and setup.',
        'Expert advice to reduce risk exposure.',
        'Clear terms with no unnecessary complexity.'
      ]
    },
    conclusion: {
      heading: 'Secure What Matters Most',
      text: 'IDEAL SOLUTIONS ensures your business is protected against uncertainty. With the right insurance in place, you can operate with confidence and focus on growth.'
    }
  },
  'business-telecoms': {
    title: 'Business Telecoms',
    subtitle: 'Connecting Your Business with Reliable Communication.',
    bannerImage: '/assets/urbine.png',
    intro: {
      heading: 'Business Telecoms',
      description: 'Strong communication is the backbone of any successful business. IDEAL SOLUTIONS provides cost-effective telecom solutions including broadband, phone systems, and mobile plans tailored to your needs.',
      images: ['/assets/pexels-nakib-35485465.jpg', '/assets/pexels-pixabay-209695.jpg']
    },
    features: {
      heading: 'Key Features',
      description: 'Our telecom services keep your business connected without compromise.',
      list: [
        'High-speed business broadband solutions.',
        'Flexible mobile and phone systems.',
        'Scalable plans for growing businesses.',
        'Reliable UK telecom providers.',
        'Expert setup and ongoing support.',
        'Affordable pricing with clear contracts.'
      ]
    },
    conclusion: {
      heading: 'Communication Without Limits',
      text: 'IDEAL SOLUTIONS delivers telecom solutions that keep your business connected, productive, and competitive — without unnecessary costs or complexity.'
    }
  },
  'business-water': {
    title: 'Business Water',
    subtitle: 'Smarter Water Management for Cost-Conscious Businesses.',
    bannerImage: '/assets/pexels-alexey-demidov-12726229.jpg',
    intro: {
      heading: 'Business Water',
      description: 'Businesses across the UK can now choose their water supplier. IDEAL SOLUTIONS helps you compare providers, reduce costs, and manage water usage more efficiently.',
      images: ['/assets/pexels-yawalo-by-fonnzzzy-77751551-8678866.jpg', '/assets/pexels-didsss-2183113.jpg']
    },
    features: {
      heading: 'Key Features',
      description: 'Our water services are designed to reduce waste and cut costs.',
      list: [
        'Compare water suppliers with ease.',
        'Lower water bills through smarter plans.',
        'Support for multi-site businesses.',
        'Clear billing and account management.',
        'Sustainability-focused water solutions.',
        'Dedicated customer support.'
      ]
    },
    conclusion: {
      heading: 'Better Water, Better Business',
      text: 'With IDEAL SOLUTIONS, managing business water becomes simple, transparent, and cost-effective — helping you save money and resources.'
    }
  },
  'domestic-energy': {
    title: 'Domestic Energy',
    subtitle: 'Affordable Energy Solutions for Your Home.',
    bannerImage: '/assets/4CPV5WC.jpg',
    intro: {
      heading: 'Domestic Energy',
      description: 'IDEAL SOLUTIONS helps households find better gas and electricity deals. We compare trusted suppliers to help you reduce bills and enjoy reliable energy at home.',
      images: ['/assets/pexels-centre-for-ageing-better-55954677-9729882.jpg', '/assets/pexels-kindelmedia-9875423.jpg']
    },
    features: {
      heading: 'Key Features',
      description: 'Our domestic energy services are designed for comfort and savings.',
      list: [
        'Lower household energy bills.',
        'Compare leading UK energy suppliers.',
        'Quick and simple switching process.',
        'No interruption to your supply.',
        'Transparent pricing and clear terms.',
        'Friendly customer support.'
      ]
    },
    conclusion: {
      heading: 'Energy That Feels Right at Home',
      text: 'Switching domestic energy with IDEAL SOLUTIONS is easy, secure, and rewarding. Enjoy better rates and peace of mind with a trusted energy partner.'
    }
  },
  'merchant-service': {
    title: 'Merchant Services',
    subtitle: 'Smart Payment Solutions That Help Your Business Grow.',
    bannerImage: '/assets/pexels-pixabay-164501.jpg',
    intro: {
      heading: 'Merchant Services',
      description: 'Accept payments seamlessly with IDEAL SOLUTIONS. We provide secure, fast, and affordable merchant services designed to support modern businesses.',
      images: ['/assets/pexels-pixabay-50987.jpg', '/assets/pexels-energepic-com-27411-2988232.jpg']
    },
    features: {
      heading: 'Key Features',
      description: 'Our merchant solutions simplify payments and improve cash flow.',
      list: [
        'Card payment machines for all business types.',
        'Competitive transaction rates.',
        'Fast and secure payment processing.',
        'Support for in-store and online payments.',
        'Quick setup with minimal paperwork.',
        'Reliable customer support.'
      ]
    },
    conclusion: {
      heading: 'Payments Made Simple',
      text: 'IDEAL SOLUTIONS empowers your business with payment solutions that are fast, secure, and affordable — helping you serve customers better and grow faster.'
    }
  }
};

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-xl text-[var(--text-muted)]">The service you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageBanner
        title={service.title}
        subtitle={service.subtitle}
        breadcrumb={`Home / Services / ${service.title}`}
        backgroundImage={service.bannerImage}
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-[var(--bg-main)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">
                {service.intro.heading}
              </h1>
              <p className="text-xl text-[var(--text-muted)] leading-relaxed mb-8">
                {service.intro.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {service.features.list.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--secondary-500)]" />
                    <span className="text-[var(--text-main)]">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/utilities-services/contact">
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--secondary-500)] hover:bg-[var(--secondary-600)] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src={service.intro.images[0]}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>

          {/* Second Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden order-2 lg:order-1">
              <img
                src={service.intro.images[1]}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-main)] mb-6">
                {service.features.heading}
              </h2>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-8">
                {service.features.description}
              </p>
              
              <div className="space-y-3">
                {service.features.list.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--secondary-500)] mt-1 flex-shrink-0" />
                    <span className="text-[var(--text-main)]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 px-4 bg-[var(--bg-card)]">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-main)] mb-6">
              {service.conclusion.heading}
            </h2>
            <p className="text-xl text-[var(--text-muted)] mb-8 leading-relaxed">
              {service.conclusion.text}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/utilities-services/contact">
                <button className="px-8 py-4 bg-[var(--secondary-500)] hover:bg-[var(--secondary-600)] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Phone className="w-5 h-5 inline mr-2" />
                  Call Us
                </button>
              </Link>
              <Link href="/utilities-services/contact">
                <button className="px-8 py-4 border-2 border-[var(--primary-500)] text-[var(--primary-600)] hover:bg-[var(--primary-500)] hover:text-white font-bold rounded-full transition-all duration-300">
                  <Mail className="w-5 h-5 inline mr-2" />
                  Email Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
