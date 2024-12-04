export class Compte {
    #solde = 1000;
    afficherSolde() {
        console.log(`Solde : ${this.#solde} €`);
    }
}