import useScrollReveal from './useScrollReveal';

const achievements = [
  {
    icon: '▲',
    title: 'SRINATHON 2024 — 1st Place',
    desc: 'Developed a service management platform that improved efficiency by 50% at the National Hackathon.',
  },
  {
    icon: '△',
    title: 'SPRINTHACK 2025 — 2nd Place',
    desc: 'Won second place in AI & DS department hackathon at Srinivas Institute of Technology.',
  },
  {
    icon: '◇',
    title: 'Blockchain Hackathon — Top 5',
    desc: 'Ranked top 5 among 30+ teams at Sahyadri College blockchain challenge.',
  },
  {
    icon: '○',
    title: 'AI Hackathon — Top 10',
    desc: 'Selected among top teams at RV College AI hackathon; invited to exclusive Intel workshop.',
  },
];

const languages = ['English', 'Kannada', 'Tulu', 'Hindi'];

export default function Achievements() {
  useScrollReveal('.achievements-section .fade-up');

  return (
    <section id="achievements" className="achievements-section">
      <div className="container" style={{ position: 'relative' }}>
        <div className="section-head fade-up">
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">// recognition from competitions and research</p>
        </div>
        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="achievement-card glass fade-up"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="achievement-icon-wrap">{a.icon}</div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="lang-section fade-up glass" style={{ padding: '1.5rem', borderRadius: '6px' }}>
          <h3>Languages Known</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {languages.map(l => (
              <span key={l} className="tag" style={{ fontSize: '0.82rem', padding: '0.3rem 1rem' }}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
