import { useEffect, useState } from "react";
import {
  profile, quickFacts, about, skills, projects, experience,
  publication, certificates, certificatesFolder,
} from "./data.js";

const NAV = [
  ["home", "Home"],
  ["about", "About"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["publication", "Publication"],
  ["certificates", "Certificates"],
  ["contact", "Contact"],
];

/* Draws a detection-style bounding box around a phrase, like a model output. */
function Det({ label, delay = 0, children }) {
  return (
    <span className="det" style={{ "--d": `${delay}ms` }}>
      <span className="det-tag" aria-hidden="true">{label}</span>
      {children}
    </span>
  );
}

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const els = NAV.map(([id]) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

function Header({ active }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home">{profile.name}</a>
      <nav aria-label="Primary">
        <ul>
          {NAV.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={active === id ? "true" : undefined}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <p className="hero-hi">Hi, I'm</p>
      <h1>{profile.name}</h1>
      <p className="lede">
        I build <Det label="vision" delay={500}>computer vision models</Det> and
        the <Det label="backend" delay={900}>full-stack apps</Det> that put them
        to work, from <Det label="edge" delay={1300}>ESP32 cameras</Det> to the browser.
      </p>
      <div className="cta-row">
        <a className="btn primary" href="#projects">See my projects</a>
        {profile.resumes.map((r) => (
          <a key={r.href} className="btn" href={r.href} download>{r.label}</a>
        ))}
      </div>
      <dl className="facts">
        {quickFacts.map((f) => (
          <div key={f.k}>
            <dt>{f.k}</dt>
            <dd>{f.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <div className="about-grid">
        <div className="prose">
          {about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <dl className="skills">
          {skills.map((s) => (
            <div key={s.group}>
              <dt>{s.group}</dt>
              <dd>{s.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <ul className="project-list">
        {projects.map((p) => (
          <li key={p.title} className={p.featured ? "project featured" : "project"}>
            <div className="project-head">
              <h3>{p.title}</h3>
              <p className="kind">{p.kind}</p>
              <p className="stack">{p.stack}</p>
            </div>
            <div className="project-body">
              <ul>
                {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
              <a className="link" href={p.github} target="_blank" rel="noreferrer">
                View {p.title} on GitHub
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.org}>
            <p className="when">{e.when}</p>
            <h3>{e.role}</h3>
            <p className="org">{e.org}, {e.place}</p>
            <ul>
              {e.points.map((pt, i) => <li key={i}>{pt}</li>)}
            </ul>
            <a className="link" href={e.cert} target="_blank" rel="noreferrer">
              View certificate
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Publication() {
  return (
    <section id="publication" className="section">
      <h2>Research publication</h2>
      <article className="paper">
        <p className="when">{publication.when}</p>
        <h3>{publication.title}</h3>
        <p className="org">{publication.venue}</p>
        <ul>
          {publication.points.map((pt, i) => <li key={i}>{pt}</li>)}
        </ul>
        <a className="btn primary" href={publication.href} target="_blank" rel="noreferrer">
          Read the paper on IEEE Xplore
        </a>
      </article>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="section">
      <h2>Certificates and achievements</h2>
      <ul className="cert-list">
        {certificates.map((c) => (
          <li key={c.name}>
            <div>
              <h3>{c.name}</h3>
              <p>{c.note}</p>
            </div>
            <p className="when">{c.when}</p>
          </li>
        ))}
      </ul>
      <a className="btn" href={certificatesFolder} target="_blank" rel="noreferrer">
        Open all certificates on Google Drive
      </a>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Contact</h2>
      <p className="contact-lead">
        Open to internships and full-time roles in AI/ML and software engineering.
      </p>
      <a className="big-mail" href={`mailto:${profile.email}`}>{profile.email}</a>
      <ul className="contact-list">
        <li><span>Phone</span><a href={profile.phoneHref}>{profile.phone}</a></li>
        <li><span>LinkedIn</span><a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/souvikkonar99</a></li>
        <li><span>GitHub</span><a href={profile.github} target="_blank" rel="noreferrer">github.com/SOUVIKKONAR</a></li>
        <li><span>Location</span><p>{profile.location}</p></li>
      </ul>
    </section>
  );
}

export default function App() {
  const active = useActiveSection();
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Header active={active} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Publication />
        <Certificates />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </>
  );
}
