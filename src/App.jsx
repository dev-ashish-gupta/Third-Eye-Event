// App.jsx
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/HeroSection.jsx';
import About from './Components/AboutSection.jsx';
import Expertise from './Components/Expertise.jsx';
import Events from './Components/EventsGallery.jsx';
import Team from './Components/Team.jsx';
import Testimonials from './Components/Testimonial.jsx';
import Blog from './Components/BlogSection.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import Founder from './Components/Founder.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Events />
      <Team />
      <Testimonials />
      <Blog />
      <Founder />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
