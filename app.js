var display_first_res = document.querySelector(".first-res");
var display_present_res = document.querySelector(".present-res");
var numBtns = document.querySelectorAll(".digit");
var back_space_btn = document.querySelector(".backspace");
var operator_btns = document.querySelectorAll(".operator");
var equals_btn = document.querySelector("#equals");
var clear_btn = document.querySelector(".clear");
var dec_btn = document.querySelector(".decimal");
var brackets_btn = document.querySelector(".brackets");
var pos_neg_sign_btn = document.querySelector("#plus-slash-minus");
var first_num = null;
var present_num = '';
var operator = null;
var result;
var current_result = null;

dec_btn.addEventListener('click', function(){
    alert("Decimal Functionality Coming Soon!");
});

brackets_btn.addEventListener('click', function(){
    alert("Brackets Functionality Coming Soon!");
});

pos_neg_sign_btn.addEventListener('click', function(){
    alert("Pos/Neg Sign Functionality Coming Soon!");
});

numBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    retrieveDigit(e.target.textContent);
  } );
});

function retrieveDigit(num){
    if (present_num === null) {
        present_num = Number(num);
      } else {
        present_num = parseFloat(present_num.toString() + num);
      }
    display_first_res.textContent = present_num;
    display_first_res.style.color = "white";
}

operator_btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        retrieveOperator(e.target.textContent);
    } );
  });

function retrieveOperator(op){
    // If operator is null, that means we're still dealing with the first number
    if(operator == null){
        first_num = parseFloat(present_num);
        current_result = first_num;
        console.log(first_num);
    } 
    else if(present_num != null){ // Otherwise it means we're dealing with the next number
        current_result = operate(operator, parseFloat(current_result), parseFloat(present_num)); 
            if(first_num == null || first_num == undefined){
                first_num = present_num;
                console.log("first_num", first_num);
            }
            present_num = null;
            console.log(first_num);
            operator = op;
            display_first_res.textContent = current_result + " " + operator + " ";
    }

  
    if(operator === null || operator === "="){
        operator = op;
        display_first_res.textContent = first_num + " " + operator + " ";
        console.log(operator);
        present_num = null;
     } 

    if (operator === "=") {
        present_num = null;
        display_first_res.textContent =  Number(first_num);
        display_present_res.innerHTML = "";
      } else {
        present_num = null;
        display_first_res.textContent = first_num + " " + operator + " ";
        display_present_res.innerHTML = "";
      }
  }

  function operate(operator, first_num, second_num){
    switch(operator){
        case "+":
            if(second_num === undefined || second_num === null || isNaN(second_num)){
                second_num = 0;
            }
            var result = parseFloat(add(first_num, second_num));
            result = Math.round(result * 100) / 100;
            break;
        case "-":
            if(second_num === undefined || second_num === null || isNaN(second_num)){
                second_num = 0;
            }
            var result = parseFloat(subtract(first_num, second_num));
            result = Math.round(result * 100) / 100;
            break;
        case "*":
            if(second_num === undefined || second_num === null || isNaN(second_num)){
                second_num = 0;
            }
            var result = parseFloat(multiply(first_num, second_num));
            result = Math.round(result * 100) / 100;
            break;
        case "÷":
            var result = parseFloat(divide(first_num, second_num));
            result = Math.round(result * 100) / 100;
            if(isNaN(result)){
                result = "";
            }
            break;
        case "%":
            if(second_num === undefined || second_num === null || isNaN(second_num)){
                second_num = 0;
            }
            var result = parseFloat(mod(first_num, second_num));
            result = Math.round(result * 100) / 100;
            break;
    }
    
    return result;
}

function add(first_num, second_num){
    if (!isNaN(first_num) && !isNaN(second_num)) {
    result = first_num + second_num;
    result = Math.round(result * 100) / 100;
    }
    return result;
}

function subtract(first_num, second_num){
    if (!isNaN(first_num) && !isNaN(second_num)) {
    result = first_num - second_num;
    result = Math.round(result * 100) / 100;
    }
    return result;
}

function multiply(first_num, second_num){
    if (!isNaN(first_num) && !isNaN(second_num)) {
    result = first_num * second_num;
    result = Math.round(result * 100) / 100;
    }
    return result;
}

function divide(first_num, second_num){
    if(first_num == 0 || second_num == 0){
        alert("Can't divide by zero.");
        if(isNaN(first_num) || isNaN(second_num)){
            result = "";
            first_num = "";
            second_num = "";
            return;
        }
    }else{
        if (!isNaN(first_num) && !isNaN(second_num)) {
            result = first_num / second_num;
            result = Math.round(result * 100) / 100;
        }
    }
    return result;
}

function mod(first_num, second_num){
    if (!isNaN(first_num) && !isNaN(second_num)) {
        result = first_num % second_num;
        result = Math.round(result * 100) / 100;
    }
    return result;
}

back_space_btn.addEventListener("click", function(){
    var value = display_first_res.textContent;
    present_num = value.substr(0, value.length - 1);
    display_first_res.textContent = present_num;
});

clear_btn.addEventListener("click", function(){
    first_num = null;
    present_num = null;
    operator = null;
    result = null;
    display_first_res.innerHTML = "";
    display_present_res.innerHTML = "";
});

equals_btn.addEventListener("click", function () {

    if (operator !== null && present_num !== '') {
        var result = operate(operator, parseFloat(first_num), parseFloat(present_num));
        display_first_res.textContent = result;
        present_num = '';
        first_num = result;
        operator = "";
    }
});

