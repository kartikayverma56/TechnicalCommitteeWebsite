import React from "react";

const Merch = () => {
  return (
    <div className="py-6 lg:py-4 px-4 flex flex-col items-center mx-auto max-w-screen-sm sm:max-w-md md:max-w-lg border rounded-xl border-[#f4cf8b] backdrop-blur-sm">
      <h2 className="mb-4 text-3xl xl:text-4xl 2xl:text-5xl tracking-wider font-medium text-center text-[#f4cf8b]">
        Merch Setu{" "}
      </h2>
      <p className="mb-3 font-light text-center text-[#f4cf8b] text-sm sm:text-lg 2xl:text-xl">
        About Merch
      </p>
      <img src="merch.png" alt="" />
      <form className="space-y-6">
        <button
          type="submit"
          className="py-2 cursor-not-allowed px-5 text-sm font-medium text-center text-[#000000] rounded-lg bg-[#f4cf8b] sm:w-fit hover:bg-[#d8a657] hover:text-[#000000] focus:ring-4 focus:outline-none focus:ring-[#d8a657]"
        >
          Coming Soon...{" "}
        </button>
      </form>
    </div>
  );
};

export default Merch;