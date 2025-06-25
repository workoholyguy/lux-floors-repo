import Link from 'next/link';

export default function Header() {
  return (
    <header style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      borderBottom: '1px solid #eee',
      background: '#fff',
      boxSizing: 'border-box',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* Logo */}
      <Link href="/">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img src="/file.svg" alt="Company Logo" style={{ height: 40 }} />
        <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: 1 }}>LuxFloors</span>
      </div>
      </Link>
      {/* Navigation */}
      <nav>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
            <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/inspiration">Inspiration</Link></li>
          <li><Link href="/our-story">Our Story</Link></li>
        </ul>
      </nav>
      {/* Actions */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="tel:7708008001" style={{
          background: '#222', color: '#fff', padding: '0.5rem 1rem', borderRadius: 6, textDecoration: 'none', fontWeight: 500
        }}>Call Us</a>
        <a href="https://www.google.com/maps/dir/?api=1&destination=1140+roswell+road+suite+140,+marietta,+georgia,+30062" target="_blank" rel="noopener noreferrer" style={{
          background: '#0070f3', color: '#fff', padding: '0.5rem 1rem', borderRadius: 6, textDecoration: 'none', fontWeight: 500
        }}>Find us on a map</a>
      </div>
    </header>
  );
} 