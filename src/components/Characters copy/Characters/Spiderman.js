import Character from './character';
import "/assets/captain_cosmic_spiderman.jpg";

class Spiderman extends Character{
    constructor (id, name, image) {
        super();
        this.id = 3;
        this.name = "Captain Universe Spiderman";
        this.image = "/assets/captain_cosmic_spiderman.jpg"
    }
}

export default Spiderman;