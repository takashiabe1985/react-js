import React from "react";

const ColorfulMessage = (props) => {
  const contentStyle2 = {
    color: props.color,
    fontSize: "18px"
  };
  return <p style={contentStyle2}>{props.message}</p>;
};

export default ColorfulMessage;
