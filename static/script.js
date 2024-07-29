let display = document.getElementById("display");
let currentInput = "0";
let operator = "";
let operand1 = "";

function clearDisplay() {
  display.textContent = "0";
  currentInput = "0";
  operator = "";
  operand1 = "";
}

function appendNumber(number) {
  if (currentInput === "0") {
    currentInput = number;
  } else {
    currentInput += number;
  }
  display.textContent = currentInput;
}

function appendOperator(op) {
  if (currentInput !== "0") {
    operand1 = currentInput;
    operator = op;
    currentInput = "0";
  }
}

function calculateResult() {
  if (operand1 === "" || currentInput === "0") return;

  let result;
  let num1 = parseFloat(operand1);
  let num2 = parseFloat(currentInput);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "**":
      result = Math.pow(num1, num2);
      break;
  }

  display.textContent = result;
  currentInput = result.toString();
  operand1 = "";
  operator = "";
}
