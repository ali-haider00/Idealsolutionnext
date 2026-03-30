import PageBanner from '@/components/ui/PageBanner';
import AboutComponent from '@/components/AboutComponent';
import StatsCounter from '@/components/StatsCounter';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function About() {
  return (
    <>
      <PageBanner
        title="About Us"
        breadcrumb="Home / About Us"
        backgroundImage="/assets/aboutbanner2.jpg"
      />
      <AboutComponent />
      <StatsCounter />
      <WhyChooseUs />
    </>
  );
}
