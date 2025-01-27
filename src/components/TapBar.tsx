import React from "react";
import "../styles/TapBar.scss";

import radarIcon from "../assets/images/noun-planet.png";
import marketIcon from "../assets/images/energy.png";
import starshipIcon from "../assets/images/starship.png";
import tasksIcon from "../assets/images/document.png";
import friendsIcon from "../assets/images/friends.png";

const TapBar: React.FC = () => {
  return (
    <div className="tap-bar">
      <div className="tap-bar-buttons">
        <div className="tap-bar-button">
          <div
            className="tap-bar-icon"
            style={{ backgroundImage: `url(${radarIcon})` }}
          />
          <span className="tap-bar-text">Radar</span>
        </div>
        <div className="tap-bar-button">
          <div
            className="tap-bar-icon"
            style={{ backgroundImage: `url(${marketIcon})` }}
          />
          <span className="tap-bar-text">Market</span>
        </div>
        <div
          className="tap-bar-icon-starship"
          style={{ backgroundImage: `url(${starshipIcon})` }}
        />
        <div className="tap-bar-button">
          <div className="ellipse-background" />
          <span className="tap-bar-text-starship">Starship</span>
        </div>
        <div className="tap-bar-button">
          <div
            className="tap-bar-icon"
            style={{ backgroundImage: `url(${tasksIcon})` }}
          />
          <span className="tap-bar-text">Tasks</span>
        </div>
        <div className="tap-bar-button">
          <div
            className="tap-bar-icon"
            style={{ backgroundImage: `url(${friendsIcon})` }}
          />
          <span className="tap-bar-text">Friends</span>
        </div>
      </div>
    </div>
  );
};

export default TapBar;
