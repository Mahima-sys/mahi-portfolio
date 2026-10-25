
import './App.css'

const projects = [
  {
    number: '01',
    title: 'Credit Card Fraud Detection',
    category: 'MACHINE LEARNING',
    description:
      'A machine learning project to identify potentially fraudulent credit card transactions from transaction data.',
    technologies: ['Python', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com/Mahima-sys',
    icon: '◈',
  },
  {
    number: '02',
    title: 'Media Fabrication Detection',
    category: 'AI & DEEP LEARNING',
    description:
      'A deep-learning project focused on identifying manipulated or fabricated media using neural-network techniques.',
    technologies: ['Python', 'Neural Networks', 'Deep Learning'],
    github: 'https://github.com/Mahima-sys',
    icon: '✳',
  },
  {
    number: '03',
    title: 'AI Resume Screening System',
    category: 'AI & FULL STACK',
    description:
      'A recruitment application that compares resumes with job descriptions and identifies matching and missing skills.',
    technologies: ['Python', 'Flask', 'MySQL'],
    github: 'https://github.com/Mahima-sys/AI-Resume-Screening-System',
    icon: '▤',
  },
  {
    number: '04',
    title: 'Real-Time Sign Language Translator',
    category: 'COMPUTER VISION',
    description:
      'A hand-sign recognition application using computer vision and machine learning, with text-to-speech output.',
    technologies: ['Python', 'MediaPipe', 'Machine Learning'],
    github: 'https://github.com/Mahima-sys/Real-Time-Sign-Language-Translator',
    icon: '✋',
  },
  {
    number: '05',
    title: 'Enterprise AI Employee Assistant',
    category: 'GENERATIVE AI',
    description:
      'An employee-assistance application with a React interface and FastAPI backend, designed for AI-powered workplace support.',
    technologies: ['React', 'FastAPI', 'Python'],
    github: 'https://github.com/Mahima-sys',
    icon: '✧',
  },
]

const skills = [
  'Python',
  'JavaScript',
  'React',
  'HTML & CSS',
  'SQL',
  'Flask',
  'FastAPI',
  'REST APIs',
  'Pandas',
  'Scikit-learn',
  'OpenCV',
  'MediaPipe',
  'Generative AI',
  'Git & GitHub',
]

const internships = [
  {
    title: 'AI-ML Virtual Internship',
    organization: 'Amazon Web Services',
    detail: 'AWS SageMaker, S3, IAM',
    icon: '✧',
  },
  {
    title: 'Cyber Security Virtual Internship',
    organization: 'Palo Alto Networks',
    detail: 'Network security and threat detection',
    icon: '⬡',
  },
  {
    title: 'Zero Trust Cloud Security',
    organization: 'Virtual Internship',
    detail: 'Zero Trust architecture and cloud security',
    icon: '⌑',
  },
  {
    title: 'Employability Skill Job Ready',
    organization: 'NSDC',
    detail: 'Communication and collaboration',
    icon: '◎',
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
    <div className="portfolio" id="home">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="navbar">
        <a className="logo" href="#home">
          MAHI<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#internships">Internships</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-socials">
          <a
            href="https://github.com/Mahima-sys"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GH
          </a>
          <a
            href="https://www.linkedin.com/in/mahi-pothuraju-417522254/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>
          <a href="mailto:pothurajumahi@gmail.com" aria-label="Email">
            ✉
          </a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">HELLO, I'M</p>
            <h1>
              Mahi <span>Pothuraju</span>
            </h1>

            <p className="hero-role">
              B.Tech CSE Graduate <span> | </span> AI &amp; Full Stack Developer
            </p>

            <p className="intro">
              I'm a passionate developer interested in Artificial Intelligence
              and full-stack development. I enjoy building useful web
              applications and exploring AI-powered solutions to real-world
              problems.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View My Projects <span>↗</span>
              </a>
              <a className="btn secondary" href="#contact">
                Let's Connect
              </a>
            </div>

            <p className="availability">
              <span className="status-dot" /> Open to entry-level opportunities
            </p>

            <div className="hero-socials">
              <a href="https://github.com/Mahima-sys" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/mahi-pothuraju-417522254/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a href="mailto:pothurajumahi@gmail.com">Email ↗</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="profile-glow">
              <div className="profile-placeholder">
                <span>MP</span>
                <small>AI · WEB · INNOVATION</small>
              </div>
            </div>

            <div className="floating-note note-top">
              <span className="note-symbol">✦</span>
              <div>
                <strong>Build</strong>
                <small>with purpose</small>
              </div>
            </div>

            <div className="floating-note note-bottom">
              <span className="note-symbol">⌘</span>
              <div>
                <strong>Learn</strong>
                <small>every day</small>
              </div>
            </div>
          </div>

          <aside className="hero-info">
            <div className="info-item">
              <span className="info-icon">✦</span>
              <div>
                <strong>B.Tech CSE</strong>
                <small>VBIT · 2021–2025</small>
                <small>CGPA: 7.5</small>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">⌖</span>
              <div>
                <strong>Preferred Location</strong>
                <small>Hyderabad, India</small>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">✧</span>
              <div>
                <strong>Career Status</strong>
                <small>Fresher / Graduate</small>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">⌘</span>
              <div>
                <strong>Interested In</strong>
                <small>AI &amp; Full Stack Development</small>
              </div>
            </div>
          </aside>
        </section>

        <section className="intro-grid section-divider" id="about">
          <div className="about-block">
            <p className="section-kicker">01 / ABOUT ME</p>
            <h2>Curious mind. <span>Creative builder.</span></h2>
            <p>
              I'm a 2025 Computer Science graduate from Vignana Bharathi
              Institute of Technology. I enjoy learning new technologies,
              solving problems, and creating user-friendly applications.
              My goal is to grow as a developer and contribute to meaningful
              software projects.
            </p>
            <div className="personal-tags">
              <span>Problem Solver</span>
              <span>Quick Learner</span>
              <span>Team Player</span>
            </div>
          </div>

          <div className="skills-block" id="skills">
            <p className="section-kicker">02 / MY TOOLKIT</p>
            <h2>Technical <span>Skills</span></h2>
            <div className="skill-list">
              {skills.map((skill) => (
                <span className="skill" key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <blockquote className="quote-card">
            <span className="quote-mark">“</span>
            <p>Small steps every day lead to big results.</p>
            <span className="quote-spark">✧</span>
          </blockquote>
        </section>

        <section className="projects-section section-divider" id="projects">
          <div className="section-heading">
            <div>
              <p className="section-kicker">03 / SELECTED WORK</p>
              <h2>Featured <span>Projects</span></h2>
            </div>
            <span className="section-count">05 PROJECTS</span>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top">
                  <span className="project-icon">{project.icon}</span>
                  <span className="project-number">{project.number}</span>
                </div>

                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore on GitHub <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="career-grid section-divider">
          <div className="internships-section" id="internships">
            <div className="section-heading compact-heading">
              <div>
                <p className="section-kicker">04 / PROFESSIONAL GROWTH</p>
                <h2>Internships <span>&amp; Training</span></h2>
              </div>
            </div>

            <div className="internship-list">
              {internships.map((item) => (
                <article className="internship-card" key={item.title}>
                  <span className="internship-icon">{item.icon}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="internship-org">{item.organization}</p>
                    <p className="internship-detail">{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="credential-note">
              Certificate links can be added when the original certificates
              are available.
            </p>
          </div>

          <div className="education-section" id="education">
            <div className="section-heading compact-heading">
              <div>
                <p className="section-kicker">05 / MY BACKGROUND</p>
                <h2>Education</h2>
              </div>
            </div>

            <div className="education-list">
              {education.map((item) => (
                <article className="education-card" key={item.institution}>
                  <span className="education-icon">✧</span>
                  <div className="education-content">
                    <span className="education-period">{item.period}</span>
                    <h3>{item.degree}</h3>
                    <p>{item.institution}</p>
                    <span className="education-result">{item.result}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-divider" id="contact">
          <div className="contact-copy">
            <p className="section-kicker">06 / LET'S CONNECT</p>
            <h2>Have an opportunity in mind? <span>Let's talk.</span></h2>
            <p>
              I'm open to entry-level opportunities, collaborations, and
              conversations about AI and full-stack development.
            </p>
          </div>

          <div className="contact-actions">
            <a className="contact-link" href="mailto:pothurajumahi@gmail.com">
              <span>✉</span>
              <div>
                <small>Email me</small>
                <strong>pothurajumahi@gmail.com</strong>
              </div>
              <span>↗</span>
            </a>

            <a
              className="contact-link"
              href="https://www.linkedin.com/in/mahi-pothuraju-417522254/"
              target="_blank"
              rel="noreferrer"
            >
              <span>in</span>
              <div>
                <small>Connect on LinkedIn</small>
                <strong>Mahi Pothuraju</strong>
              </div>
              <span>↗</span>
            </a>

            <a
              className="btn primary contact-button"
              href="mailto:pothurajumahi@gmail.com?subject=Portfolio%20Opportunity"
            >
              Send Me a Message ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">MAHI<span>.</span></a>
        <p>© {new Date().getFullYear()} Mahi Pothuraju. Built with React.</p>
        <a href="#home" className="back-to-top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
