document.getElementById("LesRDVduLagon").onclick = function() {
  document.getElementById("accueil").style.display = "none";
  document.getElementById("ecranCartographie").style.display = "block";
}

document.getElementById("enregistrerévènement").onclick = function() {
  document.getElementById("accueil").style.display = "none";
  document.getElementById("ecranEnregistrerContact").style.display = "block";
}

document.getElementById("retourAccueil1").onclick = function() {
  document.getElementById("accueil").style.display = "flex";
  document.getElementById("ecranCartographie").style.display = "none";
}

document.getElementById("retourAccueil2").onclick = function() {
  document.getElementById("accueil").style.display = "flex";
  document.getElementById("ecranEnregistrerContact").style.display = "none";
}


document.getElementById("enregistrer").onclick = function() {
  var contact = {
    nom: document.getElementById("nom").value,
    prenom: document.getElementById("prenom").value,
    societe: document.getElementById("societe").value,
    telephone: document.getElementById("telephone").value,
    mail: document.getElementById("mail").value
  }
  
  console.log(contact);
}

// Fonction pour afficher la page Actualités
document.getElementById('siteneOcean').addEventListener('click', function() {
    document.getElementById('accueil').style.display = 'none';
    document.getElementById('ecranActualites').style.display = 'block';
});

// Gestion du bouton Retour dans la page Actualités
document.getElementById('retourAccueil3').addEventListener('click', function() {
    document.getElementById('ecranActualites').style.display = 'none';
    document.getElementById('accueil').style.display = 'block';
}


