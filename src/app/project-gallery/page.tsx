import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import FooterColumns from '@/components/blocks/footer-columns';
import GalleryBeforeAfter from '@/components/blocks/gallery-before-after';
import Gallery from '@/components/blocks/gallery';
import CtaBanner from '@/components/blocks/cta-banner';

export const metadata: Metadata = {
  title: 'Project Gallery | Harris Landscaping & Gardens',
  description:
    'Browse our before-and-after landscaping transformations across Campbelltown, Camden, Narellan, Picton, and South-West Sydney.',
};

export default function ProjectGalleryPage() {
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
      <GalleryBeforeAfter
        pairs={[
          { after: '/images/after-1.jpg', label: 'Driveway Paving — Campbelltown', before: '/images/before-1.jpg' },
          { after: '/images/after-2.jpg', label: 'Turf Installation — Narellan', before: '/images/before-2.jpg' },
          { after: '/images/after-3.jpg', label: 'Retaining Wall — Camden', before: '/images/before-3.jpg' },
          { after: '/images/after-4.jpg', label: 'Garden Makeover — Picton', before: '/images/before-4.jpg' },
          { after: '/images/after-5.jpg', label: 'Composite Decking — Macarthur', before: '/images/before-5.jpg' },
        ]}
        heading="Before & After Transformations"
        subheading="Browse our before-and-after project showcase featuring residential landscaping transformations across Campbelltown, Camden, Narellan, Picton, and South-West Sydney."
      />
      <Gallery
        images={[
          { alt: 'Paving project in Campbelltown', src: '/images/gallery-1.jpg' },
          { alt: 'Turf installation in Narellan', src: '/images/gallery-2.jpg' },
          { alt: 'Timber decking in Camden', src: '/images/gallery-3.jpg' },
          { alt: 'Retaining wall in Picton', src: '/images/gallery-4.jpg' },
          { alt: 'Garden makeover in South-West Sydney', src: '/images/gallery-5.jpg' },
          { alt: 'Irrigation system installation', src: '/images/gallery-6.jpg' },
          { alt: 'Composite decking in Macarthur', src: '/images/gallery-7.jpg' },
          { alt: 'Full outdoor transformation in Camden', src: '/images/gallery-8.jpg' },
          { alt: 'Driveway paving in Campbelltown', src: '/images/gallery-9.jpg' },
        ]}
        heading="Our Work Speaks for Itself"
        subheading="Explore our full project gallery showcasing paving, turf, decking, retaining walls, and garden makeovers delivered across South-West Sydney."
      />
      <CtaBanner
        cta="Start Your Transformation"
        ctaHref="/contact"
        heading="Love What You See?"
        subheading="Let's create your own outdoor transformation. Get a free, detailed quote from Harris Landscaping & Gardens today."
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
