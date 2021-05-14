function limpiar(){
    document.getElementById("output").innerHTML = "0";
}
function remueveZero(){
    var value = document.getElementById("output").innerHTML;
    if (value=="0"){
        value =" "
        document.getElementById("output").innerHTML=value;
    }
}
function divide(){
    remueveZero()
    var value = document.getElementById("output").innerHTML;
    value = value/100
    document.getElementById("output").innerHTML=value;
}

function visor(myvalue){
    remueveZero()
    document.getElementById("output").innerHTML+=myvalue
}
function resultado(){
    remueveZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById("output").innerHTML = solved;
} 
