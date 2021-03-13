let id;
let nomDuLivre;
let auteur;
let description;
let livre = {};
let resultat = {};

const functionAffiche = (tag, ifDisplay) => {
  if (ifDisplay) {
    return (document.querySelector(tag).style.display = "block");
  } else {
    return (document.querySelector(tag).style.display = "none");
  }
};

function constructeurLivre(nomDuLivre, auteur, description) {
  this.nomDuLivre = nomDuLivre;
  this.auteur = auteur;
  this.description = description;
}

function resetAffichage() {
  functionAffiche(".Ajout", false);
  functionAffiche(".bibliotheque", false);
  functionAffiche(".modifier", false);
  functionAffiche(".supprimer", false);
}

resetAffichage();

document.querySelector("#ajouter").onclick = function ajouterUnLivre() {
  resetAffichage();
  functionAffiche(".Ajout", true);
  if (document.querySelector("#envoyer")) {
    document.querySelector("#envoyer").onclick = function letsGo() {
      nomDuLivre = document.querySelector("#nomDuLivre").value;
      auteur = document.querySelector("#auteur").value;
      description = document.querySelector("#description").value;
      livre = new constructeurLivre(nomDuLivre, auteur, description);
      resultat = ajouterDansLaBiliotheque(livre);
      console.log(resultat);
      document.querySelector(
        ".Ajout"
      ).innerHTML = `<br>Votre livre a bien été ajouté !<h3>Voici le détail :</h3>Nom du livre: ${nomDuLivre} <br> Auteur: ${auteur}<br> Description: ${description}<br><br>`;
      document.querySelector("#test").style.display = "none";
      return resultat;
    };
  } else {
    window.location.href = "index.html";
    functionAffiche(".Ajout", false);
  }
};

document.querySelector("#consulter").onclick = function consulter() {
  resetAffichage();
  functionAffiche(".bibliotheque", true);

  getTableau(resultat);
};
