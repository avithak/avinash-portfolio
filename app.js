
const experiences = [
  {
    role: 'Data Science Specialist',
    company: 'LTIMindtree',
    location: 'India',
    dates: 'Oct 2024 – Present',
    responsibilities: [
      'Architecting advanced Agentic AI systems & RAG frameworks.',
      'Core contributor to CanvasAI: A framework for LangGraph agents.',
      'Designed modular components for ReAct, Supervisor, and Network agents.',
      'Enabled seamless multi-LLM integration for enhanced reasoning.',
    ],
  },
  {
    role: 'Senior Software Developer',
    company: 'Firstsource Solutions',
    location: 'Hyderabad, India',
    dates: 'Dec 2021 – Oct 2024',
    responsibilities: [
      'Led GenAI Entity Extractor service using RAG & LangChain on Azure.',
      'Built scalable Azure infrastructure for cognitive search services.',
      'Developed GenAI Email Automation for intelligent client replies.',
      'Implemented semantic search over large document corpora.',
    ],
  },
  {
    role: 'Associate',
    company: 'Cognizant',
    location: 'Hyderabad, India',
    dates: 'Nov 2017 – Dec 2021',
    responsibilities: [
      'Built custom NER pipelines using Flair, spaCy, and Rasa.',
      'Created NLP solutions for intent extraction from emails.',
      'Developed image processing utilities for form data extraction.',
      'Automated AWS infrastructure for RPA tool deployment.',
    ],
  },
];

const projects = [
  {
    name: 'CanvasAI Framework',
    description: 'A powerful framework for creating LangGraph-based agents. Supports multi-agent orchestration, ReAct patterns, and plug-and-play LLM providers.',
    tech: ['Python', 'LangGraph', 'GenAI'],
    link: '#'
  },
  {
    name: 'GenAI Entity Extractor',
    description: 'Enterprise-grade service extracting entities from unstructured text using RAG. Deployed on Azure with robust API integration.',
    tech: ['LangChain', 'Azure', 'RAG'],
    link: '#'
  },
  {
    name: 'Cognitive Search Engine',
    description: 'Advanced search system leveraging Generative AI for semantic understanding over massive document datasets.',
    tech: ['Azure Cognitive Search', 'OpenAI'],
    link: '#'
  },
  {
    name: 'Smart Email Automator',
    description: 'AI system that analyzes incoming client emails and drafts intelligent, context-aware responses automatically.',
    tech: ['AWS', 'NLP', 'Python'],
    link: '#'
  },
  {
    name: 'Custom NER Tool',
    description: 'Annotation platform allowing users to label data and train custom Named Entity Recognition models.',
    tech: ['Flask', 'spaCy', 'React'],
    link: '#'
  }
];

const skills = [
  { category: 'GenAI & LLMs', items: ['LangChain', 'LangGraph', 'RAG', 'Prompt Eng', 'Agents'] },
  { category: 'Languages', items: ['Python', 'SQL', 'JavaScript', 'Shell', 'PowerShell'] },
  { category: 'Cloud & DevOps', items: ['Azure', 'AWS', 'Docker', 'Git', 'CI/CD'] },
  { category: 'Data Science', items: ['Pandas', 'NumPy', 'Scikit-learn', 'NLP', 'Computer Vision'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Vector DBs', 'MySQL'] },
];

const education = [
  {
    degree: 'B.Tech in CS & Engineering',
    institution: 'Lovely Professional University',
    year: '2017'
  }
];

// --- Components ---

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <span>&lt;</span>Avinash<span>/&gt;</span>
        </div>
        
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

function HeroSection() {
  const [text, setText] = React.useState('');
  const fullText = "Building Intelligent Agents & GenAI Solutions.";
  
  React.useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="eyebrow">Hi, my name is</span>
          <h1 className="text-gradient">Avinash Thakur.</h1>
          <span className="typewriter-text">{text}<span className="cursor">|</span></span>
          <p style={{marginBottom: '2rem', maxWidth: '600px', color: 'var(--text-muted)'}}>
            I'm a Data Science Specialist focused on architecting advanced Agentic AI systems 
            and scalable RAG frameworks. I turn complex data into intelligent action.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">Check my work</a>
            <a href="Resume/Avinash_Thakur_Resume.pdf" className="btn btn-outline" download>Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title"><span style={{color:'var(--accent)'}}>01.</span> About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Hello! I'm Avinash, a passionate specialized in <strong>Generative AI</strong> and <strong>Machine Learning</strong>. 
              My journey started with a fascination for data, which led me to build complex NLP systems and 
              eventually agentic workflows.
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at <span style={{color: 'var(--accent)'}}>LTIMindtree</span> and <span style={{color: 'var(--accent)'}}>Firstsource</span>, 
              building enterprise-grade AI solutions. My main focus these days is building 
              accessible, inclusive, and performant <strong>Agentic AI products</strong>.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="tech-stack-preview">
              <li className="tech-tag">Python</li>
              <li className="tech-tag">LangGraph</li>
              <li className="tech-tag">Azure OpenAI</li>
              <li className="tech-tag">Docker</li>
            </ul>
          </div>
          <div className="glass-card" style={{padding: '2rem', textAlign: 'center'}}>
             <div style={{fontSize: '4rem', marginBottom: '1rem', color: 'var(--primary)'}}>
               <i className="fas fa-brain"></i>
             </div>
             <h3>Problem Solver</h3>
             <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>
               "I love translating complex business problems into elegant AI solutions."
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title"><span style={{color:'var(--accent)'}}>02.</span> Experience</h2>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-content">
                <div className="timeline-date">{exp.dates}</div>
                <h3>{exp.role}</h3>
                <div className="timeline-role">{exp.company} - {exp.location}</div>
                <ul className="timeline-list">
                  {exp.responsibilities.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title"><span style={{color:'var(--accent)'}}>03.</span> Some Things I've Built</h2>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="glass-card project-card" key={i}>
              <div className="project-header">
                <i className="far fa-folder folder-icon"></i>
                <div className="project-links">
                  <a href={project.link}><i className="fab fa-github"></i></a>
                  <a href={project.link}><i className="fas fa-external-link-alt"></i></a>
                </div>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, k) => <span key={k}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title"><span style={{color:'var(--accent)'}}>04.</span> Technical Arsenal</h2>
        <div className="skills-wrapper">
          {skills.map((skill, i) => (
            <div className="glass-card skill-card" key={i}>
              <div className="skill-header">
                <i className="fas fa-code"></i>
                <h4>{skill.category}</h4>
              </div>
              <div className="skill-list">
                {skill.items.map((item, j) => (
                  <span className="skill-pill" key={j}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" style={{textAlign: 'center', maxWidth: '600px', margin: '0 auto'}}>
      <div className="container">
        <span style={{color: 'var(--accent)', fontFamily: 'var(--font-mono)'}}>05. What's Next?</span>
        <h2 style={{fontSize: '3rem', margin: '1rem 0'}}>Get In Touch</h2>
        <p style={{marginBottom: '3rem', color: 'var(--text-muted)'}}>
          I'm currently looking for new opportunities to build amazing AI agents. 
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        <a href="mailto:avinashthakur737493@gmail.com" className="btn btn-primary" style={{marginRight: '1rem'}}>
          Say Hello
        </a>
        <a href="https://www.linkedin.com/in/avinash-kumar-thakur" target="_blank" className="btn btn-outline">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>Built with React & Vanilla CSS by Avinash Thakur.</p>
        <div style={{marginTop: '1rem', fontSize: '1.2rem'}}>
          <a href="#" style={{margin: '0 10px'}}><i className="fab fa-github"></i></a>
          <a href="#" style={{margin: '0 10px'}}><i className="fab fa-linkedin"></i></a>
          <a href="#" style={{margin: '0 10px'}}><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);