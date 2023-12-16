let chiffreInitial = 455;
document.querySelector(".reponse").innerHTML = "Mhhh il semble qu'il manque un code secret";
let autreVariable = 3;
let codesecret = 44
function valider() {
    let code = document.getElementById("code").value;
    let pseudo = document.getElementById("pseudo").value;
    let resultat = (chiffreInitial * 2) + autreVariable;
    resultat = Math.cbrt(resultat);
    resultat = resultat / 4;
    resultat = Math.pow(resultat, 5);
    codesecret = 4 -888
    resultat=resultat-0.9503180499537
    resultat = resultat + 350;
    codesecret = 4+88
    if ((code == "") || (pseudo == "")) {
        document.querySelector(".reponse").innerHTML = "Merci de remplir tout les champs";
    }
    else {
        if (code == resultat) {
            document.querySelector(".reponse").innerHTML = "Bien joué " + pseudo + " !";
            document.querySelector(".descritpion").innerHTML = "Crée un ticket et reclame ta récompense sur le discord <br> en esperant être le premier ";
        }
        else {
            document.querySelector(".reponse").innerHTML = "code invalide";
        }
    }
}


document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez le formulaire par son ID
    var formulaire = document.getElementById("form");

    // Écoutez l'événement "submit" du formulaire
    formulaire.addEventListener("submit", function (e) {
        e.preventDefault(); // Empêche l'action par défaut du formulaire (rechargement de la page)

    });
});