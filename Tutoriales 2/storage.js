// SET LOCAL STORAGE ITEM
// Esto se queda hasta borrarlo manualmente
// localStorage.setItem("name", "Tomas");

// SET SESSION STORAGE ITEM
// Esto se queda hasta cerrar el navegador
// sessionStorage.setItem("age", "29");

// REMOVE FROM STORAGE ITEM
// localStorage.removeItem("name");

// GET FROM STORAGE ITEM
// const name = localStorage.getItem("name");
// console.log(name);;

// CLER LOCAL STORAGE ITEM
// localStorage.clear();

// Guarda la informacion del input field
document.querySelector("form").addEventListener("submit", function (event) {
    const task = document.getElementById("task").value;

    let tasks;

    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    alert("Task Saved");

    event.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach(function (task) {
    console.log(task);
});