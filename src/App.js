import React, { useState } from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";

const App = () => {
  const [comments, setComments] = useState(reviews);
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        <h3 className="text-black font-bold text-3xl leading-4 ml-4">
          Manchester City
        </h3>
        <div className="w-1/5 bg-violet-400 h-[4px] mx-auto mt-3 "></div>
        <Testimonial reviews={comments} />
      </div>
    </div>
  );
};

export default App;
