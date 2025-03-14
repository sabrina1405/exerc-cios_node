const inverter = require("./inverte");

const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayinverso = inverter(arrayOriginal);

console.log("Array Original:", arrayOriginal);
console.log("Array Invertido:", arrayinverso);