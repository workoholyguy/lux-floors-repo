import { services } from '../serviceData';
import { notFound } from 'next/navigation';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface Props {
  params: { slug: string };
}

export default async function ServiceDetail({ params }: Props) {
  const awaitedParams = await params;
  const service = services.find(s => s.slug === awaitedParams.slug);
  if (!service) return notFound();

  const pageTitle = `${service.title} | LuxFloors`;
  const pageDesc = service.description.replace(/\n|•/g, ' ').slice(0, 160) + '...';
  const pageUrl = `https://www.luxfloors.com/services/${service.slug}`;
  const pageImg = service.image;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImg} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={pageImg} />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "${service.title}",
            "description": "${service.description.replace(/\n/g, ' ').replace(/"/g, '\"')}",
            "provider": {
              "@type": "Organization",
              "name": "LuxFloors",
              "url": "https://www.luxfloors.com"
            },
            "areaServed": "Atlanta, GA",
            "image": "${pageImg}",
            "url": "${pageUrl}"
          }
        `}</script>
      </Head>
      <div className="flex flex-col min-h-screen items-center w-full">
        {/* Back Link */}
        <div className="w-full max-w-4xl px-4 pt-8">
          <Link href="/services" className="text-gold-accent underline text-base font-semibold">← Back to Services</Link>
        </div>
        {/* Hero Section */}
        <div className="w-full h-72 md:h-96 relative mb-8 rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto mt-4">
          <img
            src={service.image}
            alt={`${service.title} example project`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--gold-accent)] drop-shadow-lg text-center font-serif">{service.title}</h1>
          </div>
        </div>
        {/* Description */}
        <article className="max-w-2xl w-full bg-white/80 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gold-accent font-serif">About this Service</h2>
          <p className="text-gray-800 whitespace-pre-line text-lg leading-relaxed">{service.description}</p>
        </article>
        {/* Gallery */}
        {service.gallery && service.gallery.length > 0 && (
          <section className="w-full max-w-4xl mb-12 px-4">
            <h3 className="text-xl font-bold mb-4 text-center text-gold-accent font-serif">Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${service.title} gallery image ${idx + 1}`}
                  className="rounded-xl shadow-md w-full h-64 object-cover object-center"
                  loading="lazy"
                />
              ))}
            </div>
          </section>
        )}
        {/* CTA */}
        <div className="mb-16 mt-16">
          <Link href="/services#contact" className="btn text-lg font-bold">Request Free Estimate</Link>
        </div>
      </div>
    </>
  );
} 