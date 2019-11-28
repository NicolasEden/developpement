var save = "";
function calc(revent){
    if (revent == 0 || revent == 1 || revent == 2 || revent == 3 || revent == 4 || revent == 5 || revent == 6 || revent == 7 || revent == 8 || revent == 9 || revent == "*" || revent == "+" || revent == "-" || revent == "(" || revent == ")") {
        save += revent;
        document.getElementById('input').value = save;
        console.log('test2');
    } else if (revent == "egual") {
        if (save != "") {
            save = eval(save);
            document.getElementById('input').value = save;
        } else if (save == "") {
            console.log('Rho, tu casse toujours tous !');
        }
    } else if (revent == "clea") {
        save = "";
        document.getElementById('input').value = save;
    }
    else if (revent == "modu") {
        save = %(save);
        document.getElementById('input').value = save;
    }
}
