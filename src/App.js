import React, { useState } from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";

const App = () => {
  const [comments, setComments] = useState(reviews);
  return (
    <div>
      <div>
        <h3>Manchester City Comments</h3>
        <div></div>
      </div>
      <Testimonial reviews={comments} />
    </div>
  );
};

export default App;
