//Mismo mambo que los otros lenguages for the most part.
//Algo notable es llamar a un foreach a partir de un array

// const cars = ["ford", "chevy", "toyota"];

// cars.forEach(function (car) {
//     console.log(car);
// })

// MAP
// Se usa para devolver otro array distinto.
// const users = [
//     { id: 1, name: "martin" },
//     { id: 2, name: "eliza" },
//     { id: 3, name: "silvia" }
// ];

// Lo que hacemos aca es usar un array con objetos literales, para devolver otro array distinto
//  que solo tiene IDS.
// const ids = users.map(function (user) {
//     return user.id;
// })

// console.log(ids);

// FOR IN
const user = {
    firstName: "Yoa",
    lastName: "Tibaldi",
    age: 22
}

for (let x in user) {
    console.log(`${x} : ${user[x]}`);
}