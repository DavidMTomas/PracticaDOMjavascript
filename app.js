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
console.log("Numero de elementos hijos "+ body.childNodes.length)

// nombres de cada hijo
for (let actual of body.childNodes){
    console.log("Nombres "+ actual.nodeName +" : "+ actual.nodeValue)
}

let wrapper = document.body.hasChildNodes()
console.log(wrapper)


