import React, { Component } from "react";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 1,
      in: true
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }
  nextSlide() {
    const lastIndex = this.props.children.length - 1;
    this.setState(prevState => {
      if (prevState.currentIndex === lastIndex) {
        return { currentIndex: 0 };
      }
      return { currentIndex: prevState.currentIndex + 1 };
    });
  }
  previousSlide() {
    const lastIndex = this.props.children.length - 1;
    this.setState(prevState => {
      if (prevState.currentIndex === 0) {
        return { currentIndex: lastIndex };
      }
      return { currentIndex: prevState.currentIndex - 1 };
    });
  }
  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child);
    });
    return (
      <React.Fragment>
        <div className="carousel">{children[this.state.currentIndex]}</div>
        <div className="btn-container">
          <button onClick={this.previousSlide}>prev</button>
          <button onClick={this.nextSlide}>next</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Carousel;
