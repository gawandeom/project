import React, { useEffect, useRef } from 'react';
import EventCard from './EventCard';
import './styles.css';
import { gsap } from 'gsap';

const Events = () => {
  const events = [
    {
      image: '../assets/images/techno.png',
      title: 'TECHNO-TREASURE',
      description: 'Code your way to treasure',
      tags: ['Web Development', 'Coding', 'Designing'],
      Coordinator: 'Om Gawande',
      registerLink: 'https://forms.gle/vvVqPj1XKMdLVwRF6', // Add the register link here
    },
    {
      image: '../assets/images/techno.png',
      title: 'TECHNO-TREASURE',
      description: 'Code your way to treasure',
      tags: ['Web Development', 'Coding', 'Designing'],
      Coordinator: 'Om Gawande',
      registerLink: 'https://forms.gle/vvVqPj1XKMdLVwRF6', // Add the register link here
    },
    {
      image: '../assets/images/techno.png',
      title: 'TECHNO-TREASURE',
      description: 'Code your way to treasure',
      tags: ['Web Development', 'Coding', 'Designing'],
      Coordinator: 'Om Gawande',
      registerLink: 'https://forms.gle/vvVqPj1XKMdLVwRF6', // Add the register link here
    },
    {
      image: '../assets/images/techno.png',
      title: 'TECHNO-TREASURE',
      description: 'Code your way to treasure',
      tags: ['Web Development', 'Coding', 'Designing'],
      Coordinator: 'Om Gawande',
      registerLink: 'https://forms.gle/vvVqPj1XKMdLVwRF6', // Add the register link here
    },
    
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      gsap.set(cardsRef.current, { xPercent: 100 });
      gsap.set(cardsRef.current[0], { xPercent: 0 });
    }
  }, []);

  const handleNextCard = () => {
    const totalCards = cardsRef.current.length;
    gsap.to(cardsRef.current, {
      xPercent: (i) => i * -100,
      duration: 0.8,
      ease: 'power3.inOut',
    });
  };

  return (
    <div className="events-container">
      <h2 className="events-header">Events Offered</h2>
      <div className="events-wrapper">
        {events.map((event, index) => (
          <EventCard
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          image={event.image}
          title={event.title}
          description={event.description}
          tags={event.tags}
          Coordinator={event.Coordinator} // Use Coordinator instead of authors
          registerLink={event.registerLink}
        />
        
        ))}
      </div>
    </div>
  );
};

export default Events;