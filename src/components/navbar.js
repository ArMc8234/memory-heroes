import React from "react";

function navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <ul className="nav">
                <li className="nav-item">
                    <a href="/">Super Clicks</a>
                </li>
                <li className="nav-item" id="result">{props.message}</li>
                <li className="nav-item" id="score">Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>
        </nav>
    );
  }
  
  export default navbar;