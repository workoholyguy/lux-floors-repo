import Link from 'next/link';
import { useEffect } from 'react';
import Lenis from 'lenis';

const NAVBAR_HEIGHT = 72; // px, adjust if your navbar is taller/shorter

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      touchMultiplier: 2,
      infinite: false,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="w-full flex items-end justify-start rounded-2xl shadow-lg overflow-hidden relative snap-start"
        style={{
          height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
          background:
            'url("/gallery/gallery49.jpg") center/cover no-repeat',
          backgroundPosition: 'bottom center',
        }}
      >
        <div className="z-10 p-8 pb-12 w-full max-w-2xl ml-8 mb-0"
          style={{
            background: 'rgba(0,0,0,0.35)',
            borderRadius: '0 0 1rem 1rem',
          }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-white drop-shadow-lg text-left" style={{ color: 'var(--ivory)' }}>Elevate Your Home with Lux Design Center</h1>
          {/* <p className="text-xl md:text-2xl mb-8 font-medium">Bespoke flooring solutions tailored for beauty, comfort, and lasting quality.</p> */}
          <Link href="/services">
            <span className="inline-block bg-gold-accent hover:bg-gold-accent-hover font-extrabold py-3 px-8 rounded-lg shadow transition mt-4 text-2xl" style={{ color: 'var(--accent)' }}>Schedule Your Design Consultation →</span>
          </Link>
        </div>
      </section>

      <main className="flex-1 flex flex-col items-stretch w-full snap-y snap-mandatory scroll-smooth overflow-y-auto">
        {/* Welcome & About */}
        <section className="w-full flex flex-col justify-center items-center snap-start text-center relative overflow-hidden"
          style={{ height: `calc(100vh - ${NAVBAR_HEIGHT}px)` }}>
          <img src="/gallery/gallery41.jpg" alt="Welcome" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none" />
          <div className="relative z-10 w-full max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Welcome to Lux Design Center</h2>
            <p className="text-lg mb-4 max-w-2xl mx-auto">
              Step into Lux Design Center and meet the team behind 25 years of flooring excellence. Founders Emad Shahout and Kent Fawcet lead a dedicated crew of master installers and award-winning designers. We combine family values with industry innovation to bring your vision to life—right here in our Marietta showroom.
            </p>
          </div>
        </section>

        {/* Featured Services */}
        <section className="w-full flex flex-col justify-center items-center snap-start relative overflow-hidden"
          style={{ height: `calc(100vh - ${NAVBAR_HEIGHT}px)` }}>
          <img src="/gallery/gallery42.jpg" alt="Services" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none" />
          <div className="relative z-10 w-full max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-center">Featured Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className="bg-gray-50 bg-opacity-90 rounded-lg p-6 flex flex-col items-center text-center shadow">
                <img src="/gallery/gallery43.jpg" alt="Hardwood Floor" className="w-full max-w-xs h-32 object-cover mb-2" />
                <h3 className="text-xl font-bold mb-2">Hardwood Floor Installation</h3>
                <p className="text-gray-700">Expert fitting of premium hardwoods—from classic oak to exotic walnut. We guide you through species, finishes, and plank layouts to ensure a perfect match for your style and lifestyle.</p>
              </div>
              <div className="bg-gray-50 bg-opacity-90 rounded-lg p-6 flex flex-col items-center text-center shadow">
                <img src="/gallery/gallery44.jpg" alt="Carpet Installation" className="w-full max-w-xs h-32 object-cover mb-2" />
                <h3 className="text-xl font-bold mb-2">Carpet Installation</h3>
                <p className="text-gray-700">Plush, durable carpets in an array of colors and textures. Our installers deliver seamless seams and edge-to-edge comfort for bedrooms, living areas, and more.</p>
              </div>
              <div className="bg-gray-50 bg-opacity-90 rounded-lg p-6 flex flex-col items-center text-center shadow">
                <img src="/gallery/gallery45.jpg" alt="Custom Stair Runners" className="w-full max-w-xs h-32 object-cover mb-2" />
                <h3 className="text-xl font-bold mb-2">Custom Stair Runners</h3>
                <p className="text-gray-700">Hand-cut, bespoke runners designed for safety and elegance. Choose from intricate patterns and rich materials that flow with every step.</p>
              </div>
              <div className="bg-gray-50 bg-opacity-90 rounded-lg p-6 flex flex-col items-center text-center shadow">
                <img src="/gallery/gallery46.jpg" alt="Design Consultation" className="w-full max-w-xs h-32 object-cover mb-2" />
                <h3 className="text-xl font-bold mb-2">Design Consultation</h3>
                <p className="text-gray-700">One-on-one sessions with our in-house designers. We use digital mock-ups and 3D walkthroughs so you can see your new floors before installation begins.</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <Link href="/services">
                <span className="inline-block text-gold-accent font-semibold hover:underline">View All Services &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="w-full flex flex-col justify-center items-center snap-start relative overflow-hidden"
          style={{ height: `calc(100vh - ${NAVBAR_HEIGHT}px)` }}>
          <img src="/gallery/gallery47.jpg" alt="Gallery" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none" />
          <div className="relative z-10 w-full max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-2 text-center">Gallery</h2>
            <p className="text-center mb-6">Discover real projects, real materials, real homes. From grand entryways to cozy basements, explore our portfolio below and imagine the possibilities for your space.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 w-full">
              <div className="gallery-card" style={{backgroundImage: 'url("/gallery/gallery43.jpg")'}}>
                <span className="gallery-label">Sunlit Living Room</span>
              </div>
              <div className="gallery-card" style={{backgroundImage: 'url("/gallery/gallery44.jpg")'}}>
                <span className="gallery-label">Elegant Bedroom</span>
              </div>
              <div className="gallery-card" style={{backgroundImage: 'url("/gallery/gallery45.jpg")'}}>
                <span className="gallery-label">Grand Entryway</span>
              </div>
              <div className="gallery-card" style={{backgroundImage: 'url("/gallery/gallery46.jpg")'}}>
                <span className="gallery-label">Modern Kitchen</span>
              </div>
              <div className="gallery-card" style={{backgroundImage: 'url("/gallery/gallery47.jpg")'}}>
                <span className="gallery-label">Custom Staircase</span>
              </div>
              <div className="gallery-card" style={{backgroundImage: 'url("/gallery/gallery48.jpg")'}}>
                <span className="gallery-label">Cozy Basement</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full flex flex-col justify-center items-center snap-start relative overflow-hidden"
          style={{ height: `calc(100vh - ${NAVBAR_HEIGHT}px)` }}>
          <img src="/gallery/gallery48.jpg" alt="Why Choose Us" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none" />
          <div className="relative z-10 w-full max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-2 text-center">Why Choose Us?</h2>
            <ul className="space-y-6 mt-6 max-w-2xl mx-auto">
              <li>
                <span className="font-bold">Craftsmanship You Can Trust:</span> Every installation reflects 25 years of mastery. We cut with laser precision, fit with immaculate attention to detail, and finish to showroom standards.
              </li>
              <li>
                <span className="font-bold">Transparent Process:</span> You&apos;ll receive a clear, itemized estimate and a step-by-step project plan. No surprises—just honest timelines and open communication from start to finish.
              </li>
              <li>
                <span className="font-bold">Personalized Service:</span> Your home is unique. We listen to your needs and adapt our designs and techniques so your floors tell your story. Our team treats every project as if it were our own.
              </li>
              <li>
                <span className="font-bold">Innovative Solutions:</span> From moisture-blocking sub-floors in below-grade spaces to eco-friendly finishes, we stay ahead of industry trends and emerging technologies—so you get the best, every time.
              </li>
            </ul>
          </div>
        </section>

        {/* Contact & Showroom */}
        <section className="w-full flex flex-col justify-center items-center snap-start bg-gray-50 rounded-lg p-6 text-center relative overflow-hidden"
          style={{ height: `calc(100vh - ${NAVBAR_HEIGHT}px)` }}>
          <img src="/gallery/gallery42.jpg" alt="Contact & Showroom" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none" />
          <div className="relative z-10 w-full max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-2">Contact & Showroom</h2>
            <p className="mb-2">Visit us to see, touch, and feel our premium flooring options.</p>
            <p className="mb-2"><span className="font-semibold">Address:</span> 1140 Roswell Road, Suite 140, Marietta, GA 30062</p>
            <p className="mb-2"><span className="font-semibold">Phone:</span> (770) 555-0199</p>
            <p className="mb-4"><span className="font-semibold">Hours:</span> Mon–Fri 9 am–6 pm · Sat 10 am–4 pm</p>
            <Link href="/our-story">
              <span className="inline-block bg-gold-accent hover:bg-gold-accent-hover text-charcoal font-bold py-3 px-8 rounded-lg shadow transition">Plan Your Showroom Visit</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
