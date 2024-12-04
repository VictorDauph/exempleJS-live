//modifier le texte d'un élément
let titre = document.getElementById("monTitre");
titre.textContent = "Nouveau Titre"

//injecter du code html dans un élément
titre.innerHTML = "<span class='blue'>Titre injecté</span>"

//Ajouter une element avec createElement

let nouveauParagraphe = document.createElement("p");
nouveauParagraphe.textContent = "Paragraphe ajouté !";

document.body.appendChild(nouveauParagraphe);

//supprimer un élément
//document.body.removeChild(nouveauParagraphe);
//nouveauParagraphe.remove();

// ajouter / supprimer une classe
nouveauParagraphe.classList.add("blue");
console.log(nouveauParagraphe.classList.contains("blue"));
nouveauParagraphe.classList.remove("blue");
console.log(nouveauParagraphe.classList.contains("blue"));

//Gérer les évènements
let monBouton = document.getElementById("monBouton");
let square = document.getElementById("square");

monBouton.addEventListener("click", function () {

    square.classList.toggle('d-none');
});

//parcourir les enfants d'un élément
let liste = document.getElementById("maListe");

for (let item of liste.children) {
    console.log(item.textContent);
}

//Gérer les évènements
let monBouton2 = document.getElementById("monBouton2");
let square2 = document.getElementById("square2");

let isPresent = true;
monBouton2.addEventListener("click", function () {

    isPresent = !isPresent;
    if (isPresent) {
        document.body.appendChild(square2);
    } else {
        square2.remove();
    }
});

document.body.addEventListener("click", function (event) {
    console.log("Position de la souris :", event.clientX, event.clientY);
});


//Empêcher comportement par défaut
let lien = document.getElementById("monLien");
lien.addEventListener("click", preventDefaultAndLog);

function preventDefaultAndLog(event) {
    event.preventDefault();
    console.log("Lien cliqué sans redirection !");


    lien.removeEventListener("click", preventDefaultAndLog);
}


//Ajouter des événements à plusieurs éléments
let listeElements = document.querySelectorAll("li");
//let listeElements = document.querySelectorAll(".listElement");
//let listeElements = document.querySelectorAll("#maListe li");

listeElements.forEach(element => {
    element.addEventListener("pointerover", () => console.log("liste element overed"));
})


