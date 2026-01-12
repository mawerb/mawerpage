import './Contact.css';

function Contact({ email }) {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Get In Touch</h2>
        <p className="contact__subtitle">
          I'm always open to discussing new opportunities and interesting projects.
          {email && (
            <> Reach out at <a href={`mailto:${email}`} className="contact__email-link">{email}</a>.</>
          )}
        </p>
      </div>
    </section>
  );
}

export default Contact;

