import React, { Component } from "react";
import "./style.css";
import Navbar from "../navbar";
import Header from "../header";
import CharacterCard from "../CharacterCard";
import characters from "../../characters.json"


class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      topScore: 0,
      count: 0,
      characters,
    }
  }
    
  componentDidMount() {
    this.shuffleArray();
  }

  shuffleArray = () => {
    const characters = this.state.characters.sort(() => Math.random() - 0.5);
    this.setState({ characters });
  };
  handleIncrement = (name) => {
      // We always use the setState method to update a component's state
      //   const newCard = [...this.state.characters];
      //   const index = newCard.indexOf(this.state.characters);
        
      //   if(newCard[index].clicked == true ){
      //     const newCard2= [...this.state.characters];
      //     newCard2.map(c=> c.clicked =false );
      //     if(this.state.score > this.state.topScore){
      //         var newRecord;
      //         newRecord = this.state.score;
      //     }else{
      //         newRecord = this.state.topScore
      //     }
  
      //     this.setState({score: 0, characters:newCard2, topScore:newRecord});
  
      // }else{
      //    newCard[index].picked = true;
      //    const newScore = this.state.score +1;
      //    newCard.sort(()=> Math.random()-0.5); 
      //    this.setState({characters: newCard, score:newScore,}); 
      // }
    // if(this.state.character.clicked === false){
    // this.setState({ characters: this.state.characters.clicked === true });
    this.setState({ score: this.state.score + 1 });
    this.setState({ topScore: this.state.topScore + 1 });
    console.log("Clicked", name)
    // this.topScoreCheck();
    // this.shuffleArray();
    // }
    // else if (this.state.characters.clicked === true){
    //   this.topScoreCheck();
    //   this.reset();

    // }
  };

  reset = () => {
    this.setState({ score: this.state.score === 0 });
    this.shuffleArray()
    //use map to reset all to false.
    this.state.characters.map(character => character.clicked === false )
   
  }

  topScoreCheck = () => {
    let currentScore = this.state.score;
    let currentTopScore = this.state.topScore;
    if (currentScore >= currentTopScore){
      this.setState({ topScore: this.state.score})
    }
  }
  toggle = (clicked) => {
    console.log("toggle value: ", clicked)
    if (clicked === false){
      clicked = true;
      this.setState({ characters: this.state.characters.clicked === clicked})
      console.log("toggled to ", clicked)
    }
    else {
      console.log("Already toggled to true!")
    }
  }

  render(){
    return (
    <div className="container">
       <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Header alignment="text-center" />
        <div >
          {this.state.characters.map(character => (
                <CharacterCard
                  name={character.name}
                  image={character.image}
                  key={character.id}
                  // type={"img"}
                  clicked={character.clicked}
                  handleIncrement={this.handleIncrement}
                  toggle={this.toggle}

                />
              ))}
        </div>
    </div>
    )
  }
}



export default Wrapper;