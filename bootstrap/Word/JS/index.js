var test = [
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
    {"x": "NULL", "value": 0, category: "NULL"},
  ];
var noms = null;
var listpr = [];
    function random(annee) {
        if (annee != "") {
            $.ajax({
                url: "https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_prenoms&q=annee%3D"+annee+"&rows=9999&facet=sexe"
            }).done(function(data) {
                noms = data.records;
                noms.sort(function(a, b){return b.fields.nombre - a.fields.nombre})
                for (var i = 0; i < test.length; i++) {
                    test[i].x = noms[i].fields.prenoms
                    test[i].value = noms[i].fields.nombre
                    if (noms[i].fields.sexe == "M") {
                        test[i].category = "Garçon"
                    }
                    if (noms[i].fields.sexe == "F") {
                        test[i].category = "Fille"
                    }
                }
                anychart.onDocumentReady(function () {


                  // create a tag cloud chart
                  var chart = anychart.tagCloud(test);

                  // set the chart title
                  chart.title('50 prénoms les plus donnés en '+annee)
                  // set array of angles, by which words will be placed
                  chart.angles([0, -45, 90])
                  // enable color range
                  chart.colorRange(true);
                  // set color range length
                  chart.colorRange().length('80%');

                  // format tooltips
                  var formatter = "{%value}{scale:(1)(1000)(1000)(1000)|()( thousand)( million)( billion)}";
                  var tooltip = chart.tooltip();
                  tooltip.format(formatter);

                  // display chart
                  chart.container("container");
                  chart.draw();
                });

        });
    }
}
