import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/navbar";
import Header from "./components/header";
import characters from "./characters.json";




class App extends Component {
  state = {
    characters,
    score: 0,
    topScore: 0,
    count: 0
  
  };

  componentDidMount (){
    this.shuffleArray();
  } 
  
  
  shuffleArray = () => {
    const characters = this.state.characters.sort(() => Math.random() - 0.5);
    this.setState({characters});
  }
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    // if(this.state.count === 0){
      this.setState({ score: this.state.score + 1 });
      this.setState({ topScore: this.state.topScore + 1 });
     
    // }
  };
 
  // characterClicked =(event) => {
  //   if
  // }

  render() {
    return (
      <div>

      <Navbar score={this.state.score} topScore={this.state.topScore} />
      <Header alignment="text-center"/>
      <Wrapper>
        {this.state.characters.map(character =>(
         <div className="imgDiv" onClick={this.handleIncrement}>
           <CharacterCard
            name={character.name}
            image={character.image}
            key={character.id}
            type={"img-thumbnail"}
            count={0}
            />
         </div>
        ))}
      </Wrapper>
      </div>
      );     
    }
  }

      
     
          

        



export default App;
