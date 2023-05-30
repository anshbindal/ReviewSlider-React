import React, { useState } from "react";

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
    <div>
      <div>
        <Card review={review[index]} />
      </div>
      <div>
        <button onClick={leftClickHandler}>Left</button>
        <button onClick={rightClickHandler}>Right</button>
      </div>
      <button onClick={supriseHandler}>Surprise Me</button>
    </div>
  );
}

export default Testimonial;
