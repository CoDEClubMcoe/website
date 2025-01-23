import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import logo from "/images/logo.png";
import photo from "/images/photo1.jpg";
import photoo from "/images/photo2.jpg";
import photooo from "/images/photo3.jpg";
import Slideshow from "./Slideshow";
import Card from "./Team";
import About from "./about";

const Home = () => {
  const headingText = "Welcome to the CodeClub";
  const paragraphText =
    "Empowering students through technology and collaboration.";

  const [headingIndex, setHeadingIndex] = useState(0);
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [displayedHeading, setDisplayedHeading] = useState("");
  const [displayedParagraph, setDisplayedParagraph] = useState("");
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  const bannerRef = useRef();
  const [modalImage, setModalImage] = useState(null);

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
          setIsBannerVisible(true);
        }
      },
      { threshold: 0.3 }
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

  const handlePhotoClick = (photo) => {
    setModalImage(photo);
  };

  const closeModal = () => {
    setModalImage(null);
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
            <About/>
        </div>
        <div>
            <Card/>
        </div>
    </div>
  );
};

export default Home;