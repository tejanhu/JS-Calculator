const displayValueElement = document.querySelector('.screen')
const INITIAL_DISPLAY_VALUE = '0'
let displayValue = INITIAL_DISPLAY_VALUE
const updateDisplayValue = newDisplayValue => {
    displayValue = newDisplayValue.toString()
    displayValueElement.textContent = displayValue
}

let previousNumber = ''
let currentNumber = ''
let currentOperation = ''
let displayValueOperators = []

const clear = () => {
    updateDisplayValue(INITIAL_DISPLAY_VALUE)
    previousNumber = ''
    currentNumber = ''
    currentOperation = ''
}
const removeLast = () => {
    if (displayValue.length === 1) 
        clear()
    else 
        updateDisplayValue(displayValue.slice(0, displayValue.length - 1))
}

const add = (a, b) => a + b
const substract = (a, b) => a - b
const multiply = (a, b) =>  a * b
const divide = (a, b) => a / b

const operations = {
    '+': add,
    '−': substract,
    '×': multiply,
    '÷': divide
}
const operate = (operator, a, b) => {
    if (operator === '÷' && b === 0) {
        alert('You cannot divide a number by zero')
        return 
    }

    let result = operations[operator](a, b)
    if (result.toString().includes('.'))
        result = result.toFixed(2)
    previousNumber = ''
    currentNumber = result
    currentOperation = null
    updateDisplayValue(result)
}

const handleButtonClick = (value) => {
    if (isNaN(value))
      selectSymbol(value)
    else
      selectDigit(value)
}

const selectDigit = (digit) => {
    let newDisplayValue

    if (displayValue === INITIAL_DISPLAY_VALUE) 
      newDisplayValue = digit
    else
      newDisplayValue = displayValue.concat(digit)
    
    updateDisplayValue(newDisplayValue)

    currentNumber = currentNumber.toString() + digit.toString()
}

const selectSymbol = (symbol) => {
    if (symbol === '.') {
        if (!currentNumber.includes('.'))
            selectDigit(symbol)
    }
    else if (symbol === 'C')
        clear()
    else if (symbol === '←')
        removeLast()
    else if (symbol === '=') {
        if (currentNumber && previousNumber)
          operate(currentOperation, Number(previousNumber), Number(currentNumber))
    }
    else {
        if (currentOperation && !currentNumber)
            return 

        else if (previousNumber) 
            operate(currentOperation, Number(previousNumber), Number(currentNumber))
        
        currentOperation = symbol
        previousNumber = currentNumber
        currentNumber = ''
        updateDisplayValue(displayValue.concat(symbol))
    }
}

document.querySelectorAll('.cal-button').forEach(button => {
    button.addEventListener('click', (e) => {
        handleButtonClick(e.target.innerText)
    })
})

document.addEventListener('keydown', function (event) {
    let patternForNumbers = /[0-9]/g;
    let patternForOperators = /[+\-*\/]/g

    if (event.key.match(patternForNumbers)) 
        selectDigit(event.key)
    
    else if (event.key === '.') 
        handleButtonClick(event.key)

    else if (event.key === '/')
        selectSymbol('÷')
    
    else if (event.key.match(patternForOperators)) 
        selectSymbol(event.key)
    
    else if (event.key === 'Enter' || event.key === '=') 
        selectSymbol('=')
    
    else if (event.key === "Backspace") 
        removeLast()
    
    else if (event.key == 'Delete') 
        clear()
    
    else
       return 
  
})