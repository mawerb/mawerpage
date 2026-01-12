import './ProjectCard.css';
import githubIcon from '../assets/github-mark.svg';

function ProjectCard({ title, description, link, technologies, image, github }) {
  return (
    <article className="project-card">
      {image && (
        <div className="project-card__image-wrapper">
          <img src={image} alt={title} className="project-card__image" />
          <div className="project-card__icons-overlay">
            {github && (
              <a 
                href={github} 
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__icon-link project-card__icon-link--github"
                aria-label={`View ${title} on GitHub`}
                onClick={(e) => e.stopPropagation()}
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
            )}
            {link && (
              <a 
                href={link} 
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__icon-link project-card__icon-link--external"
                aria-label={`View ${title} project`}
                onClick={(e) => e.stopPropagation()}
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                </svg>
              </a>
            )}
          </div>
        </div>
      )}
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>
      {technologies && technologies.length > 0 && (
        <div className="project-card__technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="project-card__tech-tag">
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;

