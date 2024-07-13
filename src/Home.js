import React, { useState, useEffect } from 'react';
import './Home.css';
import logo from './assets/img/logo.png';

const Home = ({ show }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cyclingTextIndex, setCyclingTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cyclingTexts = [
    "Transforming ideas into powerful software and stunning websites",
    "Driving innovation through technology",
    "Creating seamless digital experiences",
    "Empowering businesses with cutting-edge solutions"
  ];

  useEffect(() => {
    let timeout;
    if (isTyping) {
      if (displayText.length < cyclingTexts[cyclingTextIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(cyclingTexts[cyclingTextIndex].slice(0, displayText.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        setCyclingTextIndex((prevIndex) => (prevIndex + 1) % cyclingTexts.length);
        setIsTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [cyclingTextIndex, cyclingTexts, displayText, isTyping]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      document.body.style.minHeight = '101%';
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.style.minHeight = '';
      }, 0);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 60; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`home-container ${show ? 'visible' : ''}`}>
      <header>
        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <div className="logo">feroBYTE</div>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <img src={logo} alt="feroBYTE logo" className="hero-logo" />
            <h1 className="static-text">Innovative Software Solutions</h1>
            <p className="cycling-text">
              {displayText}
              <span className="cursor"></span>
            </p>
            <button className="cta-button">Get Started</button>
          </div>
          <div className="problem-solution">
            <div className="problem">
              <h2>The Problem</h2>
              <ul>
                <li>Outdated software slowing down your business</li>
                <li>Difficulty managing complex digital processes</li>
                <li>Lack of user-friendly interfaces</li>
              </ul>
            </div>
            <div className="solution">
              <h2>Our Solution</h2>
              <ul>
                <li>Cutting-edge custom software development</li>
                <li>Streamlined and efficient digital workflows</li>
                <li>Intuitive and engaging user experiences</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services">
          <h2>Our Services</h2>
          <div className="service-grid">
            <div className="service-item">
              <h3>Custom Software Development</h3>
              <p>Tailored solutions to meet your unique business needs</p>
            </div>
            <div className="service-item">
              <h3>Web Development</h3>
              <p>Responsive and dynamic websites for the modern web</p>
            </div>
            <div className="service-item">
              <h3>Mobile App Development</h3>
              <p>Native and cross-platform apps for iOS and Android</p>
            </div>
            <div className="service-item">
              <h3>UI/UX Design</h3>
              <p>Intuitive and engaging user experiences</p>
            </div>
          </div>
        </section>

        <section id="about">
          <h2>About Us</h2>
          <p>
            feroBYTE is a cutting-edge software development company at the forefront of digital innovation. Founded in 2020, we've quickly established ourselves as industry leaders, combining technical expertise with creative problem-solving to deliver exceptional solutions for our clients.
          </p>
          <p>
            Our team of passionate developers, designers, and strategists work collaboratively to transform complex challenges into elegant, user-friendly applications. We pride ourselves on staying ahead of the technological curve, continuously exploring emerging technologies to provide our clients with the most advanced and efficient solutions possible.
          </p>
          <p>
            At feroBYTE, we believe in the power of technology to revolutionize businesses and enhance user experiences. Whether you're a startup looking to disrupt the market or an established enterprise seeking digital transformation, we have the skills and experience to turn your vision into reality.
          </p>
        </section>

        <section id="contact" className="contact-center">
          <h2>Contact Us</h2>
          <p>Ready to bring your ideas to life? Get in touch with us for your next project.</p>
          <p>We're always excited to hear about new challenges and opportunities.</p>
          <p>Email: info@ferobyte.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Tech Lane, Innovation City, FC 98765</p>
          <button className="cta-button">Contact Now</button>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 feroBYTE. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;