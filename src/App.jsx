import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import ProjectDetail from './pages/ProjectDetail';

function Portfolio() {
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
        <div className="container">
          <p style={{ marginBottom: '0.5rem' }}>
            Built with <span style={{ fontFamily: 'Courier New', fontWeight: 700 }}>React</span> &amp;{' '}
            <span style={{ fontFamily: 'Courier New', fontWeight: 700 }}>Vite</span>
          </p>
          <p>© 2026 <strong>Pratham P Shetty</strong> · Mangaluru, Karnataka</p>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
