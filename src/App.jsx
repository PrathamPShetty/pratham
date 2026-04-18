import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
      </main>
      <footer>
        <div className="footer-glow" />
        <div className="container">
          <p style={{ marginBottom:'0.5rem' }}>
            Built with{' '}
            <span style={{ color:'var(--accent2)' }}>React</span> &{' '}
            <span style={{ color:'var(--accent3)' }}>Vite</span>
          </p>
          <p>© 2026 <strong style={{ color:'var(--text)' }}>Pratham P Shetty</strong> · Mangaluru, Karnataka</p>
        </div>
      </footer>
    </>
  );
}
