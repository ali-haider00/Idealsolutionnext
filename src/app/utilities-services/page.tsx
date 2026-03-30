import Herosection from '@/components/Herosection';
import AboutSection from '@/components/About';
import AboutSection2 from '@/components/AboutSection2';
import OurServices from '@/components/Ourservices';
import ProcessComponent from '@/components/ProcessComponent';
import TestimonialsCarousel from '@/components/mvpblocks/testimonials-carousel';
import Faq2 from '@/components/mvpblocks/faq-2';
import FeatureSteps from '@/components/mvpblocks/feature-2';
import CTA1 from '@/components/ui/CTA1';

export default function UtilitiesHome() {
  return (
    <>
      <Herosection/>
      <AboutSection/>
      <AboutSection2/>
      <OurServices/>
      <ProcessComponent/>
      <Faq2/>
      <TestimonialsCarousel/>
      <FeatureSteps/>
      <CTA1/>
    </>
  );
}
