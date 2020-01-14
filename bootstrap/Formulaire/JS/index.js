function random(prenom, nom) {
    $.ajax({
        url: "http://92.222.69.104:80/exercice/bonjour3?nom="+nom+"&prenom="+prenom
        }).done(function(data) {
        document.getElementById('resultat').innerHTML = data;
        });
}
