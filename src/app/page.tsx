export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="h-[calc(100vh-4rem)] w-full flex items-end justify-start rounded-2xl shadow-lg overflow-hidden relative snap-start"
        style={{
          background:
            'url("/gallery/gallery49.jpg") center/cover no-repeat',
          backgroundPosition: 'bottom center',
        }}
      >
        {/* Only background image remains for hero */}
      </section>

      <main className="flex-1 flex flex-col items-stretch w-full snap-y snap-mandatory scroll-smooth overflow-y-auto">
        {/* Welcome & About */}
        <section className="h-[calc(100vh-4rem)] w-full flex flex-col justify-center items-center snap-start text-center relative overflow-hidden">
          <img src="/gallery/gallery41.jpg" alt="Welcome" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none" />
        </section>

        {/* Featured Services */}
        <section className="h-[calc(100vh-4rem)] w-full flex flex-col justify-center items-center snap-start relative overflow-hidden">
          <img src="/gallery/gallery42.jpg" alt="Services" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none" />
        </section>

        {/* Gallery */}
        <section className="h-[calc(100vh-4rem)] w-full flex flex-col justify-center items-center snap-start relative overflow-hidden">
          <img src="/gallery/gallery47.jpg" alt="Gallery" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none" />
        </section>

        {/* Why Choose Us */}
        <section className="h-[calc(100vh-4rem)] w-full flex flex-col justify-center items-center snap-start relative overflow-hidden">
          <img src="/gallery/gallery48.jpg" alt="Why Choose Us" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none" />
        </section>

        {/* Contact & Showroom */}
        <section className="h-[calc(100vh-4rem)] w-full flex flex-col justify-center items-center snap-start bg-gray-50 rounded-lg text-center relative overflow-hidden">
          <img src="/gallery/gallery42.jpg" alt="Contact & Showroom" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none rounded-lg" />
        </section>
      </main>
    </div>
  );
}
