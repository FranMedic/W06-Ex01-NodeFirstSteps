const prompt = require("prompt-sync")();
const addition = require("./addition");
const division = require("./division");
const multiplication = require("./multiplication");
const substract = require("./substract");

const numbersListConsoled = process.argv.slice(2);

let firstOperator = numbersListConsoled[0];

let secondOperator = numbersListConsoled[1];

if (firstOperator === undefined || secondOperator === undefined) {
  firstOperator = prompt("Enter first number: ");
  secondOperator = prompt("Enter second number: ");
}
if (
  firstOperator === Number.isNaN(+firstOperator) ||
  secondOperator === Number.isNaN(+secondOperator)
) {
  console.log("Error en los datos");
  process.exit();
} else {
  console.log(
    `${firstOperator} + ${secondOperator}= ${addition(
      firstOperator,
      secondOperator
    )} `
  );
  console.log(
    `${firstOperator} - ${secondOperator}= ${substract(
      firstOperator,
      secondOperator
    )} `
  );
  console.log(
    `${firstOperator} * ${secondOperator}= ${multiplication(
      firstOperator,
      secondOperator
    )} `
  );
  console.log(
    `${firstOperator} / ${secondOperator}= ${division(
      firstOperator,
      secondOperator
    )} `
  );
}
