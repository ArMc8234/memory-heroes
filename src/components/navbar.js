import React from "react";

function navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <ul className="nav">
                <li className="nav-item">
                    <a href="/">Super Clicks</a>
                </li>
                <li className="nav-item" id="result">Result</li>
                <li className="nav-item" id="score">Score 0 | Top Score 0</li>
            </ul>
        </nav>
    );
  }
  
  export default navbar;