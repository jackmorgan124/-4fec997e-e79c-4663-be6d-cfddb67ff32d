import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import FooterColumns from '@/components/blocks/footer-columns';
import ServiceAreaGrid from '@/components/blocks/service-area-grid';
import ImageTextSplit from '@/components/blocks/image-text-split';
import CtaSplit from '@/components/blocks/cta-split';

export const metadata: Metadata = {
  title: 'Service Areas | Harris Landscaping & Gardens',
  description:
    'Harris Landscaping & Gardens services Campbelltown, Camden, Narellan, Picton, the Macarthur Region, and South-West Sydney.',
};

export default function ServiceAreasPage() {
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
      <ServiceAreaGrid
        areas={[
          { href: '/service-areas/campbelltown', name: 'Campbelltown' },
          { href: '/service-areas/camden', name: 'Camden' },
          { href: '/service-areas/narellan', name: 'Narellan' },
          { href: '/service-areas/picton', name: 'Picton' },
          { href: '/service-areas/macarthur', name: 'Macarthur Region' },
          { href: '/service-areas/south-west-sydney', name: 'South-West Sydney' },
        ]}
        heading="Landscaping Services Across South-West Sydney"
        subheading="Harris Landscaping & Gardens proudly services homeowners and builders throughout the South-West Sydney region. Find your local area below."
      />
      <ImageTextSplit
        cta="Get a Free Quote"
        body="With over 15 years working throughout South-West Sydney, we understand the local soil types, climate conditions, and council requirements. Whether you're in a new estate in Narellan or an established home in Picton, Harris Landscaping delivers results tailored to your environment. We service all suburbs across the Campbelltown, Camden, and Wollondilly LGAs."
        image="/images/service-area-local.jpg"
        ctaHref="/contact"
        heading="Local Landscapers Who Know Your Area"
        imageAlt="Harris Landscaping working across South-West Sydney suburbs"
        imagePosition="right"
      />
      <CtaSplit
        cta="Get a Free Quote"
        image="/images/cta-outdoor.jpg"
        ctaHref="/contact"
        heading="Ready to Get Started in Your Area?"
        imageAlt="Completed landscaping project in South-West Sydney"
        subheading="Contact Harris Landscaping & Gardens today for a free, detailed quote tailored to your local area and project requirements."
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
