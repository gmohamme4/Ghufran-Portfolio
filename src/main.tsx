import React from 'react';
import ReactDOM from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Github, Mail, Code2, Cloud, Database, Layers3, Terminal, BriefcaseBusiness, GraduationCap, Sparkles } from 'lucide-react';
import './style.css';
import Navbar from "./components/Navbar";


type Project = {
  name: string;
  kind: string;
  summary: string;
  stack: string[];
  category: 'Web' | 'Mobile' | 'AI / Data';
  glyph: string;
  tone: string;
  link?: string;
  demo?: string;
  github?: string;
};
const projects:Project[] = [
{
  name: 'Social Network',
  kind: 'Full-Stack Social Platform',
  summary: 'A social network with authentication, user profiles, followers, posts, groups, notifications and real-time messaging.',
  stack: ['React', 'Go', 'SQLite', 'GraphQL', 'WebSockets'],
  category: 'Web',
  glyph: '◎',
  tone: 'mint',
  demo: 'https://social-network-seven-phi.vercel.app',
  github: 'https://github.com/gmohamme4/Social-Network'
   },
  {name:'GraphQL Dashboard',kind:'Developer Profile Dashboard',summary:'A profile dashboard with authentication, data queries and interactive learning statistics.',stack:['React','TypeScript','Tailwind','GraphQL','JWT'],category:'Web',glyph:'⌘',tone:'violet',link:'https://f1-reboot01.netlify.app/'},
  {name:'Rule-Based AI Chatbot',kind:'University FAQ Assistant',summary:'A Python chatbot for university FAQs using IF–THEN rules, pattern matching, regular expressions and fallback responses.',stack:['Python','Regex','NLP','Rule-Based AI'],category:'AI / Data',glyph:'✳',tone:'amber',link:'https://chatbot-university.streamlit.app/'},
];
const skills=[{name:'Frontend',icon:Layers3,items:'React · TypeScript · JavaScript · HTML · CSS · Tailwind'},{name:'Backend',icon:Database,items:'Go · Python · Java · SQL · GraphQL · WebSockets'},{name:'Mobile',icon:Cloud,items:'Flutter · Dart · Responsive applications'},{name:'Tools & Workflow',icon:Terminal,items:'Git · GitHub · Docker · SQLite · Linux · Figma'}];
function App(){
 const [filter,setFilter]=React.useState('All');
 const visible=filter==='All'?projects:projects.filter(p=>p.category===filter);
 return <>
 <Navbar />
 <main><section className="hero shell" id="home"><div className="hero-copy"><div className="eyebrow"><span className="pulse"/> FULL-STACK DEVELOPER <span className="eyebrow-line"/></div><h1>Building digital<br/>ideas into <span className="gradient-word">reality.</span></h1><p className="intro">Hey, I'm <strong>Ghufran</strong> — a full-stack developer experienced in frontend development, technical mentoring, and building user-focused software.</p><div className="actions"><a href="#projects" className="btn primary">Explore my work <ArrowUpRight size={18}/></a><a href="#about" className="btn outline">More about me <ArrowDown size={18}/></a></div><div className="hero-meta"><span><span className="little-star">✳</span> Based in Bahrain</span><span><span className="little-star">✳</span> Full-stack development</span></div></div><div className="hero-art" aria-label="Abstract developer portfolio artwork"><div className="orb orb-a"/><div className="orb orb-b"/><div className="art-frame"><div className="frame-top"><span className="traffic"><i/><i/><i/></span><span>portfolio.tsx</span><span>⌁</span></div><div className="code-lines"><div><b>01</b><span className="purple">const</span> developer = {'{'}</div><div><b>02</b>&nbsp; name: <span className="lime">'Ghufran'</span>,</div><div><b>03</b>&nbsp; focus: <span className="lime">'Full Stack'</span>,</div><div><b>04</b>&nbsp; passion: <span className="lime">'Building'</span>,</div><div><b>05</b>&nbsp; status: <span className="lime">'Creating'</span></div><div><b>06</b>{'}'};</div></div><div className="art-tag"><Sparkles size={17}/> Design meets development</div></div><div className="floating-card"><Code2 size={20}/><span>Turning ideas<br/><strong>into products.</strong></span></div></div></section>
 <section className="strip"><div className="shell striprow"><span>FULL-STACK DEVELOPMENT</span><span>✳</span><span>CREATIVE PROBLEM SOLVING</span><span>✳</span><span>WEB & MOBILE</span><span>✳</span><span>MOBILE APPLICATIONS</span></div></section>
 <section className="section shell about" id="about"><div><div className="section-label">01 / INTRODUCTION</div><h2>A little more <br/>about <em>me.</em></h2></div><div className="about-text"><p>I’m a Computer Science graduate from the University of Bahrain, with full-stack development training at Reboot Coding Institute. I enjoy solving problems and building reliable, user-focused software.</p><p>My experience includes frontend work using React and TypeScript, backend projects with Go, technical mentoring, and collaborating through code reviews and Git workflows.</p><a className="textlink" href="https://github.com/gmohamme4" target="_blank" rel="noreferrer">Visit my GitHub <ArrowUpRight size={18}/></a></div></section>
 <section className="section projects-section" id="projects"><div className="shell"><div className="section-label">02 / SELECTED WORK</div><div className="heading-row"><div><h2>Featured <em>projects.</em></h2><p className="sub">A selection of university, Reboot01, and independent projects.</p></div><div className="project-count">0{projects.length} PROJECTS</div></div><div className="filters">{['All','Web','AI / Data'].map(f=><button key={f} className={filter===f?'active':''} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className="project-grid">{visible.map((p, i) => {
  const href = p.demo || p.link;
  const content = <>
    <div className={'project-preview ' + p.tone}>
      <div className="preview-grid" />
      <div className="preview-label">{p.kind}</div>
      <div className="project-glyph">{p.glyph}</div>
      <span className={href ? 'project-arrow' : 'project-arrow muted'} aria-hidden="true">
        {href ? <ArrowUpRight size={21} /> : <Code2 size={19} />}
      </span>
    </div>
    <div className="project-body">
      <div className="project-header"><h3>{p.name}</h3><span>0{i + 1}</span></div>
      <p>{p.summary}</p>
      <div className="tags">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
    </div>
  </>;
  return <article className="project" key={p.name}>
    {href ? <a className="project-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={'Open ' + p.name}>
      {content}
    </a> : content}
  </article>;
})}</div><div className="note">More Reboot01 projects can be added after their repository information is shared. Reboot01 requires sign-in to view the complete project list.</div></div></section>
 <section className="section shell" id="skills"><div className="section-label">03 / TOOLKIT</div><h2>My technical <em>toolkit.</em></h2><p className="sub">Technologies I’ve used across my work and learning.</p><div className="skill-grid">{skills.map(s=><div className="skill" key={s.name}><div className="skill-icon"><s.icon size={23}/></div><h3>{s.name}</h3><p>{s.items}</p></div>)}</div></section>
 <section className="section experience-section" id="experience"><div className="shell"><div className="section-label">04 / MY JOURNEY</div><h2>Experience & <em>education.</em></h2><div className="timeline"><div className="timeline-row"><span className="year">2026</span><span className="timeline-icon"><BriefcaseBusiness size={20}/></span><div><div className="tiny">PROFESSIONAL EXPERIENCE</div><h3>Tech Assistant</h3><p>Reboot Coding Institute · July 2026 · Mentoring, debugging, Git/GitHub, Linux and algorithms.</p></div></div><div className="timeline-row"><span className="year">2026</span><span className="timeline-icon"><BriefcaseBusiness size={20}/></span><div><div className="tiny">INTERNSHIP</div><h3>Frontend Developer Trainee</h3><p>Raincode · May–July 2026 · React, TypeScript, Tailwind CSS, pull requests and team collaboration.</p></div></div><div className="timeline-row" id="education"><span className="year">2026</span><span className="timeline-icon"><GraduationCap size={20}/></span><div><div className="tiny">EDUCATION</div><h3>BSc Computer Science</h3><p>University of Bahrain · 2022–2026.</p></div></div><div className="timeline-row"><span className="year">2024–26</span><span className="timeline-icon"><GraduationCap size={20}/></span><div><div className="tiny">EDUCATION</div><h3>Full-Stack Development Diploma</h3><p>Reboot Coding Institute.</p></div></div></div></div></section>
 <section className="contact-section" id="contact"><div className="shell contact-inner"><div className="section-label">05 / WHAT'S NEXT?</div><h2>Have something<br/><em>in mind?</em></h2><p>I'm always excited to connect about development, collaboration, and new opportunities.</p><div className="contact-actions"><a className="btn outline" href="/GhufranMohammed_CV.pdf" download>Download CV <ArrowDown size={18}/></a><a className="btn primary" href="https://github.com/gmohamme4" target="_blank" rel="noreferrer">My GitHub <Github size={18}/></a><a className="btn outline" href="mailto:Ghufran112004@gmail.com">Get in touch <Mail size={18}/></a></div><span className="contact-note">Explore more projects on GitHub and Reboot01.</span></div></section></main>
 <footer><div className="shell footer-inner"><a href="#home" className="brand">ghufran<span className="brand-dot">.</span></a><p>Built with curiosity and code.</p><a href="#home">Back to top ↑</a></div></footer>
 </>;
}
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
