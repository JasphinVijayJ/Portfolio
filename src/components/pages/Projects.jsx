import { projectsData } from '../common/projectsData'

function Projects() {
    return (
        <section id="projects-section">
            <h2 className="heading-h2">My <span className="gradient-color">Projects</span></h2>

            <div className="projects-container">

                {projectsData.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-image">
                            <img src={project.image} alt={project.alt} />
                        </div>

                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p className="project-description">
                                {project.description}
                            </p>

                            <div className="project-tech">
                                {project.technologies.map((tech, index) => (
                                    <span key={index}>{tech}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target='_blank'
                                    >
                                        <i className={link.icon}></i>
                                        {link.text}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Projects