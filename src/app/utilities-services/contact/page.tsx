import PageBanner from '@/components/ui/PageBanner';
import ContactUs1 from '@/components/mvpblocks/contact-us-1';
import ContactSection from '@/components/ContactSection';

function Contact() {
  return (
    <>
        <PageBanner
               title="Contact"
                  breadcrumb="Home /  Contact"
                  backgroundImage="/assets/contactbanner.jpg"
                  />
        <ContactUs1/>
       
        <ContactSection/>
       </>
  )
}

export default Contact;
