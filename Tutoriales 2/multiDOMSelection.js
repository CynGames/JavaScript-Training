// document.getElementsByClassName
const items = document.getElementsByClassName("collection-item");
console.log(items);
console.log(items[0]);

const listItems = document.querySelector("ul").getElementsByClassName("collection-item");
console.log(listItems);

// document.getElementsByTagName
const lis = document.getElementsByTagName("li");
console.log(lis);
console.log(lis[0]);

// Se pueden convertir un HTML collection a un array
lis = Array.from(lis);
lis.forEach(function (li) {
    li.textContent = "hi";
});

console.log(lis);

// Node list
const items = document.querySelectorAll("ul.collectionli.collection-item");

items.forEach(function (item, index) {
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

// Al usar query selector all, no hace falta transformarlo en array como en la linea 15.
liOdd.forEach(function (li, index) {
    li.style.background = "#ccc";
});

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = "#f4f4f4";
}

console.log(items);