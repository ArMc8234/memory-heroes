import Character from './character';
import "/assets/apocalypse.jpg";

class Apocalypse extends Character{
    constructor (id, name, image) {
        super();
        this.id = 1;
        this.name = "Apocalypse";
        this.image = "/assets/apocalypse.jpg"
    }
}

export default Apocalypse;