// var result;
var display_first_res = document.querySelector(".first-res");
var display_present_res = document.querySelector(".present-res");
var numBtns = document.querySelectorAll(".digit");
var operatorBtns = document.querySelectorAll(".operator");
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


// function handleClick() {
//   first_num = this.textContent;
//   display_screen.textContent += first_num;
//   display_screen.style.color = "white";
//   return first_num;
// }


operatorBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        retrieveOperator(e.target.textContent);
    } );
  });

function retrieveOperator(op){
    if(op == "=" && (first_num == null)){
        operatorBtns[6].setAttribute("disabled", "disabled");
    }
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

// function handleOperatorClick() {
//   operator = this.textContent;
//   display_screen.textContent += operator;
//   display_screen.style.color = "rgb(47, 133, 47)";
//   return operator;
// }

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



// WIP - whichever buttons is clicked will display on the display 
// function populateDisplay(){
//     numBtns.forEach(btn => {
//         btn.addEventListener("click", function(e){
//             display_screen.textContent += btn.innerHTML;
//             // console.log(val);
//         });
//     });
// }

// populateDisplay();
