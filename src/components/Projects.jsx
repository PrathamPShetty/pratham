import useScrollReveal from './useScrollReveal';

const projects = [
  {
    name: 'SIT Mangalore App',
    category: 'Mobile App',
    banner: 'linear-gradient(135deg,#0a0a0a,#1e1e1e)',
    techs: ['Flutter', 'Appwrite'],
    bullets: [
      'Mobile app for 1,500+ students & faculty — 1,000+ downloads.',
      'Integrated Appwrite auth, reducing login time by 30%.',
    ],
    link: 'https://play.google.com/store',
    linkLabel: 'Play Store',
    badge: null,
  },
  {
    name: 'Service Management App',
    category: 'AI Platform',
    banner: 'linear-gradient(150deg,#0d0d0d,#1a1a1a)',
    techs: ['FastAPI', 'Flutter', 'Ollama'],
    bullets: [
      'AI-enabled service platform with secure payment integration.',
      'Secured 1st place at SRINATHON 2024 (National Hackathon).',
    ],
    link: 'https://github.com/PrathamPShetty',
    linkLabel: 'GitHub',
    badge: '🏆 SRINATHON 2024 Winner',
  },
  {
    name: 'SIT Alumni Portal',
    category: 'Web Platform',
    banner: 'linear-gradient(120deg,#0b0b0b,#1c1c1c)',
    techs: ['Next.js', 'Tailwind CSS'],
    bullets: [
      'Real-time alumni portal for 5,000+ graduates.',
      '40% higher engagement vs. previous platform.',
    ],
    link: 'https://sit-alumni.vercel.app',
    linkLabel: 'Live',
    badge: null,
  },
  {
    name: 'AI Resume Analyzer',
    category: 'AI / NLP',
    banner: 'linear-gradient(145deg,#0f0f0f,#1f1f1f)',
    techs: ['Python', 'NLP', 'FastAPI', 'Streamlit'],
    bullets: [
      'Automated resume screening, cutting processing time by 50%.',
      'FastAPI backend analyzing 1,500+ resumes daily.',
    ],
    link: 'https://github.com/PrathamPShetty',
    linkLabel: 'GitHub',
    badge: null,
  },
  {
    name: 'Tulunad Diaries',
    category: 'Web Platform',
    banner: 'linear-gradient(160deg,#0c0c0c,#1b1b1b)',
    techs: ['Nest.js', 'React', 'Swagger'],
    bullets: [
      'Modern newspaper platform — 40% reach boost through SEO.',
    ],
    link: 'https://tulunaddiaries.com',
    linkLabel: 'Live',
    badge: null,
  },
  {
    name: 'Emergency-Wave App',
    category: 'Mobile App',
    banner: 'linear-gradient(130deg,#0a0a0a,#191919)',
    techs: ['Flutter', 'Express.js'],
    bullets: [
      'Real-time ambulance management — 30% faster response.',
      'Scales to 1,000+ daily API requests.',
    ],
    link: null,
    linkLabel: null,
    badge: null,
  },
  {
    name: 'Offline-First Store App',
    category: 'Android App',
    banner: 'linear-gradient(140deg,#0d0d0d,#1d1d1d)',
    techs: ['Jetpack Compose', 'Nest.js', 'PostgreSQL', 'SQLite'],
    bullets: [
      'Offline-first inventory & billing with local SQLite storage.',
      'Cloud sync with conflict-free queued offline actions.',
    ],
    link: null,
    linkLabel: null,
    badge: null,
  },
  {
    name: 'Ceyone Foundation',
    category: 'Web Platform',
    banner: 'linear-gradient(155deg,#0a0a0a,#1a1a1a)',
    techs: ['Next.js', 'Tailwind CSS'],
    bullets: [
      'NGO platform connecting donors & volunteers.',
      '35% increase in community engagement.',
    ],
    link: 'https://ceyonefoundation.org',
    linkLabel: 'Live',
    badge: null,
  },
  {
    name: 'Raspberry Pi Logging System',
    category: 'IoT / Web',
    banner: 'linear-gradient(125deg,#0c0c0c,#1e1e1e)',
    techs: ['Python', 'Next.js'],
    bullets: [
      'Secure session management system for library access.',
      'Improved log efficiency by 60%.',
    ],
    link: 'https://librarylogs.vercel.app',
    linkLabel: 'Live',
    badge: null,
  },
  {
    name: 'Sit-Slot System',
    category: 'Web App',
    banner: 'linear-gradient(145deg,#0b0b0b,#1c1c1c)',
    techs: ['Django', 'HTML', 'CSS'],
    bullets: [
      'Booking system for 100+ faculty, reducing errors by 90%.',
    ],
    link: 'https://sitslot.vercel.app',
    linkLabel: 'Live',
    badge: null,
  },
];

export default function Projects() {
  useScrollReveal('.projects-section .fade-up');

  return (
    <section id="projects" className="projects-section">
      <div className="container" style={{ position: 'relative' }}>
        <div className="section-head fade-up">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Things I've built — from hackathon winners to production platforms</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="glass project-card fade-up" style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
              <div className="project-banner" style={{ background: p.banner }}>
                <div className="project-banner-grid" />
                <div className="project-banner-content">
                  <span className="project-category-label">{p.category}</span>
                  <h3 className="project-banner-name">{p.name}</h3>
                </div>
              </div>
              <div className="project-body">
                <div className="project-body-top">
                  <div className="project-techs">
                    {p.techs.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      {p.linkLabel} ↗
                    </a>
                  )}
                </div>
                <ul className="project-bullets">
                  {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                {p.badge && <span className="project-badge">{p.badge}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
