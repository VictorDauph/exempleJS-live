let fruits = ["pomme", "banane", "fraises"];

//map
let bigFruits = fruits.map((fruit) => {
    let bigFruit = "big " + fruit;
    return bigFruit;
})

console.log(fruits);
console.log(bigFruits);

//filter
let nombres = [];

for (let i = 0; i <= 100; i++) {
    nombres.push(i);
}

console.log(nombres);

let pairs = nombres.filter(nombre => nombre % 2 === 0);

console.log(pairs);

//reduce
let somme = nombres.reduce((sommeIntermediaire, nombre) => {
    return sommeIntermediaire + nombre;
})

console.log(somme);

let concatFruits = fruits.reduce((concatString, fruit) => {
    return concatString + " " + fruit;
})

console.log(concatFruits);

//spread operator pour cloner un objet

let utilisateur = {
    age: 25,
    nom: "Alice"
}


let copie = { ...utilisateur };

utilisateur.age = 27;

console.log(copie);
console.log(utilisateur);


//Destructuration d'un objet
let { nom, age } = utilisateur;

console.log(nom);
console.log(age);

//For ... in

for (let cle in utilisateur) {
    console.log(cle + " : " + utilisateur[cle]);
}



//stocker un objet dans le local storage
localStorage.setItem("nom", utilisateur.nom);
localStorage.setItem("age", utilisateur.age);