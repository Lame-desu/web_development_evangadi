import React, { Component } from "react";
import "./menue.css";
class Menue extends Component {
  render() {
    const { img, title, price, desc } = this.props;
    return (
      <div>
        <div className="single-food">
          <div className="img">
            <img src={img} />
          </div>
          <div className="title-price">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className="food-desc">{desc}</div>
        </div>
      </div>
    );
  }
}

export default Menue;
