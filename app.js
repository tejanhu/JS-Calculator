var result;

function add(first_num, second_num){
    result = first_num + second_num;
    return result;
}

function subtract(first_num, second_num){
    result = first_num - second_num;
    return result;
}

function multiply(first_num, second_num){
    result = first_num * second_num;
    return result;
}

function divide(first_num, second_num){
    result = first_num / second_num;
    return result;
}

function mod(first_num, second_num){
    result = first_num % second_num;
    return result;
}

function operate(operator, first_num, second_num){
    switch(operator){
        case "+":
            return add(first_num, second_num);
        case "-":
            return subtract(first_num, second_num);
        case "*":
            return multiply(first_num, second_num);
        case "/":
            return divide(first_num, second_num);
        case "%":
            return mod(first_num, second_num);
    }
}