

function saludo() {
    alert("estoy funcionando");
}


var input = document.getElementById("input");

// input.addEventListener(nombre del evento, acccion , Boolean )

// input.addEventListener("keypress",saludo);

var boton = document.getElementById("boton");
boton.addEventListener("click",saludo);