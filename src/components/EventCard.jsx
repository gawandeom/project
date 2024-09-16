import React from 'react';

const EventCard = React.forwardRef(({ image, title, description, tags, Coordinator, registerLink }, ref) => {
  return (
    <div className="event-card" ref={ref}>
      <div className="event-card__image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="event-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="event-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="event-card__tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="event-card__info">
          <p><b>Coordinator - </b> {Coordinator}</p>
        </div>
      </div>
      <button className="event-card__button" onClick={() => (window.location.href = registerLink)}>
        Register Now
      </button>
    </div>
  );
});

export default EventCard;
