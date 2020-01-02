import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/navbar";
import Header from "./components/header";
import characters from "./characters.json";




class App extends Component {
  state = {
    characters
  };

  render() {
    return (
      <div>

      <Navbar/>
      <Header alignment="text-center"/>
      <Wrapper>
        {this.state.characters.map(character =>(
          <CharacterCard
          name={character.name}
          image={character.image}
          key={character.id}
          type={"img-thumbnail"}
          />
        ))}
      </Wrapper>
      </div>
      );     
    }
  }
      
     
          

        



export default App;
