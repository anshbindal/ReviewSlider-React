import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card from "./Card";
function Testimonial(props) {
  const [index, setIndex] = useState(0);
  let review = props.reviews;

  function leftClickHandler() {
    if (index - 1 < 0) {
      setIndex(review.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function rightClickHandler() {
    if (index + 1 === review.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function supriseHandler() {
    let randomIndex = Math.floor(Math.random() * review.length);
    setIndex(randomIndex);
  }
  return (
    <div
      className="w-[85vw] md:w-[700px] bg-white rounded-md flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl"
    >
      <Card review={review[index]} />

      <div className="flex gap-6 mb-5 text-3xl font-bold text-violet-400">
        <button
          onClick={leftClickHandler}
          className="hover:cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightClickHandler}
          className="hover:cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>
      <button
        onClick={supriseHandler}
        className="bg-violet-400 hover:bg-violet-500 transition-all duration-200
        cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
      >
        Surprise Me
      </button>
    </div>
  );
}

export default Testimonial;
