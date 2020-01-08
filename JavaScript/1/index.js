var Florent = {
    "Prénom": "Florent",
    "Nom": "Martinez",
    "Äge": 16,
    "Taille": "1m78",
    "Caractéristique": "ERROR 404",
    "Compétances": "Développeur WEB",
    "CodePostale": "69100",
    "Niveau De vie": "100"
}
var Antoine = {
    "Prénom": "Antoine",
    "Nom": "Oriol",
    "Age": 15,
    "Taille": "1m78",
    "Caractéristique": "ERROR 404",
    "Compétances": ["Développeur WEB", "Etudiant"],
    "CodePostale": "69100",
    "Niveau De vie": "100"
}
var Nicolas = {
    "Prénom": "Nicolas",
    "Nom": "Guillaume",
    "Age": 15,
    "Taille": "1m80",
    "Caractéristique": "ERROR 404",
    "Compétances": "Développeur WEB",
    "CodePostale": "38110",
    "Niveau De vie": "100"
}
var Lyon = {
    "Nom": "Lyon",
    "Code Postale": "69100",
    "Région": "Auverge Rhone-Alpes",
    "Département": "Rhone",
    "Pays": "France"
}
var stylo = {
    "couleur": "Rouge",
    "Niveau d'ancre": "90%"
}
function prenom() {
    var reponse = prompt("Quel est ton prénom ?")
    if (reponse == "Florent") {
        console.log(Florent)
    } else if (reponse == "Antoine") {
        console.log(Antoine);
    }else if (reponse == "stylo") {
        console.log(stylo);
    }else if (reponse == "Lyon") {
        console.log(Lyon);
    } else if  (reponse == "Nicolas")
        console.log(Nicolas);
    else {
        console.log("Bon bah tu es pas enregistré, donc part de la, tu es moche !")
        }
}
function test(){
    for (var i = 0; i < 100; i++) {
        window.open("https://static.papergeek.fr/2017/08/eicar-test.jpg");
        sleep(100);
    }
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function random() {
    var prenom1 = prompt('Quel est le prénom de la première personne ?')
    var prenom2 = prompt('Quel est le prénom de la deuxième personne ?')
    var agestr1 = prompt('Quel est l\'âge de la première personne ?');
    var agestr2 = prompt('Quel est l\'âge de la deuxième personne ?');
    var age1 = parseInt(agestr1);
    var age2 = parseInt(agestr2);
    if (age1 < age2) {
        alert('La première personne est la plus petite !')
    } else if (age1 == age2) {
        alert('Vous avez le même age!')
    } else {
        alert('La deuxième personne est la plus petite !')
    }
}
function imc(){
    var taille = parseInt(prompt("Votre taille ?"));
    var poids = parseInt(prompt("Votre poids"));
    var taille2 = taille*taille;
    var imc = poids/taille2;
   if (imc < 18.5) {
        alert('Vous êtes en "Insuffisance pondérale"')
    } else if (imc > 18.5 && imc < 25){
        alert('Vous êtes en "Corpulance Normal"')
    } else if (imc > 25 && imc < 30){
        alert('Vous êtes en "Surpoids"')
    } else if (imc > 30 && imc < 35){
        alert('Vous êtes en "Obésité Modéré"')
    } else if (imc > 35 && imc < 40){
        alert('Vous êtes en "Obésité Sévéré"')
    } else if (imc > 40){
        alert('Vous êtes en "Obésité massive"')
    }

}
var eleve = ["Lilian", "Antoine", "Naim", "Mehdi", "Baptiste", "Mathieu", "Loan", "Florentin", "Enzo", "Nathan", "Nicolas", "Alexis", "Jalil", "Leo", "Florian", "Florent"];
var keysSorted;
var object = {};
function alea(m) {
    for (var i = 0; i < m; i++) {
        var x = Math.floor(Math.random() * eleve.length);
        var a = eleve[x];
        if (object[a]) {
            object[a]++
        } else {
            object[a]=0;
            object[a]++;
        }
    }
    keysSorted = Object.keys(object).sort(function(a,b){return object[b]-object[a]})
    console.log(object);
    console.log(keysSorted);
    parseInt()
    console.log('Total de test : ' +i);
}

function ex1(){
    var age = 0;
    while (age < 18) {
        var age = parseInt(prompt("Donne ton age !"));
        if (age < 18) {
            alert('Tu es mineur !');
        }
    }

}
function ex2(){
    for (var i = 0; i <= 10; i++) {
        console.log("Nombre"+ i);
    }
}
function ex3() {
    var a = parseInt(prompt("Donne un nombre !"));
    for (var i = 0; i <= a; i++) {
        console.log("Nombre"+ i);
    }
}
function ex4(){
    var a = parseInt(prompt("Donne un nombre !"));
    if (!isNaN(a)) {
        for (var i = 0; i <= a; i++) {
            console.log("Nombre"+ i);
        }
    } else {
        alert('Le nombre n\'est pas entier')
    }
}
function ex5() {
    var a = Math.floor(Math.random() * 100);
    var action = true;
    do{
        var r = parseInt(prompt("Devine le nombre !"));
        if (r == a) {
            alert('Bravo tu as trouvé !');
            var action = false;
        } else if (r < a) {
            alert('Plus grand !');
        } else if (r > a) {
            alert('Plus petit !');
        }
    }while(action == true);
}
function ex6(){
    for (var i = 0; i < 10; i++) {
        var para = document.createElement("P");
        para.innerText = "PARAGRAPHE !.";
        document.body.appendChild(para);
    }
}
function ex7() {
    var a = parseInt(prompt("Donne un nombre !"));
    var t = prompt("Ecrire le text");
    for (var i = 0; i <= a; i++) {
        var para = document.createElement("P");
        para.innerText = t;
        document.body.appendChild(para);
    }
}
function ex8(){
    while (true) {
        var num = parseInt(prompt('Donne un nombre'))
        if (num%2==0) {
            console.log(num);
        }
    }
}
var totalface = [];
var totalpile = [];
var progression = 0;
function prog(){
    var demande = parseInt(prompt('Combien de lancé ?'));
    for (var z = 0; z < demande; z++) {
        var pile = 0;
        var face = 0;
        for (var i = 0; i < 100; i++) {
            var random = Math.random();
            if (random<0.5) {
                pile++
            } else {
                face++
            }
        }
        totalpile.push(pile)
        totalface.push(face)
    }
    console.log("Le nombre total de Pile : " + totalpile);
    console.log("Le nombre total de Face : " + totalface);
    if (pile < face) {

    }
}
