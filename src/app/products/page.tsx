import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Example product data (replace with real data as needed)
const products = [
  {
    name: 'European Oak Hardwood',
    image: '/gallery/gallery43.jpg',
    description: 'Premium wide-plank European oak for timeless elegance and durability.',
  },
  {
    name: 'Luxury Vinyl Plank (LVP)',
    image: '/gallery/gallery64.jpg',
    description: 'Waterproof, scratch-resistant LVP in a variety of wood and stone looks.',
  },
  {
    name: 'Designer Carpet',
    image: '/gallery/gallery83.jpg',
    description: 'Plush, high-end carpets in custom colors, patterns, and textures.',
  },
  {
    name: 'Custom Stair Runner',
    image: '/gallery/gallery45.jpg',
    description: 'Bespoke stair runners for safety and style, tailored to your home.',
  },
];

export default function Products() {
  return (
    <>
      <Head>
        <title>Our Products | LuxFloors</title>
        <meta name="description" content="Explore our curated selection of premium flooring products: hardwood, luxury vinyl, carpet, stair runners, and more. Only the best from LuxFloors." />
        <meta property="og:title" content="Our Products | LuxFloors" />
        <meta property="og:description" content="Explore our curated selection of premium flooring products: hardwood, luxury vinyl, carpet, stair runners, and more. Only the best from LuxFloors." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.luxfloors.com/products" />
        <meta property="og:image" content="/gallery/gallery43.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Products | LuxFloors" />
        <meta name="twitter:description" content="Explore our curated selection of premium flooring products: hardwood, luxury vinyl, carpet, stair runners, and more. Only the best from LuxFloors." />
        <meta name="twitter:image" content="/gallery/gallery43.jpg" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Our Products",
            "description": "Curated selection of premium flooring products from LuxFloors.",
            "mainEntity": [
              ${products.map((p) => `{
                "@type": "Product",
                "name": "${p.name}",
                "image": "https://www.luxfloors.com${p.image}",
                "description": "${p.description}"
              }`).join(',')}
            ]
          }
        `}</script>
      </Head>
      <div className="flex flex-col min-h-screen items-center w-full">
        <section className="w-full max-w-4xl mx-auto py-12 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-lg mb-8">Explore our curated selection of premium flooring products. <Link href="/services" className="text-gold-accent underline">See our services</Link> or <Link href="/services#contact" className="text-gold-accent underline">request a free estimate</Link>.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.name} className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center border border-gray-100 hover:border-gray-300 transition-all">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-xl w-full max-w-xs h-44 object-cover object-bottom mb-4 border border-gray-200"
                  loading="lazy"
                />
                <h2 className="text-xl font-bold mb-2 text-gray-900 tracking-tight font-serif">{product.name}</h2>
                <p className="text-gray-700 text-center text-base font-light leading-relaxed mb-2">{product.description}</p>
              </div>
            ))}
          </div>
        </section>
    </div>
    </>
  );
} 