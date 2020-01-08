document.getElementById('imput').addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
        text = document.getElementById('imput').value;
        document.getElementById('imput').value = '';
        if (isNaN(text)) {
            document.write('Euh, Attend, Tu te prend pour qui ?!');
        } else {
            var a = carre(text);
            function carre(number){
                var rst = number*number;
                return rst;
            }
            document.write(a);
        }
    }
});

function imc(){
    var taille = prompt("Votre taille ?");
    var poids = prompt("Votre poids");
    var taille2 = taille*taille;
    console.log(taille2);
    var imc = poids/taille2;
    console.log(imc);
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
