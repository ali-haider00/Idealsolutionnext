import PageBanner from '@/components/ui/PageBanner';
import ComplaintsContent from '@/components/ComplaintsContent';
import FeatureSteps from '@/components/mvpblocks/feature-2';
import Feature3 from '@/components/mvpblocks/feature-3';

function Complaints() {
  return (
    <>
     <PageBanner
              title="Complaints Handling"
                 breadcrumb="Home / Complaints Handling"
                 backgroundImage="/assets/pexels-rdne-7821498.jpg"
                 />
    <ComplaintsContent/>
      <Feature3/>         
     <FeatureSteps/>  
    </>
  )
}

export default Complaints;
