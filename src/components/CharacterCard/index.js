import React, { Component } from "react";
import "./style.css";


class CharacterCard extends Component {
 
  // handleIncrement = () => {
  //   // We always use the setState method to update a component's state
  // // if(this.state.character.clicked === false){
  // this.setState({ characters: this.state.characters.clicked === true });
  // this.setState({ score: this.state.score + 1 });
  // // this.setState({ topScore: this.state.count + 1 });
  // // this.topScoreCheck();
  // // this.shuffleArray();
  // // }
  // // else if (this.state.characters.clicked === true){
  // //   this.topScoreCheck();
  // //   this.reset();

  // }
 render(){
   return (
    //  <div className="card" onClick={()=>this.props.handleIncrement}>
       <div className="card" id="img-container" >
         <img src={this.props.image} alt={this.props.name} className={this.props.type} key={this.props.id} clicked={this.props.clicked} onClick={()=> {this.props.toggle(this.props.clicked); this.props.handleIncrement(this.props.name)}} />
       </div>
    //  </div>
       
     );

 }

     
}

export default CharacterCard;
