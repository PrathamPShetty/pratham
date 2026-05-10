import { Link } from 'react-router-dom';
import useScrollReveal from './useScrollReveal';
import projects from '../data/projects';

export default function Projects() {
  useScrollReveal('.projects-section .fade-up');

  return (
    <section id="projects" className="projects-section">
      <div className="container" style={{ position: 'relative' }}>
        <div className="section-head fade-up">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">// systems I've designed, built, and shipped to production</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="glass project-card fade-up"
              style={{ transitionDelay: `${(i % 3) * 0.1}s`, textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
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
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={e => e.stopPropagation()}
                    >
                      {p.linkLabel} ↗
                    </a>
                  )}
                </div>
                <ul className="project-bullets">
                  {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                {p.badge && <span className="project-badge">{p.badge}</span>}
                <div className="project-read-more">View technical details →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
