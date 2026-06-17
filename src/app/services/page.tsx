import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import FooterColumns from '@/components/blocks/footer-columns';
import ServicesAlternating from '@/components/blocks/services-alternating';
import TrustBadges from '@/components/blocks/trust-badges';
import CtaBanner from '@/components/blocks/cta-banner';

export const metadata: Metadata = {
  title: 'Services | Harris Landscaping & Gardens',
  description:
    'Paving, turf, decking, retaining walls, garden makeovers, and irrigation across South-West Sydney.',
};

export default function ServicesPage() {
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
      <ServicesAlternating
        items={[
          { image: '/images/service-paving.jpg', title: 'Paving', imageAlt: 'Paving installation in South-West Sydney', description: 'From driveways to alfresco areas, we install durable, stylish paving that enhances kerb appeal and adds lasting value to your property.' },
          { image: '/images/service-turf.jpg', title: 'Turf Installation', imageAlt: 'Turf installation by Harris Landscaping', description: 'We supply and lay premium turf varieties suited to the South-West Sydney climate, delivering a lush, even lawn that thrives.' },
          { image: '/images/service-decking.jpg', title: 'Timber & Composite Decking', imageAlt: 'Custom timber decking in South-West Sydney', description: 'Custom-designed decks built for entertaining and everyday living, using quality timber and low-maintenance composite materials.' },
          { image: '/images/service-retaining.jpg', title: 'Retaining Walls', imageAlt: 'Retaining wall construction by Harris Landscaping', description: 'Engineered for stability and aesthetics, our retaining walls manage soil and slope while adding structure to your outdoor space.' },
          { image: '/images/service-garden.jpg', title: 'Garden Design & Makeovers', imageAlt: 'Garden design and makeover in South-West Sydney', description: 'Complete outdoor transformations from concept to completion — planting, edging, mulching, and everything in between.' },
          { image: '/images/service-irrigation.jpg', title: 'Irrigation Systems', imageAlt: 'Irrigation system installation by Harris Landscaping', description: 'Smart, water-efficient irrigation systems designed and installed to keep your garden healthy with minimal effort.' },
        ]}
        heading="Our Landscaping Services"
      />
      <TrustBadges
        items={[
          { icon: '/icons/experience.svg', label: '15+ Years Experience' },
          { icon: '/icons/insured.svg', label: 'Fully Insured' },
          { icon: '/icons/projects.svg', label: '500+ Projects Completed' },
          { icon: '/icons/quote.svg', label: 'Free, Detailed Quotes' },
          { icon: '/icons/star.svg', label: '5-Star Google Rating' },
          { icon: '/icons/local.svg', label: 'Local South-West Sydney Team' },
        ]}
      />
      <CtaBanner
        cta="Request a Free Quote"
        ctaHref="/contact"
        heading="Ready to Transform Your Outdoor Space?"
        subheading="Get a free, detailed, obligation-free quote from South-West Sydney's trusted landscaping specialists."
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
