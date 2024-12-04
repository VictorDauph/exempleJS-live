//création promesse
let promesse = new Promise((resolve, reject) => {
    let success = false;
    if (success === true) resolve("Succès !");
    else reject("Echec !!");
});

//résolution promesse
promesse.then(result => console.log(result)).catch(error => console.log(error));

console.log("suite");

//création promesse avec async
async function maTache() {
    return "fini !";
}

//utilisation de await
async function execution() {
    try {
        let resultat = await promesse;
        console.log(resultat);
    } catch (error) {
        console.error(error);
    }
}

execution();

//exemple de requête GET http
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then(json => console.log(json));


//exemple de requête POST http
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then(response => response.json())
    .then((json) => console.log(json));

//exemple de requête GET http
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then(json => console.log(json));


//exemple de requête POST http
fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        completed: false,
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then(response => response.json())
    .then((json) => console.log(json));


//Lecture fichier JSON
fetch("../data/userPlaceHolder.json")
    .then(response => {
        let userArray = response;
        response.json().then(data => {
            let userArray = data;
            console.dir(userArray);

            //extraction d'un user
            let user = userArray[0];
            console.log(user);

            //conversion d'un user en JSON
            let userString = JSON.stringify(user);

            //stockage d'un objet en JSON dans le local Storage
            localStorage.setItem("userString", userString);

            //récupération de l'objet en Json depuis le local storagae
            let retrievedUserString = localStorage.getItem("userString");

            //conversion en objet javascript
            let retrievedUser = JSON.parse(retrievedUserString);

            console.log(retrievedUser);
        })
    })