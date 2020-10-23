import React from "react";
import { CardTitle } from "reactstrap"

const CardHeader = (props) => {

  return (
    <div>
      <CardTitle>{props.header}</CardTitle>
    </div>
  
  )}

export default CardHeader;