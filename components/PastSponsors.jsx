import React from "react";

const SponsorCard = ({ image }) => (
  <div className="w-40 h-40 bg-transparent border-4 border-[#F4CF8B] rotate-45 m-16 overflow-hidden flex flex-col flex-end transform transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,215,0,0.7),0_0_20px_rgba(0,0,0,0.5)] ">
    <div
      className="absolute inset-0  bg-cover bg-no-repeat bg-center  "
      style={{
        filter: "grayscale(100%)",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        scale: "2.2",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        transform: "rotate(-45deg)",
      }}
    ></div>
  </div>
);

const PastSponsors = () => {
  const images = [
    "/past1.png",
    "/past2.png",
    "/past3.png",
    "/past4.png",
    "/past5.png",
    "/past6.png",
    "/past7.png",
    "/past8.png",
  ];

  const sliderStyle = {
    display: "flex",
    width: "200%",
    animation: "scroll 20s linear infinite",
  };

  const keyframes = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;

  return (
    <div className=" bg-cover bg-no-repeat bg-center bg-transparent p-2 sm:p-4 bg- h-auto max-w-[100vw] flex flex-col items-start justify-start p-10 overflow-x-hidden">
      <span className="text-2xl md:text-3xl font-bold tracking-wide text-[#f4cf8b] mt-5 mx-auto font-serif">
        P A S T &nbsp;&nbsp; S P O N S O R S<br />
      </span>
      <div className=" w-auto h-auto flex flex-row justify-evenly ">
        <style>{keyframes}</style>

        {/* Scrolling container */}
        <div style={sliderStyle}>
          {/* Duplicate content for seamless scroll */}
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex">
              {images.map((image, index) => (
                <SponsorCard key={`${idx}-${index}`} image={image} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastSponsors;
