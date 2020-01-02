import React from "react";
import "./style.css";


function CharacterCard(props) {
  return (
    <img src={props.image} alt={props.name} className={props.type} key={props.id} />
     

  );
}

export default CharacterCard;
