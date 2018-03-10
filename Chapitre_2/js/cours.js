// Affichage en utilisant la méthode getElement--, on a juste besoin
// d'écrire entre "" le nom de la balise. C'est le nom de la méthode
// qui varie

var titresElts = document.getElementsByTagName("h2"); // variables --Elts pour spécifier que ce sont plrs éléments du DOM
console.log(titresElts[0]);
console.log(titresElts.length);

// Tous les éléments ayant la classe "merveilles"
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++) {
    console.log(merveillesElts[i]);
}

console.log(document.getElementById("contenu"));

// AFFICHAGE EN UTILISANT LA METHODE querySelectorAll 
// il y a une manière spéciale d'écrire les données

// Elément portant l'identifiant "nouvelles"
console.log(document.querySelectorAll("#nouvelles")); // Bon affichage en fait
console.log(document.querySelectorAll("p")).length; // Affiche 3

// Tous les paragraphes
console.log(document.querySelectorAll("p").length); // Affiche 3

// Tous les paragraphes à l'intérieur de l'élément identifié par "contenu"
console.log(document.querySelectorAll("#contenu p").length); // Affiche 2

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length); // Affiche 8

// Tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe"
console.log(document.querySelectorAll("#antiques > .existe").length);
// Affiche 1


// Le contenu HTML de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").innerHTML);

// Le contenu textuel de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").textContent);

// L'attribut href du premier lien
console.log(document.querySelector("a").getAttribute("href"));


//ON PEUT AUSSI Y ACCEDER PAR LES PROPRIETES

// L'identifiant de la première liste
console.log(document.querySelector("ul").id);

// L'attribut href du premier lien
console.log(document.querySelector("a").href);


/*On peut vérifier la présence d'un attribut sur un élément grâce à la méthode hasAttribute, comme dans l'exemple ci - après. Ici si le lien permet d'ouvrir un fichier avec l'attribut target*/


if (document.querySelector("a").hasAttribute("target")) {
    console.log("Le premier lien possède l'attribut target");
} else {
    console.log("Le premier lien ne possède pas l'attribut target");
}


//Dans une page web, une balise peut posséder plusieurs classes. La propriéte classList permet de récupérer la liste des classes d'un élément du DOM. Elle s'utilise comme un tableau.

// Liste des classes de l'élément identifié par "antiques"

/*<ul class="merveilles" id="antiques">
            <li class="existe">La pyramide de Khéops</li>
            <li>Les jardins suspendus de Babylone</li>
            <li>Le phare d'Alexandrie</li>
        </ul>*/

var classes = document.getElementById("antiques").classList;
console.log(classes.length); // Affiche 1 : l'élément possède une seule classe
console.log(classes[0]); // Affiche "merveilles"


//Vous avez aussi la possibilité de tester la présence d'une classe dans //un élément en appelant la méthode contains sur la liste des classes.

if (document.getElementById("antiques").classList.contains("merveille")) {

    console.log("L'élément identifié par antiques possède la classe merveille");

} else {

    console.log("L'élément identifié par antiques ne possède pas la classe merveille");

}
