import useScrollReveal from './useScrollReveal';

const education = [
  {
    icon: '◈',
    degree: 'B.E. in Artificial Intelligence & Machine Learning',
    institution: 'Srinivas Institute of Technology, Mangalore',
    year: '2022 – 2026',
    score: 'CGPA: 8.59',
  },
  {
    icon: '◉',
    degree: 'PUC — PCMB',
    institution: 'Sri Sathya Sai Loka Seva P.U. College, Alike',
    year: '2020 – 2022',
    score: '81.5%',
  },
  {
    icon: '○',
    degree: 'SSLC — 10th Standard',
    institution: 'Burooj English Medium High School',
    year: '2019 – 2020',
    score: '80.8%',
  },
];

export default function Education() {
  useScrollReveal('.edu-section .fade-up');

  return (
    <section id="education" className="edu-section">
      <div className="container" style={{ position: 'relative' }}>
        <div className="section-head fade-up">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">// academic background</p>
        </div>
        <div className="edu-list">
          {education.map((e, i) => (
            <div key={i} className="glass edu-card fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="edu-left">
                <div className="edu-icon">{e.icon}</div>
                <div>
                  <h3>{e.degree}</h3>
                  <p>{e.institution}</p>
                </div>
              </div>
              <div className="edu-right">
                <div className="edu-year">{e.year}</div>
                <div className="edu-score">{e.score}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
