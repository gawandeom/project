import React, { useRef } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Video from './components/Video';
import Events from './components/Events';
import ContactUs from './components/ContactUs';

function App() {
  const videoRef = useRef(null);
  const eventsRef = useRef(null);
  const contactUsRef = useRef(null);
  const scrollToVideo = () => {
    videoRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEvents = () => {
    eventsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContactUs = ()=>{
    contactUsRef.current.scrollIntoView({behavior:'smooth'})
  }
  return (
    <>
      <Header onVideoClick={scrollToVideo} onEventClick={scrollToEvents} onContactClick={scrollToContactUs} />
      <Home />
      <div ref={videoRef}>
        <Video />
      </div>
      <div ref={eventsRef}>
        <Events />
      </div>
      <div ref={contactUsRef}>
      <ContactUs />
      </div>
     
    </>
  );
}

export default App;
