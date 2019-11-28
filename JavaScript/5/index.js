document.getElementById("txtgreen").innerHTML = document.getElementById('green').value;
document.getElementById("txtred").innerHTML = document.getElementById('red').value;
document.getElementById("txtblue").innerHTML = document.getElementById('blue').value;
var g = document.getElementById('green');
var r = document.getElementById('red');
var b = document.getElementById('blue');
var final = document.getElementById('final');
g.addEventListener('input', function () {
  document.getElementById("txtgreen").innerHTML = document.getElementById('green').value;
  final.style.color = "rgb(" + r.value + "," + g.value + "," + b.value + ")";
}, false);
r.addEventListener('input', function () {
  document.getElementById("txtred").innerHTML = r.value;
  final.style.color = "rgb(" + r.value + "," + g.value + "," + b.value + ")";
}, false);
b.addEventListener('input', function () {
  document.getElementById("txtblue").innerHTML = b.value;
  final.style.color = "rgb(" + r.value + "," + g.value + "," + b.value + ")";
}, false);
