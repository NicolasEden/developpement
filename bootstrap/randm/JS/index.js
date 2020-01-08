var progress = 1;
var actif = true;
function start(){
    if (actif == true) {
        document.getElementById('prog').setAttribute('style', 'width: '+progress+'%')
        console.log(progress);
        progress++
    }
    if (actif == false) {
        document.getElementById('alert').setAttribute('style', 'width: '+progress+'%')
        console.log(progress);
        progress--
    }
    if (progress == 101) {
        actif = false
        return;
    }
    if (progress == 0) {
        actif = true
        return;
    }
    setTimeout(function() {
        start();
    }, 100);
}
var random = 0;
function alt(use, text){
    random++
    newDiv = document.createElement("div");
    newDiv.setAttribute('class', 'alert alert-'+use+' alert-dismissible fade show', 'role', 'alert')
    newDiv.innerHTML = (text)
    newButton = document.createElement("button")
    newButton.setAttribute('class', 'close', 'data-dismiss', 'alert', 'aria-label', 'Close')
    newDiv.setAttribute('id', random)
    newButton.innerHTML = ('<span aria-hidden="true">&times;</span>');
    document.getElementById('afeter').after(newDiv)
    newDiv.appendChild(newButton);
    clear(random);
}
function clear(ids){
    console.log(random)
    console.log(ids)
    setTimeout(function(){
        document.getElementById(ids).parentNode.removeChild(document.getElementById(ids))
    }, 5000);
}
var nb = 0;
function notif(){
    nb++
    document.getElementById('spans').innerHTML = nb;
}
