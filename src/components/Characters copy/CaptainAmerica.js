import Character from './character';
import "/assets/captainAmerica.jpg";

class CaptainAmerica extends Character{
    constructor (name, image) {
        super();
        this.id = 4;
        this.name = "Captain America";
        this.image = "/assets/captainAmerica.jpg"
    }
}

export default CaptainAmerica;