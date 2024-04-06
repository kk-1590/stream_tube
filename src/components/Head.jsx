import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-9"
          alt="menu"
          src="src\utils\images\hamburger-menu.png"
        />
        <img
          className="h-9 mx-2"
          src="src\utils\images\Youtube-Logo-Vector.jpg"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="bg-gray-100 border border-gray px-5 py-2 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="src\utils\images\247319.png"
          alt="user-icon"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Head;
