// EVENT BUBBLING - Disparar un evento en un child, hace que se disparen los de los padres.

// document.querySelector('.card-title').addEventListener("click",
//     function () {
//         console.log("card title clicked");
//     });

// document.querySelector('.card-content').addEventListener("click",
//     function () {
//         console.log("card content clicked");
//     });

// document.querySelector('.card').addEventListener("click",
//     function () {
//         console.log("card");
//     });

// document.querySelector('.col').addEventListener("click",
//     function () {
//         console.log("col");
//     });

// EVENT DELEGATION - Disparar un evento desde un padre que apunte a un child.

// document.body.addEventListener("click", deleteItem);

// function deleteItem(e) {
//     if (e.target.parentElement.classList.contains("delete-item")) {
//         console.log("delete item fired");
//         e.target.parentElement.parentElement.remove();
//     }
// }