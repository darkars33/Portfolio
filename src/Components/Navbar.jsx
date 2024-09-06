import React, { useState } from "react";
import img from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="w-screen fixed pt-5 px-10 flex justify-center z-50">
        <div className="text-white bg-brand-light/50 transform-translate-x-1/2 backdrop-blur-2xl shadow-xl p-3 px-6 rounded-full bg-primary border-[0.01rem] border-none flex justify-center items-center gap-5 md:w-[100%] md:justify-between md:p-2 md:px-4">
          <div
            className="w-[2.5rem] h-[2.5rem] bg-custom rounded-full object-center"
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
              backgroundSize: "40px ",
            }}
          ></div>
          <div className="flex gap-5 md:hidden">
            <li className="text-sm list-none font-semibold uppercase hover:text-[#00a789] cursor-pointer">
              Experience
            </li>
            <li className="text-sm list-none font-semibold uppercase hover:text-[#00a789] cursor-pointer">
              Projects
            </li>
            <li className="text-sm list-none font-semibold uppercase hover:text-[#00a789] cursor-pointer">
              Skills
            </li>
            <li className="text-sm list-none font-semibold uppercase hover:text-[#00a789] cursor-pointer">
              Achievements
            </li>
            <li className="text-sm list-none font-semibold uppercase hover:text-[#00a789] cursor-pointer">
              Recommendation
            </li>
            <li className="text-sm list-none font-semibold uppercase hover:text-[#00a789] cursor-pointer">
              Contact
            </li>
            <li className="text-sm list-none font-semibold uppercase hover:text-[#00a789] cursor-pointer">
              Resume
            </li>
          </div>
          <h1 className="hidden md:flex font-semibold text-sm">DARKARS33</h1>
          <RxHamburgerMenu
            className="hidden md:flex text-xl text-white/25 hover:text-white transition-colors duration-200"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </nav>

      
      <div
        className={`hidden absolute z-50 p-4 w-[100%] bg-[#071c19] rounded-lg top-20 left-0 shadow-xl bg-brand-light backdrop-blur-2xl transition-all duration-300 ease-in-out transform ${
          showMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        } md:flex flex-col justify-center items-center text-white gap-5`}
      >
        <li className="text-sm list-none font-semibold uppercase hover:text-[#00a789] cursor-pointer">
          Experience
        </li>
        <li className="text-sm list-none font-semibold uppercase hover:text-[#00a789] cursor-pointer">
          Projects
        </li>
        <li className="text-sm list-none font-semibold uppercase hover:text-[#00a789] cursor-pointer">
          Skills
        </li>
        <li className="text-sm list-none font-semibold uppercase hover:text-[#00a789] cursor-pointer">
          Achievements
        </li>
        <li className="text-sm list-none font-semibold uppercase hover:text-[#00a789] cursor-pointer">
          Recommendation
        </li>
        <li className="text-sm list-none font-semibold uppercase hover:text-[#00a789] cursor-pointer">
          Contact
        </li>
        <li className="text-sm list-none font-semibold uppercase hover:text-[#00a789] cursor-pointer">
          Resume
        </li>
      </div>
    </>
  );
};

export default Navbar;
