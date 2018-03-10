//Créez ensuite le fichier js/instruments.js. Dans ce fichier, créez une fonction infosLiens qui doit afficher :

//le nombre total de liens dans la page web ;

//la cible du premier et du dernier lien.

function infosLiens() {

    console.log(document.querySelectorAll("a").length);
    console.log("Le premier lien " + document.querySelector("a").href);

    // Tous les éléments fils de des éléments identifiés par la balise "a" 
    var liens = document.querySelectorAll("a");
    var longueur = document.querySelectorAll("a").length;
    console.log("Le dernier lien " + liens[longueur - 1]);



}

// Fonction qui vérifie qu'un élément possède une classe.
// un élément dans une page html avec son id.

function possede(id, classe) {

    var instrument = document.getElementById(id); // tester s'il n'est pas "null".Pour ne pas avoir d'erreur dans le cas 
    if (instrument !== null) {
        if (document.getElementById(id).classList.contains(classe)) {
            console.log("true");
        } else if (!(document.getElementById(id).classList.contains(classe))) {
            console.log("false");

        }
    } else
        console.log("L'élément n'existe pas avec l'identifiant: " + id);
}



infosLiens();

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur
