import Image from "next/image";

export default function AboutSection2() {
  return (
    <section className="w-full bg-[var(--bg-main)] py-16 lg:py-28">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left: Content (40%) */}
        <div className="w-full lg:w-2/5 space-y-8">
          {/* Section Tag */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-1 bg-[var(--secondary-500)] rounded-full" />
            <span className="text-sm font-medium text-[var(--text-muted)] uppercase tracking-wider">
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-main)] leading-tight">
            Your Trusted Partner in Smarter Business Energy Solutions
          </h2>

          {/* Description */}
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">
            At Ideal Solutions, we simplify the complex energy market for UK businesses. Our expert brokers compare leading suppliers to secure the best electricity, gas, and renewable deals — saving you time, money, and hassle while supporting your sustainability goals.
          </p>

          {/* Mission Quote Card */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 lg:p-8 shadow-lg">
            <p className="text-base lg:text-lg italic text-[var(--text-main)] leading-relaxed">
              "We're committed to empowering businesses with transparent, tailored energy solutions that reduce costs and carbon footprints — today and for the future."
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-1 bg-[var(--primary-500)] rounded-full" />
              <span className="text-sm font-medium text-[var(--text-soft)]">
                Our Mission
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="inline-flex items-center gap-3 px-7 py-4 bg-[var(--secondary-500)] hover:bg-[var(--secondary-600)] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
            Discover How We Can Help
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Right: Images Grid (60%) */}
        <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Main Large Image - Energy Consultants */}
          <div className="row-span-1 sm:row-span-2">
            <Image
              src="https://images.ctfassets.net/iz8bifzn5ffa/5sMfQqXYKfqTS3b42FVMf3/275b6e0f003226736e0fea015e792d48/Discussing_graphs_website.webp?w=3840&q=100"
              alt="Expert energy consultants reviewing business energy options"
              width={400}
              height={560}
              className="w-full h-full min-h-[300px] sm:min-h-[560px] object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
            />
          </div>

          {/* Top Right - Commercial Solar */}
          <Image
            src="https://thumbs.dreamstime.com/b/solar-energy-city-skyline-roof-solar-energy-panels-reflected-modern-city-skyline-100617712.jpg"
            alt="Commercial solar panels on business rooftop"
            width={400}
            height={256}
            className="w-full h-64 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
          />

          {/* Bottom Right - Energy Monitoring Dashboard */}
          <Image
            src="https://www.slideteam.net/wp/wp-content/uploads/2025/06/power-plant-energy-consumption-and-monitoring-dashboard.png"
            alt="Smart energy monitoring and efficiency dashboard"
            width={400}
            height={256}
            className="w-full h-64 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
          />
        </div>
      </div>
    </section>
  );
}
