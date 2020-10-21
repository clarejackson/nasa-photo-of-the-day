import React from "react";
import CardHeader from "./CardHeader"


const Card = (props) => {
  const { photo, description, header } = props.apod
  return (
    <div>
    <img src={photo}/>
    <CardHeader header={header}/>
    </div>
  );
};


//return h2 card









export default Card;