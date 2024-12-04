import { Candidat } from "./model/Candidat.js";
import { Consultant } from "./model/Consultant.js";

let candidat = new Candidat("Victor", "3 rue des Lilas 57000 Metz");
let candidat2 = new Candidat("Michel", "9 rue des Lilas 57000 Metz");

candidat.avancerEtape();
candidat.avancerEtape();
candidat.avancerEtape();
candidat.avancerEtape();
candidat.avancerEtape();
candidat.avancerEtape();

console.log(candidat);


let consultant = new Consultant(candidat);
let consultant2 = new Consultant(candidat2);

console.log(consultant);
console.log(consultant2);
