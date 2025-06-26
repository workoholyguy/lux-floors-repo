export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        style={{
          width: '100%',
          minHeight: '400px',
          background: 'linear-gradient(rgba(35,35,35,0.5), rgba(35,35,35,0.5)), url("/hero1.jpg") center/cover no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--champagne)',
          borderRadius: '16px',
          marginBottom: '2rem',
          boxShadow: '0 4px 32px 0 rgba(35,35,35,0.12)'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.03em' }}>Elevate Your Space with LuxFloors</h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: 400 }}>Premium flooring solutions for inspired living.</p>
          <a href="/products" className="btn" style={{ fontSize: '1.2rem', boxShadow: '0 2px 8px 0 rgba(191,167,111,0.15)' }}>Explore Our Collections</a>
        </div>
      </section>
      <main className="flex-1 flex flex-col gap-16 items-center w-full max-w-5xl mx-auto p-8">
        <section className="w-full text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to LuxFloors</h1>
          <p className="text-lg mb-8">
            At LuxFloors, we believe that every space deserves a foundation of beauty, durability, and style. As a leading provider of premium flooring solutions in Marietta, Georgia, we are dedicated to transforming homes and businesses with exceptional craftsmanship and innovative products.
          </p>
        </section>
        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-2">About Us</h2>
          <p>
            With over 20 years of experience, LuxFloors has built a reputation for excellence in the flooring industry. Our team of experts is passionate about helping you find the perfect flooring to match your vision, lifestyle, and budget.
          </p>
        </section>
        <section className="w-full bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
          <p>
            From consultation and design to professional installation and maintenance, we offer a comprehensive range of services to ensure your flooring project is seamless and stress-free. Whether you&apos;re renovating a single room or an entire property, our specialists are here to guide you every step of the way.
          </p>
        </section>
        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-2">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            <div className="gallery-card" style={{backgroundImage: 'url("/hero1.jpg")'}}>
              <span className="gallery-label">Modern Living Room</span>
            </div>
            <div className="gallery-card" style={{backgroundImage: 'url("/hero1.jpg")'}}>
              <span className="gallery-label">Elegant Office Space</span>
            </div>
            <div className="gallery-card" style={{backgroundImage: 'url("/hero1.jpg")'}}>
              <span className="gallery-label">Luxury Kitchen</span>
            </div>
            <div className="gallery-card" style={{backgroundImage: 'url("/hero1.jpg")'}}>
              <span className="gallery-label">Cozy Bedroom</span>
            </div>
            <div className="gallery-card" style={{backgroundImage: 'url("/hero1.jpg")'}}>
              <span className="gallery-label">Retail Showroom</span>
            </div>
            <div className="gallery-card" style={{backgroundImage: 'url("/hero1.jpg")'}}>
              <span className="gallery-label">Classic Hallway</span>
            </div>
          </div>
        </section>
        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
          <ul className="list-disc pl-6">
            <li>Unmatched selection of high-quality flooring materials</li>
            <li>Experienced and certified installation professionals</li>
            <li>Personalized service and expert advice</li>
            <li>Competitive pricing and transparent quotes</li>
            <li>Satisfaction guaranteed on every project</li>
          </ul>
        </section>
        <section className="w-full bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p>
            Ready to elevate your space? Contact LuxFloors today to schedule a free consultation or visit our showroom at 1140 Roswell Road, Suite 140, Marietta, GA.
          </p>
        </section>
      </main>
      
    </div>
  );
}
