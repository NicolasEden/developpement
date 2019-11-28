document.getElementById('click').addEventListener('click', click);

var clicknumber = 0;

function click(){
    clicknumber++;
    document.getElementById('number').innerHTML = clicknumber++
}
