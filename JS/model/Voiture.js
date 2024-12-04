import { Vehicule } from "./Vehicule.js";

export class Voiture extends Vehicule {
    constructor(marque, modele) {
        super()
        this.marque = marque;
        this.modele = modele;
        this.nomComplet = marque + " " + modele;
        console.log("creation dune Voiture");
    }

    marque;
    modele;
    nomComplet;
    kilometrage = 0;
}