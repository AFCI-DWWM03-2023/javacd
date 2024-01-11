function addition(x,y){
return x+y;
}
//deuxieme partie
const calcul = addition (2,3)
console.log(`le résultat est : ${calcul}`);
//3eme partie
function calculPar3(x){
    return addition(x,3);
}
//4eme partie
const calcul1 = calculPar3(7)
console.log(`le résultat est : ${calcul}`);
//5eme partie
function multiplication (x,y){
    return x*y;
}
//6eme partie
function calculPar3(x,maFonctionDeRappel){
    return maFonctionDeRappel(x,3);
}
const calcul2 = calculPar3(2,addition)