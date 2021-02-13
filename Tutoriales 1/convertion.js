// +let val;

// Number to string
val = String(555);
val = String(true);

// Se puede usar toString()
val = (555).toString();

// String a numero
val = Number("5");
val = parseInt("100.30");
val = parseFloat("100.30");


// Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

//toFixed sirve para especificar cantidad de decimales
// console.log(val.toFixed(2));

// Coercion: JS automaticamente cambia el tipo de valor en base a la operacion que se le pide.
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);