let formulaire = document.getElementById("formulaire");

let form = {};
formulaire.addEventListener("submit", function (event) {
    event.preventDefault()
    form.nom = document.getElementById("nom").value;
    form.age = document.getElementById("age").value;
    form.dateInscription = new Date(document.getElementById("date").value);

    let isValid = control(form);
    send(isValid);

})

function control(form) {
    let isValid = true;

    //Contrôle du nom
    let erreurNom = document.getElementById("erreurNom");
    if (form.nom.length < 3) {
        erreurNom.textContent = "Le nom doit contenir au moins 3 caractères.";
        isValid = false;
    } else {
        erreurNom.textContent = "";
    }

    //Contrôle de l'âge
    let erreurAge = document.getElementById("erreurAge");
    if (form.age < 18) {
        erreurAge.textContent = "Vous devez avoir plus de 18 ans.";
        isValid = false;
    } else {
        erreurAge.textContent = "";
    }

    //Contrôle date
    let erreurDate = document.getElementById("erreurDate");
    let aujourdHui = new Date();
    let douzeMoisenArriere = new Date().setFullYear(aujourdHui.getFullYear() - 1);
    if (form.dateInscription > douzeMoisenArriere) {
        erreurDate.textContent = "La date doit remonter à plus de douze mois."
        isValid = false;
    } else {
        erreurDate.textContent = "";
    }

    return isValid;

}

function send(isValid) {
    if (isValid) {
        console.log(form);
    }
}