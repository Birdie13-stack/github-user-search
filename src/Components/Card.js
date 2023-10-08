import React from "react";
import avatar from "../assets/oval.png";
import pin from "../assets/pin.png";
import bird from "../assets/twitter.png";
import url from "../assets/url.png";
import location from "../assets/office-building.png";
import "../App.css";

function Card() {
  return (
    <div className="profile-card">
      <img src={avatar} alt="" className="main-img" />

      <div className="profile-text">
        <h2>The Octocat</h2>

        <p className="time">Joined 25 Jun 2021</p>
        <p className="handle">@octocat</p>

        <p className="bio">This profile has no bio</p>

        <div className="stats">
          <p>
            Repos <br />
            <span className="numbers">8</span>
          </p>

          <p>
            Followers <br />
            <span className="numbers">3938</span>
          </p>

          <p>
            Following <br />
            <span className="numbers">9</span>
          </p>
        </div>

        <div className="info">
          <div>
            <img src={pin} alt="" />

            <p>San Francisco</p>
          </div>
          <div>
            <img src={bird} alt="" />

            <p className="twitter">Not Available</p>
          </div>
          <div>
            <img src={url} alt="" />

            <p>https://github.blog</p>
          </div>
          <div>
            <img src={location} alt="" />

            <p>@github</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
