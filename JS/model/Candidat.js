import { Personne } from "./Personne.js";

export class Candidat extends Personne {
    #etape = 0;
    avancerEtape = () => {
        if (this.#etape < 5) {
            this.#etape++
        } else {
            console.log("le recrutement est terminé")
        }
    }
}