'use client';

import {motion, useMotionValue, useScroll, useSpring, useTransform} from 'framer-motion';
import {
  ArrowDown, ArrowUpRight, Award, BriefcaseBusiness, Check, ChevronRight, CircleDot,
  Code2, Database, Download, Github, GraduationCap, Linkedin, Mail, MapPin, Menu,
  Network, Server, ShieldCheck, Terminal, TestTube2, X,
} from 'lucide-react';
import {useState, type MouseEvent, type ReactNode} from 'react';
import {certifications, experience, profile, projects, skillGroups} from './content';

const fade = {initial: {opacity: 0, y: 24}, whileInView: {opacity: 1, y: 0}, viewport: {once: true, margin: '-80px'}, transition: {duration: .65}};
const nav = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];
const resumeUrl = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/Ram-duggirala-Resume.pdf`;

function Container({children, className = ''}: {children: ReactNode; className?: string}) {
  return <div className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

function Eyebrow({children}: {children: ReactNode}) {
  return <p className="mono mb-5 flex items-center gap-2 text-xs uppercase tracking-[.2em] text-[#38e8d1]"><span className="h-px w-7 bg-[#38e8d1]" />{children}</p>;
}

function SectionTitle({eyebrow, title, copy}: {eyebrow: string; title: string; copy?: string}) {
  return <motion.div {...fade} className="mb-12 grid gap-5 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><Eyebrow>{eyebrow}</Eyebrow><div><h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-5xl lg:text-7xl">{title}</h2>{copy && <p className="mt-5 max-w-2xl text-base leading-7 text-[#8b9ba7] sm:text-lg">{copy}</p>}</div></motion.div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 glass"><Container className="flex h-16 items-center justify-between"><a href="#home" className="mono flex items-center gap-3 text-sm font-bold"><span className="grid size-8 place-items-center rounded-lg border border-[#38e8d1]/25 bg-[#38e8d1]/8 text-[#38e8d1]">RD</span><span className="hidden sm:inline">RAMARAO.D</span></a><nav className="hidden items-center gap-7 lg:flex">{nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-[#8b9ba7] transition hover:text-white">{item}</a>)}</nav><div className="hidden items-center gap-3 sm:flex"><span className="mono flex items-center gap-2 rounded-full border border-[#38e8d1]/15 bg-[#38e8d1]/5 px-3 py-1.5 text-[11px] text-[#38e8d1]"><span className="size-1.5 rounded-full bg-[#38e8d1] shadow-[0_0_10px_#38e8d1]" />AVAILABLE</span><a href={resumeUrl} download className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium transition hover:border-[#38e8d1]/40 hover:bg-[#38e8d1]/5">Resume</a></div><button onClick={() => setOpen(!open)} className="rounded-lg border border-white/10 p-2 lg:hidden" aria-label="Toggle navigation">{open ? <X size={20} /> : <Menu size={20} />}</button></Container>{open && <div className="border-t border-white/8 bg-[#070b11] p-5 lg:hidden">{nav.map((item) => <a onClick={() => setOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="block border-b border-white/8 py-3 text-[#a9b5bd]">{item}</a>)}</div>}</header>;
}

function LegacySecurityConsole() {
  const rows = [['PERIMETER', 'FortiGate 200G', 'ENFORCED'], ['TELEMETRY', 'Splunk SIEM', 'STREAMING'], ['ANALYSIS', 'Network behavior', 'ACTIVE'], ['BACKEND', 'API security', 'HARDENED']];
  return <motion.div initial={{opacity: 0, scale: .96, y: 20}} animate={{opacity: 1, scale: 1, y: 0}} transition={{delay: .25, duration: .8}} className="glow relative overflow-hidden rounded-2xl border border-white/10 bg-[#091019] p-1"><div className="flex items-center justify-between border-b border-white/8 px-4 py-3"><div className="flex gap-1.5"><i className="size-2 rounded-full bg-[#ff6b6b]/70"/><i className="size-2 rounded-full bg-[#ffd43b]/70"/><i className="size-2 rounded-full bg-[#38e8d1]/70"/></div><span className="mono text-[10px] tracking-[.2em] text-[#637581]">SECURITY_OVERVIEW</span><ShieldCheck size={15} className="text-[#38e8d1]" /></div><div className="relative overflow-hidden p-5 sm:p-7"><div className="scan-line pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38e8d1]/70 to-transparent"/><div className="mb-8 flex items-end justify-between"><div><p className="mono text-[10px] uppercase tracking-[.2em] text-[#637581]">System posture</p><p className="mt-2 text-3xl font-semibold tracking-tight">Defense in depth</p></div><div className="relative grid size-16 place-items-center"><span className="pulse-ring absolute inset-0 rounded-full border border-[#38e8d1]/30"/><ShieldCheck className="text-[#38e8d1]" size={27}/></div></div><div className="space-y-2">{rows.map(([label, value, status], i) => <motion.div initial={{opacity:0,x:-12}} animate={{opacity:1,x:0}} transition={{delay:.55+i*.11}} key={label} className="grid grid-cols-[.8fr_1fr_auto] items-center gap-3 rounded-xl border border-white/7 bg-white/[.025] px-3 py-3.5"><span className="mono text-[9px] tracking-[.16em] text-[#637581]">{label}</span><span className="text-xs text-[#c9d2d8] sm:text-sm">{value}</span><span className="mono text-[9px] text-[#38e8d1]">{status}</span></motion.div>)}</div><div className="mt-5 flex items-center justify-between border-t border-white/7 pt-4 text-[10px] text-[#637581]"><span className="mono">MONITOR • DETECT • RESPOND</span><span className="flex items-center gap-1.5 text-[#38e8d1]"><CircleDot size={10}/> LIVE</span></div></div></motion.div>;
}

function SecurityConsole() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-.5, .5], [12, -12]), {stiffness: 110, damping: 18});
  const rotateY = useSpring(useTransform(pointerX, [-.5, .5], [-15, 15]), {stiffness: 110, damping: 18});

  const move = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - .5);
    pointerY.set((event.clientY - rect.top) / rect.height - .5);
  };

  const reset = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const nodes = [
    ['EDGE', '10%', '18%'], ['SIEM', '78%', '16%'], ['IDS', '88%', '54%'],
    ['API', '70%', '84%'], ['DB', '20%', '82%'], ['SOC', '3%', '52%'],
  ];

  return <motion.div initial={{opacity:0, scale:.92, y:24}} animate={{opacity:1, scale:1, y:0}} transition={{delay:.2, duration:.9}} onMouseMove={move} onMouseLeave={reset} className="core-stage relative mx-auto aspect-square w-full max-w-[570px] cursor-crosshair select-none" aria-label="Interactive three-dimensional network security visualization">
    <div className="absolute inset-[7%] rounded-full bg-[#38e8d1]/5 blur-3xl" />
    <motion.div style={{rotateX, rotateY, transformStyle:'preserve-3d'}} className="relative h-full w-full">
      <div className="core-halo absolute inset-[12%] rounded-full" />
      <div className="orbit orbit-one absolute inset-[14%] rounded-full border border-[#38e8d1]/32" />
      <div className="orbit orbit-two absolute inset-[20%] rounded-full border border-[#5b8cff]/28" />
      <div className="orbit orbit-three absolute inset-[26%] rounded-full border border-white/15" />
      <div className="core-grid-sphere absolute inset-[27%] rounded-full" />
      <div className="core-shell absolute inset-[34%] grid place-items-center rounded-full">
        <div className="text-center [transform:translateZ(72px)]">
          <ShieldCheck className="mx-auto text-[#06100f]" size={42} strokeWidth={1.6}/>
          <strong className="mono mt-3 block text-[11px] tracking-[.2em] text-[#06100f]">ZERO TRUST</strong>
        </div>
      </div>
      <svg className="absolute inset-[7%] h-[86%] w-[86%] overflow-visible opacity-55 [transform:translateZ(-30px)]" viewBox="0 0 100 100" aria-hidden>
        <g fill="none" stroke="url(#networkGradient)" strokeWidth=".35">
          <path d="M10 20L50 50 82 18M50 50L90 55 72 85M50 50L20 82 5 52M10 20L5 52M82 18L90 55M72 85L20 82" />
          <circle cx="50" cy="50" r="33" strokeDasharray="1.5 2.5" />
        </g>
        <defs><linearGradient id="networkGradient"><stop stopColor="#38e8d1"/><stop offset="1" stopColor="#5b8cff"/></linearGradient></defs>
      </svg>
      {nodes.map(([label,left,top], index) => <div key={label} className="core-node absolute" style={{left, top, transform:`translateZ(${index%2 ? 45 : 22}px)`}}><span className="core-node-dot"/><span className="mono core-node-label">{label}</span></div>)}
      <div className="absolute left-[8%] top-[27%] rounded-lg border border-white/10 bg-[#071018]/80 px-3 py-2 backdrop-blur-md [transform:translateZ(62px)]"><span className="mono text-[9px] tracking-widest text-[#6b7d88]">PACKETS</span><strong className="mt-1 block text-sm text-[#38e8d1]">MONITORED</strong></div>
      <div className="absolute bottom-[17%] right-[3%] rounded-lg border border-white/10 bg-[#071018]/80 px-3 py-2 backdrop-blur-md [transform:translateZ(82px)]"><span className="mono text-[9px] tracking-widest text-[#6b7d88]">POSTURE</span><strong className="mt-1 block text-sm text-[#38e8d1]">HARDENED</strong></div>
    </motion.div>
    <div className="absolute inset-x-[12%] bottom-[3%] flex items-center justify-between rounded-xl border border-white/8 bg-[#071018]/75 px-4 py-3 backdrop-blur-xl"><span className="mono text-[9px] tracking-[.18em] text-[#6e808b]">MOVE CURSOR / INSPECT</span><span className="mono flex items-center gap-2 text-[9px] text-[#38e8d1]"><i className="size-1.5 rounded-full bg-[#38e8d1] shadow-[0_0_10px_#38e8d1]"/>SYSTEM LIVE</span></div>
  </motion.div>;
}

function Hero() {
  return <section id="home" className="relative min-h-screen overflow-hidden pt-16"><div className="cyber-grid absolute inset-0"/><div className="noise pointer-events-none absolute inset-0"/><div className="absolute left-[10%] top-24 h-80 w-80 rounded-full bg-[#38e8d1]/5 blur-[120px]"/><div className="absolute right-0 top-[18%] h-[430px] w-[430px] rounded-full bg-[#5b8cff]/7 blur-[140px]"/><Container className="relative grid min-h-[calc(100vh-64px)] items-center gap-14 py-20 lg:grid-cols-[1.12fr_.88fr]"><motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.75}}><div className="mono mb-7 flex items-center gap-3 text-xs uppercase tracking-[.18em] text-[#38e8d1]"><span className="h-px w-9 bg-[#38e8d1]"/>Network Security Engineer</div><h1 className="text-gradient max-w-4xl text-[clamp(3.6rem,8vw,7.8rem)] font-semibold leading-[.82] tracking-[-.07em]">Ramarao<br/>Duggirala.</h1><p className="mt-7 max-w-2xl text-base font-medium leading-7 text-[#d0d9de] sm:text-lg">Network Security Engineer <span className="text-[#52636e]">|</span> Cybersecurity Specialist <span className="text-[#52636e]">|</span> Backend Engineer</p><p className="mt-4 max-w-xl text-lg leading-8 text-[#98a7b1]">Securing Networks. Defending Infrastructure. Engineering Reliable Systems.</p><p className="mt-4 max-w-xl text-sm leading-6 text-[#71818c]">Approximately 2 years of combined experience protecting enterprise networks and production infrastructure, supported by backend engineering, application security, and DevOps expertise.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#projects" className="group flex items-center gap-2 rounded-xl bg-[#38e8d1] px-5 py-3.5 text-sm font-semibold text-[#04100f] transition hover:bg-[#72f5e4]">View projects <ChevronRight size={17} className="transition group-hover:translate-x-1"/></a><a href="#contact" className="flex items-center gap-2 rounded-xl border border-white/12 bg-white/[.025] px-5 py-3.5 text-sm font-semibold transition hover:border-white/25 hover:bg-white/[.05]">Contact me <Mail size={16}/></a></div><div className="mt-12 grid max-w-xl grid-cols-3 border-y border-white/8 py-5"><div><strong className="text-2xl font-semibold">~2</strong><p className="mt-1 text-xs text-[#71818c]">Years in IT</p></div><div className="border-l border-white/8 pl-5"><strong className="text-2xl font-semibold">3</strong><p className="mt-1 text-xs text-[#71818c]">Core disciplines</p></div><div className="border-l border-white/8 pl-5"><strong className="text-2xl font-semibold">CEH</strong><p className="mt-1 text-xs text-[#71818c]">Certified</p></div></div></motion.div><SecurityConsole /></Container><a href="#about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[.18em] text-[#637581] lg:flex">Explore <ArrowDown size={14} className="animate-bounce"/></a></section>;
}

const pillars = [
  {icon: ShieldCheck, title: 'Network Security Engineering', text: 'Enterprise defense architecture, network segmentation, firewall governance, SIEM monitoring, vulnerability management, and incident response.'},
  {icon: Code2, title: 'Backend Engineering', text: 'Secure APIs and application services using Python, FastAPI, Django, PostgreSQL, JWT, and role-based access control.'},
  {icon: Server, title: 'Infrastructure & DevOps', text: 'Production Linux administration, Apache deployments, network visibility, managed switching, and resilient recovery.'},
];

function About() {
  return <section id="about" className="border-t border-white/7 py-24 sm:py-32"><Container><SectionTitle eyebrow="Profile / 01" title="Network security first. Secure engineering end to end." copy="I am a Network Security Engineer focused on protecting enterprise networks, strengthening infrastructure, and improving security operations. Backend engineering, application security, and DevOps extend that foundation from the packet level through APIs and production systems."/><div className="grid gap-4 lg:grid-cols-3">{pillars.map((pillar, i) => <motion.article {...fade} transition={{duration:.6, delay:i*.08}} key={pillar.title} className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0a1017] p-7 transition hover:-translate-y-1 hover:border-[#38e8d1]/25"><div><div className="mb-12 grid size-11 place-items-center rounded-xl border border-[#38e8d1]/20 bg-[#38e8d1]/7 text-[#38e8d1]"><pillar.icon size={21}/></div><h3 className="text-xl font-semibold tracking-tight">{pillar.title}</h3><p className="mt-3 text-sm leading-6 text-[#84949f]">{pillar.text}</p><div className="absolute bottom-0 left-0 h-px w-0 bg-[#38e8d1] transition-all duration-500 group-hover:w-full"/></div></motion.article>)}</div><motion.div {...fade} className="mt-5 grid gap-5 rounded-2xl border border-white/8 bg-[#080d13] p-6 sm:p-8 lg:grid-cols-[.7fr_1.3fr]"><div><p className="mono text-xs uppercase tracking-[.18em] text-[#38e8d1]">Operating principle</p><h3 className="mt-4 text-2xl font-semibold tracking-tight">Prevent → Protect → Detect → Respond → Recover → Improve</h3></div><p className="text-base leading-7 text-[#84949f]">I approach network security as a continuous system: controls reduce exposure, telemetry creates visibility, detection finds abnormal behavior, and disciplined response turns incidents into measurable improvements.</p></motion.div></Container></section>;
}

function Experience() {
  const [active, setActive] = useState(0);
  return <section id="experience" className="border-y border-white/7 bg-[#070b11] py-24 sm:py-32"><Container><SectionTitle eyebrow="Experience / 02" title="Progression from code to cyber defense." copy="Approximately two years of combined internship and full-time experience at Quantum AI Global."/><div className="grid gap-5 lg:grid-cols-[.38fr_1fr]"> <div className="space-y-2">{experience.map((job, i) => <button onClick={() => setActive(i)} key={job.role} className={`w-full rounded-xl border p-5 text-left transition ${active===i?'border-[#38e8d1]/30 bg-[#38e8d1]/7':'border-white/8 bg-[#0a1017] hover:border-white/15'}`}><span className="mono text-[10px] text-[#657680]">{job.period}</span><strong className="mt-2 block text-sm">{job.role}</strong><span className="mt-1 block text-xs text-[#7e8d97]">{job.company}</span></button>)}</div><motion.article key={active} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="rounded-2xl border border-white/8 bg-[#0a1017] p-6 sm:p-9"><div className="flex flex-wrap items-start justify-between gap-5"><div><p className="mono text-xs uppercase tracking-[.16em] text-[#38e8d1]">{experience[active].company}</p><h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{experience[active].role}</h3><p className="mt-2 flex items-center gap-2 text-sm text-[#71818c]"><MapPin size={14}/>{experience[active].location}</p></div><BriefcaseBusiness className="text-[#38e8d1]"/></div><p className="mt-7 max-w-3xl text-base leading-7 text-[#99a6af]">{experience[active].summary}</p><div className="mt-8 grid gap-3">{experience[active].highlights.map((item) => <div key={item} className="flex gap-3 rounded-xl border border-white/7 bg-white/[.018] p-4 text-sm leading-6 text-[#b5c0c7]"><Check size={16} className="mt-1 shrink-0 text-[#38e8d1]"/>{item}</div>)}</div></motion.article></div></Container></section>;
}

const skillIcons = [ShieldCheck, Code2, Terminal, Server, Database, TestTube2];
function Skills() {
  return <section id="skills" className="py-24 sm:py-32"><Container><SectionTitle eyebrow="Technical system / 03" title="One engineer. Three connected disciplines." copy="A practical toolkit spanning security operations, backend development, and the infrastructure that connects them."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{skillGroups.map((group, index) => {const Icon=skillIcons[index]; return <motion.article {...fade} transition={{duration:.55, delay:(index%3)*.06}} whileHover={{y:-5}} key={group.title} className="rounded-2xl border border-white/8 bg-[#0a1017] p-6"><div><div className="flex items-center justify-between"><div className="grid size-10 place-items-center rounded-lg bg-[#38e8d1]/8 text-[#38e8d1]"><Icon size={19}/></div><span className="mono text-[10px] text-[#5f707b]">CAPABILITY</span></div><h3 className="mt-8 text-xl font-semibold">{group.title}</h3><div className="mt-5 h-1 overflow-hidden rounded-full bg-white/7"><motion.div initial={{width:0}} whileInView={{width:`${group.level}%`}} viewport={{once:true}} transition={{duration:1, ease:'easeOut'}} className="h-full bg-gradient-to-r from-[#38e8d1] to-[#5b8cff]"/></div><div className="mt-6 flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="rounded-md border border-white/8 bg-white/[.025] px-2.5 py-1.5 text-xs text-[#91a0aa]">{skill}</span>)}</div></div></motion.article>})}</div></Container></section>;
}

function Projects() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Cybersecurity', 'Backend', 'Full Stack'];
  const visible = filter==='All' ? projects : projects.filter(p=>p.category.includes(filter));
  return <section id="projects" className="border-y border-white/7 bg-[#070b11] py-24 sm:py-32"><Container><SectionTitle eyebrow="Selected work / 04" title="Systems built for real operational needs." copy="Project names are supplied; cards marked editable intentionally keep unverified technical details as placeholders until confirmed."/><div className="mb-8 flex flex-wrap gap-2">{filters.map(item=><button onClick={()=>setFilter(item)} key={item} className={`rounded-lg px-4 py-2 text-sm transition ${filter===item?'bg-[#38e8d1] font-medium text-[#04100f]':'border border-white/8 text-[#8d9aa3] hover:border-white/20'}`}>{item}</button>)}</div><motion.div layout className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{visible.map((project, i)=><motion.article layout initial={{opacity:0}} animate={{opacity:1}} whileHover={{y:-6}} key={project.name} className="group flex min-h-[360px] flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#0a1017] p-6 transition hover:border-[#38e8d1]/25"><div className="flex items-start justify-between"><span className="mono text-[10px] uppercase tracking-[.16em] text-[#38e8d1]">{project.category}</span><span className="mono text-[10px] text-[#5f707b]">{String(i+1).padStart(2,'0')}</span></div><h3 className="mt-12 text-2xl font-semibold leading-tight tracking-[-.025em]">{project.name}</h3><p className="mt-4 text-sm leading-6 text-[#84949f]">{project.description}</p><div className="mt-auto pt-7"><div className="mb-4 flex flex-wrap gap-2">{project.stack.map(item=><span key={item} className="rounded-md bg-white/[.04] px-2 py-1 text-[11px] text-[#81909a]">{item}</span>)}</div><div className="flex items-center justify-between border-t border-white/7 pt-4"><span className="text-[11px] text-[#63747f]">{project.status}</span><ArrowUpRight size={17} className="text-[#52636e] transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#38e8d1]"/></div></div></motion.article>)}</motion.div></Container></section>;
}

function Credentials() {
  return <section className="py-24 sm:py-32"><Container><div className="grid gap-5 lg:grid-cols-2"><motion.div {...fade} className="rounded-2xl border border-white/8 bg-[#0a1017] p-7 sm:p-9"><div className="flex items-center justify-between"><Eyebrow>Certifications / 05</Eyebrow><Award className="text-[#38e8d1]"/></div><h2 className="text-3xl font-semibold tracking-tight">Security knowledge, independently validated.</h2><div className="mt-8 space-y-3">{certifications.map((cert,i)=><div key={cert.name} className={`flex items-center gap-4 rounded-xl border p-4 ${i===0?'border-[#38e8d1]/25 bg-[#38e8d1]/5':'border-white/7'}`}><span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 text-xs">{i===0?<ShieldCheck size={16} className="text-[#38e8d1]"/>:i+1}</span><div><strong className="text-sm">{cert.name}</strong><p className="mt-1 text-xs text-[#71818c]">{cert.issuer}</p></div></div>)}</div></motion.div><motion.div {...fade} transition={{duration:.65,delay:.08}} className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#0a1017] p-7 sm:p-9"><div className="absolute -right-16 -top-16 size-64 rounded-full border border-[#5b8cff]/10"/><GraduationCap className="text-[#5b8cff]"/><p className="mono mt-10 text-xs uppercase tracking-[.16em] text-[#5b8cff]">Education / 06</p><h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">B.Tech in Computer Science & Engineering</h2><p className="mt-3 text-lg text-[#9aa7af]">Data Science</p><div className="mt-12 border-t border-white/8 pt-6"><strong className="block">Chalapathi Institute of Engineering and Technology</strong><div className="mt-3 flex flex-wrap gap-5 text-sm text-[#71818c]"><span>CIET · Autonomous</span><span>Graduated 2025</span><span>CGPA 7.3</span></div></div></motion.div></div></Container></section>;
}

function Contact() {
  return <section id="contact" className="relative overflow-hidden border-t border-white/7 py-24 sm:py-36"><div className="cyber-grid absolute inset-0"/><div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#38e8d1]/8 blur-[130px]"/><Container className="relative text-center"><motion.div {...fade}><p className="mono text-xs uppercase tracking-[.2em] text-[#38e8d1]">Secure systems start with a conversation</p><h2 className="mx-auto mt-6 max-w-5xl text-[clamp(3rem,8vw,7rem)] font-semibold leading-[.9] tracking-[-.065em]">Let’s build something resilient.</h2><p className="mx-auto mt-7 max-w-xl text-base leading-7 text-[#8998a2]">Open to Network Security Engineer opportunities, with supporting expertise in backend engineering, application security, and DevOps.</p><div className="mt-10 flex flex-wrap justify-center gap-3"><a href={`mailto:${profile.email}`} className="flex items-center gap-2 rounded-xl bg-[#38e8d1] px-5 py-3.5 text-sm font-semibold text-[#04100f]"><Mail size={17}/>Email me</a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-white/12 px-5 py-3.5 text-sm font-semibold hover:bg-white/5"><Linkedin size={17}/>LinkedIn</a><a href={resumeUrl} download className="flex items-center gap-2 rounded-xl border border-white/12 px-5 py-3.5 text-sm font-semibold hover:bg-white/5"><Download size={17}/>Resume</a>{profile.github==='#'?<span title="Replace the GitHub placeholder in app/content.ts" className="flex cursor-not-allowed items-center gap-2 rounded-xl border border-dashed border-white/10 px-5 py-3.5 text-sm text-[#62737e]"><Github size={17}/>GitHub · add URL</span>:<a href={profile.github} className="flex items-center gap-2 rounded-xl border border-white/12 px-5 py-3.5 text-sm"><Github size={17}/>GitHub</a>}</div></motion.div></Container></section>;
}

export default function Home() {
  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress, {stiffness: 100, damping: 30, restDelta: .001});
  return <><motion.div style={{scaleX}} className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-[#38e8d1]"/><Header/><main><Hero/><About/><Experience/><Skills/><Projects/><Credentials/><Contact/></main><footer className="border-t border-white/7 py-7"><Container className="flex flex-col gap-3 text-xs text-[#62727d] sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Ramarao Duggirala</p><p className="mono">NETWORK SECURITY • BACKEND • INFRASTRUCTURE</p></Container></footer></>;
}
