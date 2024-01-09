
let calcul = ""; 
let resultatAffiche = false; 


function afficherValeur(valeur) {
  let ecran = document.getElementById("resultat");
  

  if (resultatAffiche) {
    ecran.value = "";
    resultatAffiche = false;
  }
  
  ecran.value += valeur;
}


function effacer() {
  calcul = "";
  document.getElementById("resultat").value = "";
  document.getElementById("recap").innerHTML = "";
}


function calculer() {
  let ecran = document.getElementById("resultat");
  
 
  if (calcul !== "") {
    let resultat;
    
    try {
      resultat = eval(calcul);
      ecran.value = resultat;
    } catch (err) {
      ecran.value = "Erreur";
    }
    
   
    let recap = document.getElementById("recap");
    recap.innerHTML += "<p>" + calcul + " = " + resultat + "</p>";
    
   
    calcul = "";
    resultatAffiche = true;
  }
}


document.getElementById("c0").addEventListener("click", function() {
  afficherValeur("0");
});
document.getElementById("c1").addEventListener("click", function() {
  afficherValeur("1");
});
document.getElementById("c2").addEventListener("click", function() {
  afficherValeur("2");
});
document.getElementById("c3").addEventListener("click", function() {
  afficherValeur("3");
});
document.getElementById("c4").addEventListener("click", function() {
  afficherValeur("4");
});
document.getElementById("c5").addEventListener("click", function() {
  afficherValeur("5");
});
document.getElementById("c6").addEventListener("click", function() {
  afficherValeur("6");
});
document.getElementById("c7").addEventListener("click", function() {
  afficherValeur("7");
});
document.getElementById("c8").addEventListener("click", function() {
  afficherValeur("8");
});
document.getElementById("c9").addEventListener("click", function() {
  afficherValeur("9");
});
document.getElementById("point").addEventListener("click", function() {
  afficherValeur(".");
});
document.getElementById("btnPlus").addEventListener("click", function() {
  afficherValeur("+");
});
document.getElementById("btnSous").addEventListener("click", function() {
  afficherValeur("-");
});
document.getElementById("btnMul").addEventListener("click", function() {
  afficherValeur("*");
});
document.getElementById("btnDiv").addEventListener("click", function() {
  afficherValeur("/");
});
document.getElementById("egal").addEventListener("click", function() {
  calculer();
});
