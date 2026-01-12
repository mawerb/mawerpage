import './About.css';

function About({ bio }) {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title">About</h2>
        <div className="about__content">
          <p className="about__bio">{bio}</p>
        </div>
      </div>
    </section>
  );
}

export default About;

