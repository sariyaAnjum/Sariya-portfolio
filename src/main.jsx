import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Menu, X, Sun, Moon, Download, Code2, Database, Layers3, Sparkles, ExternalLink, Send, GraduationCap, BriefcaseBusiness } from 'lucide-react';
import './style.css';

const skills = [
  { group: 'Languages', icon: Code2, items: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'] },
  { group: 'Frameworks', icon: Layers3, items: ['React.js', 'Node.js', 'Express.js'] },
  { group: 'Database', icon: Database, items: ['MongoDB', 'SQL'] },
  { group: 'Developer tools', icon: Code2, items: ['GitHub', 'VS Code', 'Postman'] },
];
const projects = [
  { number: '01', name: 'Destiny Travels', type: 'REST API Project', description: 'A RESTful API to create, read, update and delete travel destinations stored in MongoDB.', details: ['Filtering by category, price and rating', 'Sorting and pagination', 'Postman collection for API testing'], stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'], url: 'https://github.com/sariyaAnjum/Destiny_Travells-' },
  { number: '02', name: 'Technika Course Central', type: 'Course Catalog Frontend', description: 'A React application listing courses across two categories with state-based category filtering.', details: ['Reusable CourseCard and CourseList components', 'Displays course duration and cost', 'Built with Vite and JavaScript'], stack: ['React.js', 'Vite', 'JavaScript', 'CSS'], url: 'https://github.com/sariyaAnjum/Technika-course-central' },
];
const education = [
  { year: '2024 — 2027', course: 'Bachelor of Computer Application (BCA)', place: 'Aditya Institute of Management Studies' },
  { year: '2024', course: 'Pre-University Course', place: 'Daina Independent PU College' },
  { year: '2022', course: 'Grade 10', place: 'Manasa Public School' },
];

function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('home');
  const [sent, setSent] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    const sections = document.querySelectorAll('section[id]');
    const spy = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }), { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(s => spy.observe(s));
    return () => { observer.disconnect(); spy.disconnect(); };
  }, []);
  const closeMenu = () => setMenu(false);
  const nav = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
  return <div className={dark ? 'app dark' : 'app light'}>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="header">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">S.</span><span>SARIYA<span className="brand-dot">.</span></span></a>
      <nav className={menu ? 'nav open' : 'nav'}>{nav.map(n => <a key={n} className={active === n ? 'nav-link active' : 'nav-link'} href={`#${n}`} onClick={closeMenu}>{n}</a>)}</nav>
      <div className="header-actions"><button className="icon-button" aria-label="Toggle colour theme" onClick={() => setDark(!dark)}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button><a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15}/></a><button className="icon-button menu-toggle" aria-label="Toggle menu" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button></div>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR LEARNING & OPPORTUNITIES</div>
          <h1>Building digital<br/>experiences with<br/><span className="gradient-text">curiosity & code.</span></h1>
          <p className="hero-intro">Hey, I'm <strong>Sariya Anjum</strong> — a BCA student and aspiring MERN Stack Developer who enjoys turning ideas into clean, useful web experiences.</p>
          <div className="hero-buttons"><a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button secondary" href="/Sariya-Anjum-Resume.pdf" download><Download size={16}/> Download CV</a></div>
          <div className="hero-socials"><a href="https://github.com/sariyaAnjum" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href="https://www.linkedin.com/in/sariya-anjum-631b2b37b" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><span className="social-divider"/> <span><MapPin size={15}/> Bengaluru, India</span></div>
        </div>
        <div className="hero-visual"><div className="photo-halo"/><div className="photo-frame"><img src="/profile.jpg" alt="Portrait of Sariya Anjum"/></div><div className="floating-card card-top"><span className="mini-icon"><Code2 size={16}/></span><span><b>Learning by building</b><small>One project at a time</small></span></div><div className="floating-card card-bottom"><span className="sparkle"><Sparkles size={18}/></span><span><b>MERN Stack</b><small>My current focus</small></span></div><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="hero-index">01 <span/> PORTFOLIO / 2026</div></div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
      </section>

      <section className="about section-wrap section-pad" id="about">
        <div className="section-kicker reveal">01 / A LITTLE ABOUT ME</div><div className="about-grid"><h2 className="section-heading reveal">Curious mind.<br/><span className="muted-heading">Creative problem solver.</span></h2><div className="about-text reveal"><p>I'm currently pursuing my Bachelor of Computer Applications and developing my skills in modern web development. I enjoy learning how the frontend and backend work together to create meaningful applications.</p><p>My current focus is strengthening my MERN Stack skills, writing better code, and building projects that help me grow as a developer.</p><div className="about-signature">Sariya Anjum <span>— Aspiring Developer</span></div></div></div>
        <div className="about-strip reveal"><div><span className="strip-number">01</span><span>Keep learning</span></div><div><span className="strip-number">02</span><span>Build with purpose</span></div><div><span className="strip-number">03</span><span>Grow through feedback</span></div></div>
      </section>

      <section className="skills section-wrap section-pad" id="skills"><div className="section-top reveal"><div><div className="section-kicker">02 / WHAT I WORK WITH</div><h2 className="section-heading">My <span className="gradient-text">toolkit.</span></h2></div><p className="section-note">The technologies and tools I'm learning and using to bring ideas to life.</p></div><div className="skill-grid">{skills.map((s, i) => <article className="skill-card reveal" style={{'--delay': `${i * 90}ms`}} key={s.group}><div className="skill-card-top"><span className="skill-icon"><s.icon size={19}/></span><span className="skill-index">0{i+1}</span></div><h3>{s.group}</h3><div className="skill-tags">{s.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></section>

      <section className="projects section-wrap section-pad" id="projects"><div className="section-top reveal"><div><div className="section-kicker">03 / SELECTED WORK</div><h2 className="section-heading">Things I've <span className="gradient-text">built.</span></h2></div><a className="text-link" href="https://github.com/sariyaAnjum" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={16}/></a></div><div className="project-list">{projects.map((p, i) => <article className="project-card reveal" key={p.number}><div className="project-number">{p.number}</div><div className="project-main"><div className="project-meta">{p.type}<span>•</span> {i === 0 ? 'BACKEND' : 'FRONTEND'}</div><h3>{p.name}</h3><p>{p.description}</p><ul>{p.details.map(d => <li key={d}>{d}</li>)}</ul><div className="project-stack">{p.stack.map(s => <span key={s}>{s}</span>)}</div></div><a className="project-link" href={p.url} target="_blank" rel="noreferrer" aria-label={`View ${p.name} on GitHub`}><ArrowUpRight size={22}/></a></article>)}</div></section>

      <section className="education section-wrap section-pad" id="education"><div className="section-kicker reveal">04 / THE JOURNEY SO FAR</div><h2 className="section-heading reveal">Learning is a <span className="gradient-text">journey.</span></h2><div className="timeline">{education.map((e, i) => <div className="timeline-item reveal" key={e.course}><div className="timeline-year">{e.year}</div><div className="timeline-dot"/><div className="timeline-content"><span>{i === 0 ? 'CURRENT STUDIES' : 'EDUCATION'}</span><h3>{e.course}</h3><p>{e.place}</p></div></div>)}</div><div className="certificates reveal"><div className="certificate-icon"><GraduationCap size={20}/></div><div><span>ADDITIONAL LEARNING</span><p>Getting Started with Artificial Intelligence · Artificial Intelligence Fundamentals</p></div></div></section>

      <section className="contact section-wrap section-pad" id="contact"><div className="contact-panel reveal"><div className="contact-glow"/><div className="section-kicker">05 / HAVE A PROJECT IN MIND?</div><h2>Let's make<br/><span className="gradient-text">something meaningful.</span></h2><p>I'm open to connecting, learning, and exploring opportunities in web development. Feel free to reach out.</p><a className="button primary contact-button" href="mailto:s3924501@gmail.com">Say hello <ArrowUpRight size={17}/></a><div className="contact-bottom"><a href="mailto:s3924501@gmail.com"><Mail size={16}/> s3924501@gmail.com</a><a href="tel:9611097732"><Phone size={16}/> 96110 97732</a><span><MapPin size={16}/> Bengaluru, India</span></div></div></section>
    </main>
    <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">S.</span><span>SARIYA<span className="brand-dot">.</span></span></a><span>Designed & built with curiosity <span className="heart">♥</span></span><div className="footer-links"><a href="https://github.com/sariyaAnjum" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/sariya-anjum-631b2b37b" target="_blank" rel="noreferrer">LinkedIn</a><a href="#home">Back to top ↑</a></div></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App/>);
