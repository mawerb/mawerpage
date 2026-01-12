import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects({ projects }) {
  return (
    <section id="work" className="projects">
      <div className="projects__container">
        <h2 className="projects__title">Featured Work</h2>
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              technologies={project.technologies}
              image={project.image}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

