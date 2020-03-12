import Character from './character';
import "/assets/hulk.jpg";

class Hulk extends Character{
    constructor (name, image) {
        super();
        this.id = 6;
        this.name = "Hulk";
        this.image = "/assets/hulk.jpg"
    }
}

export default Hulk;