import React from "react";
import ContactUs from "../partials/ContactUs";
import Image from 'next/image';
import ValuesCarousel from "../partials/ValuesCarousel";

export default function OurStory() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 flex flex-col gap-0 items-center w-full mx-auto p-0">
        <section className="w-full text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-lg mb-8">
            Learn about our journey, values, and commitment to delivering
            quality flooring solutions.
          </p>
          <Image
            src="/gallery/gallery42.jpg"
            alt="Our Story"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
            loading="lazy"
            width={800}
            height={256}
            style={{ objectFit: 'cover', width: '100%', height: '256px' }}
          />
        </section>
        {/* Our Journey Section */}
        <div className="allSection p-8">
          <section className="w-full text-center mb-8">
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
          </section>
          {/* Journey Paragraph 1 */}
          <section className="w-full flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="md:w-1/2 w-full flex-shrink-0">
              <Image
                src="/gallery/gallery38.jpg"
                alt="Founders and team"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                loading="lazy"
                width={800}
                height={256}
                style={{ objectFit: 'cover', width: '100%', height: '256px' }}
              />
            </div>
            <div className="md:w-1/2 w-full">
              <p className="text-base text-gray-700">
                For more than a quarter-century, Emad Shahout and Kent Fawcet
                have guided Lux Design Center from its humble beginnings into a
                beacon of flooring excellence. What started in 1998 with a
                single truckload of oak planks has grown into a dedicated team
                of six master installers and three visionary designers—all
                aligned around one mission: elevating every space with
                craftsmanship and care.
              </p>
            </div>
          </section>
          {/* Journey Paragraph 2 */}
          <section className="w-full flex flex-col md:flex-row items-center gap-8 mb-8 md:flex-row-reverse">
            <div className="md:w-1/2 w-full flex-shrink-0">
              <Image
                src="/gallery/gallery37.jpg"
                alt="Showroom flood recovery"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                loading="lazy"
                width={800}
                height={256}
                style={{ objectFit: 'cover', width: '100%', height: '256px' }}
              />
            </div>
            <div className="md:w-1/2 w-full">
              <p className="text-base text-gray-700">
                Early on, a devastating showroom flood in 2005 threatened our
                young business. Rather than fold under pressure, Emad and Kent
                rebuilt supply lines, mastered advanced moisture mitigation, and
                completed every flooded home with flawless seams—earning
                clients&apos; trust and teaching our team the true meaning of
                resilience.
              </p>
            </div>
          </section>
          {/* Journey Paragraph 3 */}
          <section className="w-full flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="md:w-1/2 w-full flex-shrink-0">
              <Image
                src="/gallery/gallery39.jpg"
                alt="Exotic hardwoods and design awards"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                loading="lazy"
                width={800}
                height={256}
                style={{ objectFit: 'cover', width: '100%', height: '256px' }}
              />
            </div>
            <div className="md:w-1/2 w-full">
              <p className="text-base text-gray-700">
                When exotic hardwoods surged in popularity in 2010, Lux Design
                Center embraced the challenge. We mastered Brazilian cherry,
                wolf-etched hickory, and moon-bleached ash, earning our first
                regional design award for floors that balance beauty and
                stability. Today, our designers—Maria, who honed her eye in
                Milan, and Carlos, trained in Tokyo—use digital mock-ups and 3D
                walkthroughs to ensure each finish, plank layout, and border
                detail aligns flawlessly with your vision.
              </p>
            </div>
          </section>
          {/* Journey Paragraph 4 */}
          <section className="w-full flex flex-col md:flex-row items-center gap-8 mb-8 md:flex-row-reverse">
            <div className="md:w-1/2 w-full flex-shrink-0">
              <Image
                src="/gallery/gallery40.jpg"
                alt="Beaumont residence staircase"
                className="rounded-lg shadow-lg w-full h-64 object-cover object-bottom"
                loading="lazy"
                width={800}
                height={256}
                style={{ objectFit: 'cover', objectPosition: 'bottom', width: '100%', height: '256px' }}
              />
            </div>
            <div className="md:w-1/2 w-full">
              <p className="text-base text-gray-700">
                The Beaumont residence stands as one of our proudest
                achievements. Its steep, winding staircase demanded more than a
                standard runner. We hand-cut a custom loop-pile carpet to follow
                every curve, then precision-stretched it over 18 individual
                treads—creating a safe, sculptural focal point that elevates the
                entire home.
              </p>
            </div>
          </section>
          {/* Journey Paragraph 5 */}
          <section className="w-full flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="md:w-1/2 w-full flex-shrink-0">
              <Image
                src="/gallery/gallery41.jpg"
                alt="Corbin project basement transformation"
                className="rounded-lg shadow-lg w-full h-64 object-cover object-bottom"
                loading="lazy"
                width={800}
                height={256}
                style={{ objectFit: 'cover', objectPosition: 'bottom', width: '100%', height: '256px' }}
              />
            </div>
            <div className="md:w-1/2 w-full">
              <p className="text-base text-gray-700">
                Down in the Corbin project&apos;s lower level, damp concrete and
                uneven surfaces threatened any vinyl installation. Our solution:
                a full sub-floor leveling system, bonded under luxury vinyl
                planks that mimic hand-scraped oak. Now that basement gleams
                like a main floor, impervious to moisture and ready for years of
                family gatherings.
              </p>
            </div>
          </section>
          {/* Journey Closing Paragraph */}
          <section className="w-full flex flex-col items-center mb-12">
            <div className="max-w-3xl">
              <p className="text-base text-gray-700 text-center">
                Through every hardwood plank, stair runner, and vinyl sheet, Lux
                Design Center lives by three principles: precision in every cut,
                transparency in every estimate, and a promise that Emad, Kent,
                and our team will be there long after installation. For 25
                years, we&apos;ve transformed flooring dreams into durable,
                artful realities—and our story continues, one room at a time.
              </p>
            </div>
          </section>

          <section className="w-full bg-gray-50 rounded-lg p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
            {/* Carousel Start */}
            <ValuesCarousel />
            {/* Carousel End */}
          </section>
          <section className="w-full bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <ContactUs />
          </section>
        </div>
      </main>
    </div>
  );
}
