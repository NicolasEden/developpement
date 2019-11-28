function showtime() {
  var now = new Date();
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  heure = (hour > 9? hour:"0" + hour);
  heure += ":" + (min > 9? min:"0" + min);
  heure += ":" + (sec > 9? sec:"0" + sec);
  document.Clock.Horloge.value = heure;
  timerActif = true;
  setTimeout("showtime()",100);
}
