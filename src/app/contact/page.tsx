import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import FooterColumns from '@/components/blocks/footer-columns';
import ContactForm from '@/components/blocks/contact-form';
import ContactMap from '@/components/blocks/contact-map';

export const metadata: Metadata = {
  title: 'Contact | Harris Landscaping & Gardens',
  description:
    'Get in touch with Harris Landscaping & Gardens for a free, detailed, obligation-free quote across South-West Sydney.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar
        cta="Get a Free Quote"
        logo="Harris Landscaping & Gardens"
        links={[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About' },
          { href: '/services', label: 'Services' },
          { href: '/project-gallery', label: 'Project Gallery' },
          { href: '/service-areas', label: 'Service Areas' },
          { href: '/contact', label: 'Contact' },
        ]}
        ctaHref="/contact"
        logoHref="/"
      />
      <ContactForm
        formCta="Send My Quote Request"
        heading="Get in Touch With Our Team"
        subheading="Ready to transform your outdoor space? Fill out the form below and we'll get back to you with a detailed, obligation-free quote."
      />
      <ContactMap
        email="info@harrislandscaping.com.au"
        hours="Mon–Fri: 6:30am – 4:30pm | Saturday: By appointment | Sunday: Closed"
        phone="0400 000 000"
        address="Campbelltown, NSW 2560"
        heading="Find Us"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.0!2d150.8!3d-34.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCampbelltown+NSW+2560!5e0!3m2!1sen!2sau!4v1"
      />
      <FooterColumns
        logo="Harris Landscaping & Gardens"
        blurb="Harris Landscaping & Gardens delivers premium landscaping, paving, turf, decking, and garden makeovers across South-West Sydney. Quality workmanship, clear communication, and results you'll love."
        email="info@harrislandscaping.com.au"
        phone="0400 000 000"
        columns={[
          { links: [ { href: '/services#paving', label: 'Paving' }, { href: '/services#turf', label: 'Turf Installation' }, { href: '/services#decking', label: 'Decking' }, { href: '/services#retaining-walls', label: 'Retaining Walls' }, { href: '/services#garden-makeovers', label: 'Garden Makeovers' }, { href: '/services#irrigation', label: 'Irrigation Systems' } ], heading: 'Services' },
          { links: [ { href: '/service-areas/campbelltown', label: 'Campbelltown' }, { href: '/service-areas/camden', label: 'Camden' }, { href: '/service-areas/narellan', label: 'Narellan' }, { href: '/service-areas/picton', label: 'Picton' }, { href: '/service-areas/macarthur', label: 'Macarthur Region' }, { href: '/service-areas/south-west-sydney', label: 'South-West Sydney' } ], heading: 'Service Areas' },
          { links: [ { href: '/about', label: 'About Us' }, { href: '/project-gallery', label: 'Project Gallery' }, { href: '/contact', label: 'Contact' }, { href: '/contact', label: 'Get a Free Quote' } ], heading: 'Company' },
        ]}
        copyright="© 2026 Harris Landscaping & Gardens. All rights reserved."
      />
    </>
  );
}
