const outputSpan = document.getElementById("output-span");
const resultSpan = document.getElementById("result-span");
const divButtons = document.getElementById("buttons-container");
const btnClearSpan = document.getElementById("btn_clear");
const btnEqual = document.getElementById("btn_equal");

const operators = ["/", "*", "-", "+"];

const printOutputSpan = function (target) {
  outputSpan.textContent += target.textContent;
};

const printResultSpan = function (result) {
  resultSpan.textContent = result;
};

const cleartOutputSpan = function () {
  outputSpan.textContent = "";
  resultSpan.textContent = "";
};

const splitOperation = function (operationString) {
  let operator;
  const num = operationString.split("");
  const operation = num.filter(function (e) {
    return e != " " && e != "\n";
  });

  operation.forEach(e => {
    operators.forEach(o => {
      if (e.includes(o)) operator = e;
    });
  });

  const num1 = operation.slice(0, operation.indexOf(operator));
  const num2 = operation.slice(
    operation.indexOf(operator) + 1,
    operation.lenght
  );

  makeOperation(num1.join("") * 1, operator, num2.join("") * 1);
};

const makeOperation = function (num1, operator, num2) {
  let result;
  if (operator === "+") result = num1 + num2;
  if (operator === "-") result = num1 - num2;
  if (operator === "*") result = num1 * num2;
  if (operator === "/") result = num1 / num2;

  printResultSpan(result);
};

btnEqual.addEventListener("click", e => {
  e.preventDefault();

  splitOperation(outputSpan.textContent);
});

divButtons.addEventListener("click", e => {
  e.preventDefault();

  if (
    !e.target.textContent.includes("C") &&
    !e.target.textContent.includes("=")
  ) {
    console.log(e.target.textContent);
    printOutputSpan(e.target);
  }
});

btnClearSpan.addEventListener("click", e => {
  e.preventDefault();

  cleartOutputSpan();
});
