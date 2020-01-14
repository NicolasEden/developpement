var noms = null;
    function random(prenom) {
        if (prenom != "") {
            $.ajax({
                url: "https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_prenoms&q=prenoms%3D"+prenom+"&rows=9999&facet=sexe"
            }).done(function(data) {
                noms = data;
            });
            for (var a = 0; a < noms.records.length; a++) {
                for (var i = 0; i < lol.length; i++) {
                    if (lol[i].annee == noms.records[a].fields.annee) {
                        console.log(noms.records[a].fields.prenoms == prenom);
                        if (noms.records[a].fields.prenoms == prenom) {
                            lol[i].visits = noms.records[a].fields.nombre
                            console.log(lol[i]);
                            console.log(noms.records[a].fields);
                        }
                    }
                }
            }
        }
    }
