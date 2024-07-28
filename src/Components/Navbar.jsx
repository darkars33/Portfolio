import React, {useState} from "react";
import { PiQrCode } from "react-icons/pi";
import { CiHome,CiImageOn } from "react-icons/ci";
import { RiContactsLine, RiContactsBook3Line } from "react-icons/ri";
import { AiOutlineFileText } from "react-icons/ai";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="w-screen fixed p-5 pt-10  flex justify-center">
        <ul className="w-[50%] px-5 py-3 rounded-xl border-[0.01rem] border-transparent flex justify-between  bg-clip bg-gradient-to-r from-slate-200 to-slate-100 md:w-[100%]  mb:hidden">
          <li className="text-[1.2rem] text-slate-400 hover:text-black cursor-pointer">
            Home
          </li>
          <li className="text-[1.2rem] text-slate-400 hover:text-black cursor-pointer">
            About
          </li>
          <li className="text-[1.2rem] text-slate-400 hover:text-black cursor-pointer">
            Skills
          </li>
          <li className="text-[1.2rem] text-slate-400 hover:text-black cursor-pointer">
            Portfolio
          </li>
          <li className="text-[1.2rem] text-slate-400 hover:text-black cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
      <div className="absolute hidden mb:block w-screen p-5 border-[2px] border-slate-200 rounded-xl bottom-0">
        {showMenu && <div className="w-[100%] flex justify-between items-center">
          <h1 className="text-[1.4rem]">Darshan</h1>
          <PiQrCode className="text-[2rem]" />
        </div>}
        <div className="w-[100%] p-4">
          <ul className="flex gap-20 flex-wrap justify-center items-center">
            <li className="text-[1.2rem] text-slate-400 hover:text-black cursor-pointer flex flex-col items-center">
              <CiHome className="text-[1.5rem]" />
              Home
            </li>
            <li className="text-[1.2rem] text-slate-400 hover:text-black cursor-pointer flex flex-col items-center">
              <RiContactsLine className="text-[1.5rem]" />
              About
            </li>
            <li className="text-[1.2rem] text-slate-400 hover:text-black cursor-pointer flex flex-col items-center">
              <AiOutlineFileText className="text-[1.5rem]" />
              Skills
            </li>
            <li className="text-[1.2rem] text-slate-400 hover:text-black cursor-pointer flex flex-col items-center">
              <CiImageOn className="text-[1.5rem]" />
              Portfolio
            </li>
            <li className="text-[1.2rem] text-slate-400 hover:text-black cursor-pointer flex flex-col items-center">
              <RiContactsBook3Line className="text-[1.5rem]" />
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
