import Character from './character';
import "/assets/professorX.jpg";

class ProfessorX extends Character{
    constructor (id, name, image) {
        super();
        this.id = 10;
        this.name = "Professor X";
        this.image = "/assets/professorX.jpg"
    }
}

export default ProfessorX;