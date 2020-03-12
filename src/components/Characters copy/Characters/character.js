import { Component } from 'react';

class Character extends Component {
    constructor(id, name, clicked, image) {
        super();
        this.id = id;
        this.name = name;
        this.image = image;
        this.clicked = false;
    }

    clickedCard(){
        if (this.clicked === false){
            this.clicked = true;
            this.handleIncrement()
            this.shuffleArray();
        }
        else {
            this.reset()
            //reset must set all cards from clicked to false
            //set score to zero
        }
    }
}
export default Character;