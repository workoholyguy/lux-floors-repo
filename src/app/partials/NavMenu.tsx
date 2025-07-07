"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/inspiration', label: 'Inspiration' },
    { href: '/our-story', label: 'Our Story' },
  ];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <header style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.5rem 2rem',
      borderBottom: '1px solid #eee',
      background: '#fff',
      boxSizing: 'border-box',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* Logo */}
      <Link href="/">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
        <Image src="/logo/noBgcirclefeather.png" alt="Company Logo" width={40} height={40} style={{ height: 40, width: 40 }} />
        <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: 1 }}>LuxFloors</span>
      </div>
      </Link>
      {/* Navigation */}
      <nav>
        <ul style={{ display: 'flex', gap: '1.25rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  pathname === link.href
                    ? 'nav-link nav-link-active'
                    : 'nav-link'
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Actions */}
      <div style={{ position: 'relative' }} ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen((open) => !open)}
          style={{
            background: '#222',
            color: '#fff',
            padding: '0.25rem 0.5rem',
            borderRadius: 6,
            fontWeight: 900,
            border: 'none',
            cursor: 'pointer',
            minWidth: 120,
            letterSpacing: 0.5
          }}
        >
          Contact Us
          <span style={{ marginLeft: 8, fontSize: 14 }}>▼</span>
        </button>
        {dropdownOpen && (
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: '110%',
              background: '#fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              borderRadius: 8,
              minWidth: 180,
              zIndex: 1001,
              display: 'flex',
              flexDirection: 'column',
              padding: '0.5rem 0.25rem',
            }}
          >
            <a
              href="tel:7708008001"
              style={{
                padding: '0.25rem 0.5rem',
                color: '#222',
                textDecoration: 'none',
                fontWeight: 700,
                borderRadius: 12,
                border: '1px solid var(--charcoal)',
                marginBottom: 6,
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'background 0.2s, border-color 0.2s',
                background: 'none',
                display: 'block',
              }}
              onMouseOver={e => (e.currentTarget.style.background = 'var(--gold-accent-hover)')}
              onMouseOut={e => (e.currentTarget.style.background = 'none')}
              onClick={() => setDropdownOpen(false)}
            >
              Call Us
            </a>
            <a
              href="mailto:info@daltonfloorgallery.com"
              style={{
                padding: '0.25rem 0.5rem',
                color: '#222',
                textDecoration: 'none',
                fontWeight: 700,
                borderRadius: 12,
                border: '1px solid var(--charcoal)',
                marginBottom: 6,
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'background 0.2s, border-color 0.2s',
                background: 'none',
                display: 'block',
              }}
              onMouseOver={e => (e.currentTarget.style.background = 'var(--gold-accent-hover)')}
              onMouseOut={e => (e.currentTarget.style.background = 'none')}
              onClick={() => setDropdownOpen(false)}
            >
              Email Us
            </a>
            <a
              href="https://www.google.com/maps/search/1874+Piedmont+Ave+Atlanta,+GA++Suite+390-C+/@33.8139439,-84.4114447,13z/data=!3m1!4b1!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3Dhttps://www.google.com/maps/dir/?api=1&destination=1140+roswell+road+suite+140,+marietta,+georgia,+30062"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.25rem 0.5rem',
                color: '#222',
                textDecoration: 'none',
                fontWeight: 700,
                borderRadius: 12,
                border: '1px solid var(--charcoal)',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'background 0.2s, border-color 0.2s',
                background: 'none',
                display: 'block',
              }}
              onMouseOver={e => (e.currentTarget.style.background = 'var(--gold-accent-hover)')}
              onMouseOut={e => (e.currentTarget.style.background = 'none')}
              onClick={() => setDropdownOpen(false)}
            >
              Get Directions
            </a>
            <a
              href="/services#contact"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.25rem 0.5rem',
                color: '#222',
                textDecoration: 'none',
                fontWeight: 700,
                borderRadius: 12,
                border: '1px solid var(--charcoal)',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'background 0.2s, border-color 0.2s',
                background: 'none',
                display: 'block',
              }}
              onMouseOver={e => (e.currentTarget.style.background = 'var(--gold-accent-hover)')}
              onMouseOut={e => (e.currentTarget.style.background = 'none')}
              onClick={() => setDropdownOpen(false)}
            >
              Callback
            </a>
          </div>
        )}
      </div>
    </header>
  );
} 