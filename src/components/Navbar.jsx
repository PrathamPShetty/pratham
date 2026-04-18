import { useState, useEffect } from 'react';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Achievements'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="navbar" style={scrolled ? { background: 'rgba(3,3,8,0.95)' } : {}}>
      <div className="container">
        <span className="nav-logo">PS</span>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
          <li>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-resume-btn">
              Resume ↗
            </a>
          </li>
        </ul>
        <button className="nav-menu-btn" onClick={() => setOpen(o => !o)} aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
      </div>
      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
        ))}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
          style={{ color: 'var(--accent2)', fontWeight: 600 }}
          onClick={() => setOpen(false)}>
          Download Resume ↗
        </a>
      </div>
    </nav>
  );
}
