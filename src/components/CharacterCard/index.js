import React, { Component } from "react";
import "./style.css";


class CharacterCard extends Component {
 

 render(){
   return (
     
       <div className="img-container" >
         <img src={this.props.image} alt={this.props.name} className={this.props.type} id={this.props.id} clicked={this.props.clicked} onClick={()=> {this.props.toggle(this.props.id); this.props.handleIncrement(this.props.name)}} />
       </div>
    
       
     );

 }

     
}

export default CharacterCard;
