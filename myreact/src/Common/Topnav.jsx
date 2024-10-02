import React from "react";

export default function Topnav() {
  return (
    <div className="topnav">
      <a href="/">
        Home<i className="fa-solid fa-house"></i>
      </a>
      <a href="/">
        Profile<i className="fa-solid fa-user"></i>
      </a>
      <a href="/">
        About<i className="fa-solid fa-circle-info"></i>
      </a>
    </div>
  );
}
