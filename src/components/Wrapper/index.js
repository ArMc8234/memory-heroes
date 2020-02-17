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
      message:"",
    }
  }
    
  componentDidMount() {
    this.shuffleArray();
  }

  shuffleArray = () => {
    
    const characters = this.state.characters.sort(() => Math.random() - 0.5);
    this.setState({ characters });
  };

  toggle = (id) => {
    console.log("Key passed: ", id);
    let charactersList = [...this.state.characters];
    console.log("charactersList: ", charactersList);
    const selectedCharacter = charactersList.filter(character => {
      let newCharacter = character.id === id;
      return newCharacter;
    })
    console.log("selectedCharacter: ", selectedCharacter);
    console.log("selectedCharacter Status: ", selectedCharacter[0].clicked)
    if (selectedCharacter[0].clicked === false){
      let newPrompt = "Excellent Pick !" 
      this.setState({ message: newPrompt});

      selectedCharacter[0].clicked = true;
      // this.setState({ characters: this.state.characters.clicked === selectedCharacter[0].clicked})
      console.log("toggled to ", selectedCharacter[0].clicked)
    }
    else {
      console.log("Already toggled to true!");
      let newPrompt = " You Lose ! ";
      this.setState({ message: newPrompt,
       
      });
     
      this.reset()
    }
  }


  handleIncrement = (name) => {
      // We always use the setState method to update a component's state
     this.setState({ score: this.state.score + 1 });

    if (this.state.score >= this.state.topScore){
      this.setState({ topScore: this.state.score + 1})
    }

    this.shuffleArray();
  };

  reset = () => {
      const initialScore = -1;
      this.setState({ score: this.state.score = initialScore });
   
    //use map to reset all to false.
    let charactersList = [...this.state.characters];
    console.log("List to reset: ", charactersList);
    
    const resetStatus = charactersList.map(e => ({ ...e, clicked: false }));
    console.log("reset list:", resetStatus);
    
    this.setState({ characters: this.state.characters = resetStatus})
    this.shuffleArray();
  }
    

  topScoreCheck = () => {
    let currentScore = this.state.score;
    let currentTopScore = this.state.topScore;
    if (currentScore >= currentTopScore){
      this.setState({ topScore: this.state.score})
    }
  }


  render(){
    return (
      <>
       <Navbar message={this.state.message} score={this.state.score} topScore={this.state.topScore} />
        <Header alignment="text-center" />
          <div className="container">
              
                {this.state.characters.map(character => (
                      <CharacterCard
                        name={character.name}
                        image={character.image}
                        id={character.id}
                        key={character.id}
                        // type={"img"}
                        clicked={character.clicked.value}
                        toggle={this.toggle}
                        handleIncrement={this.handleIncrement}

                      />
                    ))}
             
          </div>
    </>
    )
  }
}



export default Wrapper;