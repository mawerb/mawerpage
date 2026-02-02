import './Experiences.css';

function Experiences({ experiences }) {
  const education = experiences
    .filter((e) => e.type === 'education')
    .slice()
    .reverse();
  const work = experiences
    .filter((e) => e.type === 'work')
    .slice()
    .reverse();

  function TimelineList({ items }) {
    return (
      <ol className="experiences__list" reversed>
        {items.map((item) => (
          <li key={item.id} className="experiences__item">
            <span className="experiences__dot" aria-hidden="true" />
            <div className="experiences__item-content">
              <time className="experiences__item-date" dateTime={item.dateRange}>
                {item.dateRange}
              </time>
              <h4 className="experiences__item-title">{item.title}</h4>
              <p className="experiences__item-org">{item.organization}</p>
              {item.description && item.description.length > 0 && (
                <ul className="experiences__item-description">
                  {item.description.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <section id="experience" className="experiences">
      <div className="experiences__container">
        <h2 className="experiences__title">Experience</h2>

        {education.length > 0 && (
          <div className="experiences__subsection">
            <h3 className="experiences__subsection-title">Education</h3>
            <TimelineList items={education} />
          </div>
        )}

        {work.length > 0 && (
          <div className="experiences__subsection">
            <h3 className="experiences__subsection-title">Work</h3>
            <TimelineList items={work} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Experiences;
