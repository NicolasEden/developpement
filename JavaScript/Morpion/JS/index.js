var b;
function calc(nb){
    if (b == undefined) {
        b = true;
    }
    if (document.getElementById(nb) != "") {
        if (b == true) {
            document.getElementById(nb).innerHTML = "X";
        }
        if (b == false) {
            document.getElementById(nb).innerHTML = "O";
        }
        b = !b;
    }
}
