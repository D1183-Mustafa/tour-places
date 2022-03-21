import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

function ContainerCard() {
  return(
    
  )
}
function Card({title,image}) {
  return (
    <div className="mycard">
    <h3>{title}</h3>
    <img src={image} alt="myimg" />
  </div>
  );
}

export default Card;
