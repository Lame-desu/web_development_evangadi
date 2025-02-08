import { Component, useState } from "react";
import "./App.css";
import Menue from "./Components/Menue/menue";
import Options from "./assets/data";
import Options2 from "./assets/data2";
import Options3 from "./assets/dat3";

class App extends Component {
  render() {
    return (
      <>
        <header className="title">
          <h1>Evangadi Menu</h1>
          <div></div>
        </header>
        <div className="foods-container">
          {Options.map(({ title, price, img, desc }, i) => {
            return <Menue title={title} price={price} img={img} desc={desc} />;
          })}
        </div>
        <div className="foods-container">
          {Options2.map(({ title, price, img, desc }, i) => {
            return <Menue title={title} price={price} img={img} desc={desc} />;
          })}
        </div>
        <div className="foods-container">
          {Options3.map(({ title, price, img, desc }, i) => {
            return <Menue title={title} price={price} img={img} desc={desc} />;
          })}
        </div>
      </>
    );
  }
}
export default App;
