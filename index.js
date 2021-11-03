const numbersListConsoled = process.argv.slice(2);

const firstOperator = numbersListConsoled[0];

const secondOperator = numbersListConsoled[1];

if (
  firstOperator === undefined ||
  Number.isNaN(+firstOperator) ||
  secondOperator === undefined ||
  Number.isNaN(+secondOperator)
) {
  console.log("esto no va");
} else {
  const sum = +firstOperator + +secondOperator;
  const substract = firstOperator - secondOperator;
  const multiplication = firstOperator * secondOperator;
  const division = firstOperator / secondOperator;

  console.log(sum);
  console.log(substract);
  console.log(multiplication);
  console.log(division);
}

console.log(numbersListConsoled);
