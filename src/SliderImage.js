import React from "react";
import { Spring } from "react-spring";

const SliderImage = ({ src }) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => <img src={src} style={props} />}
    </Spring>
  );
};

export default SliderImage;
