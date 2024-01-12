 let personnage = {
 nom : "Durand",
 prenom : "toto",

 ditBonjour : function(){
console.log(`Bonjour ${this.prenom}`)

 }
 }
 personnage.ditBonjour();

 for(let value in personnage){
console.log(personnage[value])

 }
// console.log(personnage.nom);
// console.log(personnage[`nom`])
//deuxieme partie

// let personnage1 = {...personnage}
// let personnage2 = {}
// Object.assign(personnage2,personnage)

// console.log(personnage2)
// 3eme partie

console.log(Object.keys(personnage).length)

console.log(Object.values(personnage))

console.log(Object.entries(personnage))

