var lol = [{
  "annee": "2004",
  "visits": 35
}, {
  "annee": "2005",
  "visits": 20
}, {
  "annee": "2006",
  "visits": 666
}, {
  "annee": "2007",
  "visits": 8
}, {
  "annee": "2008",
  "visits": 1122
}, {
  "annee": "2009",
  "visits": 1114
}, {
  "annee": "2010",
  "visits": 984
}, {
  "annee": "2011",
  "visits": 711
}, {
  "annee": "2012",
  "visits": 665
}, {
  "annee": "2013",
  "visits": 580
}, {
  "annee": "2014",
  "visits": 443
}, {
  "annee": "2015",
  "visits": 441
}, {
  "annee": "2016",
  "visits": 395
}, {
  "annee": "2017",
  "visits": 395
}, {
  "annee": "2018",
  "visits": 395
}];
function test(){
  am4core.ready(function() {

am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

chart.data = lol;
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "annee";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;

categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
  if (target.dataItem && target.dataItem.index & 2 == 2) {
    return dy + 25;
  }
  return dy;
});

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "visits";
series.dataFields.categoryX = "annee";
series.name = "Visits";
series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
series.columns.template.fillOpacity = .8;

var columnTemplate = series.columns.template;
columnTemplate.strokeWidth = 2;
columnTemplate.strokeOpacity = 1;

});
}
