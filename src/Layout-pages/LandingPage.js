import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing-image">
        <img
          src="https://source.unsplash.com/random"
          style={{
            height: "500px",
            width: "500px",
            margin: "50px 0px 30px 240px",
            float: "left",
          }}
          alt="landing"
        />
      </div>
      <div className="enter">
        <h1>Welcome to Instaclone</h1>
        <button className="btn waves-effect waves-light #64b5f6 blue darken-1">
          <Link to="/post" style={{ color: "white" }}>
            Enter
          </Link>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
