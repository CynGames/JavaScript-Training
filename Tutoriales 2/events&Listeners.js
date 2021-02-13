// document.querySelector(".clear-tasks").addEventListener("click",
//     function (e) {
//         console.log("Hello World");

//         // e.preventDefault(); // previene el comportamiento de href
//     });

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
    //console.log("Hello Pony");

    let val;
    val = e;

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classlist;

    // Cambia el texto del elemento 
    e.target.innerHTML = "hello";

    console.log(val);
}