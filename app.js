// document -> raiz
// document.element -> html
// document.head -> head
// document.body
/*
Nodos:
Elementos: cualquier etiqueta
Texto: textos
Atributo
Comentario
raiz: document
*/
/*
const { JSDOM } = require("jsdom");
const fs = require("fs");

// Lee el archivo HTML
const htmlContent = fs.readFileSync("index.html", "utf-8");

// Crea una instancia de JSDOM con el HTML leído
const dom = new JSDOM(htmlContent);

// Obtén el objeto 'document' del DOM simulado
const { document } = dom.window;

// Usa 'document' como lo harías en un navegador
const body = document.body;
//console.log(body.innerHTML); // Imprime el contenido del body
*/

const body = document.body;

// acceder al hijo
console.log("1---Numero de elementos hijos " + body.childNodes.length)

// nombres de cada hijo
for (let actual of body.childNodes) {
    console.log("Nombres " + actual.nodeName + " : " + actual.nodeValue)
}

let cuerpo = document.body
console.log("2---Tiene hijos " + cuerpo.hasChildNodes())

console.log("3---Hijos de cuerpo: " + document.body.children.length)

console.log("4---Hijos de " + cuerpo.nodeName)
for (let actual of cuerpo.children) {
    console.log(actual.nodeName)
    console.log("  atributos " + actual.getAttributeNames().toString())
}

console.log("5---Atributos hijos de cuerpo" + document.body.getAttributeNames().toString())


console.log("6---Primer hijo " + cuerpo.firstElementChild)

console.log("7--id primer hijo: " + cuerpo.firstElementChild.getAttribute("id"))

console.log("8---Hijos de primer hijo " + cuerpo.firstElementChild.children.length)

console.log("9--Hermano " + cuerpo.firstElementChild.nextElementSibling)

const primerHijoCuerpo = document.getElementById("wrapper")

const primerHijoWrapper = primerHijoCuerpo.children[0]

const segundoHijoWrapper = primerHijoCuerpo.children[1]

const primerHijoSegundoHijoWrapper = segundoHijoWrapper.children[0]

/*

primerHijoSegundoHijoWrapper.addEventListener("click", function(){

    primerHijoWrapper.textContent = "Estoy siendo modificado por le boton"

});
*/

console.log(document.body.children[0].children[1].children[0].getAttributeNames())
console.log(document.body.children[0].children[1].children[0].textContent)


console.log(document.firstElementChild)
console.log(document.children)


console.log(document.children[0].children[1].lastElementChild.previousElementSibling)

const boton1 = document.getElementsByClassName("link")[0]
const boton2 = document.getElementsByClassName("link")[1]
const texto = document.body.children[0].children[0]


boton1.addEventListener("click", function () {
    texto.textContent = "Me modifico el boton Primer hijo"
    boton2.textContent = "Yo te dejo como estabas !!!"
})

boton2.addEventListener("click", function () {
    if (texto.textContent === "Me modifico el boton Primer hijo") {
        texto.textContent = " DOM (Document Object Model)"
        boton2.textContent = "Segundo Hijo"
    }
})



function validarEntrada(elemento) {
    const valor = elemento.value;  // Obtiene el valor del campo input actual (( event.target -> referencia al elelmento que lo dispara ))
    const regex = /^[0-9]+$/;
    if (!regex.test(valor)) {
        alert('Entrada inválida. Por favor, ingrese solo números.');
        elemento.value='';
        elemento.focus();     // Vuelve a enfocar el campo de entrada
       // elemento.preventDefault();     // Evita cualquier acción predeterminada que pudiera ocurrir
    }
}



const boton3 = document.querySelectorAll('.link')[2]
let colorBlack=false
boton3.addEventListener("click",function () {
    if(!colorBlack){
        document.documentElement.style.backgroundColor="black"
        document.querySelector(".form").style.backgroundColor="black"
        document.getElementById("wrapper").style.backgroundColor="black"
        document.getElementsByTagName("h1")[0].style.color="white"
        document.documentElement.style.color="white"
        colorBlack=true
    }else {
        document.documentElement.style.backgroundColor="white"
        document.documentElement.style.color="black"
        document.querySelector(".form").style.backgroundColor="white"
        document.getElementById("wrapper").style.backgroundColor="white"
        document.getElementsByTagName("h1")[0].style.color="black"

        colorBlack=false
    }



})


console.log(document.getElementsByClassName("link")[0].textContent)

console.log(document.querySelector(".link"))
console.log(document.querySelectorAll(".link")[0])
console.log(document.querySelector(".link:first-of-type"))




const linksHTml = document.getElementsByClassName("link")
console.log(linksHTml) // siempre actializa los elementos
const linksNode = document.querySelectorAll("link")
console.log(linksNode) // no actializa si se añade un elemento lnk a la clase

// query se puede recorrer
linksNode.forEach(link =>{
    console.log(link)
})

const nuevoBoton = document.createElement("a")
nuevoBoton.setAttribute("class", "link")
nuevoBoton.textContent="Nuevo boton"
document.body.append(nuevoBoton)


