import Character from './character';
import "/assets/blackPanther.jpg";

class BlackPanther extends Character{
    constructor (id, name, image) {
        super();
        this.id = 2;
        this.name = "Black Panther";
        this.image = "/assets/blackPanther.jpg"
    }
}

export default BlackPanther;