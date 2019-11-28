document.getElementById('poids').addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
        var poids = document.getElementById('poids').value;
        var taille = document.getElementById('taille').value;
        imc();
        function imc(){
            var poids = document.getElementById('poids').value;
            var taille = document.getElementById('taille').value;
            var taille2 = taille*taille;
            var imc = poids/taille2;
           if (imc < 18.5) {
                document.write('Vous êtes en "Insuffisance pondérale"');
            } else if (imc > 18.5 && imc < 25){
                document.write('Vous êtes en "Corpulance Normal"');
            } else if (imc > 25 && imc < 30){
                document.write('Vous êtes en "Surpoids"');
            } else if (imc > 30 && imc < 35){
                document.write('Vous êtes en "Obésité Modéré"');
            } else if (imc > 35 && imc < 40){
                document.write('Vous êtes en "Obésité Sévéré"');
            } else if (imc > 40){
                document.write('Vous êtes en "Obésité massive"');
            }
        }
    }
});
