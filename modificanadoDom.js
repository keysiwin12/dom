


// agregar un nuevo elemento a nuestro HTML 


// creando elemento p 
var parrafo = document.createElement("p");
console.log(parrafo);

// Agregando contenido a mi elemento p  
var contenido = document.createTextNode("parrafo4");
console.log(contenido);


// colocando mi contenido a mi elemento con appendChild
parrafo.appendChild(contenido);

// llamando a mi elemento padre o contenedor 
var contenedor = document.getElementById("parrafo");

// colocando mi elemento padre dentro del contenedor
contenedor.appendChild(parrafo);





// modificando contendio(innerHTML , textContenent) 
    // textcontenet = ("Hola");

    var elementoTitulo = document.getElementById("titulo");
    console.log(elementoTitulo)

    // elementoTitulo.textContent = ("<u> soy un titulo modificado </u>");    // texto plano 
    elementoTitulo.innerHTML = ("<u> soy un titulo modificado </u>");


// Reemplazar y eliminar contenido (replaceChild , removedChild) 

    var elementoNuevo = document.createElement("p");
    var elementoContenido = document.createTextNode("soy el elemento que reemplazo");
        elementoNuevo.appendChild(elementoContenido);

    var elementoViejo = document.getElementById("item");

    var padre = document.getElementById("parrafo");

    padre.replaceChild(elementoNuevo,elementoViejo);

// Remover    padre.removerChild(h1);

    var elementoEliminar = document.getElementById("item2");
    padre.removeChild(elementoEliminar);




// parentNode..... para indicar el elemento padre

    // var hijo = document.getElementById("hijo").parentNode;
    // console.log(hijo);


//  padre.insertBefore(elementoNuevo,h1) 


    var elementoNuevo1 = document.createElement("p");
    var elementoContenido1 = document.createTextNode("probando insertBefore");
        elementoNuevo1.appendChild(elementoContenido1);
    
    var padre2 = document.getElementById("hijo").parentNode;
    var hijo = document.getElementById("hijo");

    padre2.insertBefore(elementoNuevo1,hijo);
    





