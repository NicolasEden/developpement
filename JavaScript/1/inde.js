var element = document.getElementById('lol');
element.innerHTML = "COUCOU !";
function go(){
    var text = document.getElementById('imput').value;
    element.innerHTML = text;
}
document.getElementById('imput').addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
        var text = document.getElementById('imput').value;
        document.getElementById('imput').value = '';
        element.innerHTML = text;
    }
});
