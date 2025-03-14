const readlineSync = require("readline-sync");const somar = require("./fsoma");
const subtrai = require("./fsub");
const divide = require("./fdiv");
const multiplica = require("./fmulti");


let varglobal = 1;
let n1 = readlineSync.question("Digite valor de Número 1: ");
let n2 = readlineSync.question("Digite valor de Número 2: ");

function opcoes(){
    console.log("\n Está são as operações disponíveis: " + "\n 1 - Soma, 2 - Subtração, 3 - Multiplicação, 4 - Divisão." + "\n Digite opção desejada: ");
    return readlineSync.questionInt("Digite a opção desejada: ");
}

let resp = opcoes();
let resultado;

switch(resp){
    case 1:
        resultado = somar(n1, n2);
    break;

    case 2:
        resultado = subtrai(n1,n2);
    break;

    case 3:
        resultado = multiplica(n1,n2);
    break;

    case 4:
        resultado = divide(n1,n2);
    break;

    default:
        resultado = "Está opção é inválida!";
    break;

}

console.log("Resultado: " + resultado);