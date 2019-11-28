function ajouteParagraphe(id,texte){
    document.getElementById(id).innerHTML += '<p>'+texte+"</p>";
}
function paragraphe(texte){
    document.getElementsByTagName("body")[0].innerHTML += '<p>'+texte+"</p>";
}
function start1() {
    var first = prompt('Donne un nombre');
    var last = prompt('Donne un autre nombre');
    if (last<first) {
        console.log(first+" est le nombre le plus petit");
    } else if (last == first) {
        console.log("Tu m'as pris pour qui ? Ce sont les même nombres...");
    } else {
        console.log(first+" est le plus grand");
    }
}
function start2(){
    var first = parseInt(prompt('Donne un nombre'));
    var middle = parseInt(prompt('Donne un autre nombre'));
    var last = parseInt(prompt('Donne un autre nombre'));
    if (first>middle && first>last) {
        console.log(first+" est le nombre le plus grand");
    } else if (middle>first && middle>last) {
        console.log(middle+" est le nombre le plus grand");
    } else if (last>first && last>middle) {
        console.log(last+" est le nombre le plus grand");
    }
}
function start3(){
    var first = parseInt(prompt("Donne un nombre"))
    if (first%2 == 0) {
        console.log('Nombre PAIR')
    }
    else {
        console.log('Nombre impaire')
    }
}
function start4(){
    var d = new Date();
    console.log(d.getDay()+ "/" + d.getMonth() + "/" + d.getFullYear() + "  " + d.getHours() +":"+ d.getMinutes()+":"+d.getSeconds());
    console.log(d)
}
function start5(){
    var x = Math.round(Math.random() * 100);
    console.log(x)
}
function start6() {
    var x = Math.round(Math.random() * 50) + 150;
    console.log(x)
}
function start7() {
    var x = Math.round(Math.random() * 3);
    if (x == 1) {
        console.log('Je suis content')
    } else if (x == 2) {
        console.log('Je suis triste')
    } else if (x == 3) {
        console.log('Je suis en colère')
    }
}
