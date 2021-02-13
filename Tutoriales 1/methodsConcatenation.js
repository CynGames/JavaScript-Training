const firstName = "Tomi";
const lastName = "Legui";

let val;

//Se puede concatenar y appendear strings.
val = firstName + " " + lastName;
val = "Tomas ";
val += "Leguizamon";

//Se puede usar usar \ para escape.

//Metodos interesantes de string
/*
.concat("", lastName);
.toLowerCase();
.toUpperCase();
.charAt("2");
.substring(0,4);
.slice(-3);
.split(" ");
.replace("Tomas", "Yoa");
.includes("Yoa"); //Devuelve true o false
*/

console.log(val);