import Character from './character';
import "/assets/misterSinister.jpg";

class Sinister extends Character{
    constructor (id, name, image) {
        super();
        this.id = 9;
        this.name = "Mr. Sinitser";
        this.image = "/assets/misterSinister.jpg"
    }
}

export default Sinister;