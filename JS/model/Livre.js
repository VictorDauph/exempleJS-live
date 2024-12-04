export class Livre {
    auteur;
    titre;
    #codeBarre = "l<fhielhfeLHFUEI";
    lireCodeBarre = () => console.log(this.#codeBarre);

    constructor(auteurParam, titreParam) {
        this.auteur = auteurParam;
        this.titre = titreParam;
    }
}