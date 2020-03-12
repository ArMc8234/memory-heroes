import Character from './character';
import "/assets/ironman.jpg";

class IronMan extends Character{
    constructor (id, name, image) {
        super();
        this.id = 7;
        this.name = "Iron Man";
        this.image = "/assets/ironman.jpg"
    }
}

export default IronMan;