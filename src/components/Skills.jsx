import useScrollReveal from './useScrollReveal';

const MONO_BG = 'rgba(255,255,255,0.05)';

const skillGroups = [
  {
    icon: '⌨️',
    iconBg: MONO_BG,
    category: 'Languages',
    desc: 'Core programming languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Dart', 'Kotlin'],
  },
  {
    icon: '⚙️',
    iconBg: MONO_BG,
    category: 'Frameworks',
    desc: 'Web, mobile & backend',
    items: ['React', 'Next.js', 'Flutter', 'Django', 'FastAPI', 'Nest.js', 'Express.js', 'Angular', 'Flask', 'JetPack Compose'],
  },
  {
    icon: '🗄️',
    iconBg: MONO_BG,
    category: 'Databases',
    desc: 'Relational, NoSQL & real-time',
    items: ['PostgreSQL', 'MongoDB', 'Firebase', 'SQL', 'SQLite'],
  },
  {
    icon: '🐳',
    iconBg: MONO_BG,
    category: 'DevOps & Tools',
    desc: 'Infrastructure & deployment',
    items: ['Docker', 'Nginx', 'Azure VPS', 'GitHub', 'Postman', 'Swagger', 'RabbitMQ', 'Firebase', 'Microservices'],
  },
  {
    icon: '◈',
    iconBg: MONO_BG,
    category: 'AI / ML',
    desc: 'Machine learning & computer vision',
    items: ['NLP', 'LangChain', 'LangGraph', 'RAG', 'YOLOv8', 'OpenCV', 'Computer Vision', 'ONNX'],
  },
];

export default function Skills() {
  useScrollReveal('.skills-section .fade-up');

  return (
    <section id="skills" className="skills-section">
      <div className="container" style={{ position: 'relative' }}>
        <div className="section-head fade-up">
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">// languages, frameworks, and tools I ship with</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((g, i) => (
            <div key={g.category} className="glass skill-card fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="skill-card-header">
                <div className="skill-icon" style={{ background: g.iconBg }}>{g.icon}</div>
                <div>
                  <h3>{g.category}</h3>
                  <p>{g.desc}</p>
                </div>
              </div>
              <div className="tags-wrap">
                {g.items.map(item => <span key={item} className="tag">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
