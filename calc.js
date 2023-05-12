// // Calculator function for all basic math operators
// // const add = (a, b) => a + b;
// // const subtract = (a, b) => a - b;
// // const multiply = (a, b) => a * b;
// // const divide = (a, b) => a / b;

// // Operate function that takes an operator and 2 numbers and calls one of the above functions on the numbers
// // const operate = (operator, a, b) => {
// //   switch (operator) {
// //     case "+":
// //       return add(a, b);
// //     case "-":
// //       return subtract(a, b);
// //     case "*":
// //       return multiply(a, b);
// //     case "/":
// //       if (b === 0) {
// //         return "ERROR: Cannot divide by 0";
// //       }
// //       return divide(a, b);
// //     default:
// //       return "ERROR: Invalid operator";
// //   }
// // };

// // Store the display value in a variable
// let displayValue = "";


// // Store the first number and the operator
// let firstNumber = null;
// let operator = null;

// // Add event listeners to operator buttons to store the first number and operator

// let currentDisplay = '0';
// let firstOperand = null;
// let waitingForSecondOperand = false;

// function clear() {
//   currentDisplay = '0';
//   firstOperand = null;
//   operator = null;
//   waitingForSecondOperand = false;
// }

// function appendNumber(number) {
//     console.log("(Before) currentDisplay", currentDisplay);
//   if (currentDisplay === '0') {
   
//     currentDisplay = number;
//     console.log("(After) currentDisplay", currentDisplay);
//   } else {
    
//     currentDisplay += number;
//     console.log("(After) currentDisplay", currentDisplay);
//   }
// }

// function updateDisplay() {
//   const display = document.querySelector('#display');
//   display.textContent = currentDisplay;
//   display.style.color = "white";
// }

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   if (b === 0) {
//     return "Can't divide by 0";
//   }
//   return a / b;
// }

// function operate(operator, a, b) {
//   switch (operator) {
//     case '+':
//       return add(a, b);
//     case '-':
//       return subtract(a, b);
//     case '*':
//       return multiply(a, b);
//     case '÷':
//       return divide(a, b);
//     default:
//       return "ERROR: Invalid operator";
//   }
// }

// function handleOperator(nextOperator) {
//   const inputValue = parseFloat(currentDisplay);

//   if (operator && waitingForSecondOperand) {
//     operator = nextOperator;
//     return;
//   }

//   if (firstOperand === null) {
//     firstOperand = inputValue;
//   } else if (operator) {
//     const result = operate(operator, firstOperand, inputValue);
//     currentDisplay = String(result);
//     firstOperand = result;
//   }

//   waitingForSecondOperand = true;
//   operator = nextOperator;
// }

// const numberButtons = document.querySelectorAll('.digit');
// numberButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     appendNumber(button.value);
//     updateDisplay();
//   });
// });

// const operatorButtons = document.querySelectorAll('.operator');
// operatorButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     handleOperator(button.value);
//     updateDisplay();
//   });
// });

// const equalsButton = document.querySelector('#equals');
// equalsButton.addEventListener('click', () => {
//   const inputValue = parseFloat(currentDisplay);

//   if (operator && waitingForSecondOperand) {
//     currentDisplay = operate(operator, firstOperand, inputValue);
//     firstOperand = currentDisplay;
//     operator = null;
//     waitingForSecondOperand = false;
//   }

//   updateDisplay();
// });

// const clearButton = document.querySelector('.clear');
// clearButton.addEventListener('click', () => {
//   clear();
//   updateDisplay();
// });

const display = document.getElementById('display');
let currentNumber = '';
let firstOperand = null;
let waitingForSecondOperand = false;
let operator = null;

function appendNumber(number) {
  currentNumber += number;
  updateDisplay();
}

function handleOperator(nextOperator) {
    currentNumber = '';
  const inputValue = parseFloat(currentNumber);
  
  if (operator && waitingForSecondOperand) {
    operator = nextOperator;
    return;
  }
  
  if (firstOperand === null) {
    firstOperand = inputValue;
  } else if (operator) {
    const result = operate(operator, firstOperand, inputValue);
    currentNumber = "" +result;
    firstOperand = result;
    updateDisplay();
  }
  
  waitingForSecondOperand = true;
  operator = nextOperator;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        return "Can't divide by 0";
      }
      return a / b;
    default:
      return "ERROR: Invalid operator";
  }
}

function clear() {
  currentNumber = '';
  firstOperand = null;
  operator = null;
  waitingForSecondOperand = false;
}

function updateDisplay() {
  display.textContent = currentNumber;
  display.style.color = "white";
  console.log(display.textContent);
}

const numberButtons = document.querySelectorAll('.digit');
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.value); 
    appendNumber(button.value);
    updateDisplay();
  });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    handleOperator(button.value);
  });
});

const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
  const inputValue = parseFloat(currentNumber);
  
  if (operator && waitingForSecondOperand) {
    currentNumber = operate(operator, firstOperand, inputValue);
    firstOperand = currentNumber;
    operator = null;
    waitingForSecondOperand = false;
  }
  
  updateDisplay();
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
  clear();
  updateDisplay();
});