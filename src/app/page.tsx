'use client';
import Link from "next/link";
import { useInView } from "./hooks/useInView";
import Image from 'next/image';

export default function Home() {
  // Create refs for each section
  const heroRef = useInView<HTMLElement>();
  const consultRef = useInView<HTMLElement>();
  const hardwoodRef = useInView<HTMLElement>();
  const carpetRef = useInView<HTMLElement>();
  const stairRef = useInView<HTMLElement>();
  const sandingRef = useInView<HTMLElement>();

  return (
    <div className="h-screen w-screen overflow-hidden bg-white">
      <main className="h-full w-full overflow-y-auto snap-y snap-mandatory scroll-smooth">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="h-screen w-full flex items-center justify-center relative snap-start overflow-hidden"
        >
          <Image
            src="/gallery/gallery48.jpg"
            alt="Wide-plank European oak in a sunlit living room"
            className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none select-none"
            loading="eager"
            fill
            sizes="100vw"
            style={{ zIndex: 0, objectFit: 'cover', objectPosition: 'bottom' }}
          />
          <div
            className={`hero-reveal${heroRef.current?.classList.contains('in-view') ? ' in-view' : ''} relative z-10`}
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              padding: "0 0 4vw 0vw",
              textAlign: "center",
            }}
          >
            <h1
              className="text-white/90 drop-shadow-2xl font-bold"
              style={{
                fontSize: "clamp(5rem, 16vw, 15rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.06em",
                textShadow: "0 8px 32px rgba(35,35,35,0.5)",
                margin: 0,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100%",
              }}
            >
              LUX FLOORS
            </h1>
          </div>
        </section>

        {/* Design Consultation & Project Preplanning */}
        <section
          ref={consultRef}
          className="h-screen w-full flex items-center justify-center relative snap-start overflow-hidden"
        >
          <Image src="/gallery/gallery46.jpg" alt="Design Consultation" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none opacity-100" loading="lazy" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
          <div
            className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto bg-black/40 backdrop-blur rounded-2xl p-6 gap-8 w-[90%] md:w-[80%]"
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              right: 0,
              margin: '0 auto',
              textAlign: "left",
            }}
          >
            <h1
              className="text-white/90 drop-shadow-2xl font-bold"
              style={{
                fontSize: "clamp(2rem, 8vw, 5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.06em",
                textShadow: "0 8px 32px rgba(35,35,35,0.5)",
                margin: 0,
                whiteSpace: "wrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100%",
              }}
            >
              DESIGN CONSULTATION
            </h1>
            <Link href="/services/design-consultation" className="mt-4 md:mt-0">
              <span className="bg-gradient-to-r from-[#bfa76a] to-[#e6d8a7] border border-white/60 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-[0_0_16px_2px_rgba(191,167,106,0.5)] transition text-base md:text-lg">Learn More</span>
            </Link>
          </div>
        </section>

        {/* Luxurious Hardwood Floors & Installation */}
        <section
          ref={hardwoodRef}
          className="h-screen w-full flex items-center justify-center relative snap-start overflow-hidden"
        >
          <Image src="/gallery/gallery51.jpg" alt="Hardwood Floors" className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none select-none opacity-100" loading="lazy" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'bottom' }} />
          <div
            className="relative z-10"
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              padding: "0 0 12vw 2vw",
              textAlign: "left",
            }}
          >
            <h1
              className="text-white/90 drop-shadow-2xl font-bold"
              style={{
                fontSize: "clamp(2rem, 8vw, 10rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.06em",
                textShadow: "0 8px 32px rgba(35,35,35,0.5)",
                margin: 0,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100%",
              }}
            >
              HARDWOOD
            </h1>
          </div>
        </section>

        {/* Luxurious Carpet Selection & Installation */}
        <section
          ref={carpetRef}
          className="h-screen w-full flex items-center justify-center relative snap-start overflow-hidden"
        >
          <Image src="/gallery/gallery80.jpg" alt="Carpet Selection" className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none select-none opacity-100" loading="lazy" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'bottom' }} />
          <div
            className="relative z-10"
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "70%",
              padding: "0 0 12vw 2vw",
              textAlign: "left",
            }}
          >
            <h1
              className="text-white/90 drop-shadow-2xl font-bold"
              style={{
                fontSize: "clamp(2rem, 8vw, 10rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.06em",
                textShadow: "0 8px 32px rgba(35,35,35,0.5)",
                margin: 0,
                whiteSpace: "wrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100%",
              }}
            >
              CARPET & CUSTOM RUGS
            </h1>
          </div>
        </section>

        {/* Custom Stair Runner Manufacturing & Installation */}
        <section
          ref={stairRef}
          className="h-screen w-full flex items-center justify-center relative snap-start overflow-hidden"
        >
          <Image src="/gallery/gallery78.jpg" alt="Custom Stair Runner" className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none select-none opacity-100" loading="lazy" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'bottom' }} />
          <div
            className="relative z-10"
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              padding: "0 0 12vw 2vw",
              textAlign: "left",
            }}
          >
            <h1
              className="text-white/90 drop-shadow-2xl font-bold"
              style={{
                fontSize: "clamp(2rem, 8vw, 10rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.06em",
                textShadow: "0 8px 32px rgba(35,35,35,0.5)",
                margin: 0,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100%",
              }}
            >
              STAIR RUNNER
            </h1>
          </div>
        </section>

        {/* Solid Hardwood Sanding & Finishing */}
        <section
          ref={sandingRef}
          className="h-screen w-full flex items-center justify-center relative snap-start overflow-hidden"
        >
          <Image src="/gallery/gallery82.jpg" alt="Sanding and Finishing" className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none select-none opacity-100" loading="lazy" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'bottom' }} />
          <div
            className="relative z-10"
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "60%",
              padding: "0 0 12vw 2vw",
              textAlign: "left",
            }}
          >
            <h1
              className="text-white/90 drop-shadow-2xl font-bold"
              style={{
                fontSize: "clamp(2rem, 8vw, 10rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.06em",
                textShadow: "0 8px 32px rgba(35,35,35,0.5)",
                margin: 0,
                whiteSpace: "wrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100%",
              }}
            >
              CUSTOM STAINING & REFINISHING
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
}
