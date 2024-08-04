import React from "react";
import profile from "../assets/logo.png";
import { AiOutlineGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { CiInstagram } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  return (
    <div className="z-50 w-screen p-5  flex justify-center">
      <div className="w-[70vw] p-4 mt-48 md:w-[100%] md:mt-20">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-10">
            <div
              className="w-[8rem] h-[10rem] bg-custom rounded- object-center rounded-r-[50%] rounded-b-[50%]"
              style={{
                backgroundImage: `url(${profile})`,
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "150px ",
              }}
            ></div>
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-semibold text-white mb:text-3xl">
                Darshan Garad
              </h1>
              <p className="text-2xl font-semibold text-text mb:text-xl">
                Full Stack Developer
              </p>
              <div className="flex gap-5 text-lightColor text-[1.5rem]">
                <a
                  href="https://github.com/darkars33"
                  target="_blank"
                  className="hover:text-white"
                >
                  {" "}
                  <AiOutlineGithub />{" "}
                </a>
                <a
                  href="https://linkedin.com/in/darshan-garad-6b386b252"
                  target="_blank"
                  className="hover:text-white"
                >
                  {" "}
                  <IoLogoLinkedin />{" "}
                </a>
                <a
                  href="https://www.instagram.com/darkars_33/"
                  target="_blank"
                  className="hover:text-white"
                >
                  {" "}
                  <CiInstagram />{" "}
                </a>
                <a
                  href="mailto:darshangarad18@gmail.com?Subject=Some%20subject"
                  className="hover:text-white"
                >
                  <MdEmail />{" "}
                </a>
              </div>
            </div>
          </div>
          <p className="text-xl text-white text-justify">
            Hi there 👋, I'm a software engineer focused on creating fast,
            reliable, and engaging software solutions and web applications. I
            thrive on connecting with others and continuously pushing the
            boundaries of digital innovation.
          </p>
          <div className="w-[100%] p-3 bg-custom rounded-full flex items-center gap-5 md:flex-col md:items-start md:rounded-xl">
            <a href="#" className="p-2 bg-text rounded-full px-3 font-semibold">Open to work</a>
            <p className="text-white">Seeking Web Development Internship Opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
