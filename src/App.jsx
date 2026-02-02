import Header from './components/Header';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Experiences from './components/Experiences';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projectsData } from './data/projectsData';
import { technologiesData } from './data/technologiesData';
import { experiencesData } from './data/experiencesData';
import './App.css';

function App() {
  // Personal information - update these with your details
  const personalInfo = {
    name: 'Clarence Maor Barzilay',
    tagline: `CS @ California State University, Long Beach\nSoftware Engineer`,
    bio: 'I\'m a passionate developer with experience in building scalable web applications. I enjoy solving complex problems and creating user-friendly experiences. When I\'m not coding, I\'m always learning new technologies and contributing to open-source projects.',
    email: 'maorbarzilay8@gmail.com',
    github: 'https://github.com/mawerb',
    linkedin: 'https://linkedin.com/in/maorbarzilay',
    resume: '/RESUME.pdf'
  };

  return (
    <div className="App">
      <Header 
        name={personalInfo.name} 
        tagline={personalInfo.tagline}
        github={personalInfo.github}
        linkedin={personalInfo.linkedin}
        resume={personalInfo.resume}
      />
      <Projects projects={projectsData} />
      <Technologies technologies={technologiesData} />
      <Experiences experiences={experiencesData} />
      <About bio={personalInfo.bio} />
      <Contact email={personalInfo.email} />
      <Footer />
    </div>
  );
}

export default App;
