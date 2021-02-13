let name = "Yoa Tib";

// FUNCTION DECLARATIONS
//NOTA: No hace falta devolver siempre algo
function greet(firstName = "tomas", lastName = "legui") {
    return `Hola ${firstName} ${lastName}`
}

//Se llama de una asi o...
// greet();
//...asi, si devuelve un valor.
// console.log(greet());

// FUNCTION EXPRESSIONS

const square = function /*aca puede ir (o no) el nombre*/(x) {
    return x * x;
};

// console.log(square(8));

// IMMIDIATLY INVOKABLE FUNCTION EXPRESSIONS -- IIFEs

// (function (name) {
//     console.log(`holasss ${name}`)
// })("nom");

// PROPERTY METHODS

const todo = {
    add: function () {
        console.log("add todo..");
    },
    edit: function (id) {
        console.log(`edit todo ${id}`);
    }
}

todo.delete = function () {
    console.log("delete todo");
}

todo.add();
todo.edit(22);
todo.delete();