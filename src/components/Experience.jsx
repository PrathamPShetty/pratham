import useScrollReveal from './useScrollReveal';

const experiences = [
  {
    title: 'Software Developer',
    company: 'DevAppSys IT Solutions [P] Ltd.',
    date: 'Jan 2026 – Present',
    color: '#7c3aed',
    bullets: [
      'Developing and maintaining scalable backend systems and APIs for enterprise applications.',
      'Working with modern stacks to build high-performance, production-ready solutions.',
      'Collaborating with cross-functional teams to deliver reliable and efficient software.',
    ],
  },
  {
    title: 'Research Intern',
    company: 'NITK Surathkal, India',
    date: 'Jan 2025 – Sep 2025',
    color: '#06b6d4',
    bullets: [
      'Researched computer vision models and optimized YOLOv8 pipelines for real-time object detection.',
      'Converted PyTorch models to ONNX, improving inference speed by 15%.',
      'Integrated AI modules into research workflows with faculty guidance.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Thaniya Technology, Mangalore',
    date: 'May 2023 – Dec 2025',
    color: '#10b981',
    bullets: [
      'Optimized backend APIs (FastAPI, Django, Node.js), boosting performance by 40%.',
      'Built responsive React interfaces and secured authentication with role-based access control.',
      'Collaborated with 5+ developers to enhance product reliability and user experience.',
    ],
  },
  {
    title: 'Cybersecurity Intern',
    company: 'Swizosoft, Mangalore',
    date: 'May 2024 – Jul 2024',
    color: '#ec4899',
    bullets: [
      'Secured 50+ cloud instances and automated monitoring pipelines, improving efficiency by 60%.',
    ],
  },
];

export default function Experience() {
  useScrollReveal('.exp-section .fade-up');

  return (
    <section id="experience" className="exp-section">
      <div className="bg-orb" style={{ width:350, height:350, background:'radial-gradient(circle,rgba(124,58,237,0.08),transparent)', bottom:0, right:0 }} />
      <div className="container" style={{ position:'relative' }}>
        <div className="section-head fade-up">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Where I've contributed professionally</p>
        </div>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="timeline-dot" style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}` }} />
              <div className="glass timeline-content">
                <div className="timeline-header">
                  <div>
                    <div className="timeline-role">{exp.title}</div>
                    <div className="timeline-company" style={{ color: exp.color }}>{exp.company}</div>
                  </div>
                  <span className="timeline-date">📅 {exp.date}</span>
                </div>
                <ul className="timeline-bullets">
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
