import Reveal from '../common/Reveal.jsx'
import { PROJECTS } from '../../data/projects.js'
import './Projects.css'

function Projects() {
  return (
    <section className="section section--alt" id="work">
      <div className="container">
        <div className="section-heading">
          <Reveal className="eyebrow">Featured Work</Reveal>
          <Reveal delay={1} as="h2" className="section-title">Projects our clients are proud to show off</Reveal>
          <Reveal delay={2} as="p" className="section-subtitle">
            A sample of the websites and systems we've designed, built, and shipped.
          </Reveal>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) + 1} className="project-card">
              <div className="project-card__media">
                <span className="project-card__category">{project.category}</span>
                <div className="project-card__mark" aria-hidden="true">
                  {project.title.charAt(0)}
                </div>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                <ul className="project-card__stack">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className="project-card__actions">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">Live Demo →</a>
                  <a href={project.githubUrl} className="project-card__link project-card__link--muted">GitHub</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
