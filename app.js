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
console.log("1---Numero de elementos hijos "+ body.childNodes.length)

// nombres de cada hijo
for (let actual of body.childNodes){
    console.log("Nombres "+ actual.nodeName +" : "+ actual.nodeValue)
}

let cuerpo = document.body
console.log("2---Tiene hijos " + cuerpo.hasChildNodes())

console.log("3---Hijos de cuerpo: "+document.body.children.length)

console.log("4---Hijos de "+cuerpo.nodeName)
for (let actual of cuerpo.children){
    console.log(actual.nodeName)
    console.log("  atributos "+ actual.getAttributeNames().toString())
}

console.log("5---Atributos hijos de cuerpo" + document.body.getAttributeNames().toString())



console.log("6---Primer hijo "+cuerpo.firstElementChild)

console.log("7--id primer hijo: "+cuerpo.firstElementChild.getAttribute("id"))

console.log("8---Hijos de primer hijo "+cuerpo.firstElementChild.children.length)

console.log("9--Hermano "+ cuerpo.firstElementChild.nextElementSibling)

const primerHijoCuerpo = document.getElementById("wrapper")

const primerHijoWrapper = primerHijoCuerpo.children[0]

const segundoHijoWrapper = primerHijoCuerpo.children[1]

const primerHijoSegundoHijoWrapper = segundoHijoWrapper.children[0]



primerHijoSegundoHijoWrapper.addEventListener("click", function(){

    primerHijoWrapper.textContent = "Estoy siendo modificado por le boton"

});






