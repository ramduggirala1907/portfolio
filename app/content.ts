export const profile = {
  name: 'Ramarao Duggirala',
  email: 'ramduggirala2003@gmail.com',
  phone: '+91 7032676455',
  location: 'Guntur, Andhra Pradesh, India',
  linkedin: 'https://www.linkedin.com/in/ramarao-duggirala-567526282/',
  github: '#', // TODO: Replace with Ramarao's GitHub profile URL.
};

export const experience = [
  {
    period: 'Jun 2025 — Present',
    role: 'Security / Network Engineer',
    company: 'Quantum AI Global',
    location: 'Hyderabad, Telangana',
    summary: 'Designing and operating layered enterprise security architecture across network, infrastructure, monitoring, and application layers.',
    highlights: [
      'Architected FortiGate 200G controls including segmentation, policies, NAT, routing, IPS/IDS, VPN, application control, and web filtering.',
      'Designed centralized Splunk SIEM monitoring, correlation, dashboards, alerting, and investigation workflows.',
      'Established incident response, vulnerability management, security governance, maintenance, and KPI frameworks.',
      'Administered SONiC-based switching, SPAN visibility, RHEL 9.5 production systems, PostgreSQL, Apache, RBAC, and JWT security.',
    ],
  },
  {
    period: 'Sep 2024 — Jun 2025',
    role: 'Software Developer Intern',
    company: 'Quantum AI Global',
    location: 'Hyderabad, Telangana',
    summary: 'Built secure backend services while performing network analysis and vulnerability assessment across application and infrastructure layers.',
    highlights: [
      'Performed web and network VAPT using Nmap, Wireshark, and structured security testing methodologies.',
      'Analyzed mirrored traffic to identify suspicious communications and potential intrusion activity.',
      'Developed and deployed services using Python, FastAPI, Django, REST APIs, PostgreSQL, HTTPS, and Linux.',
    ],
  },
];

export const skillGroups = [
  {title: 'Cybersecurity', level: 92, skills: ['FortiGate 200G', 'SIEM / Splunk', 'VAPT', 'IDS / IPS', 'Incident Response', 'Zero Trust', 'DLP & DAM']},
  {title: 'Backend Development', level: 88, skills: ['Python', 'FastAPI', 'Django', 'REST APIs', 'JWT', 'RBAC', 'JavaScript']},
  {title: 'Frontend Development', level: 68, skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive UI']},
  {title: 'DevOps & Infrastructure', level: 86, skills: ['RHEL 9.5', 'Linux', 'Apache', 'Secure Deployment', 'Networking', 'SONiC OS']},
  {title: 'Databases', level: 80, skills: ['PostgreSQL', 'Database Security', 'Activity Monitoring', 'Data Classification']},
  {title: 'Testing & Automation', level: 82, skills: ['Nmap', 'Wireshark', 'Metasploit', 'Security Testing', 'Python Automation']},
];

export const projects = [
  {name: 'Suricata IDS Monitoring Platform', category: 'Cybersecurity', status: 'Project details editable', description: 'Security monitoring platform built around Suricata IDS telemetry. Add the verified architecture, responsibilities, and repository URL here.', stack: ['Suricata', 'IDS', 'Monitoring'], accent: 'cyan'},
  {name: 'QAIG IAM Platform', category: 'Security + Backend', status: 'Project details editable', description: 'Identity and access management platform. Add the verified authentication flows, backend stack, and personal contribution here.', stack: ['IAM', 'RBAC', 'JWT'], accent: 'violet'},
  {name: 'Placinite', category: 'Full Stack', status: 'Project details editable', description: 'Add the verified product scope, technical architecture, responsibilities, and outcome for Placinite here.', stack: ['Stack TBD', 'Details TBD'], accent: 'blue'},
  {name: 'RAMS MART', category: 'Backend + Full Stack', status: 'Project details editable', description: 'Add the verified commerce functionality, backend architecture, database, and deployment details here.', stack: ['Stack TBD', 'Details TBD'], accent: 'emerald'},
  {name: 'Security Testing & Vulnerability Assessment', category: 'Cybersecurity', status: 'Resume verified', description: 'Web and network vulnerability assessment using traffic analysis, host discovery, service enumeration, risk validation, and remediation collaboration.', stack: ['Nmap', 'Wireshark', 'VAPT'], accent: 'orange'},
  {name: 'Lorven AI Cine Flow', category: 'AI + Full Stack', status: 'Project details editable', description: 'Add the verified AI workflow, technical stack, responsibilities, and project link for Lorven AI Cine Flow here.', stack: ['Stack TBD', 'Details TBD'], accent: 'pink'},
];

export const certifications = [
  {name: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council'},
  {name: 'Ethical Hacking & Penetration Testing', issuer: 'Infosys Springboard'},
  {name: 'Cloud Computing', issuer: 'NPTEL'},
  {name: 'Cybersecurity', issuer: 'Skill Vertex'},
];
