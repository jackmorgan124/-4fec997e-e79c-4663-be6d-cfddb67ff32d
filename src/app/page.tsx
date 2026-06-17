import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import FooterColumns from '@/components/blocks/footer-columns';
import HeroSplit from '@/components/blocks/hero-split';
import ServicesGrid from '@/components/blocks/services-grid';
import GalleryBeforeAfter from '@/components/blocks/gallery-before-after';
import ReviewsCarousel from '@/components/blocks/reviews-carousel';

export const metadata: Metadata = {
  title: 'Harris Landscaping & Gardens',
  description:
    'Premium landscaping services across Campbelltown, Camden, Narellan, Picton, and South-West Sydney.',
};

export default function HomePage() {
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
      <HeroSplit
        cta="Get a Free Quote"
        image="/images/hero.jpg"
        ctaHref="/contact"
        headline="Transform Your Outdoor Space Into Something Extraordinary"
        imageAlt="Beautifully landscaped outdoor space in South-West Sydney"
        trustBadge="Trusted by 500+ homeowners across South-West Sydney"
        subheadline="Premium landscaping services across Campbelltown, Camden, Narellan, Picton, and South-West Sydney. From retaining walls to full garden makeovers — we bring your vision to life."
      />
      <ServicesGrid
        items={[
          'Paving — Durable, beautifully finished paving for driveways, paths, and entertaining areas',
          'Turf Installation — Lush, even lawns laid with precision using premium turf varieties',
          'Decking — Custom timber and composite decks designed to complement your home',
          'Retaining Walls — Structurally sound retaining walls built to last in any terrain',
          'Garden Design & Makeovers — Full outdoor transformations tailored to your lifestyle',
          'Irrigation Systems — Efficient, automated irrigation to keep your garden thriving year-round',
        ]}
        heading="Complete Outdoor Transformation Services"
        subheading="Everything you need to create the perfect outdoor space — designed, built, and delivered by experienced local landscapers."
      />
      <GalleryBeforeAfter
        pairs={[
          { after: '/images/after-1.jpg', label: 'Driveway Paving — Campbelltown', before: '/images/before-1.jpg' },
          { after: '/images/after-2.jpg', label: 'Turf Installation — Narellan', before: '/images/before-2.jpg' },
          { after: '/images/after-3.jpg', label: 'Garden Makeover — Camden', before: '/images/before-3.jpg' },
        ]}
        heading="Our Work Speaks for Itself"
        subheading="Browse our before-and-after project showcase featuring residential landscaping transformations across South-West Sydney."
      />
      <ReviewsCarousel
        items={[
          { author: 'Sarah M., Campbelltown', rating: '5', review: 'Harris Landscaping transformed our backyard completely. Professional, on time, and the quality is outstanding. Highly recommend!' },
          { author: 'James T., Narellan', rating: '5', review: 'From quote to completion, the communication was excellent. Our new deck and turf look amazing — exactly what we envisioned.' },
          { author: 'Rebecca L., Camden', rating: '5', review: 'We had a retaining wall and full garden makeover done. The team was friendly, tidy, and the result exceeded our expectations.' },
        ]}
        heading="What Our Clients Are Saying"
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
