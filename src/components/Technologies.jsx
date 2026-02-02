import './Technologies.css';

function Technologies({ technologies }) {
  return (
    <section id="tech" className="technologies">
      <div className="technologies__container">
        <h2 className="technologies__title">Tech</h2>
        <div className="technologies__categories">
          {technologies.map((group, index) => (
            <div key={index} className="technologies__category">
              <h3 className="technologies__category-title">{group.category}</h3>
              <div className="technologies__pills">
                {group.items.map((item, i) => (
                  <span key={i} className="technologies__pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
