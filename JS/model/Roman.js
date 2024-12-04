import { Livre } from "./Livre.js";

export class Roman extends Livre {

    personnagePrincipal;

    constructor(auteurParam, titreParam, personnagePrincipalParam) {
        super();
        this.auteur = auteurParam;
        this.titre = titreParam;
        this.personnagePrincipal = personnagePrincipalParam;
    }

}