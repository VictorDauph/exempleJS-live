// commentaire simple ligne
console.log("Script javascript lancé 1");
console.log("Script javascript lancé 2");

/* commentaire
multiligne */

const nom = "Alice";
//const stringToLog = `Bonjour ${nom}`;

//Concaténation de string et propriété .length
const stringToLog = "Bonjour " + nom;
console.log(stringToLog + stringToLog.length
);

//exemple pour un objet
let utilisateurFinal = {
    nom: "Alice",
    age: -2
};

console.log(utilisateurFinal.nom);

//exemple pour un tableau
let fruits;
fruits = ["pomme", "banane", "fraise"];

fruits.push("mandarines");
fruits[1] = "melon";

console.log(fruits);
console.log(fruits[2]);

fruits.pop();
console.log(fruits);


//conditions if
if (utilisateurFinal.age >= 60) {
    console.log("senior");
}
else if (utilisateurFinal.age >= 18) {
    console.log("adulte");
}
else {
    console.log("enfant");
}

if (utilisateurFinal.age >= 0) {
    console.log("âge valide");
}

if (utilisateurFinal.age >= 0 && utilisateurFinal.nom === "Alice") {
    console.log("Alice a un âge valide");
}

if (utilisateurFinal.age < 0 || utilisateurFinal.age >= 150) {
    console.log("age invalide");
}

let jour = "vendredi";

switch (jour) {
    case "lundi":
        console.log("début de la semaine");
        break;
    case "vendredi":
        console.log("Presque le weekend");
        break;
    default:
        console.log("jour normal");
        break;
}

//for loop
for (let i = 0; i < 5; i++) {
    console.log(`itération ${i}`)
}

//while loop
let compteur = 0;
while (compteur < 3) {
    console.log(compteur);
    compteur++;
}

//do ... while loop
do {
    console.log("do ... while");
} while (false);

//for ... of loop
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach loop
fruits.forEach(fruit => {
    console.log(fruit);
})