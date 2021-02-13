let val;

const list = document.querySelector("ul.collection");
// const listItem = document.querySelector("li.collection-item:first-child");

// val = listItem;
// val = list;

// Get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;

//Acerca de los tipes...
/*
1 - Element
2 - Attribute (deprecated)
3 - Text Node
8 - Comment
9 - Document itself
10 - Doctype
*/

// Usar la linea de abajo permite agarrar SOLO los HTML elements
// val = list.children;
// val = list.firstElementChild;
// val = list.lastElementChild;
// val = list.childElementCount;

// Padres
val = list.parentNode;
val = list.parentElement;

// Sibling
val = list.nextElementSibling;

// Ejemplo de traversing el DOM por siblings
val = listItems.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(val);