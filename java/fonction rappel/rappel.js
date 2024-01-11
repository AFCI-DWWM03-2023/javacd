// const notes = [5,10,15,20];

// const notes2 = notes.map(function(element){
// return element**2
// })
// console.log(notes2)
//deuxieme partie
const notes2 = notes.map(carre);

function carre(element){
    return element**2
}
console.log(notes2);
//3eme partie
const notes3 = notes.map(element => element**2);
// const calculPars3 = (x,)