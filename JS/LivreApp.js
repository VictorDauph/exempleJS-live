import { Livre } from "./model/Livre.js";
import { Roman } from "./model/Roman.js";
import { LivreUtils } from "./Utils/LivreUtils.js";

let JSmanuscrit = new Livre("VD", "Le manuscrit mystérieux du JS");
console.log(JSmanuscrit);
JSmanuscrit.lireCodeBarre();

let momoBio = new Livre("anonyme", "La biographie Mohammed")
console.log(momoBio);

let roman = new Roman("JCVD", "7 eme couleur", "Pinocchio");
console.log(roman);



LivreUtils.logLivre(roman);