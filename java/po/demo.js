const personne1 = {
nom: "toto",
age: 18,

anniversaire(){
this.age++;

}

}
const personne2 = {
    nom: "titi",
    age: 19,
    
    anniversaire(){
    this.age++;
    
    }
    afficherPersonne(){
        return `Nom : ${this.nom} = Age : ${this.age}`;
    }
    }

    class Personne {

        constructor(name,age){
this.nom = name;
this.age = age;

        }
        anniversaire(){
            this.age++;
        }
    }
    let personnage1 = new Personne("ToTo,18");
    let personnage2 = new Personne("TiTi,19");

    personne1.anniversaire();
    console.log(personne1);

    class Guerrier extends Personne{
constructor(nom,age,speudo){
super(nom,age);
this.pseudo = pseudo
this.force = 3;
this.intel = 1;
super.anniversaire();
}
afficherPersonne(){
    let afficher = super.afficherPersonne()
    afficher =  `Pseudo : ${this.pseudo}`
    afficher =  `Force : ${this.force}`
    afficher =  `Intelligence : ${this.intel}`
    return afficher;   
}
    }