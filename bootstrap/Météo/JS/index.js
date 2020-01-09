var city = null;
$.ajax({
    url: './City/city.json',
    type: 'GET',
    dataType: 'json',
    async: false,
    success : function(data) {
        city = data;
    }, error : function(req, err) {
        alert: ("Request:"+ JSON.stringify(req));
    }
});
function changeCity(event) {
    if(event.code == "Enter"){
        for (var i = 0; i < city.length; i++) {
            if (city[i].name == document.getElementById('input').value) {
                act(city[i].id);
                return;
            }
        }
    }
}
var core = document.body;
function act(code){
    document.body.innerHTML = '<div class="container"><div class="col col-hover" id="1"><input class="col-4" classtype="text" name="" value="" onkeypress="changeCity(event)" id="input"></div><div class="text-center"><div class="row" id="2"></div></div></div>'
    var today = null;
    var ville = null;
    var jouractif = []
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/forecast?id='+code+'&APPID=fa956c3c094574e034c48dc970215933',
        type: 'GET',
        dataType: 'json',
        async: false,
        success : function(data) {
            ville = data;
        }, error : function(req, err) {
            alert: ("Request:"+ JSON.stringify(req));
        }
    });
    newDiv = document.createElement("div");
    newDiv.setAttribute('class', 'col-4')
    newName = document.createElement("p");
    newLocation = document.createElement("p");
    newDiv.appendChild(newLocation);
    newDiv.appendChild(newName);


    newName.innerHTML = '<p>Nom de la ville : <strong>'+ville.city.name+"</strong></p>";
    newLocation.innerHTML = '<p>Pays de la ville : <strong>'+ville.city.country+"</strong></p>";
    console.log(ville);
    document.getElementById('input').before(newDiv);


    for (var i = 0; i < ville.list.length; i++) {
        if (jouractif.indexOf(timeConverter(ville.list[i].dt)) == -1) {
            var todayTime = Date.now().toString()
            if (timeConverter(todayTime.substr(0, 10)) == timeConverter(ville.list[i].dt)) today = "Aujourd'hui le";
            else if (timeConverterNext(todayTime.substr(0, 10)) == timeConverter(ville.list[i].dt)) today = "Demain le";
            else if (timeConverterNext2(todayTime.substr(0, 10)) == timeConverter(ville.list[i].dt)) today = "Après-demain le";
            else today = "";

            if (i == 24) {
                newGenDiv = document.createElement("div");
                newGenDiv.setAttribute('class', 'col-2');
                newDiv = document.createElement("div");
                document.getElementById('2').appendChild(newGenDiv);
                newGenDiv.appendChild(newDiv);
            }
            newGenDiv = document.createElement("div");
            newGenDiv.setAttribute('class', 'col-4 -hover')
            document.getElementById('2').appendChild(newGenDiv);
            newDiv = document.createElement("div");
            newToday = document.createElement("p");
            newTodayWeather = document.createElement("p");
            newTodayCel = document.createElement("p");
            newTodayWeatherImage = document.createElement("img");
            newDiv.appendChild(newToday);
            newDiv.appendChild(newTodayWeather);
            newDiv.appendChild(newTodayCel);
            newDiv.appendChild(newTodayWeatherImage);
            var degKelDay = ville.list[i].main.temp
            var degDay = (degKelDay - 273.15);
            var degDayString = degDay.toString();
            degDay = degDayString.substr(0, 4)

            if (ville.list[i].weather[0].description == "light rain") {
                newTodayWeather.innerHTML = 'Pluis avec des nuages'
                newTodayWeatherImage.setAttribute("src", "./Ressources/Icons/rainy-1.svg")
            }
            if (ville.list[i].weather[0].description == "overcast clouds") {
                newTodayWeather.innerHTML = 'Fortement Nuageux'
                newTodayWeatherImage.setAttribute("src", "./Ressources/Icons/cloudy.svg")
            }
            if (ville.list[i].weather[0].description == "broken clouds") {
                newTodayWeather.innerHTML = 'Fortement Nuageux'
                newTodayWeatherImage.setAttribute("src", "./Ressources/Icons/cloudy.svg")
            }
            if (ville.list[i].weather[0].description == "scattered clouds") {
                newTodayWeather.innerHTML = 'Partiellement Nuageux'
                newTodayWeatherImage.setAttribute("src", "./Ressources/Icons/cloudy-day-3.svg")
            }
            if (ville.list[i].weather[0].description == "few clouds") {
                newTodayWeather.innerHTML = 'Partiellement Ensoleillé'
                newTodayWeatherImage.setAttribute("src", "./Ressources/Icons/cloudy-day-3.svg")
            }
            if (ville.list[i].weather[0].description == "clear sky") {
                newTodayWeather.innerHTML = 'Fortement Ensoleillé'
                newTodayWeatherImage.setAttribute("src", "./Ressources/Icons/day.svg")
            }
            if (ville.list[i].weather[0].description == "light snow") {
                newTodayWeather.innerHTML = 'Legère neige'
                newTodayWeatherImage.setAttribute("src", "./Ressources/Icons/snowy-3.svg")
            }
            else newTodayWeather.innerHTM = "null"
            newTodayCel.innerHTML += ' '+degDay+" C°"
            newToday.innerHTML = today+' <strong>'+timeConverter(ville.list[i].dt)+'</strong>'
            jouractif.push(timeConverter(ville.list[i].dt))
            newGenDiv.appendChild(newDiv);
        }
    }
}

function test() {
    for (var i = 0; i < ville.list.length; i++) {
        console.log(timeConverter(ville.list[i].dt));
    }
}







































function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date + ' ' + month + ' ' + year;
  return time;
}
function timeConverterNext(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date+1 + ' ' + month + ' ' + year;
  return time;
}
function timeConverterNext2(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date+2 + ' ' + month + ' ' + year;
  return time;
}
