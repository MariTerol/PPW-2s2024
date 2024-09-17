const calc = require('./calculadora');

let a=5;
let b=2;

console.log(`A soma entre ${a} e ${b} e ${calc.soma(a,b)}`);
console.log(`A soma entre ${a} e ${b} e ${calc.sub(a,b)}`);
console.log(`A soma entre ${a} e ${b} e ${calc.mult(a,b)}`);
console.log(`A soma entre ${a} e ${b} e ${calc.div(a,b)}`);