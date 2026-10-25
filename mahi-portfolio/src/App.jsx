
import './App.css'



const projects = [
  {
    title: 'Enterprise AI Employee Assistant',
    category: 'Generative AI • React • FastAPI • Python',
    description:
      'An AI-powered assistant designed to help employees find information and streamline everyday workplace tasks.',
    features: [
      'Interactive chat interface',
      'React frontend with FastAPI backend',
      'LLM integration for intelligent responses',
    ],
    contribution:
      'Designed the application structure and developed the frontend and backend integration.',
    github: 'https://github.com/Mahima-sys',
  },
  {
    title: 'AI Resume Screening System',
    category: 'AI • Python • Flask • MySQL',
    description:
      'An AI-assisted recruitment application that compares resumes against job descriptions and identifies relevant skills.',
    features: [
      'Resume and job description upload',
      'Resume matching score',
      'Matched and missing skills analysis',
    ],
    contribution:
      'Worked on resume processing, matching logic, and the application workflow.',
    github: 'https://github.com/Mahima-sys/AI-Resume-Screening-System',
  },
  {
    title: 'Real-Time Sign Language Translator',
    category: 'Computer Vision • MediaPipe • Random Forest',
    description:
      'A computer vision application that recognizes hand signs and supports communication through speech output.',
    features: [
      'Real-time hand landmark detection',
      'Machine learning-based sign classification',
      'Text-to-speech output',
    ],
    contribution:
      'Worked on hand landmark processing, model training, and speech output integration.',
    github: 'https://github.com/Mahima-sys/Real-Time-Sign-Language-Translator',
  },
]

const internships = [
  {
    title: 'AI-ML Virtual Internship',
    organization: 'Amazon Web Services (AWS)',
    skills: 'AWS SageMaker, S3, IAM',
    icon: '☁️',
  },
  {
    title: 'Cyber Security Virtual Internship',
    organization: 'Palo Alto Networks',
    skills: 'Network Security, Threat Detection',
    icon: '🛡️',
  },
  {
    title: 'Zero Trust Cloud Security Internship',
    organization: 'Cloud Security',
    skills: 'Zero Trust Architecture, Cloud Security',
    icon: '🔐',
  },
  {
    title: 'Employability Skill Job Ready',
    organization: 'NSDC',
    skills: 'Communication, Productivity, Collaboration',
    icon: '🎯',
  },
]

const education = [
  {
    degree: 'B.Tech — Computer Science and Engineering',
    institution: 'Vignana Bharathi Institute of Technology',
    period: '2021–2025',
    result: 'CGPA: 7.5',
  },
  {
    degree: 'Intermediate',
    institution: 'Telangana Minority Junior College',
    period: '2019–2021',
    result: 'CGPA: 8.1',
  },
]


function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#home">MAHI<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <p className="eyebrow">HELLO, I'M MAHI POTHURAJU</p>
          <h1>
            Building smart solutions with
            <span> AI & Full Stack Development.</span>
          </h1>
          <p className="intro">
            A 2025 Computer Science graduate passionate about Python,
            web development, machine learning, and creating useful
            technology.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">Explore my work ↗</a>
            <a className="btn secondary" href="#contact">Contact me</a>
          </div>
          <p className="availability">● Open to entry-level opportunities</p>
        </section>

        <section className="section" id="about">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>About me</h2>
          <p className="section-text">
            I'm a B.Tech Computer Science graduate from Vignana Bharathi
            Institute of Technology. I enjoy developing web applications
            and exploring AI and machine learning. I'm looking for
            opportunities to learn, contribute, and grow as a developer.
          </p>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2>Technical skills</h2>
          <div className="skills">
            {['Python', 'JavaScript', 'React', 'HTML & CSS', 'SQL',
              'Flask', 'Machine Learning', 'Git & GitHub'].map(skill => (
              <span className="skill" key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <p className="eyebrow">SOME THINGS I'VE BUILT</p>
          <h2>Featured projects</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
             
<article className="project-card" key={project.title}>
  <p className="project-number">
    0{index + 1}
  </p>

  <p className="project-category">
    {project.category}
  </p>

  <h3>{project.title}</h3>

  <p className="project-description">
    {project.description}
  </p>

  <h4>Key Features</h4>
  <ul className="project-features">
    {project.features.map((feature) => (
      <li key={feature}>{feature}</li>
    ))}
  </ul>

  <p className="project-contribution">
    <strong>My Contribution:</strong> {project.contribution}
  </p>

  <a
    className="project-link"
    href={project.github}
    target="_blank"
    rel="noreferrer"
  >
    View on GitHub ↗
  </a>
</article>

            ))}
          </div>
        </section>
        
<section className="section" id="internships">
  <p className="eyebrow">LEARNING & PROFESSIONAL DEVELOPMENT</p>
  <h2>Internships & Certifications</h2>
  <p className="section-text">
    Virtual internship and job-readiness programs that helped me
    develop my technical knowledge and professional skills.
  </p>

  <div className="internship-grid">
    {internships.map((item) => (
      <article className="internship-card" key={item.title}>
        <div className="internship-icon">{item.icon}</div>
        <h3>{item.title}</h3>
        <p className="internship-org">{item.organization}</p>
        <p className="internship-skills">{item.skills}</p>
        <span className="credential-label">
          Internship / Training
        </span>
      </article>
    ))}
  </div>
</section>

<section className="section" id="education">
  <p className="eyebrow">MY ACADEMIC BACKGROUND</p>
  <h2>Education</h2>

  <div className="education-list">
    {education.map((item) => (
      <article className="education-card" key={item.institution}>
        <div className="education-top">
          <h3>{item.degree}</h3>
          <span className="education-period">{item.period}</span>
        </div>
        <p>{item.institution}</p>
        <span className="education-result">{item.result}</span>
      </article>
    ))}
  </div>
</section>


        <section className="contact" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Have an opportunity in mind?</h2>
          <p>I'd love to connect and discuss how I can contribute to your team.</p>
          <div className="hero-actions">
            <a className="btn primary"
              href="mailto:pothurajumahi@gmail.com">Email me ↗</a>
            <a className="btn secondary"
              href="https://www.linkedin.com/in/mahi-pothuraju-417522254?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="btn secondary"
              href="https://github.com/Mahima-sys"
              target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Mahi Pothuraju · Built with React</footer>
    </div>
  )
}

export default App
