import React from 'react';
import ContactUs from '../partials/ContactUs';

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col gap-0 items-center w-full mx-auto p-0">
        <section className="w-full text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg mb-8">Discover our professional installation, maintenance, and consultation services for all your flooring needs.</p>
          <img src="/gallery/gallery48.jpg" alt="Our Story" className="rounded-lg shadow-lg w-full h-64 object-cover" loading="lazy" />
        </section>
        <div className="allSection p-8">
          <section className="w-full">
            <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
            <div className="flex flex-col gap-10 mt-6">
              {/* Hardwood Floor Installation */}
              <div className="flex flex-col gap-2 bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Hardwood Floor Installation</h3>
                <div className="flex flex-col md:flex-row items-center gap-6 w-full">
                  <img src="/gallery/gallery43.jpg" alt="Hardwood Floor Installation" className="rounded-lg w-full max-w-xs h-40 object-cover object-bottom mx-auto" />
                  <p className="text-gray-700 text-left md:text-base mt-4 md:mt-0">Expert installation of premium hardwood flooring, tailored to your space for timeless beauty and durability. We help you select the right wood species, finish, and plank size to match your vision and lifestyle. Our team ensures a flawless fit and finish, with minimal disruption to your home.</p>
                </div>
              </div>
              {/* Carpet Installation */}
              <div className="flex flex-col gap-2 bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Carpet Installation</h3>
                <div className="flex flex-col md:flex-row items-center gap-6 w-full">
                  <img src="/gallery/gallery44.jpg" alt="Carpet Installation" className="rounded-lg w-full max-w-xs h-40 object-cover object-bottom mx-auto" />
                  <p className="text-gray-700 text-left md:text-base mt-4 md:mt-0">Plush, comfortable carpets installed with precision for a cozy, inviting feel in any room. We offer a wide range of colors and textures to suit your taste and needs. Our installers take care to deliver seamless results and long-lasting comfort underfoot.</p>
                </div>
              </div>
              {/* Custom Stair Runners */}
              <div className="flex flex-col gap-2 bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Custom Stair Runners</h3>
                <div className="flex flex-col md:flex-row items-center gap-6 w-full">
                  <img src="/gallery/gallery45.jpg" alt="Custom Stair Runners" className="rounded-lg w-full max-w-xs h-40 object-cover object-bottom mx-auto" />
                  <p className="text-gray-700 text-left md:text-base mt-4 md:mt-0">Bespoke stair runners designed and fitted to enhance safety and style on any staircase. Choose from a variety of patterns and materials for a look that complements your home. Each runner is custom-cut and expertly installed for a perfect fit and lasting durability.</p>
                </div>
              </div>
              {/* Design Consultation */}
              <div className="flex flex-col gap-2 bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Design Consultation</h3>
                <div className="flex flex-col md:flex-row items-center gap-6 w-full">
                  <img src="/gallery/gallery46.jpg" alt="Design Consultation" className="rounded-lg w-full max-w-xs h-100 object-contain object-bottom mx-auto" />
                  <p className="text-gray-700 text-left md:text-base mt-4 md:mt-0">Work with our expert designers to select the perfect materials, colors, and layouts for your space. We listen to your ideas and provide professional guidance every step of the way. Our goal is to make your flooring project smooth, enjoyable, and uniquely yours.</p>
                </div>
              </div>
              {/* Floor Refinishing & Restoration */}
              <div className="flex flex-col gap-2 bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Floor Refinishing & Restoration</h3>
                <div className="flex flex-col md:flex-row items-center gap-6 w-full">
                  <img src="/gallery/gallery47.jpg" alt="Floor Refinishing & Restoration" className="rounded-lg w-full max-w-xs h-40 object-cover object-bottom mx-auto" />
                  <p className="text-gray-700 text-left md:text-base mt-4 md:mt-0">Restore the original beauty of your floors with our professional refinishing and repair services. We carefully sand, stain, and seal to bring out the best in your hardwood. Whether fixing scratches or reviving worn finishes, we deliver results that last for years to come.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full">
            <h2 className="text-2xl font-semibold mb-2">Why Choose Our Services?</h2>
            <ul className="space-y-6 mt-6">
              <li>
                <span className="font-bold">Unmatched Expertise & Craftsmanship:</span> With over 25 years refining every technique, our team installs each plank, runner, and vinyl sheet to museum-quality standards—ensuring precision cuts, seamless transitions, and flawless finishes every time.
              </li>
              <li>
                <span className="font-bold">High-End Showroom Experience:</span> Step into our Lux Design Center showroom and explore curated displays of exotic hardwoods, plush carpets, custom stair treatments, and luxury vinyl planks. You&apos;ll see and feel each material in real settings before making your choice.
              </li>
              <li>
                <span className="font-bold">Personalized Design & Consultation:</span> Our in-house designers take the time to understand your vision, lifestyle, and budget. From digital mock-ups to 3D walkthroughs, we guide you through species selection, color palettes, patterns, and installation details—so your project reflects your unique taste.
              </li>
              <li>
                <span className="font-bold">Transparent Pricing & Reliable Service:</span> We provide clear, itemized estimates and adhere strictly to agreed timelines. Emad, Kent, and our crew treat your home with respect, arrive on schedule, and back every job with industry-leading warranties—long after the final plank is laid.
              </li>
            </ul>
          </section>
          <section className="w-full bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Contact for Services</h2>
            <ContactUs />
          </section>
        </div>
      </main>
    </div>
  );
} 