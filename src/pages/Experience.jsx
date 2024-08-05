import React from "react";
import { PiSuitcaseSimple } from "react-icons/pi";

const Experience = () => {
  return (
    <div className="w-screen py-10 flex place-content-center overflow-hidden">
      <div className="max-w-5xl flex flex-col gap-10">
        <div className="flex items-center gap-2">
          <PiSuitcaseSimple className="text-xl text-white" />
          <h1 className="font-bold uppercase text-sm text-white/80  whitespace-nowrap flex gap-3">
            Experiences
          </h1>
          <div className="w-full bg-lightColor h-0.5 rounded-full"></div>
        </div>
        <div className="flex p-4  border-lightColor shadow-sm rounded-xl">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugit, reiciendis, neque minus voluptas porro, libero cumque nam iure ullam laborum animi? Quidem ducimus quaerat eos sapiente odit voluptas ipsum. Doloremque, veritatis nulla repellat illo consequuntur enim omnis quia labore accusamus quod ipsum sit facere dolor accusantium eius fuga aperiam!</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
