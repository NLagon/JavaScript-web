// TODO : écrire la fonction compterElements

function compterElements(element) {


    // querySelectorAll permet de sélectionner tous les sélecteurs
    return document.querySelectorAll(element).length;
}


console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3, le nombre 
//de fois où il y a la classe adjectif car .adjectif en CSS c'est pour //les classes

console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2
