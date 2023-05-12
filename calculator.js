// var display_first_res = document.querySelector(".first-res");
// var display_present_res = document.querySelector(".present-res");
const numBtns = document.querySelectorAll(".digit");
const back_space_btn = document.querySelector(".backspace");
const operator_btns = document.querySelectorAll(".operator");
const equals_btn = document.querySelector("#equals");
const clear_btn = document.querySelector(".clear");
const dec_btn = document.querySelector(".decimal");
const brackets_btn = document.querySelector(".brackets");
const pos_neg_sign_btn = document.querySelector("#plus-slash-minus");
const display = document.getElementById("display");
let first_num = null;
let present_num = '';
let selected_operator = null;
var calculation;

function updateDisplay(){
    display.textContent = present_num;
}

numBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      retrieveDigit(e.target.textContent);
    } );
  });

  function retrieveDigit(num){
    if(present_num === null){
        present_num += parseFloat(num);
    } else{
        present_num = parseFloat(present_num.toString() + num);
    }

    display.textContent = present_num;
    display.style.color = "white";
}

operator_btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        retrieveOperator(e.target.textContent);
    } );
  });

  function retrieveOperator(op){
    // If operator is null, that means we're still dealing with the first number
    if(selected_operator == null){
        first_num = parseFloat(present_num);
        //  first_num = parseFloat(first_num);
        console.log(first_num);
    } 
    else if(present_num != null){ // Otherwise it means we're dealing with the next number
            first_num = parseFloat(operate(selected_operator, first_num, present_num)); 
            // first_num = parseFloat(first_num);
    }
    if(selected_operator === null || selected_operator === "="){
        selected_operator = op;
        display.textContent = first_num + " " + selected_operator + " ";
        console.log(selected_operator);
        present_num = null;
     } 

    //   assigning the clicked operator value to the var 'operator'
    // operator = op;
      //   showing the first clicked number on the display
    //   display_first_res.textContent = parseFloat(first_num);
      //   showing the first clicked number on the display along with the clicked operator
    //   present_num = '';
    //   display_first_res.textContent = first_num + ' ' + operator + ' ';
      //   We allow another number to be clicked by clearing the present number variable
    //   console.log(first_num);
    //   display_present_res.innerHTML = "0";
    if (selected_operator === "=") {
        // If equals button is clicked, show the result
        present_num = null;
        display.textContent = first_num;
        display.innerHTML = "";
      } else {
        // Otherwise, show the first clicked number on the display along with the clicked operator
        // console.log(typeof(present_num));
        // present_num = null;
        // display_first_res.textContent = first_num + " " + operator + " ";
        display.innerHTML = "";
      }
  }

  function operate(selected_operator, first_num, second_num){
    switch(selected_operator){
        case "+":
            // var result = add(first_num, second_num);
            return add(first_num, second_num);
            // break;
        case "-":
            // var result = subtract(first_num, second_num);
            return subtract(first_num, second_num);
            // break;
        case "*":
            // var result = multiply(first_num, second_num);
            return multiply(first_num, second_num);
            // break;
        case "÷":
            // var result = divide(first_num, second_num);
            return divide(first_num, second_num);
            // break;
        case "%":
            // var result = mod(first_num, second_num);
            return mod(first_num, second_num);
            // break;
        default:
            return "Error: Unrecognised Operator!";
    }
    // result = Math.round(result * 100) / 100;
    // return result;
}

function add(first_num, second_num){
    calculation = first_num + second_num;
    return result;
}

function subtract(first_num, second_num){
    calculation = first_num - second_num;
    return result;
}

function multiply(first_num, second_num){
    calculation = first_num * second_num;
    return result;
}

function divide(first_num, second_num){
    if(first_num == 0 || second_num == 0){
       return "Can't divide by zero.";
    }else{
        calculation = first_num / second_num;
    }
    return calculation;
}

function mod(first_num, second_num){
    calculation = first_num % second_num;
    return calculation;
}

back_space_btn.addEventListener("click", function(){
    var value = display.textContent;
    present_num = value.substr(0, value.length - 1);
    display.textContent = present_num;
});

clear_btn.addEventListener("click", function(){
    first_num = null;
    present_num = null;
    operator = null;
    result = null;
    display.innerHTML = "";
});

equals_btn.addEventListener("click", function () {
    if (selected_operator !== null && present_num !== '') {
        var result = operate(selected_operator, parseFloat(first_num), parseFloat(present_num));
        display.textContent = result;
        present_num = '';
        first_num = result;
        selected_operator = "";
    }
});