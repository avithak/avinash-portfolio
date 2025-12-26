/*
 * React application for Avinash Thakur's professional portfolio.
 *
 * The structure of the site is broken down into functional components
 * corresponding to the major sections: hero, about, experience, projects,
 * skills, education, contact and footer. Data arrays for experience,
 * projects, skills and education are defined to keep the UI declarative
 * and easy to modify.
 */

// Data definitions
const experiences = [
  {
    role: 'Data Science Specialist',
    company: 'LTIMindtree, India',
    location: 'India',
    dates: 'Oct 2024 – Present',
    responsibilities: [
      'Working on the development of advanced Agentic AI-based chatbot systems and Retrieval-Augmented Generation (RAG) frameworks.',
      'Contributed to the CanvasAI project, a versatile framework designed to simplify the creation of LangGraph-based agents.',
      'Developed reusable components enabling users to define and launch various agent types such as ReAct agents, Supervisor agents, and Network agents.',
      'Designed modular logic that supports both use case-specific agents and general-purpose multi-agent orchestration.',
      'Ensured seamless integration with multiple LLM providers and enhanced the framework\'s flexibility for tool-augmented reasoning and agent coordination.',
    ],
  },
  {
    role: 'Senior Software Developer',
    company: 'Firstsource Solutions, RPSG',
    location: 'Hyderabad, India',
    dates: 'Dec 2021 – Oct 2024',
    responsibilities: [
      'Led the design and implementation of a Generative AI-based Entity Extractor service using Retrieval Augmented Generation, LangChain, and Azure cloud.',
      'Architected and deployed scalable infrastructure on Azure to host entity extraction and cognitive search services.',
      'Developed RESTful APIs for seamless integration with client applications.',
      'Implemented Generative AI-powered Cognitive Search over customer document corpora with semantic understanding and query processing.',
      'Created Generative AI-based Email Automation by analyzing client emails and training models to craft intelligent replies.',
    ],
  },
  {
    role: 'Associate',
    company: 'Cognizant Technology Solutions',
    location: 'Hyderabad, India',
    dates: 'Nov 2017 – Dec 2021',
    responsibilities: [
      'Developed custom annotation tools and training pipelines for named entity recognition using Flair, spaCy, and Rasa.',
      'Created NLP solutions to extract intents and entities from emails and leveraged AWS Comprehend.',
      'Built image processing utilities to extract handwritten characters and annotate form fields.',
      'Automated AWS infrastructure tasks including launching EC2 instances, configuring software for RPA tools, and implementing database backup and S3 upload routines.',
    ],
  },
];

const projects = [
  {
    name: 'CanvasAI – Agentic Chatbot and RAG Framework',
    description:
      'A versatile framework for creating LangGraph-based agents with reusable components for ReAct, Supervisor, and Network agents, supporting multi-agent orchestration and integration with multiple LLM providers.',
  },
  {
    name: 'Generative AI-Based Entity Extractor',
    description:
      'A service that extracts entities from unstructured text using Retrieval Augmented Generation and LangChain, deployed on Azure with RESTful API integration.',
  },
  {
    name: 'Generative AI-Based Cognitive Search',
    description:
      'Implemented a generative AI-powered search over customer document corpora with advanced indexing, semantic understanding, and query processing, exposed as an Azure API.',
  },
  {
    name: 'Generative AI-Based Email Automation',
    description:
      'Analyzed client emails to identify patterns and trained generative models to craft intelligent replies, built on a scalable AWS processing pipeline.',
  },
  {
    name: 'Named Entity Extraction Tool',
    description:
      'Custom annotation and training platform allowing users to upload data, label entities, and train models using Flair, spaCy, and Rasa.',
  },
  {
    name: 'Image Processing Tool',
    description:
      'Utility to extract handwritten characters and mark field coordinates within forms, enabling automated extraction of multiple fields from various document types.',
  },
  {
    name: 'AWS Infrastructure Automation',
    description:
      'Automated the launch and configuration of EC2 instances and streamlined database backup and S3 upload processes to support RPA deployments.',
  },
];

const skills = [
  {
    category: 'Generative AI & Frameworks',
    items: ['LangGraph', 'LangChain', 'GenAI'],
  },
  {
    category: 'Languages',
    items: ['Python', 'Shell Script', 'PowerShell', 'SQL'],
  },
  {
    category: 'Cloud',
    items: ['Azure Cloud', 'AWS'],
  },
  {
    category: 'LLM Models',
    items: ['ChatGPT', 'Cohere', 'Claude'],
  },
  {
    category: 'DL/ML Tools',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'NLTK', 'spaCy'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Other Tools',
    items: ['Flask', 'Docker', 'Git'],
  },
];

const education = [
  {
    year: '2017',
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    institution: 'Lovely Professional University',
    details: '70% aggregate',
  },
  {
    year: '2013',
    degree: 'CBSE 12th',
    institution: 'Kendriya Vidyalaya, Thane',
    details: '76%',
  },
  {
    year: '2011',
    degree: 'CBSE 10th',
    institution: 'Kendriya Vidyalaya, Thane',
    details: 'CGPA 9.7',
  },
];

// Components
function NavBar({ onToggleTheme }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <a href="#home" className="logo-link">
            <span className="logo-text">AT</span>
            <span className="logo-name">Avinash Thakur</span>
          </a>
        </div>
        <ul className={menuOpen ? 'active' : ''}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#education" onClick={closeMenu}>Education</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        <a href="Resume/Avinash_Thakur_Resume.pdf" className="resume-btn" download>
          Resume
        </a>
        <div className="theme-toggle">
          <button id="theme-toggle" className="theme-btn" aria-label="Toggle theme" onClick={onToggleTheme}>
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
          </button>
        </div>
        <button className={menuOpen ? 'hamburger active' : 'hamburger'} aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <img
          src="Pictures/Avinash_photo.jpg"
          alt="Avinash Thakur"
          className="hero-photo"
        />
        <div className="hero-content">
          <h1>Avinash Thakur</h1>
          <h2>Data Science Specialist | Generative AI & Machine Learning</h2>
          <p>
            Dedicated and experienced professional with over 8 years of expertise
            in Generative AI, Machine Learning, and Natural Language Processing
            seeking opportunities to leverage skills in solving complex problems
            and contributing to innovative projects in AI-driven environments.
          </p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        Dedicated and experienced professional with over 8 years of expertise
        in Generative AI, Machine Learning, and Natural Language Processing.
        I love translating complex problems into elegant solutions that empower
        businesses and delight users.
      </p>
      <p>
        Over the years I have architected and delivered AI services ranging
        from agentic chatbots and entity extraction to cognitive search and
        email automation. My goal is to continue exploring the frontier of AI
        and build products that make a positive impact.
      </p>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div className="experience-item" key={index}>
          <h3>{exp.role}</h3>
          <div className="role">{exp.company}</div>
          <div className="dates">{exp.location} &nbsp;|&nbsp; {exp.dates}</div>
          <ul>
            {exp.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="dark">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div className="project-item" key={index}>
          <h4>{project.name}</h4>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((cat, index) => (
          <div className="skill-category" key={index}>
            <h4>{cat.category}</h4>
            <ul>
              {cat.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="dark">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div className="education-item" key={index}>
          <h4>{edu.degree}</h4>
          <span>
            {edu.institution} &nbsp;|&nbsp; {edu.year}
          </span>
          <p>{edu.details}</p>
        </div>
      ))}
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-details">
        <p>
          <strong>Phone:</strong> <a href="tel:+919501210969">+91 95012 10969</a>
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:avinashthakur737493@gmail.com">
            avinashthakur737493@gmail.com
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/avinash-kumar-thakur" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/avinash-kumar-thakur
          </a>
        </p>
      </div>
      <div className="resume-download">
        <a href="Resume/Avinash_Thakur_Resume.pdf" download>
          Download Resume
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return <footer>© {year} Avinash Thakur. All rights reserved.</footer>;
}

function App() {
  // Initialize theme from localStorage on mount
  React.useEffect(() => {
    const html = document.documentElement;
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
  }, []);

  const handleToggleTheme = () => {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  return (
    <>
      <NavBar onToggleTheme={handleToggleTheme} />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </>
  );
}

// Render the application
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);