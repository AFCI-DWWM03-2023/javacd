const calcul1 = calculPar3(15, addition);
console.log(`Le resultat est : $(calcul1) `);

//deuxieme partie
let addition = (x, y) => {
    return x + y
}
let soustraction = (x, y) => {
    return x - y
}
let multiplication = (x, y) => {
    return x * y
}
let division = (x, y) => {
    return x / y
}
const calcul0 = calculPar1(5, 3, addition);
console.log(`Le resultat est : $(calcul0) `);
const calcul2 = calculPar1(12, 10, soustraction);
console.log(`Le resultat est : $(calcul2) `)
const calcul3 = calculPar1(10, 11, multiplication);
console.log(`Le resultat est : $(calcul3) `)
const calcul4 = calculPar1(5, 3, division);
console.log(`Le resultat est : $(calcul4) `)
