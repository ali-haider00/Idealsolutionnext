import PageBanner from '@/components/ui/PageBanner';
import OurServices from '@/components/Ourservices';

export default function Services() {
  return (
    <>
      <PageBanner
        title="Our Services"
        breadcrumb="Home / Services"
        backgroundImage="/assets/aboutbanner2.jpg"
      />
      <OurServices />
    </>
  );
}
