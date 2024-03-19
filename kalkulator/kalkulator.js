const firstNumber = document.getElementById('first-number');
const secondNumber = document.getElementById('second-number');
const operator = document.getElementById('operator');
const calculate = document.getElementById('calculate');
const result = document.getElementById('result');

calculate.addEventListener('click', () => {
  const num1 = parseFloat(firstNumber.value);
  const num2 = parseFloat(secondNumber.value);
  const op = operator.value;
  let res;

  switch (op) {
    case '+':
      res = num1 + num2;
      break;
    case '-':
      res = num1 - num2;
      break;
    case '*':
      res = num1 * num2;
      break;
    case '/':
      res = num1 / num2;
      break;
    case '%':
      res = num1 % num2;
      break;
  }

  result.textContent = res;
});
