"use client"
import React, { useState } from 'react';
// import EstimateForm from '../partials/EstimateForm';
import ContactUs from '../partials/ContactUs';

export default function Inspiration() {
  // Generate an array of image paths for gallery1.jpg to gallery30.jpg
  const galleryImages = Array.from({ length: 30 }, (_, i) => `/gallery/gallery${i + 1}.jpg`);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setLightboxImg(src);
    setLightboxOpen(true);
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImg(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col gap-0 items-center w-full mx-auto p-0">
        <section className="w-full text-center py-6 bg-white mb-0">
          <h1 className="text-4xl font-bold mb-1">Inspiration Gallery</h1>
          <p className="text-lg mb-2">Get inspired by our gallery of beautiful flooring projects and creative design ideas.</p>
        </section>
        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-1 px-8">Project Highlights</h2>
          <p className="px-8">Discover how LuxFloors has transformed spaces with premium materials, expert craftsmanship, and timeless design. Each project in our gallery is a testament to our commitment to quality and innovation.</p>
        </section>
        {/* Gallery grid with lightbox */}
        <div
          className="gallery-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            width: '100%',
          }}
        >
          {galleryImages.map((src, idx) => (
            <div
              key={src}
              className="gallery-card"
              style={{
                backgroundImage: `url('${src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
                backgroundRepeat: 'no-repeat',
                minHeight: '350px',
                borderRadius: '24px',
                boxShadow: '0 8px 32px 0 rgba(35,35,35,0.18)',
                display: 'flex',
                alignItems: 'flex-end',
                position: 'relative',
                cursor: 'pointer',
              }}
              title={`Inspiration Project ${idx + 1}`}
              onClick={() => openLightbox(src)}
            >
              {/* Optional: label or overlay */}
            </div>
          ))}
        </div>
        {/* Lightbox Modal */}
        {lightboxOpen && lightboxImg && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
            style={{ zIndex: 1000, animation: 'fadeIn 0.2s' }}
            onClick={closeLightbox}
          >
            <img
              src={lightboxImg}
              alt="Gallery Full Size"
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                borderRadius: '18px',
                boxShadow: '0 8px 32px 0 rgba(35,35,35,0.32)',
                border: '4px solid var(--champagne)',
              }}
              onClick={e => e.stopPropagation()}
            />
            <button
              onClick={closeLightbox}
              style={{
                position: 'fixed',
                top: 32,
                right: 48,
                fontSize: '2.5rem',
                color: 'var(--champagne)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                zIndex: 51,
              }}
              aria-label="Close lightbox"
            >
              &times;
            </button>
          </div>
        )}
        <section className="w-full py-12 bg-white">
          <h2 className="text-2xl font-semibold mb-2 px-8">Why Get Inspired?</h2>
          <ul className="list-disc pl-12 pr-8">
            <li>See real-world transformations and creative flooring solutions.</li>
            <li>Find ideas for your next renovation or new build.</li>
            <li>Experience the beauty and versatility of LuxFloors products.</li>
            <li>Get inspired by the latest trends in luxury flooring and design.</li>
          </ul>
        </section>
        <section className="w-full py-12 bg-white">
          <h2 className="text-2xl font-semibold mb-2 px-8">Contact for Inspiration</h2>
          <p className="px-8">Ready to bring your vision to life? Contact us to discuss your project or schedule a visit to our showroom for a personalized consultation.
          </p>
        </section>
          <ContactUs/>
      </main>
    </div>
  );
} 