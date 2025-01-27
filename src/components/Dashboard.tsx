import React, { useEffect, useState } from "react";
import resource1 from "../assets/images/resources/resources-2.png";
import resource2 from "../assets/images/resources/resources-1.png";
import resource3 from "../assets/images/resources/resources.png";
import coin from "../assets/images/resources/coin.png";
import "../styles/Dashboard.scss";

interface DashboardProps {
  userData: {
    username: string;
  };
}

const resourceData = [
  { image: resource1, text: "4.2k" },
  { image: resource2, text: "6.7k" },
  { image: resource3, text: "5.1k" },
  { image: coin, text: "2.2M" },
];

const Dashboard: React.FC<DashboardProps> = ({ userData }) => {
  const [timeLeft, setTimeLeft] = useState(776);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="dashboard">
      <div className="head-dashboard">
        <div className="user-profile">
          <div className="profile-image" />
          <span className="username">{userData.username}</span>
        </div>
        <div className="top-panel">
          <div className="robot-image" />
          <div className="robot-status">
            <span className="robot-count">3 / 12</span>
            <span className="robot-label">active robots</span>
          </div>
        </div>
      </div>
      <div className="resources">
        {resourceData.map((resource, index) => (
          <div key={index} className="resources-block">
            <div className="image-container">
              <div
                className="resource-image"
                style={{ backgroundImage: `url(${resource.image})` }}
              />
            </div>
            <span className="resource-text">{resource.text}</span>
          </div>
        ))}
      </div>
      <div className="meta-info">
        <div className="energy-info">
          <div className="energy-image" />
          <div className="energy-value">
            <span className="energy-count">1.1k / 3.5k</span>
            <span className="energy-label">amount of energy</span>
          </div>
        </div>
        <div className="time-info">
          <div className="time-image" />
          <div className="time-value">
            <span className="time-count">{formatTime(timeLeft)}</span>
            <span className="time-label">time until energy ends</span>
          </div>
        </div>
      </div>
      <div className="progress-bar">
        <div className="filled-part" style={{ width: "70%" }} />
      </div>
    </div>
  );
};

export default Dashboard;
