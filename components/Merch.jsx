import React from "react";

const Merch = () => {
  const handleRedirect = (e) => {
    e.preventDefault(); // Prevent default button action
    setTimeout(() => {
      window.open("https://forms.gle/v3k3ijFrfkSqdKKS6", "_blank"); // Open in a new tab after delay
    }, 800); // 500ms delay
  };
  return (
    <div className="w-[95vw] h-[70vh] md:w-[47vw] md:h-[59.5vh] min820:h-[52vh] min912:h-[42.5vh] lg:w-[50vw] lg:h-[41vh] xl:h-[91vh] xl:w-[30vw] 2xl:h-[62vh] bg-[url('/merchposter.webp')] filter md:brightness-50 md:hover:brightness-100 transition duration-300 relative bg-cover bg-no-repeat bg-[50%_0%] py-6 lg:py-4 px-4  flex flex-col items-center mx-auto max-w-screen-sm sm:max-w-md md:max-w-lg border rounded-xl border-[#f4cf8b] backdrop-blur-sm">
      {/* <h2 className="mb-4 text-3xl xl:text-4xl 2xl:text-5xl tracking-wider font-medium text-center text-[#f4cf8b]">
        Buy Our Merch
      </h2> */}
      <p className="font-medium text-center text-[#f4cf8b] text-lg sm:text-lg 2xl:text-xl mt-4 xl:mt-7">
        All for ₹ 950 /-
      </p>
      <form className="space-y-6 rounded-full absolute bottom-10 backdrop-grayscale-10 bg-[#482d4e]">
      <button
      className="cartBtn w-[165px] h-[45px] flex items-center justify-center gap-[7px] text-white font-medium pb-[0.5px] relative shadow-[0_20px_30px_-7px_rgba(27,27,27,0.219)] transition-all duration-300 ease-in-out cursor-pointer overflow-hidden active:scale-95"
      onClick={handleRedirect}
    >
      {/* Cart SVG Icon */}
      <svg
        className="cart"  // Ensure cart icon is above product icon
        fill="#faa9ff"
        viewBox="0 0 576 512"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
      </svg>
      
      Save the deal⚡
      
      {/* Product SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 640 512"
        className="product"
      >
        <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z"></path>
      </svg>
    </button>
      </form>
    </div>
  );
};

export default Merch;
