document.getElementById('text').addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
        var toconvert = document.getElementById('text').value;
        uptoconvert = toconvert.toUpperCase();
        var lettrec = [];
        var cle = parseInt(document.getElementById('random').value);
        var base = 'A'.charCodeAt(0);
        var encoded = "";
        for (var i = 0; i < uptoconvert.length; i++) {
            var lettre = uptoconvert[i];
            if (lettre == " ") {
            encoded = encoded + " ";
            console.log('test');
            } else {
            var code = ((uptoconvert.charCodeAt(i)-base+cle)%26)+base;
            encoded = encoded + String.fromCharCode(code);
            document.getElementById('text').value = encoded;
            console.log(lettre);
        }
        }
    }
});
document.getElementById('random').addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
        var toconvert = document.getElementById('text').value;
        uptoconvert = toconvert.toUpperCase();
        var lettrec = [];
        var cle = parseInt(document.getElementById('random').value);
        var base = 'A'.charCodeAt(0);
        var encoded = "";
        for (var i = 0; i < uptoconvert.length; i++) {
            var lettre = uptoconvert[i];
            if (lettre == " ") {
            encoded = encoded + " ";
            console.log('test');
            } else {
            var code = ((uptoconvert.charCodeAt(i)-base+cle)%26)+base;
            encoded = encoded + String.fromCharCode(code);
            document.getElementById('text').value = encoded;
            console.log(lettre);
        }
        }
    }
});

function part(){
    alert('PART PAS !')
}
