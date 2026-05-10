import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import projects from '../data/projects';
import '../styles/project-detail.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="pd-not-found">
        <p>Project not found.</p>
        <Link to="/">← Back to portfolio</Link>
      </div>
    );
  }

  const sections = [
    { id: 'overview',      label: '01 — Overview' },
    { id: 'architecture',  label: '02 — Architecture' },
    { id: 'stack',         label: '03 — Tech Stack' },
    { id: 'features',      label: '04 — Features' },
    { id: 'challenges',    label: '05 — Challenges' },
    { id: 'metrics',       label: '06 — Metrics' },
  ];

  return (
    <div className="pd-root">
      {/* ── Top bar ── */}
      <header className="pd-topbar">
        <button className="pd-back" onClick={() => navigate(-1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Back
        </button>
        <span className="pd-topbar-title">{project.name}</span>
        <div className="pd-topbar-links">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="pd-ext-link">
              {project.linkLabel} ↗
            </a>
          )}
          {project.github && project.github !== project.link && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="pd-ext-link">
              GitHub ↗
            </a>
          )}
        </div>
      </header>

      <div className="pd-layout">
        {/* ── Sidebar TOC ── */}
        <aside className="pd-sidebar">
          <div className="pd-sidebar-sticky">
            <p className="pd-toc-label">Contents</p>
            <nav className="pd-toc">
              {sections.map(s => (
                <a key={s.id} href={`#${s.id}`} className="pd-toc-link">{s.label}</a>
              ))}
            </nav>

            <div className="pd-meta-block">
              <div className="pd-meta-row">
                <span className="pd-meta-key">Category</span>
                <span className="pd-meta-val">{project.category}</span>
              </div>
              <div className="pd-meta-row">
                <span className="pd-meta-key">Year</span>
                <span className="pd-meta-val">{project.year}</span>
              </div>
              <div className="pd-meta-row">
                <span className="pd-meta-key">Status</span>
                <span className="pd-meta-val">{project.status}</span>
              </div>
            </div>

            <div className="pd-stack-pills">
              {project.techs.map(t => (
                <span key={t} className="pd-pill">{t}</span>
              ))}
            </div>
          </div>
        </aside>

        {/* ── Main content ── */}
        <main className="pd-main">
          {/* Hero */}
          <div className="pd-hero" style={{ background: project.banner }}>
            <div className="pd-hero-grid" />
            <div className="pd-hero-content">
              <span className="pd-hero-category">{project.category}</span>
              <h1 className="pd-hero-title">{project.name}</h1>
              <div className="pd-hero-techs">
                {project.techs.map(t => (
                  <span key={t} className="pd-hero-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* 01 Overview */}
          <section id="overview" className="pd-section">
            <h2 className="pd-section-heading">01 — Overview</h2>
            <p className="pd-body">{project.overview}</p>
          </section>

          <hr className="pd-divider" />

          {/* 02 Architecture */}
          <section id="architecture" className="pd-section">
            <h2 className="pd-section-heading">02 — System Architecture</h2>
            <p className="pd-body">{project.architecture.description}</p>
            <div className="pd-arch-table-wrap">
              <table className="pd-table">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Implementation</th>
                  </tr>
                </thead>
                <tbody>
                  {project.architecture.diagram.map((row, i) => (
                    <tr key={i}>
                      <td className="pd-td-layer">{row.layer}</td>
                      <td className="pd-td-detail">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <hr className="pd-divider" />

          {/* 03 Tech Stack */}
          <section id="stack" className="pd-section">
            <h2 className="pd-section-heading">03 — Tech Stack Rationale</h2>
            <div className="pd-stack-list">
              {project.stack.map((s, i) => (
                <div key={i} className="pd-stack-item">
                  <div className="pd-stack-tech">{s.tech}</div>
                  <p className="pd-stack-reason">{s.reason}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="pd-divider" />

          {/* 04 Features */}
          <section id="features" className="pd-section">
            <h2 className="pd-section-heading">04 — Key Features</h2>
            <div className="pd-features-list">
              {project.features.map((f, i) => (
                <div key={i} className="pd-feature-item">
                  <div className="pd-feature-index">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <div className="pd-feature-title">{f.title}</div>
                    <p className="pd-feature-detail">{f.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="pd-divider" />

          {/* 05 Challenges */}
          <section id="challenges" className="pd-section">
            <h2 className="pd-section-heading">05 — Technical Challenges</h2>
            <div className="pd-challenges-list">
              {project.challenges.map((c, i) => (
                <div key={i} className="pd-challenge-item">
                  <div className="pd-challenge-problem">
                    <span className="pd-label">Problem</span>
                    <p>{c.problem}</p>
                  </div>
                  <div className="pd-challenge-arrow">→</div>
                  <div className="pd-challenge-solution">
                    <span className="pd-label">Solution</span>
                    <p>{c.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="pd-divider" />

          {/* 06 Metrics */}
          <section id="metrics" className="pd-section">
            <h2 className="pd-section-heading">06 — Metrics &amp; Impact</h2>
            <div className="pd-metrics-grid">
              {project.metrics.map((m, i) => (
                <div key={i} className="pd-metric-card">
                  <span className="pd-metric-text">{m}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Footer nav */}
          <div className="pd-footer-nav">
            <button className="pd-back-btn" onClick={() => navigate(-1)}>
              ← Back to Projects
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
