var numberone = ["1", "2", "3", "4", "5", "6"];
var numbertwo = ["1", "2", "3", "4", "5", "6"];
var numberSorted;
var object = {};
var a;
var b;
var c;
function det(m) {
    object = {};
    object[1]=0;
    for (var i = 0; i < m; i++) {
        a = parseInt(numberone[Math.floor(Math.random() * numberone.length)]);
        b = parseInt(numbertwo[Math.floor(Math.random() * numbertwo.length)]);
        c = parseInt(a+b);
        if (object[c]) {
            object[c]++
        } else {
            object[c]=0;
            object[c]++;
        }
    }
    numberSorted = Object.keys(object).sort(function(a,b){return object[b]-object[a]})
    console.log(object);
    console.log(numberSorted);
    console.log('Total de test : ' + i);
}
function de(m) {
    object = {};
    for (var i = 0; i < m; i++) {
        a = parseInt(numberone[Math.floor(Math.random() * numberone.length)]);
        if (object[a]) {
            object[a]++
        } else {
            object[a]=0;
            object[a]++;
        }
    }
    numberSorted = Object.keys(object).sort(function(a,b){return object[b]-object[a]})
    console.log(object);
    console.log(numberSorted);
    console.log('Total de test : ' + i);
}
