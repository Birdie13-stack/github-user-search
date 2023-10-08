import React from "react";
import moon from "../assets/moon.png";
import search from "../assets/search.png";
import Card from "../Components/Card";
import "../App.css";

function HomePage() {
  return (
    <div className="homepage">
      <div className="header">
        <div className="title-side">
          <h1 className="title">devfinder</h1>

          <label htmlFor="">
            <input type="checkbox" name="" id="" /> Dark
            <img src={moon} alt="" />
          </label>
        </div>

        <input type="text" placeholder="Search Github username..." />
      </div>
      <Card></Card>
    </div>
  );
}

export default HomePage;
