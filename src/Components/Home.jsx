import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import logo from "/images/logo.png";
import Slideshow from "./Slideshow";
import Card from "./Team";
import About from "./about";
import RegistrationForm from "./RegistrationForm"; // Import the RegistrationForm component

const Home = () => {
  const headingText = "Welcome to the CodeClub";
  const paragraphText =
    "Empowering students through technology and collaboration.";

  const [headingIndex, setHeadingIndex] = useState(0);
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [displayedHeading, setDisplayedHeading] = useState("");
  const [displayedParagraph, setDisplayedParagraph] = useState("");
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false); // State to control modal visibility
  const [isRegisterSectionVisible, setIsRegisterSectionVisible] = useState(false); // Visibility of Register Section

  const bannerRef = useRef();
  const registerRef = useRef(); // Ref for the Register Section

  useEffect(() => {
    // Fade in the banner when it comes into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBannerVisible(true);
        } else {
          setIsBannerVisible(false);
        }
      },
      { threshold: 0.3 } // Start showing when 30% of the banner is in view
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (headingIndex < headingText.length) {
      const headingTimeout = setTimeout(() => {
        setDisplayedHeading((prev) => prev + headingText[headingIndex]);
        setHeadingIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(headingTimeout);
    }
  }, [headingIndex, headingText]);

  useEffect(() => {
    if (
      headingIndex === headingText.length &&
      paragraphIndex < paragraphText.length
    ) {
      const paragraphTimeout = setTimeout(() => {
        setDisplayedParagraph((prev) => prev + paragraphText[paragraphIndex]);
        setParagraphIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(paragraphTimeout);
    }
  }, [paragraphIndex, paragraphText, headingIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRegisterSectionVisible(true); // Show register section when in view
        }
      },
      { threshold: 0.3 }
    );

    if (registerRef.current) {
      observer.observe(registerRef.current);
    }

    return () => {
      if (registerRef.current) {
        observer.unobserve(registerRef.current);
      }
    };
  }, []);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      {/* Home Section */}
      <section id="home" className="home">
        <div className="home-overlay"></div>
        <div className="home-content">
          <h1>{displayedHeading}</h1>
          <p>{displayedParagraph}</p>
        </div>
      </section>

      {/* Banner Section */}
      <section
        id="events"
        className={`banner ${isBannerVisible ? "visible" : ""}`}
        ref={bannerRef}
      >
        <div className="banner-left">
          <img src={logo} alt="Club Logo" className="club-logo" />
          <h1 className="club-mission">Our Events</h1>
        </div>

        <div className="banner-right my-5">
          <Slideshow />
        </div>

        {/* Animated Square in the Right Section */}
        <div className="shape square"></div>
      </section>

      <div>
        <About />
      </div>
      <div>
        <Card />
      </div>

      {/* Register Section - Visible only when scrolled into view */}
      <section
        id="register"
        className={`register-section ${isRegisterSectionVisible ? "visible" : ""}`}
        ref={registerRef}
      >
        <div className="register-container">
          <h2>Register Now</h2>
          <p>
            To participate in the event please click on the registeration button below and fill the form.
          </p>
          <button onClick={openModal} className="register-btn">
            Register
          </button>
        </div>
      </section>

      {/* Modal for Registration Form */}
      {isModalVisible && (
        <RegistrationForm onClose={closeModal} /> // Pass onClose handler to the form
      )}
    </div>
  );
};

export default Home;
