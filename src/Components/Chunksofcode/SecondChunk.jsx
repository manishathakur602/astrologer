import React from 'react';
import { IoChatbubblesOutline } from "react-icons/io5";

function SecondChunk({name1,name2, name3,para}) {
  return (
    <section className="  py-3 bg-white ibarra-real-nova">
   <div className="max-w-xl w-full mx-auto flex flex-col space-y-4 md:space-y-5">

        <h1 className="text-3xl font-bold lg:text-6xl ">{name1}</h1>
        <h2 className="text-2xl font-semibold lg:text-6xl">{name2}</h2>
        <h3 className="text-xl font-medium  lg:text-6xl">{name3}</h3>
        <p className="text-gray-600 leading-relaxed">
         {para}
        </p>
        <div>
        {/* <a
        href="tel:+919876259510"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black rounded-md px-6 py-1  text-white flex gap-2 items-center justify-center hover:bg-gray-800 transition"
      >
        <IoChatbubblesOutline className="text-lg" />
        Chat Now
      </a> */}
              <a
        href="https://wa.me/9876259510"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black rounded-md px-6 py-1  text-white flex gap-2 items-center justify-center hover:bg-gray-800 transition"
      >
        <IoChatbubblesOutline className="text-lg" />
        Chat Now
      </a>

        
        </div>
      </div>
    </section>
  );
}

export default SecondChunk;
