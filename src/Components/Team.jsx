import React, { useEffect, useRef, useState } from 'react';

function Card() {
  const [visible, setVisible] = useState(false); // Track visibility for animations
  const cardsRef = useRef([]); // To keep track of all cards

  const data = [
    { image: "/images/ranjeet.jpeg", name: "PRESIDENT", description: "Ranjeet Wadkar" },
    { image: "/images/vanshita.jpg", name: "VICE PRESIDENT", description: "Vanshita Koul" },
    { image: "/images/nathan.jpg", name: "TREASURER", description: "Nathan Mendis" },
    { image: "/images/sahil.jpg", name: "SE SECRETARY", description: "Sahil Dhas" },
    { image: "/images/ishan.jpeg", name: "TECH LEAD", description: "Ishan Dhamanikar" },
    { image: "/images/sharvari.jpg", name: "TECH CO-LEAD", description: "Sharvari Patil" },
    { image: "/images/revati.jpg", name: "DESIGN HEAD", description: "Revati Murgodkar" },
    { image: "/images/sanhita.jpg", name: "DESIGN CO-HEAD", description: "Sanhita Abhyankar" },
    { image: "/images/rachna.jpg", name: "DOCUMENTATION HEAD", description: "Rachna Mane" },
    { image: "/images/Richa.png", name: "DOCUMENTATION CO-HEAD", description: "Richa Arne" },
    { image: "/images/shravani.jpg", name: "PUBLICITY HEAD", description: "Shravani Hattargi" },
    { image: "/images/vinita.png", name: "PUBLICITY CO-HEAD", description: "Vinita Patil" },
    { image: "/images/parth.png", name: "INFRA-MANAGEMENT HEAD", description: "Parth Bhegade" },
    { image: "/images/rushi.jpg", name: "PHOTOGRAPHY LEAD", description: "Rushikesh Katte" },
    { image: "/images/anushka.jpg", name: "ACTIVITY CO-ORDINATOR", description: "Anushka Upadhye" },
    { image: "/images/manasi.jpg", name: "ACTIVITY CO-ORDINATOR", description: "Manasi Rathod" },
    { image: "/images/abrar.jpg", name: "ACTIVITY CO-ORDINATOR", description: "Abrar Shaikh" },
    { image: "/images/arwa.jpg", name: "ACTIVITY CO-ORDINATOR", description: "Arwa Salujiwala" }
  ];

  // Intersection Observer Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true); // Trigger animation when section comes into view
            observer.disconnect(); // Stop observing once visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 30% of the section is in view
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current); // Observe the entire section
    }

    return () => observer.disconnect(); // Cleanup observer
  }, []);

  return (
    <section id="team" className="relative min-h-screen bg" ref={cardsRef}>
      {/* Background Section */}
      <div className="absolute inset-0 bg-[url('/images/mainbg.png')]">
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Reduced opacity */}
      </div>

      {/* Page Heading */}
      <header className="relative w-full py-6 shadow-white z-10 header">
        <h1 className="text-4xl font-bold text-center text-gray-100 bg1">
          <i className="ri-team-fill"></i> Meet Our Team
        </h1>
      </header>

      {/* Cards Grid */}
      <main className="relative w-full p-5 z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {data.map((ele, index) => (
            <div
              key={index}
              className={`w-48 sm:w-56 max-w-xs rounded-lg bg-zinc-200 overflow-hidden shadow-lg transform transition-all duration-1000 
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              {/* Image Section */}
              <div className="w-full h-48 sm:h-56 bg-zinc-200 flex items-center justify-center p-4">
                <div className="w-full h-full relative rounded-lg overflow-hidden">
                  <img
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={ele.image}
                    alt={ele.name}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full px-3 py-4 text-center">
                <h1 className="font-bold text-xl">{ele.name}</h1>
                <p className="text-sm text-gray-700 text-lg font-semibold">{ele.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}

export default Card;
