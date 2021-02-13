const person = {
    firstName: "Tomas",
    lastName: "Leguizamon",
    age: 31,
    email: "tomasm.leguizamon@gmail.com",
    hobbies: {
        virtual: "play videogames",
        anime: "lolis"
    },
    getBirthYear: function () {
        return 2021 - this.age; //el this keyword hace referencia a este objeto
    }
}

let val;

val = person;

// Get specific value
val = person.firstName;
val = person["firstName"];
val = person.hobbies.anime;
val = person.getBirthYear();

console.log(val);
