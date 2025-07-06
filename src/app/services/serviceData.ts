export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  gallery?: string[];
}

export const services: Service[] = [
  {
    slug: 'hardwood-floor-installation',
    title: 'Hardwood Floor Installation',
    image: '/gallery/gallery82.jpg',
    description: `Expert installation of solid and engineered hardwood floors, including glue down and nail down methods. We also specialize in hardwood steps installation for a seamless, elegant look throughout your home.\n\n• Solid hardwood (glue down, nail down)\n• Engineered hardwood (glue down, nail down)\n• Hardwood steps installation`,
    gallery: ['/gallery/gallery82.jpg', '/gallery/gallery43.jpg'],
  },
  {
    slug: 'carpet-installation',
    title: 'Carpet Installation',
    image: '/gallery/gallery83.jpg',
    description: `Luxurious carpet solutions for every space, from plush designer styles to durable commercial options. Our services include steps carpet installation, custom rugs, and a variety of specialty carpets for a custom fit and finish.\n\n• Standard & designer carpet installation\n• Commercial carpet installation\n• Berber & loop carpet installation\n• Steps carpet installation\n• Carpet & custom rugs (tailored to your space, unique patterns, and materials)`,
    gallery: ['/gallery/gallery83.jpg', '/gallery/gallery44.jpg'],
  },
  {
    slug: 'vinyl-laminate-flooring',
    title: 'Vinyl & Laminate Flooring',
    image: '/gallery/gallery64.jpg',
    description: `High-performance, stylish flooring options including laminate, luxury vinyl plank (LVP), luxury vinyl tile (LVT), and glue down vinyl. We handle residential and commercial projects, as well as steps vinyl installation for a cohesive look.\n\n• Laminate floor installation\n• LVP (luxury vinyl plank) floor click installation\n• LVT (luxury vinyl tile) floor click installation\n• Vinyl floor glue down installation\n• Commercial vinyl floor installation\n• Steps vinyl installation`,
    gallery: ['/gallery/gallery64.jpg','/gallery/gallery69.jpg'],
  },
  {
    slug: 'hardwood-restoration-refinishing',
    title: 'Hardwood Restoration & Refinishing',
    image: '/gallery/gallery68.jpg',
    description: `Restore the natural beauty of your hardwood with our expert sanding, finishing, and refinishing services. We offer custom staining and step refinishing for a flawless, long-lasting result.\n\n• Hardwood sanding & finishing\n• Hardwood refinishing\n• Hardwood sand & stain\n• Steps sand and refinish`,
    gallery: ['/gallery/gallery68.jpg', '/gallery/gallery47.jpg'],
  },
  {
    slug: 'design-consultation',
    title: 'Design Consultation',
    image: '/gallery/gallery46.jpg',
    description: `Work with our expert designers to select the perfect materials, colors, and layouts for your space. We listen to your ideas and provide professional guidance every step of the way. Our goal is to make your flooring project smooth, enjoyable, and uniquely yours.\n\n• Personalized design sessions\n• Digital mock-ups & 3D walkthroughs\n• Material, color, and layout selection\n• Professional guidance from concept to completion`,
    gallery: ['/gallery/gallery46.jpg'],
  },
  {
    slug: 'stair-runner',
    title: 'Stair Runner',
    image: '/gallery/gallery45.jpg',
    description: `Bespoke stair runners designed and fitted to enhance safety and style on any staircase. Choose from a variety of patterns and materials for a look that complements your home. Each runner is custom-cut and expertly installed for a perfect fit and lasting durability.\n\n• Custom stair runner design\n• Wide selection of patterns and materials\n• Expert installation for safety and style`,
    gallery: ['/gallery/gallery45.jpg'],
  },
]; 