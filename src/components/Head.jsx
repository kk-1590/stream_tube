import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-9 cursor-pointer"
          alt="menu"
          src="src\utils\images\hamburger-menu.png"
        />
        <a href="#">
          <img
            className="h-9 mx-2 cursor-pointer"
            src="src\utils\images\Youtube-Logo-Vector.jpg"
            alt="youtube-logo"
          />
        </a>
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
