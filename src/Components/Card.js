import React from "react";
import CardHeader from "./CardHeader";
import CardDescription from "./CardDescription";
import { Card, CardImg } from 'reactstrap';


const NasaCard = (props) => {
  const { photo, description, header } = props.apod
  return (
    <div>
    <Card body inverse color="info">
    <CardImg top width="100%" src={photo} alt="NASA photo of the day"/>
    <CardHeader header={header}/>
    <CardDescription description={description}/>
    </Card>
    </div>
  );
};


export default NasaCard;