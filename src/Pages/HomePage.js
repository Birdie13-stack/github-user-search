import React from "react";
import moon from "../assets/moon.png";
import Search from "../assets/search.png";
import Card from "../Components/Card";
import "../App.css";

function HomePage() {
  return (
    <div className="homepage">
      <div className="header">
        <div className="title-side">
          <h1 className="title">devfinder</h1>

          <label className="theme" htmlFor="">
            <input type="checkbox" name="" id="" /> Dark
            <img src={moon} alt="" />
          </label>
        </div>
      </div>

      <div className="search-container">
        <div className="search-field">
          <img src={Search} alt="" />
          <input
            className="search"
            type="text"
            placeholder="Search Github username..."
          />
        </div>
        <button>Search</button>
      </div>

      <div className="card-container">
        <Card />
      </div>
    </div>
  );
}

export default HomePage;
