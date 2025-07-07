import React from 'react';
import Head from 'next/head';
import ContactUs from '../partials/ContactUs';
import ServiceCard from '../partials/ServiceCard';
import FeatureCard from '../partials/FeatureCard';
import Link from 'next/link';
import { services } from './serviceData';
import Image from 'next/image';

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services | LuxFloors</title>
        <meta name="description" content="Discover premium flooring installation, restoration, and design consultation services from LuxFloors. Explore hardwood, carpet, vinyl, laminate, and more. Atlanta's high-end flooring experts." />
        <meta property="og:title" content="Our Services | LuxFloors" />
        <meta property="og:description" content="Discover premium flooring installation, restoration, and design consultation services from LuxFloors. Explore hardwood, carpet, vinyl, laminate, and more. Atlanta's high-end flooring experts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.luxfloors.com/services" />
        <meta property="og:image" content="/gallery/gallery48.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | LuxFloors" />
        <meta name="twitter:description" content="Discover premium flooring installation, restoration, and design consultation services from LuxFloors." />
        <meta name="twitter:image" content="/gallery/gallery48.jpg" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Flooring Installation & Restoration",
            "provider": {
              "@type": "Organization",
              "name": "LuxFloors",
              "url": "https://www.luxfloors.com",
              "logo": "https://www.luxfloors.com/logo.png"
            },
            "areaServed": "Atlanta, GA",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Flooring Services",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Hardwood Floor Installation"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Carpet Installation"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Vinyl & Laminate Flooring"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Hardwood Restoration & Refinishing"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Design Consultation"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Stair Runner"}}
              ]
            }
          }
        `}</script>
      </Head>
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col gap-0 items-center w-full mx-auto p-0">
        <section className="w-full text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg mb-8">Discover our professional installation, maintenance, and consultation services for all your flooring needs.</p>
            <Image src="/gallery/gallery48.jpg" alt="LuxFloors showroom and flooring installation team" className="rounded-lg shadow-lg w-full h-64 object-cover" loading="lazy" fill sizes="100vw" style={{ objectFit: 'cover' }} />
          </section>
          {/* How We Work Section */}
          <section className="w-full py-10 bg-gray-100 rounded-lg my-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">How We Work</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex flex-col items-center max-w-xs">
                <span className="text-4xl mb-2">📞</span>
                <h3 className="font-bold mb-1">1. Consultation</h3>
                <p className="text-gray-600 text-center">We listen to your needs and schedule a <Link href="#contact" className="text-gold-accent underline">free in-home or showroom consultation</Link>.</p>
              </div>
              <div className="flex flex-col items-center max-w-xs">
                <span className="text-4xl mb-2">📝</span>
                <h3 className="font-bold mb-1">2. Design & Estimate</h3>
                <p className="text-gray-600 text-center">Our experts help you select materials and provide a detailed, transparent estimate.</p>
              </div>
              <div className="flex flex-col items-center max-w-xs">
                <span className="text-4xl mb-2">🛠️</span>
                <h3 className="font-bold mb-1">3. Professional Installation</h3>
                <p className="text-gray-600 text-center">Our skilled team installs your flooring with care, precision, and minimal disruption.</p>
              </div>
              <div className="flex flex-col items-center max-w-xs">
                <span className="text-4xl mb-2">✅</span>
                <h3 className="font-bold mb-1">4. Follow-up & Support</h3>
                <p className="text-gray-600 text-center">We ensure your satisfaction and provide ongoing support for your new floors.</p>
              </div>
            </div>
        </section>
        <div className="allSection p-8">
          <section className="w-full">
            <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
                {services.map(service => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="block group" aria-label={`Learn more about ${service.title}`}>
                    <ServiceCard
                      title={service.title}
                      image={service.image}
                      description={service.description}
                    />
                  </Link>
                ))}
              </div>
            </section>
            <section className="w-full py-10 bg-gray-100 rounded-lg my-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Our Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
                <FeatureCard
                  icon="🎓"
                  title="Unmatched Expertise & Craftsmanship"
                  description="With over 25 years refining every technique, our team installs each plank, runner, and vinyl sheet to museum-quality standards—ensuring precision cuts, seamless transitions, and flawless finishes every time."
                />
                <FeatureCard
                  icon="🏛️"
                  title="High-End Showroom Experience"
                  description="Step into our Lux Design Center showroom and explore curated displays of exotic hardwoods, plush carpets, custom stair treatments, and luxury vinyl planks. You'll see and feel each material in real settings before making your choice."
                />
                <FeatureCard
                  icon="🎨"
                  title="Personalized Design & Consultation"
                  description="Our in-house designers take the time to understand your vision, lifestyle, and budget. From digital mock-ups to 3D walkthroughs, we guide you through species selection, color palettes, patterns, and installation details—so your project reflects your unique taste."
                />
                <FeatureCard
                  icon="🤝"
                  title="Transparent Pricing & Reliable Service"
                  description="We provide clear, itemized estimates and adhere strictly to agreed timelines. Emad, Kent, and our crew treat your home with respect, arrive on schedule, and back every job with industry-leading warranties—long after the final plank is laid."
                />
              </div>
            </section>
            {/* Testimonials Section */}
            <section className="w-full py-10 bg-white rounded-lg my-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">What Our Clients Say</h2>
              <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
                <div className="bg-gray-50 rounded-lg p-6 shadow-md flex-1">
                  <p className="italic mb-2">&quot;The team was professional, fast, and the results are stunning! Highly recommend their services.&quot;</p>
                  <span className="font-bold">— Jane D.</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 shadow-md flex-1">
                  <p className="italic mb-2">&quot;From consultation to installation, everything was smooth and easy. My new floors look amazing!&quot;</p>
                  <span className="font-bold">— Mark S.</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 shadow-md flex-1">
                  <p className="italic mb-2">&quot;Great attention to detail and wonderful customer service. Will use them again for future projects.&quot;</p>
                  <span className="font-bold">— Lisa R.</span>
              </div>
            </div>
          </section>
            <section id="contact" className="w-full bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Contact for Services</h2>
            <ContactUs />
          </section>
        </div>
      </main>
    </div>
    </>
  );
} 