import useScrollReveal from './useScrollReveal';

const skillGroups = [
  {
    icon: '🐍',
    iconBg: 'linear-gradient(135deg,rgba(59,130,246,0.2),rgba(99,102,241,0.2))',
    category: 'Languages',
    desc: 'Core programming languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Dart', 'Kotlin'],
  },
  {
    icon: '⚛️',
    iconBg: 'linear-gradient(135deg,rgba(6,182,212,0.2),rgba(124,58,237,0.2))',
    category: 'Frameworks',
    desc: 'Web, mobile & backend',
    items: ['React', 'Next.js', 'Flutter', 'Django', 'FastAPI', 'Nest.js', 'Express.js', 'Angular', 'Flask', 'JetPack Compose'],
  },
  {
    icon: '🗄️',
    iconBg: 'linear-gradient(135deg,rgba(16,185,129,0.2),rgba(6,182,212,0.2))',
    category: 'Databases',
    desc: 'Relational, NoSQL & real-time',
    items: ['PostgreSQL', 'MongoDB', 'Firebase', 'SQL', 'SQLite'],
  },
  {
    icon: '🐳',
    iconBg: 'linear-gradient(135deg,rgba(59,130,246,0.2),rgba(6,182,212,0.2))',
    category: 'DevOps & Tools',
    desc: 'Infrastructure & deployment',
    items: ['Docker', 'Nginx', 'Azure VPS', 'GitHub', 'Postman', 'Swagger', 'RabbitMQ', 'Firebase', 'Microservices'],
  },
  {
    icon: '🤖',
    iconBg: 'linear-gradient(135deg,rgba(236,72,153,0.2),rgba(124,58,237,0.2))',
    category: 'AI / ML',
    desc: 'Machine learning & computer vision',
    items: ['NLP', 'LangChain', 'LangGraph', 'RAG', 'YOLOv8', 'OpenCV', 'Computer Vision', 'ONNX'],
  },
];

export default function Skills() {
  useScrollReveal('.skills-section .fade-up');

  return (
    <section id="skills" className="skills-section">
      <div className="bg-orb" style={{ width:400, height:400, background:'radial-gradient(circle,rgba(6,182,212,0.07),transparent)', top:0, left:'50%', transform:'translateX(-50%)' }} />
      <div className="container" style={{ position:'relative' }}>
        <div className="section-head fade-up">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Tools and languages I work with daily</p>
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
