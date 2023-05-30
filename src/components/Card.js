import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card(props) {
  let rev = props.review;

  return (
    <div className="flex flex-col md:relative mb-10">
      <div className="absolute top-[-7rem] z-[10] mx-auto">
        <img
          className=" rounded-full w-[170px] h-[170px] z-[25] object-cover"
          src={rev.image}
        />
        <div
          className="w-[170px] h-[170px] bg-violet-500 rounded-full absolute
         top-[-6px] z-[-10] left-[10px]"
        ></div>
      </div>
      <div className="text-center mt-7">
        <p className="tracking-wider font-bold text-2xl capitalize">
          {rev.name}
        </p>
        <p className="text-violet-300 uppercase text-sm">{rev.job}</p>
      </div>
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteLeft />
      </div>
      <div className="text-center mt-4 text-slate-500">{rev.text}</div>
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteRight />
      </div>
    </div>
  );
}

export default Card;
