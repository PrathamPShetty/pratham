import useScrollReveal from './useScrollReveal';

const projects = [
  {
    name: 'SIT Mangalore App',
    emoji: '📱',
    banner: 'linear-gradient(135deg,#1e1b4b,#312e81,#4c1d95)',
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
    emoji: '🤖',
    banner: 'linear-gradient(135deg,#1a1a2e,#4c1d95,#6d28d9)',
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
    emoji: '🎓',
    banner: 'linear-gradient(135deg,#0f172a,#164e63,#0e7490)',
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
    emoji: '🧠',
    banner: 'linear-gradient(135deg,#1a1a2e,#831843,#9d174d)',
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
    emoji: '📰',
    banner: 'linear-gradient(135deg,#1c1917,#78350f,#92400e)',
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
    emoji: '🚑',
    banner: 'linear-gradient(135deg,#1a0000,#7f1d1d,#991b1b)',
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
    emoji: '🏪',
    banner: 'linear-gradient(135deg,#052e16,#14532d,#166534)',
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
    emoji: '🌿',
    banner: 'linear-gradient(135deg,#022c22,#065f46,#047857)',
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
    emoji: '🔒',
    banner: 'linear-gradient(135deg,#1e1b4b,#3730a3,#1d4ed8)',
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
    emoji: '📅',
    banner: 'linear-gradient(135deg,#0f172a,#1e3a5f,#1e40af)',
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
      <div className="bg-orb" style={{ width:500, height:500, background:'radial-gradient(circle,rgba(6,182,212,0.06),transparent)', top:'10%', right:'-10%' }} />
      <div className="container" style={{ position:'relative' }}>
        <div className="section-head fade-up">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Things I've built — from hackathon winners to production platforms</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="glass project-card fade-up" style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
              <div className="project-banner" style={{ background: p.banner }}>
                <div className="project-banner-grid" />
                <span className="project-banner-icon">{p.emoji}</span>
              </div>
              <div className="project-body">
                <div className="project-header">
                  <span className="project-name">{p.name}</span>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      {p.linkLabel} ↗
                    </a>
                  )}
                </div>
                <div className="project-techs">
                  {p.techs.map(t => <span key={t} className="tag">{t}</span>)}
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
