function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

document.body.addEventListener('keypress', function(event) {
    if (event.keyCode == 32) {
        clearTimeout(timeo);
        element.setAttribute("src", "./Ressources/"+r+"/2-"+random+".png")
    }
    if (event.keyCode == 113) {
        clearTimeout(timeo);
        start('left');
        console.log('Touche OK');
    }
    if (event.keyCode == 122) {
        clearTimeout(timeo);
        start('top');
        console.log('Touche OK');
    }
    if (event.keyCode == 100) {
        clearTimeout(timeo);
        start('right');
        console.log('Touche OK');
    }
    if (event.keyCode == 115) {
        clearTimeout(timeo);
        start('bottom');
        console.log('Touche OK');
    }
    if (event.keyCode == 49) {
        change('link')
        console.log('LINK');
    }
    if (event.keyCode == 50) {
        change('red')
        console.log('RED');
    }
    if (event.keyCode == 51) {
        change('dark')
        console.log('DARK');
    }
    console.log(event.keyCode);
});

var element = document.getElementById('img')
var count = 0;
var random;
var timeo;
var r = "link";
var a = "Guillaume";
function change(t) {
    r = t
}
var a = 0;
var b = 0;
function start(ty) {
    count++
    random = ty;
    if (count <= 3) {
        element.setAttribute("src", "./Ressources/"+r+"/"+count+"-"+random+".png")
        if (random == "left") {
            a = a-6;
            element.style.marginLeft = a+"px";
        }
        if (random == "bottom") {
            b = b+6;
            element.style.marginTop = b+"px";
        }
        if (random == "right") {
            a = a+6;
            element.style.marginLeft = a+"px";
        }
        if (random == "top") {
            b = b-6;
            element.style.marginTop = b+"px";
        }
    } else if (count == 4){
        element.setAttribute("src", "./Ressources/"+r+"/2-"+random+".png")
        if (random == "left") {
            a = a-6;
            element.style.marginLeft = a+"px";
        }
        if (random == "bottom") {
            b = b+6;
            element.style.marginTop = b+"px";
        }
        if (random == "right") {
            a = a+6;
            element.style.marginLeft = a+"px";
        }
        if (random == "top") {
            b = b-6;
            element.style.marginTop = b+"px";
        }
        count = 0;
    }
    timeo = setTimeout(function() {
    start(ty);
}, 100)
}
