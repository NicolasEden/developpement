function random(prenom, nom) {
    $.ajax({
        url: "http://92.222.69.104:80/exercice/bonjour4",
        headers: {"nom" : nom,"prenom": prenom}
        }).done(function(data) {
        document.getElementById('resultat').innerHTML = data;
        });
}
