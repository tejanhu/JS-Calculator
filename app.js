var display_first_res = document.querySelector(".first-res");
var display_present_res = document.querySelector(".present-res");
var numBtns = document.querySelectorAll(".digit");
var operator_btns = document.querySelectorAll(".operator");
var equals_btn = document.querySelector("#equals");
var clear_btn = document.querySelector(".clear");
var first_num = null;
var present_num = '';
var operator = null;

numBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    retrieveDigit(e.target.textContent);
  } );
});

function retrieveDigit(num){
    present_num += parseFloat(num);
    present_num = parseFloat(present_num);
    display_first_res.textContent +=  " " + present_num;
    display_first_res.style.color = "white";
}

operator_btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        retrieveOperator(e.target.textContent);
    } );
  });

function retrieveOperator(op){
    // If no operator has been used, that means we're still dealing with the first number
    if(operator == null){
        first_num = present_num + " " ;
        console.log(first_num);
    } else if(present_num != null){ // Otherwise it means we're dealing with the next number
            first_num = operate(operator, first_num, present_num); 
    }
      
      display_first_res.textContent = first_num;
      display_first_res.textContent = first_num + ' ' + op;
      operator = op;
      present_num = '';
      console.log(first_num);
    //   display_present_res.innerHTML = "0";
  }

  function operate(operator, first_num, second_num){
    switch(operator){
        case "+":
            return add(first_num, second_num);
        case "-":
            return subtract(first_num, second_num);
        case "*":
            return multiply(first_num, second_num);
        case "÷":
            return divide(first_num, second_num);
        case "%":
            return mod(first_num, second_num);
    }
}

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
    if(first_num == 0 || second_num == 0){
        result = "Can't divide by zero."
    }else{
        result = first_num / second_num;
    }
    return result;
}

function mod(first_num, second_num){
    result = first_num % second_num;
    return result;
}

clear_btn.addEventListener("click", function(){
    first_num = null;
    present_num = null;
    display_first_res.innerHTML = "";
    display_present_res.innerHTML = "";
});

equals_btn.addEventListener("click", function () {

    if (display_first_res !== null && first_num !== null && operator_btns !== "") {
        equals_btn.disabled = false;
        retrieveOperator();
    }else{
        equals_btn.disabled = true;
        clear_btn.click();
        alert("Invalid operation. Please try again");
    }
});

