function ex1(){
    var a = 10;
    var b = "Bonjour";
    var c = true;
    document.write(a+' '+b+' '+c)
}

function ex2(){
    var random = parseInt(prompt('Dites un nombre.'));
    console.log(random%2);
}

function ex3(){
    var str = prompt('Dites une phrase');
    var random = parseInt(prompt('Dites un nombre'));
    console.log(str.substr(random, str.length));
}

function ex4(){
    var number = prompt('Dites un nombres');
    var rst = estPair(number)
    console.log(rst);
}
function ex5(){
    var number = prompt('Dites un nombres');
    var rst = estImpair(number)
    console.log(rst);
}
function ex5(){
    var number = prompt('Dites un nombres');
    var rst = estPremier(number)
    console.log(rst);
}

function estPair(number){
    if (number%2 == 0) {
        return true;
    } else {
        return false;
    }
}

function estIprai(number){
    if (number%2 == 1) {
        return true;
    } else {
        return false;
    }
}

function estPremier(number){
    var i = 0;
    var e = 0;
    do {
        i++
        if (number%i == 0) {
            e++
        }
    } while (i<=10);
    if (e == 2) {
        console.log('Le nombre est premier !');
    } else {
        console.log('Ce nombre n\'est pas premier');
    }
}



function affichePremier(number){
    var premier = "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97"
    console.log(substr);
}

function arroundir(nb, decimal){
    console.log(Math.round(decimal*nb)/decimal)
}

function bi(number){
    if (number%4 == 0) {
        return true;
    } else {
        return false;
    }r
}

function entier(){
    var random = prompt('Dit un nombre !');
    if (isNaN(random)) {
        entier()
    }
    return random;
}

var tableau = []
function saisieTableau(nb){
    for (var i = 0; i < nb; i++) {
        tableau.push(entier());
    }
    console.log(tableau);
}

function somme(tableau){
    var random = 0;
    for (var i = 0; i < tableau.length; i++) {
        random = random+tableau[i];
    }
    console.log(random);
}
function moyenne(tableau){
    var random = 0;
    for (var i = 0; i < tableau.length; i++) {
        random = random+tableau[i];
    }
    console.log(random/tableau.length);
}
function mult2(tableau){
    var random = 1;
    var rst = 1;
    for (var i = 0; i < tableau.length; i++) {
        random = tableau[i]*2;
        rst = rst+tableau[i]*2;
        console.log(random);
    }
    console.log("Total : "+rst);
}

function opere(tableau, operation){
    var random = 1;
    var rst = 1;
    for (var i = 0; i < tableau.length; i++) {
        tableau[i] = operation(tableau[i]);
    }

}

function fois2(v){ return v*2;}

opere(tableau,carre);
opere(tableau,fois2);
opere(tableau,function(v){ return arroundir(v,2);})

function tabCarre(tableau){
    var random = 1;
    var rst = 1;
    for (var i = 0; i < tableau.length; i++) {
        rst = rst+tableau[i]*tableau[i];
        random = tableau[i]*tableau[i];
        console.log(random);
    }
    console.log("Total : "+rst);
}
function tabArrondi(tableau){
    var random = 1;
    for (var i = 0; i < tableau.length; i++) {
        random = arroundir(tableau[i], 100);
        console.log(random);
    }
}

function all(tableau){
    var calcul = prompt('Quue voulez vous faire avec le tableau ? (Multiplication, Addition, Carré)');
    if (calcul == "Multiplication")
        mult2(tableau);
    else if (calcul == "Addition")
        somme(tableau);
    else if (calcul == "Carré")
        tabCarre(tableau);
}

var keysSorted;
var object = {};
function rangement(tableau){
    tableau.sort(function(a, b){return a - b});
    console.log(tableau);
}

function check(tableau, nb){
    for (var i = 0; i < tableau.length; i++) {
        if (tableau[i] == nb)
            return true;
    else {
        return false;
        }
    }
}


function checkup(tableau, nb){
    var save = 0;
    for (var i = 0; i < tableau.length; i++) {
        if (tableau[i] == nb) {
            save++
        }
    }
    console.log('Le numéro : '+nb+' est présent '+save+' fois.');
}
