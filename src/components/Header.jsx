import { useState, useEffect } from 'react';
import './Header.css';
import githubIcon from '../assets/github-mark.svg';
import linkedinIcon from '../assets/linkedin-svgrepo-com.svg';
import resumeIcon from '../assets/reshot-icon-profile-KZ62Q3P9FW.svg';

function Header({ name, tagline, github, linkedin, resume }) {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Hide indicator when user scrolls more than 50px
      setShowScrollIndicator(scrollPosition < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollDown = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="landing">
      <div className="landing__content">
        <h1 className="landing__greeting">Nice to meet you, I'm</h1>
        <h2 className="landing__name">{name}</h2>
        <p className="landing__tagline">
          {tagline.split('\n').map((line, index, array) => (
            <span key={index}>
              {line}
              {index < array.length - 1 && <br />}
            </span>
          ))}
        </p>
        <div className="landing__links">
          {github && (
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="landing__button"
              aria-label="GitHub profile"
            >
              <div className="landing__icon">
                <img src={githubIcon} alt="GitHub" />
              </div>
            </a>
          )}
          {linkedin && (
            <a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="landing__button"
              aria-label="LinkedIn profile"
            >
              <div className="landing__icon">
                <img src={linkedinIcon} alt="LinkedIn" />
              </div>
            </a>
          )}
          {resume && (
            <a 
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="landing__button"
              aria-label="View resume"
            >
              <div className="landing__icon">
                <img src={resumeIcon} alt="Resume" />
              </div>
            </a>
          )}
        </div>
      </div>
      
      <nav className="landing__nav" role="navigation" aria-label="Main navigation">
        <ul className="landing__nav-list">
          <li>
            <a 
              href="#work" 
              className="landing__nav-link"
              onClick={(e) => handleNavClick(e, 'work')}
            >
              Work
            </a>
          </li>
          <li>
            <a 
              href="#tech" 
              className="landing__nav-link"
              onClick={(e) => handleNavClick(e, 'tech')}
            >
              Tech
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className="landing__nav-link"
              onClick={(e) => handleNavClick(e, 'experience')}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="landing__nav-link"
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="landing__nav-link"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <button 
        className={`landing__scroll-indicator ${showScrollIndicator ? '' : 'landing__scroll-indicator--hidden'}`}
        onClick={handleScrollDown}
        aria-label="Scroll down"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  );
}

export default Header;

