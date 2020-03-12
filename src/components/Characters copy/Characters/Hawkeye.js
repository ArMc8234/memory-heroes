import Character from './character';
import "/assets/hawkeye.jpg";

class Hawkeye extends Character{
    constructor (id, name, image) {
        super();
        this.id = 5;
        this.name = "Hawkeye";
        this.image = "/assets/hawkeye.jpg"
    }
}

export default Hawkeye;