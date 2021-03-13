var hello = "Salut !";
var jaiEtéPoli = false;
var step2 = false;

var emplacement1 = document.querySelector("#emplacement1");
var blocACacher = document.querySelector("#blocACacher");
var dynamique = document.querySelector("#dynamique");

console.log(document);

document.getElementById("bouton1").onclick = function direBonjour() {
  if (jaiEtéPoli) {
    document.getElementById("bouton1").style.display = "none";
    emplacement1.innerHTML = "Qu'est-ce que tu veux ?";
    step2 = true;
  } else {
    document.getElementById("bouton1").innerHTML = "Continuer";
    emplacement1.style.display = "block";
    emplacement1.innerHTML = hello;
    jaiEtéPoli = true;
  }
  setTimeout(() => {
    if (step2) {
      blocACacher.style.display = "block";
    }
  }, 500);
};

document.getElementById("bouton2").onclick = function nettoyer() {
  if (step2) {
    document.getElementById("bouton1").style.display = "block";
    emplacement1.style.display = "none";
    blocACacher.style.display = "none";
    step2 = false;
    jaiEtéPoli = false;
  }
};

document.querySelector("#bouton3").onclick = function chargerUnePage() {
  window.location.href = "login/index.html";
};
