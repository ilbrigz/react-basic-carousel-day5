import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./Carousel";
import SliderImage from "./SliderImage";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">React-Basic-Carousel @day5</h1>
      <Carousel>
        <SliderImage
          src="https://source.unsplash.com/weekly?forest/200x200"
          alt=""
        />
        <SliderImage
          src="https://source.unsplash.com/weekly?farm/200x200"
          alt=""
        />
        <SliderImage
          src="https://source.unsplash.com/weekly?lake/200x200"
          alt=""
        />
        <SliderImage
          src="https://source.unsplash.com/weekly?river/200x200"
          alt=""
        />
        <SliderImage
          src="https://source.unsplash.com/weekly?ice/200x200"
          alt=""
        />
      </Carousel>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
