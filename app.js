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
    role: 'Senior Software Developer',
    company: 'Firstsource Solutions, RPSG',
    location: 'Hyderabad, India',
    dates: 'Dec 2021 – Present',
    responsibilities: [
      'Designed and implemented a generative AI‑based entity extraction pipeline using Retrieval Augmented Generation, LangChain and Azure cloud, improving accuracy and efficiency of processing unstructured text.',
      'Architected and deployed scalable infrastructure on Azure to host entity extraction and cognitive search services, ensuring reliability and high availability.',
      'Developed RESTful APIs for seamless integration with client applications and conducted rigorous testing to guarantee quality and compliance.',
    ],
  },
  {
    role: 'Associate',
    company: 'Cognizant Technology Solutions',
    location: 'Hyderabad, India',
    dates: 'Nov 2017 – Dec 2021',
    responsibilities: [
      'Developed custom annotation tools and training pipelines for named entity recognition using libraries such as Flair, spaCy and Rasa, enabling clients to build bespoke NLP models.',
      'Created NLP solutions to extract intents and entities from emails and leveraged AWS Comprehend to automate manual workflows.',
      'Built image processing utilities to extract handwritten characters and annotate form fields, facilitating data extraction from diverse document formats.',
      'Automated AWS infrastructure tasks including launching EC2 instances, configuring software for RPA tools, and implementing database backup and S3 upload routines.',
    ],
  },
];

const projects = [
  {
    name: 'Generative AI Entity Extraction Service',
    description:
      'A service that extracts entities from unstructured text using Retrieval Augmented Generation and LangChain. Deployed on Azure with RESTful API integration.',
  },
  {
    name: 'Generative AI Cognitive Search',
    description:
      'Implemented a generative AI‑powered search over customer document corpora. Designed indexing, semantic understanding and query processing algorithms and exposed the functionality as an Azure API.',
  },
  {
    name: 'Generative AI Email Automation',
    description:
      'Analysed client emails to identify common patterns and trained generative models to craft intelligent replies. Built a scalable processing pipeline on AWS.',
  },
  {
    name: 'Named Entity Extraction Tool',
    description:
      'Custom annotation and training platform allowing users to upload data, label entities and train models using Flair, spaCy and Rasa.',
  },
  {
    name: 'Form Image Processing Tool',
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
    category: 'Languages',
    items: ['Python', 'Shell Script', 'PowerShell', 'SQL'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Cloud',
    items: ['Azure', 'AWS'],
  },
  {
    category: 'Generative AI & Libraries',
    items: ['LangChain', 'GenAI frameworks'],
  },
  {
    category: 'Large Language Models',
    items: ['ChatGPT', 'Cohere', 'Claude'],
  },
  {
    category: 'Tools & Frameworks',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'NLTK', 'spaCy', 'Flask', 'Docker', 'Git'],
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
function NavBar() {
  return (
    <nav>
      <div className="container">
        <div className="logo">Avinash Thakur</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Avinash Thakur</h1>
        <h2>Senior Software Developer | Generative AI &amp; Machine Learning</h2>
        <p>
          I design and build intelligent solutions that leverage Generative AI,
          machine learning and natural language processing to solve complex
          business problems.
        </p>
        <a href="#contact" className="cta-button">Get in Touch</a>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        Dedicated and experienced professional with over 6.5 years of expertise
        in Generative AI, Machine Learning and Natural Language Processing. I
        love translating complex problems into elegant solutions that empower
        businesses and delight users.
      </p>
      <p>
        Over the years I have architected and delivered AI services ranging
        from entity extraction and cognitive search to email automation and
        infrastructure tooling. My goal is to continue exploring the frontier
        of AI and build products that make a positive impact.
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
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return <footer>© {year} Avinash Thakur. All rights reserved.</footer>;
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