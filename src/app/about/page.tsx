import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import FooterColumns from '@/components/blocks/footer-columns';
import AboutSplit from '@/components/blocks/about-split';
import AboutValues from '@/components/blocks/about-values';
import StatsCounter from '@/components/blocks/stats-counter';

export const metadata: Metadata = {
  title: 'About | Harris Landscaping & Gardens',
  description:
    "South-West Sydney's trusted landscaping specialists with over 15 years of experience and 500+ projects completed.",
};

export default function AboutPage() {
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
      <AboutSplit
        body="Harris Landscaping & Gardens has been transforming outdoor spaces across South-West Sydney for over 15 years. Our fully insured, experienced team is committed to delivering premium results with clear communication, detailed quoting, and a quality-first approach on every project. From new home builds to complete garden makeovers, we take pride in the work we do and the lasting relationships we build with our clients."
        image="/images/about-team.jpg"
        stats={['15+ Years Experience', '500+ Projects Completed', '100% Fully Insured']}
        heading="South-West Sydney's Trusted Landscaping Specialists"
        imageAlt="Harris Landscaping team working on a South-West Sydney property"
      />
      <AboutValues
        items={[
          { title: 'Clear Communication', description: 'We keep you informed at every stage, from the initial quote through to project completion — no surprises, no hidden costs.' },
          { title: 'Detailed, Honest Quoting', description: "Every quote is itemised and transparent. You'll know exactly what's included, with realistic timelines provided upfront." },
          { title: 'Quality Workmanship', description: 'We use premium materials and proven techniques to ensure every project is built to last and finished to the highest standard.' },
        ]}
        heading="Why Homeowners Choose Harris Landscaping"
        subheading="We combine trade expertise with genuine care for your project — delivering outdoor spaces you'll love for years to come."
      />
      <StatsCounter
        items={[
          { label: 'Years of Local Experience', value: '15', suffix: '+' },
          { label: 'Projects Completed', value: '500', suffix: '+' },
          { label: 'Star Google Rating', value: '5', suffix: '★' },
        ]}
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
