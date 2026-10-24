
import './App.css'


const projects = [
  {
    title: 'Enterprise AI Employee Assistant',
    category: 'Generative AI • React • FastAPI • Python',
    description:
      'An AI-powered employee assistant designed to help IT teams access information and streamline workplace tasks. Built with a React frontend and FastAPI backend, with LLM integration planned for intelligent responses.',
  },
  {
    title: 'AI Resume Screening System',
    category: 'AI • Python • Flask • MySQL',
    description:
      'An AI-assisted recruitment application that compares resumes with job descriptions, calculates matching scores, and identifies matched and missing skills.',
  },
  {
    title: 'Real-Time Sign Language Translator',
    category: 'Computer Vision • MediaPipe • Random Forest',
    description:
      'A real-time hand-sign recognition application using MediaPipe and a machine learning model, with speech output to support communication.',
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
                <p className="project-number">0{index + 1}</p>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#contact">Ask me about this project ↗</a>
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
