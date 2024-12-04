import { Personne } from "./Personne.js";

export class Consultant extends Personne {
    constructor(candidat) {
        super();
        this.nom = candidat.nom;
        this.adress = candidat.adress;
    }
}