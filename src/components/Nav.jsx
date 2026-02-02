import './Nav.css';

function Nav() {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <ul className="nav__list">
        <li>
          <a 
            href="#work" 
            className="nav__link"
            onClick={(e) => handleClick(e, 'work')}
          >
            Work
          </a>
        </li>
        <li>
          <a 
            href="#tech" 
            className="nav__link"
            onClick={(e) => handleClick(e, 'tech')}
          >
            Tech
          </a>
        </li>
        <li>
          <a 
            href="#experience" 
            className="nav__link"
            onClick={(e) => handleClick(e, 'experience')}
          >
            Experience
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className="nav__link"
            onClick={(e) => handleClick(e, 'about')}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className="nav__link"
            onClick={(e) => handleClick(e, 'contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

