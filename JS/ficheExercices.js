//Tableau

let fruits = ["pomme", "banane", "cerise"];

fruits.push("orange");

fruits.shift();

console.log(fruits);

//fetch

fetch("https://jsonplaceholder.typicode.com/users/1",
    { method: "GET" })
    //récupère le body de la réponse et le convertit en un objet JS
    .then((response) => response.json())
    //On exploite l'objet récupéré en allant chercher un de ses attributs
    .then(user => console.log(user.username));