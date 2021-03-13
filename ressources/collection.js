const tableau = new Array();

window.ajouterDansLaBiliotheque = (objet) => {
  tableau.push(objet);
  return tableau;
};

function getTableau(tableau) {
  if (tableau.length > 0) {
    tableau.forEach((element) => {
      document.querySelector(
        "#nomLivre"
      ).innerHTML = `Nom du livre : ${element.nomDuLivre}`;
      document.querySelector("#aut").innerHTML = `Auteur : ${element.auteur}`;
      document.querySelector(
        "#desc"
      ).innerHTML = `Description : ${element.description} `;
    });
  }
}
