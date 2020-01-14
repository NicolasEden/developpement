var noms = null;
    function random() {
            $.ajax({
                url: "https://opendata.paris.fr/api/records/1.0/search/?dataset=sanisettesparis&rows=999&facet=type&facet=arrondissement&facet=horaire&facet=acces_pmr&facet=relais_bebe"
            }).done(function(data) {
                noms = data;
            });
            var map = L.map('map').setView([51.505, -0.09], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
    }
