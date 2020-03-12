import Character from './character';
import "/assets/kingpin.jpg";

class Kingpin extends Character{
    constructor (id, name, image) {
        super();
        this.id = 8;
        this.name = "Kingpin";
        this.image = "/assets/kingpin.jpg"
    }
}

export default Kingpin;