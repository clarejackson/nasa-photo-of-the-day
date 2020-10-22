import React from "react";
import CardHeader from "./CardHeader";
import CardDescription from "./CardDescription";
import {} from 'reactstrap';


const Card = (props) => {
  const { photo, description, header } = props.apod
  return (
    <div>
    <img src={photo}/>
    <CardHeader header={header}/>
    <CardDescription description={description}/>
    </div>
  );
};


//return h2 card









export default Card;