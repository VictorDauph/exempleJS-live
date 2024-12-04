let formulaire = document.getElementById("monFormulaire");

formulaire.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l’envoi réel
    console.log("Formulaire soumis !");
});

//logger les changements de données en live
Array.from(formulaire.elements).forEach(champ =>
    champ.addEventListener("change", function () {
        console.log("Valeur modifiée :", champ.value);
    })
)

let form = {};

formulaire.addEventListener("submit", function (event) {
    event.preventDefault();
    form.nom = document.getElementById("nom").value;
    form.email = document.getElementById("email").value;
    form.age = document.getElementById("age").value;
    form.sexe = document.getElementById("sexe").value;

    //Contrôle
    let isCorrect = control(form);
    send(isCorrect);
})

function control(form) {
    if (form.age >= 18) {
        return true;
    }
    return false;
}

function send(controlBool) {
    if (controlBool) {
        console.log(form);
    }
}

