import Character from './character';
import "/assets/thanos.jpg";

class Thanos extends Character{
    constructor (id, name, image) {
        super();
        this.id = 11;
        this.name = "Thanos";
        this.image = "/assets/thanos.jpg"
    }
}

export default Thanos;