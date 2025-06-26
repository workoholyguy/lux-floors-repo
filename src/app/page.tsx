'use client';
import { useInView } from "./hooks/useInView";

export default function Home() {
  // Create refs for each section
  const heroRef = useInView<HTMLElement>();
  const welcomeRef = useInView<HTMLElement>();
  const servicesRef = useInView<HTMLElement>();
  const galleryRef = useInView<HTMLElement>();
  const whyRef = useInView<HTMLElement>();
  const contactRef = useInView<HTMLElement>();

  return (
    <div className="h-screen w-screen overflow-hidden bg-white">
      <main className="h-full w-full overflow-y-auto snap-y snap-mandatory scroll-smooth">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="reveal h-screen w-full flex items-end justify-start rounded-2xl shadow-lg overflow-hidden relative snap-start"
          style={{
            background: 'url("/gallery/gallery49.jpg") center/cover no-repeat',
            backgroundPosition: 'bottom center',
          }}
        />
        {/* Welcome & About */}
        <section
          ref={welcomeRef}
          className="reveal h-screen w-full flex flex-col justify-center items-center snap-start text-center relative overflow-hidden"
        >
          <img src="/gallery/gallery41.jpg" alt="Welcome" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none" />
        </section>
        {/* Featured Services */}
        <section
          ref={servicesRef}
          className="reveal h-screen w-full flex flex-col justify-center items-center snap-start relative overflow-hidden"
        >
          <img src="/gallery/gallery42.jpg" alt="Services" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none" />
        </section>
        {/* Gallery */}
        <section
          ref={galleryRef}
          className="reveal h-screen w-full flex flex-col justify-center items-center snap-start relative overflow-hidden"
        >
          <img src="/gallery/gallery47.jpg" alt="Gallery" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none" />
        </section>
        {/* Why Choose Us */}
        <section
          ref={whyRef}
          className="reveal h-screen w-full flex flex-col justify-center items-center snap-start relative overflow-hidden"
        >
          <img src="/gallery/gallery48.jpg" alt="Why Choose Us" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none" />
        </section>
        {/* Contact & Showroom */}
        <section
          ref={contactRef}
          className="reveal h-screen w-full flex flex-col justify-center items-center snap-start bg-gray-50 rounded-lg text-center relative overflow-hidden"
        >
          <img src="/gallery/gallery42.jpg" alt="Contact & Showroom" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none rounded-lg" />
        </section>
      </main>
    </div>
  );
}
