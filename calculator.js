let num1;
let num2;
let operator;

function add(a, b){
    a = parseInt(a);
    b = parseInt(b);
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    let result = a*b;
    let decimalValue = result.toString().indexOf(".");
    let decimalLength = result.toString().substring(decimalValue+1);
    if(decimalLength.length > 3) return result.toFixed(3);
    return result;
}

function divide(a, b){
    if (b == 0) alert("what are you some kind of idiot? You can't divide by 0.");
    let result = a/b;
    let decimalValue = result.toString().indexOf(".");
    let decimalLength = result.toString().substring(decimalValue+1);
    if(decimalLength.length > 3) return result.toFixed(3);
    return result;
}

function operate(a, operator, b){
    switch (operator) {
        case "+": 
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;            
    }
}

function clearOut(){
    num1 = "";
    num2 = "";
    operator = "";
    document.getElementById("display").innerHTML = num1;

}

function displayNums(idName, className){
    if(!num1 && className == "numbers"){
        num1 = idName;
        document.getElementById("display").innerHTML = num1;

    }else if((num1) && className == "numbers" && !operator){
        num1 = "" + num1 + idName;
        document.getElementById("display").innerHTML = num1;

    }else if(num1 && className == "operators" && !operator){
        operator = idName;
        document.getElementById("display").innerHTML = operator;

    }else if(num1 && operator && className == "numbers" && !num2){
        num2 = idName;
        document.getElementById("display").innerHTML = num2;

    }else if(num1 && operator && className == "numbers" && num2){
        num2 = "" + num2 + idName;
        document.getElementById("display").innerHTML = num2;

    } else if(num1 && operator && num2 && className == "operators"){
        num1 = operate(num1, operator, num2);
        document.getElementById("display").innerHTML = num1;
        operator = idName;
        num2 = "";
        
    }else if(num1 && operator && num2 && idName == "="){
        num1 = operate(num1, operator, num2);
        document.getElementById("display").innerHTML = num1;
        operator = "";
        num2 = "";
    }
}

