import useScrollReveal from './useScrollReveal';

const achievements = [
  {
    icon: '🏆',
    bg: 'linear-gradient(135deg,rgba(251,191,36,0.15),rgba(245,158,11,0.08))',
    border: 'rgba(251,191,36,0.25)',
    title: 'SRINATHON 2024 — 1st Place',
    desc: 'Developed a service management platform that improved efficiency by 50% at the National Hackathon.',
  },
  {
    icon: '🥈',
    bg: 'linear-gradient(135deg,rgba(148,163,184,0.15),rgba(100,116,139,0.08))',
    border: 'rgba(148,163,184,0.2)',
    title: 'SPRINTHACK 2025 — 2nd Place',
    desc: 'Won second place in AI & DS department hackathon at Srinivas Institute of Technology.',
  },
  {
    icon: '🔗',
    bg: 'linear-gradient(135deg,rgba(124,58,237,0.15),rgba(99,102,241,0.08))',
    border: 'rgba(124,58,237,0.25)',
    title: 'Blockchain Hackathon — Top 5',
    desc: 'Ranked top 5 among 30+ teams at Sahyadri College blockchain challenge.',
  },
  {
    icon: '🤖',
    bg: 'linear-gradient(135deg,rgba(6,182,212,0.15),rgba(14,165,233,0.08))',
    border: 'rgba(6,182,212,0.25)',
    title: 'AI Hackathon — Top 10',
    desc: 'Selected among top teams at RV College AI hackathon; invited to exclusive Intel workshop.',
  },
];

const languages = ['🇬🇧 English', '🇮🇳 Kannada', '🌿 Tulu', '🇮🇳 Hindi'];

export default function Achievements() {
  useScrollReveal('.achievements-section .fade-up');

  return (
    <section id="achievements" className="achievements-section">
      <div className="bg-orb" style={{ width:450, height:450, background:'radial-gradient(circle,rgba(251,191,36,0.06),transparent)', bottom:0, left:'20%' }} />
      <div className="container" style={{ position:'relative' }}>
        <div className="section-head fade-up">
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Recognition and awards from competitions</p>
        </div>
        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="achievement-card fade-up"
              style={{
                background: a.bg,
                border: `1px solid ${a.border}`,
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div className="achievement-icon-wrap" style={{ background: a.border.replace('0.25', '0.15') }}>
                {a.icon}
              </div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="lang-section fade-up glass" style={{ padding:'1.5rem', borderRadius:'var(--radius)' }}>
          <h3>Languages Known</h3>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'0.6rem' }}>
            {languages.map(l => (
              <span key={l} className="tag" style={{ fontSize:'0.9rem', padding:'0.35rem 1rem' }}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
