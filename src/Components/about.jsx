import React from "react";
import "./about.css";
const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-overlay"></div>
      <div className="about-container">
        <h2 className="fade-in">About Us</h2>
        <p className="slide-in">
          Welcome to CodeClub! we have been dedicated to
          empowering students through technology and collaboration. Our mission
          is to create a supportive community where creativity, innovation, and
          learning thrive.
        </p>
        <h3 className="fade-in">Our Vision</h3>
        <p className="slide-in">
          To cultivate future-ready tech leaders by fostering a culture of
          knowledge sharing, hands-on learning, and community engagement.
        </p>

        <h3 className="fade-in">Goals</h3>
        <ul className="slide-in">
          <li>Provide students with resources to learn and excel in technology.</li>
          <li>Organize workshops, hackathons, and events to enhance technical skills.</li>
          <li>Build a network of like-minded individuals passionate about tech.</li>
        </ul>

        <h3 className="fade-in">Why Join Us?</h3>
        <ul className="slide-in">
          <li>Access to mentorship and expert guidance.</li>
          <li>Opportunity to work on real-world projects and gain experience.</li>
          <li>Expand your professional network with peers and industry leaders.</li>
          <li>Be a part of an innovative and supportive community.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
