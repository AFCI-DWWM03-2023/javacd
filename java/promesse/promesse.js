// const promesse = new Promise(function(){
//     console.log("etape1");
// })
// promesse.then(console.log("etape 2"));
//deuxieme etape
const promesse = new Promise(function(resolve){
    console.log("etape1");

    resolve("coucou");
    console.log("etape 3");
});

promesse.then(function(valeur){
console.log("etape2")
console.log(valeur)


})