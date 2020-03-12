import Character from './character';
import "/assets/wolverine.jpg";

class Wolverine extends Character{
    constructor (id, name, image) {
        super();
        this.id = 12;
        this.name = "Wolverine";
        this.image = "/assets/wolverine.jpg"
    }
}

export default Wolverine;