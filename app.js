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
    if(present_num === null){
        present_num += parseFloat(num);
    } else{
        present_num = parseFloat(present_num.toString() + num);
    }
    // converting the number clicked on into float
    // present_num += parseFloat(num);
    // present_num += num;
    // storing the number clicked on in the type of float 
    // present_num = parseFloat(present_num);
    // Adding the clicked number to the calculator display
    // display_first_res.textContent = " ";
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
        //  first_num = parseFloat(first_num);
        console.log(first_num);
    } 
    else if(present_num != null){ // Otherwise it means we're dealing with the next number
            first_num = parseFloat(operate(operator, first_num, present_num)); 
            // first_num = parseFloat(first_num);
    }

    if(operator === null || operator === "="){
        operator = op;
        display_first_res.textContent = first_num + " " + operator + " ";
        console.log(operator);
        present_num = null;
    } else{
        operator = op;
        console.log(operator);
        display_first_res.textContent = display_first_res.textContent.slice(0, -2) + operator + " ";
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
    if (operator === "=") {
        // If equals button is clicked, show the result
        present_num = null;
        display_first_res.textContent = first_num;
        display_present_res.innerHTML = "";
      } else {
        // Otherwise, show the first clicked number on the display along with the clicked operator
        // console.log(typeof(present_num));
        // present_num = null;
        // display_first_res.textContent = first_num + " " + operator + " ";
        display_present_res.innerHTML = "";
      }
  }

  function operate(operator, first_num, second_num){
    switch(operator){
        case "+":
            if(second_num === undefined || second_num === null){
                second_num = 0;
            }
            var result = add(first_num, second_num);
            break;
        case "-":
            if(second_num === undefined || second_num === null){
                second_num = 0;
            }
            var result = subtract(first_num, second_num);
            break;
        case "*":
            if(second_num === undefined || second_num === null){
                second_num = 0;
            }
            var result = multiply(first_num, second_num);
            break;
        case "÷":
            if(second_num === undefined || second_num === null){
                second_num = 0;
            }
            var result = divide(first_num, second_num);
            break;
        case "%":
            if(second_num === undefined || second_num === null){
                second_num = 0;
            }
            var result = mod(first_num, second_num);
            break;
    }
    result = Math.round(result * 100) / 100;
    return result;
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
        var result = parseFloat(operate(operator, parseFloat(first_num), parseFloat(present_num)));
        display_first_res.textContent = result;
        present_num = '';
        first_num = result;
        operator = "";
    }

   

    // if (display_first_res.textContent !== "" && first_num !== null && operator_btns.textContent !== "") {
    //     equals_btn.disabled = false;
    //     var result = operate(operator, first_num, present_num);
    //     display_present_res.textContent = result;
    //     display_first_res.textContent = "";
    //     first_num = result;
    //     operator = null;
    //     equals_btn.disabled = true;
    // }else{
    //     equals_btn.disabled = true;
    //     clear_btn.click();
    //     alert("Invalid operation. Please try again");
    // }

    // if (display_first_res !== null && first_num !== null && operator_btns !== "") {
    //     equals_btn.disabled = false;
    //     retrieveOperator();
    // }else{
    //     equals_btn.disabled = true;
    //     clear_btn.click();
    //     alert("Invalid operation. Please try again");
    // }
    // if(first_num === null || operator === null || present_num === null){
    //     equals_btn.disabled = true;
    // }

    // let res = operate(operator, first_num, present_num);

    // if(res === undefined){
    //     alert("Invalid operation. Please try again");
    //     equals_btn.disabled = true;
    //     clear_btn.click();
    //     return;
    // }

    // display_first_res.textContent = res;
    // present_num = res;
    // operator = null;
});

