import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Database, BrainCircuit, Layers3, Globe, Terminal, Sparkles, ChevronLeft,
  ChevronRight, ExternalLink, Download, MoveUpRight, BriefcaseBusiness, GraduationCap,
  Workflow, ShieldCheck, Zap, MousePointer2
} from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01',
    name: 'School ERP SaaS',
    category: 'SAAS PLATFORM',
    description: 'A multi-tenant school management platform designed to bring admissions, attendance, fees, staff, and student workflows into one connected system.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Multi-tenancy'],
    tone: 'lime',
    type: 'school',
    github: 'https://github.com/tank-211/themillennialschool',
    live: 'https://themillennialschool-jp86.vercel.app/',
    featured: 'Architecture · Product engineering'
  },
  {
    number: '02',
    name: 'Admission CRM',
    category: 'FULL STACK APPLICATION',
    description: 'A full admissions lifecycle CRM with lead capture, role-based access, communication history, tasks, applications, and analytics dashboards.',
    stack: ['React', 'Express', 'Prisma', 'JWT'],
    tone: 'violet',
    type: 'crm',
    github: 'https://github.com/tank-211/school-erp-saas',
    live: 'https://school-erp-saas-superadmin.vercel.app/sp-control-portal',
    featured: 'REST APIs · Role-based access'
  },
  {
    number: '03',
    name: 'AI Call Sentiment',
    category: 'AI / NLP',
    description: 'An AI-powered workflow that analyzes customer calls and generates sentiment reports and concise call summaries to support quality review.',
    stack: ['AI / NLP', 'Prompt Engineering', 'Workflow Integration'],
    tone: 'blue',
    type: 'ai',
    github: 'https://github.com/tank-211/Quality-Auditor-AI-Sales-Call-',
    live: '',
    featured: 'AI workflow · Call insights'
  },
  {
    number: '04',
    name: 'Pet Services SaaS',
    category: 'SAAS PRODUCT CONCEPT',
    description: 'A multi-business platform concept for pet service providers, with customer management and appointment-booking foundations.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    tone: 'orange',
    type: 'pet',
    github: 'https://github.com/tank-211/animality',
    live: 'https://pet-platform-rho8.onrender.com/',
    featured: 'Product thinking · Data modeling'
  },
  {
    number: '05',
    name: 'Property Developer Website',
    category: 'WEB DEVELOPMENT',
    description: 'A responsive real-estate marketing website with clear service presentation and an inquiry management workflow.',
    stack: ['React', 'Responsive UI', 'Forms'],
    tone: 'pink',
    type: 'property',
    github: 'https://github.com/tank-21',
    live: '',
    featured: 'Responsive design · Lead capture'
  }
];

const skills = [
  { icon: Code2, title: 'Frontend', items: 'React.js · Vite · JavaScript · HTML · CSS · Material UI' },
  { icon: Database, title: 'Backend & Data', items: 'Node.js · Express.js · REST APIs · PostgreSQL · MySQL · Prisma' },
  { icon: BrainCircuit, title: 'AI Applications', items: 'Prompt engineering · AI workflows · Agent fundamentals · Sentiment analysis' },
  { icon: ShieldCheck, title: 'Engineering', items: 'JWT authentication · RBAC · Git · Postman · Deployment · API design' }
];

const experience = [
  {
    date: '2026 — PRESENT',
    role: 'Team Lead / Project Coordinator',
    company: 'Acura Bizsol',
    detail: 'Coordinate a SaaS product team, allocate tasks, track delivery, resolve blockers, and contribute hands-on to planning, testing, and execution.'
  },
  {
    date: 'MAR 2026 — PRESENT',
    role: 'Executive · Proctoring Process',
    company: 'Datamatics Global Services',
    detail: 'Support live online examination operations, handle escalations, and troubleshoot candidate login, system, and technical issues with internal teams.'
  },
  {
    date: 'AUG 2025 — MAR 2026',
    role: 'Executive · Sales Process',
    company: 'Datamatics Global Services',
    detail: 'Worked across lead generation, verification, international client communication, call quality audits, and reporting accuracy.'
  },
  {
    date: 'DEC 2023 — JUL 2025',
    role: 'Part-time Operations & Support',
    company: 'Datamatics Global Services',
    detail: 'Supported online examination environments and customer chat operations, building communication, analytical, and problem-solving skills.'
  }
];

function ProjectVisual({ project }) {
  return (
    <div className={`project-visual visual-${project.tone}`} aria-hidden="true">
      <div className="visual-top"><span>PROJECT / {project.number}</span><span className="visual-live"><i /> BUILD LOG</span></div>
      {project.type === 'school' && <div className="mock-dashboard">
        <div className="mock-sidebar"><b>◈</b><span /><span /><span /><span /></div>
        <div className="mock-content"><div className="mock-heading"><span>Overview</span><b>↗</b></div><div className="mock-stats"><i /><i /><i /></div><div className="mock-chart"><div /><div /><div /><div /><div /><div /><div /><div /></div><div className="mock-line" /></div>
      </div>}
      {project.type === 'crm' && <div className="mock-crm">
        <div className="crm-head"><span>Admission pipeline</span><b>•••</b></div>
        <div className="crm-columns">{[['NEW','04'],['QUALIFIED','08'],['IN REVIEW','03']].map(([t,n])=><div className="crm-col" key={t}><small>{t} <b>{n}</b></small><i /><i /><i /></div>)}</div>
      </div>}
      {project.type === 'ai' && <div className="ai-visual">
        <div className="ai-orb"><div /><div /><div /><Sparkles size={30}/></div>
        <div className="ai-label"><span>CALL INSIGHT</span><strong>Sentiment detected</strong><div className="sentiment-bar"><i /></div><small>Positive · Summary ready</small></div>
      </div>}
      {project.type === 'pet' && <div className="pet-visual"><div className="pet-circle">P<span>+</span></div><div className="pet-card"><span>BOOKING / 024</span><b>Appointment<br/>confirmed</b><small>Customer care · Pet services</small></div><div className="pet-dot" /></div>}
      {project.type === 'property' && <div className="property-visual"><div className="property-big">SPACE<br/><em>TO GROW.</em></div><div className="property-bottom"><span>PROPERTY / LIVING</span><span>↗</span></div><div className="property-block" /></div>}
      <div className="visual-footer"><span>{project.featured}</span><ArrowUpRight size={17}/></div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['Work','#work'],['About','#about'],['Experience','#experience'],['Contact','#contact']];
  return <header className="site-header">
    <a className="brand" href="#home" aria-label="Prathamesh Jadhav home"><span className="brand-mark">P<span>.</span></span><span className="brand-name">PRATHAMESH<br/><small>JADHAV / DEVELOPER</small></span></a>
    <nav className={open ? 'nav nav-open' : 'nav'}>
      {links.map(([label,href])=><a key={label} href={href} onClick={()=>setOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="#contact" onClick={()=>setOpen(false)}>Let’s talk <ArrowUpRight size={15}/></a>
    </nav>
    <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
  </header>;
}

function App() {
  const [activeProject, setActiveProject] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);
  const changeProject = (direction) => setActiveProject((current) => (current + direction + projects.length) % projects.length);
  const project = projects[activeProject];

  return <div className="app-shell">
    <div className="grain" aria-hidden="true" />
    <Header />
    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-kicker"><span className="status-dot" /> AVAILABLE FOR SOFTWARE & AI OPPORTUNITIES <span className="kicker-line" /></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="eyebrow">FULL STACK DEVELOPER <span>×</span> AI APPLICATIONS</motion.p>
            <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.75,delay:.08}}>I build digital<br/>products that <span className="text-accent">move<br className="desktop-break"/> things forward.</span></motion.h1>
            <motion.p className="hero-description" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.2}}>I’m Prathamesh — a developer focused on thoughtful interfaces, dependable backend systems, and useful AI-powered experiences.</motion.p>
            <motion.div className="hero-actions" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.28}}>
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a>
              <a className="button button-quiet" href="/Prathamesh-Jadhav-Resume.pdf" target="_blank" rel="noreferrer"><Download size={16}/> View résumé</a>
            </motion.div>
            <div className="hero-socials"><a href="https://github.com/tank-21" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={12}/></a><a href="https://linkedin.com/in/prathamesh-jadhav-991523251" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={12}/></a><a href="mailto:jadhavpratham1822@gmail.com"><Mail size={16}/> Email <ArrowUpRight size={12}/></a></div>
          </div>
          <motion.div className="hero-art" initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:.9,delay:.18}}>
            <div className="art-grid" />
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="art-center"><span className="art-symbol">P<span>.</span></span><span className="art-caption">DESIGN. BUILD. ITERATE.</span></div>
            <div className="float-card float-card-code"><Code2 size={15}/><span>Clean code</span><b>01</b></div>
            <div className="float-card float-card-ai"><BrainCircuit size={16}/><span>AI workflows</span><b>02</b></div>
            <div className="float-card float-card-api"><Database size={15}/><span>Scalable APIs</span><b>03</b></div>
            <div className="art-coordinates">19°59' N<br/>73°47' E</div>
            <div className="art-vertical">INDEPENDENT THINKING / CONTINUOUS BUILDING</div>
          </motion.div>
        </div>
        <div className="hero-bottom"><span>BASED IN NASHIK, INDIA</span><span className="hero-bottom-center"><span/> OPEN TO WHAT’S NEXT</span><a href="#work">SCROLL TO EXPLORE <ArrowDownRight size={14}/></a></div>
      </section>

      <section className="marquee-strip" aria-label="Focus areas"><div className="marquee-track">{Array.from({length:2}).map((_,i)=><div className="marquee-set" key={i}><span>FULL STACK DEVELOPMENT</span><i>✳</i><span>SAAS ARCHITECTURE</span><i>✳</i><span>AI APPLICATIONS</span><i>✳</i><span>BACKEND ENGINEERING</span><i>✳</i></div>)}</div></section>

      <section className="work-section section-wrap section-pad" id="work">
        <div className="section-heading">
          <div><p className="eyebrow"><span className="section-index">01 /</span> SELECTED WORK</p><h2>Built with intent.<br/><span className="muted-heading">Designed to matter.</span></h2></div>
          <p className="section-aside">A selection of products and experiments across SaaS, full-stack systems, and AI-enabled workflows.</p>
        </div>
        <div className="project-slider">
          <div className="project-stage">
            <AnimatePresence mode="wait">
              <motion.div key={project.number} className="project-card" initial={reduceMotion?false:{opacity:0,x:30}} animate={{opacity:1,x:0}} exit={reduceMotion?undefined:{opacity:0,x:-25}} transition={{duration:.35}}>
                <ProjectVisual project={project}/>
                <div className="project-info">
                  <div className="project-info-top"><span className="project-category">{project.category}</span><span className="project-number">{project.number} <i>/ 0{projects.length}</i></span></div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="stack-list">{project.stack.map(item=><span key={item}>{item}</span>)}</div>
                  <div className="project-links"><a href={project.github} target="_blank" rel="noreferrer"><Github size={16}/> Repository <ArrowUpRight size={13}/></a>{project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live preview <ExternalLink size={14}/></a> : <span className="no-live">Demo link can be added</span>}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="slider-controls"><div className="slider-progress">{projects.map((p,i)=><button key={p.number} className={i===activeProject?'progress-segment active':'progress-segment'} onClick={()=>setActiveProject(i)} aria-label={`Show project ${i+1}: ${p.name}`}><span/></button>)}</div><div className="slider-counter"><b>0{activeProject+1}</b><span> / 0{projects.length}</span></div><div className="slider-arrows"><button onClick={()=>changeProject(-1)} aria-label="Previous project"><ChevronLeft/></button><button onClick={()=>changeProject(1)} aria-label="Next project"><ChevronRight/></button></div></div>
        </div>
        <p className="project-note"><Sparkles size={14}/> Project previews are custom visual representations. Add verified repository and live-demo URLs before publishing.</p>
      </section>

      <section className="about-section section-wrap section-pad" id="about">
        <div className="section-heading">
          <div><p className="eyebrow"><span className="section-index">02 /</span> A LITTLE ABOUT ME</p><h2>Curious by nature.<br/><span className="muted-heading">Builder by practice.</span></h2></div>
          <p className="section-aside">I enjoy taking a problem from a rough idea to a working product — understanding the users, shaping the system, and shipping the details.</p>
        </div>
        <div className="about-grid">
          <div className="about-statement"><span className="quote-mark">“</span><p>Good software is more than code. It’s a clear answer to a real problem.</p><div className="signature-line"><span/> PRATHAMESH JADHAV</div></div>
          <div className="skills-grid">{skills.map((skill,i)=><motion.div className="skill-card" key={skill.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.45,delay:i*.07}}><div className="skill-card-top"><span className="skill-icon"><skill.icon size={18}/></span><span className="skill-card-index">0{i+1}</span></div><h3>{skill.title}</h3><p>{skill.items}</p><div className="skill-card-arrow"><ArrowUpRight size={16}/></div></motion.div>)}</div>
        </div>
      </section>

      <section className="experience-section section-wrap section-pad" id="experience">
        <div className="section-heading">
          <div><p className="eyebrow"><span className="section-index">03 /</span> THE JOURNEY SO FAR</p><h2>Work in progress.<br/><span className="muted-heading">Progress that counts.</span></h2></div>
          <p className="section-aside">A mix of product coordination, technical support, operations, and hands-on development.</p>
        </div>
        <div className="experience-list">{experience.map((item,i)=><motion.article className="experience-item" key={item.role} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.4,delay:i*.06}}><div className="experience-date">{item.date}</div><div className="experience-marker"><span/></div><div className="experience-detail"><div className="experience-title-row"><div><h3>{item.role}</h3><p>{item.company}</p></div><ArrowUpRight size={18}/></div><p className="experience-description">{item.detail}</p></div></motion.article>)}</div>
      </section>

      <section className="approach-section section-wrap section-pad">
        <div className="approach-card">
          <div className="approach-glow" />
          <div className="approach-content"><p className="eyebrow"><span className="section-index">04 /</span> HOW I LIKE TO WORK</p><h2>Make it useful.<br/>Make it solid.<br/><span>Make it better.</span></h2><p>I value clear communication, practical problem-solving, and steady improvement — whether I’m shaping an API, refining a user flow, or exploring an AI workflow.</p><a href="#contact" className="button button-primary">Start a conversation <ArrowUpRight size={16}/></a></div>
          <div className="approach-visual"><div className="approach-ring ring-a"/><div className="approach-ring ring-b"/><div className="approach-ring ring-c"/><div className="approach-center"><Workflow size={38}/><span>BUILD / LEARN / SHIP</span></div><span className="approach-tag tag-one"><Zap size={13}/> PRACTICAL</span><span className="approach-tag tag-two"><Layers3 size={13}/> SCALABLE</span><span className="approach-tag tag-three"><Sparkles size={13}/> CURIOUS</span></div>
        </div>
      </section>

      <section className="contact-section section-wrap section-pad" id="contact">
        <div className="contact-top"><p className="eyebrow"><span className="section-index">05 /</span> HAVE SOMETHING IN MIND?</p><span className="contact-open"><i/> OPEN TO OPPORTUNITIES</span></div>
        <h2>Let’s build<br/><span>something good.</span></h2>
        <p className="contact-description">Have a role, a product idea, or an interesting problem? I’d be glad to hear about it.</p>
        <a className="contact-email" href="mailto:jadhavpratham1822@gmail.com">jadhavpratham1822@gmail.com <MoveUpRight size={21}/></a>
        <div className="contact-links"><a href="https://linkedin.com/in/prathamesh-jadhav-991523251" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={13}/></a><a href="https://github.com/tank-21" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a><a href="mailto:jadhavpratham1822@gmail.com"><Mail size={17}/> Email <ArrowUpRight size={13}/></a></div>
      </section>
    </main>
    <footer className="site-footer section-wrap"><a className="footer-brand" href="#home">P<span>.</span></a><span>DESIGNED & BUILT BY PRATHAMESH JADHAV</span><a href="#home">BACK TO TOP ↑</a><span className="footer-year">© {new Date().getFullYear()}</span></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
