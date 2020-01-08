var today = null;

function act(){
    newDiv = document.createElement("div");
    newName = document.createElement("p");
    newLocation = document.createElement("p");
    newPopulation = document.createElement("p");
    newDiv.appendChild(newLocation);
    newDiv.appendChild(newName);
    newDiv.appendChild(newPopulation);


    newName.innerHTML = '<p>Nom de la ville : <strong>'+ville.city.name+"</strong></p>";
    newLocation.innerHTML = '<p>Pays de la ville : <strong>'+ville.city.country+"</strong></p>";
    newPopulation.innerHTML = '<p>Population de la Ville : <strong>'+ville.city.population+"</strong></p>";
    document.getElementById('1').appendChild(newDiv);


    for (var i = 0; i < 8; i++) {
        var todayTime = Date.now().toString()
        if (timeConverter(todayTime.substr(0, 10)) == timeConverter(ville.list[i].dt)) today = "Aujourd'hui le";
        else if (timeConverterNext(todayTime.substr(0, 10)) == timeConverter(ville.list[i].dt)) today = "Demain le";
        else if (timeConverterNext2(todayTime.substr(0, 10)) == timeConverter(ville.list[i].dt)) today = "Après-demain le";
        else today = "";

        newGenDiv = document.createElement("div");
        newGenDiv.setAttribute('class', 'col-3')
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
        var degKelDay = parseInt(ville.list[i].feels_like.day)
        var degDay = (degKelDay - 273.15);
        var degDayString = degDay.toString();
        degDay = degDayString.substr(0, 4)

        if (ville.list[i].weather[0].description == "light rain") newTodayWeather.innerHTML = 'Il y aura des nuages avec de la pluis'
        if (ville.list[i].weather[0].description == "overcast clouds") newTodayWeather.innerHTML = 'Il y aura des gros nuages'
        if (ville.list[i].weather[0].description == "broken clouds") newTodayWeather.innerHTML = 'Il y aura des gros nuages'
        if (ville.list[i].weather[0].description == "scattered clouds") newTodayWeather.innerHTML = 'Il fera nuageux'
        else newTodayWeather.innerHTM = "null"
        console.log(i)
        newTodayCel.innerHTML += ' '+degDay+" C°"
        newTodayWeatherImage.setAttribute("src", "http://openweathermap.org/img/wn/"+ville.list[i].weather[0].icon+".png")
        newToday.innerHTML = today+' <strong>'+timeConverter(ville.list[i].dt)+'</strong>'
        newGenDiv.appendChild(newDiv);
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
