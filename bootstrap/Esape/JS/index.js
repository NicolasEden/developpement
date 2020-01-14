var city = null;
var pays = null;
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
        act(document.getElementById('input').value);
    }
}
var core = document.body.innerHTML;
function act(code){
    document.body.innerHTML = core;
    var today = null;
    var ville = null;
    var jouractif = []
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/forecast?q='+code+'&APPID=fa956c3c094574e034c48dc970215933',
        type: 'GET',
        dataType: 'json',
        async: false,
        success : function(data) {
            ville = data;
        }, error : function(req, err) {
            alert: ("Request:"+ JSON.stringify(req));
        }
    });
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/alpha/'+ville.city.country,
        type: 'GET',
        dataType: 'json',
        async: false,
        success : function(data) {
            pays = data.name;
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


    newName.innerHTML = '<p>Nom de la ville : '+ville.city.name+"</p>";
    newLocation.innerHTML = '<p>Pays de la ville : '+pays+"</p>";
    console.log(ville);
    document.getElementById('1').before(newDiv);


    for (var i = 0; i < ville.list.length; i++) {
        if (jouractif.indexOf(timeConverter(ville.list[i].dt)) == -1) {
            var todayTime = Date.now().toString()
            newGenDiv = document.createElement("div");
            newGenDiv.setAttribute('class', 'col-2 background-gray')
            document.getElementById('2').appendChild(newGenDiv);
            newDiv = document.createElement("div");
            newToday = document.createElement("p");
            newTodayWeather = document.createElement("p");
            newTodayCel = document.createElement("p");
            newTodayWeatherImage = document.createElement("img");
            newDiv.appendChild(newToday);
            newDiv.appendChild(newTodayWeatherImage);
            newDiv.appendChild(newTodayWeather);
            newDiv.appendChild(newTodayCel);
            var degKelDay = ville.list[i].main.temp
            var degDay = (degKelDay - 273.15);
            var degDayString = degDay.toString();
            degDay = degDayString.substr(0, 4)
            console.log(i);
            if (ville.list[i].weather[0].description == "light rain") {
                newTodayWeather.innerHTML = 'Pluis</br>nuageuse'
                newTodayWeatherImage.setAttribute("src", "./Ressources/Icons/rainy-1.svg")
            }
            if (ville.list[i].weather[0].description == "overcast clouds") {
                newTodayWeather.innerHTML = 'Fortement</br>Nuageux'
                newTodayWeatherImage.setAttribute("src", "./Ressources/Icons/cloudy.svg")
            }
            if (ville.list[i].weather[0].description == "broken clouds") {
                newTodayWeather.innerHTML = 'Fortement</br>Nuageux'
                newTodayWeatherImage.setAttribute("src", "./Ressources/Icons/cloudy.svg")
            }
            if (ville.list[i].weather[0].description == "scattered clouds") {
                newTodayWeather.innerHTML = 'Partiellement</br>Nuageux'
                newTodayWeatherImage.setAttribute("src", "./Ressources/Icons/cloudy-day-3.svg")
            }
            if (ville.list[i].weather[0].description == "few clouds") {
                newTodayWeather.innerHTML = 'Partiellement</br>Ensoleillé'
                newTodayWeatherImage.setAttribute("src", "./Ressources/Icons/cloudy-day-3.svg")
            }
            if (ville.list[i].weather[0].description == "clear sky") {
                newTodayWeather.innerHTML = 'Fortement</br>Ensoleillé'
                newTodayWeatherImage.setAttribute("src", "./Ressources/Icons/day.svg")
            }
            if (ville.list[i].weather[0].description == "light snow") {
                newTodayWeather.innerHTML = 'Legère</br>neige'
                newTodayWeatherImage.setAttribute("src", "./Ressources/Icons/snowy-3.svg")
            }
            if (ville.list[i].weather[0].description == "moderate rain") {
                newTodayWeather.innerHTML = 'Pluis</br>Modéré'
                newTodayWeatherImage.setAttribute("src", "./Ressources/Icons/rainy-6.svg")
            }
            if (ville.list[i].weather[0].description == "snow") {
                newTodayWeather.innerHTML = 'Neige'
                newTodayWeatherImage.setAttribute("src", "./Ressources/Icons/snowy-6.svg")
            }
            else newTodayWeather.innerHTM = "null"
            newTodayCel.innerHTML += ' '+degDay+" C°"
            newToday.innerHTML = ' '+timeConverter(ville.list[i].dt)+''
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
  var tab_jour=new Array("dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam.");
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = tab_jour[a.getDay()]+' '+date;
  return time;
}
