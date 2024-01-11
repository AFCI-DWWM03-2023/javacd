const calculPar3 = (x, maFonctionDeCalcul) => maFonctionDeCalcul(x,3);
const addition = (x,y) => x*y;
const multiplication = (x,y) => x*y;

const calcul1 = calculPar3(7,addition);
const calcul2 = calculPar3(2,multiplication);
console.log(`Le resultat est : $(calcul1) `);
console.log(`Le resultat est : $(calcul2) `)