console.log("etape1");
console.log("etape2");
console.log("etape3");
//deuxieme partie
console.log("etape1");
setTimeout(function(){
    console.log("etape2");
},2000)
console.log("etape3");
//3eme partie
console.log("etape1");
setTimeout(()=> console.log("etape2"),2000);
console.log("etape3");