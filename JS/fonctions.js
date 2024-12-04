//déclaration fonction
function direBonjour() {
    console.log("Bonjour");
}

direBonjour();

//exemple paramètres et retours
function addition(number1, number2) {
    let somme = number1 + number2;
    return somme;
}

console.log(addition(2, 2));

//Ewemple arrow functions
const multiplier = (x, y) => x * y;
console.log(multiplier(3, 4));

const calculer = (x, y) => {
    const result = multiplier(3, 4);
    return "le resultat est : " + result;
}

console.log(calculer(3, 4));

//fonction anonyme
let afficherMessage = function (message) {
    console.log(message);
}

afficherMessage("Le message à afficher dans une fonction anonyme");


//les callbacks
function effectuerTache(fonctionAEffectuer) {
    console.log("Tâche démarré");
    fonctionAEffectuer();
    console.log("fin tâche");
}

//callback fonction anonyme
effectuerTache(function () { console.log("Callback anonyme"); })

//callback arrowFunction
effectuerTache(() => console.log("callback arrow function"));

//callback fonction classique
function afficherMessageClassique() {
    console.log("callback classique");
}

effectuerTache(afficherMessageClassique);

//settimeout
setTimeout(() => {
    console.log("time is over")
}, 10000);

//Retourner plusieurs valeurs
function retoursMultiples(a, b, c) {
    let retour1 = a * b;
    let retour2 = a * c;
    let retour3 = a / b;

    //return [retour1, retour2, retour3];
    return { retour1: retour1, retour2: retour2, retour3: retour3 };
}

console.log(retoursMultiples(2, 3, 4))