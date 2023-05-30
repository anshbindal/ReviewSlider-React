import React from "react";

function Card(props) {
  let rev = props.review;
  console.log(rev);
  return (
    <div>
      <div>
        <img src={rev.image} width={30} height={30} />
      </div>
      <div>
        <h3>{rev.name}</h3>
        <h4>{rev.job}</h4>
      </div>
      <div>
        <p>{rev.text}</p>
      </div>
    </div>
  );
}

export default Card;
