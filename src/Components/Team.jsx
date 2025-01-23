import React from 'react'

function Card() {

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

  const diamondPositions = [
    { top: "6.5%", left: "47%" },
    { top: "17%", left: "47%" },
    { top: "28%", left: "47%" },
    { top: "39%", left: "47%" },
    { top: "50%", left: "47%" },
    { top: "61%", left: "47%" },
    { top: "72%", left: "47%" },
    { top: "82.7%", left: "47%" },
    { top: "93.5%", left: "47%" },
  ];

  return (
    <section id="team" className="relative min-h-screen bg">
      {/* Background Section */}
      <div className="absolute inset-0 bg-[url('/images/doodle.jpg')]">
        {/* Overlay on background only */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      {diamondPositions.map((pos, index) => (
        <div
          key={index}
          className="hidden lg:block absolute w-16 h-16 border-2 border-gray-300 transform rotate-45 dd"
          style={{
            top: pos.top,
            left: pos.left,
          }}
        ></div>
      ))}

      {/* Page Heading */}
      <header className="relative w-full py-6 shadow-white z-10 header">
        <h1 className="text-4xl font-bold text-center text-gray-100 bg1">
          <i className="ri-team-fill"></i> Meet Our Team
        </h1>
      </header>
      
      {/* Cards Grid */}
      <main className="relative w-full p-5 z-10">
        <div 
          className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center"
        >
          {data.map((ele, index) => (
            <div
              key={index}
              className="w-full max-w-sm rounded-md bg-zinc-200 overflow-hidden shadow-white z-10 card-image cd"
            >
              {/* Image Section */}
              <div className="w-full h-[30rem] bg-zinc-200 flex items-center justify-center p-4">
                <div className="w-full h-full relative rounded-lg shadow-xl shadow-gray-600 overflow-hidden">
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={ele.image}
                    alt={ele.name}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full px-3 py-4 justify-between flex-grow text-center">
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