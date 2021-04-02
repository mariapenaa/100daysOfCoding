window.onload = function(){

const calculator = {
    //input of user or result of operation:
    displayValue: '0',
    //stores first operand 
    firstOperand: null,
    //checks if first operand and operator have been inputed
    waitingForSecondOperand: false,
    //stores  operator
    operator: null,
};

//display
const updateDisplay = () => {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

updateDisplay()

const inputDigit = (digit) =>{
    const {displayValue, waitingForSecondOperand} = calculator;


    if(waitingForSecondOperand === true){
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    }else{
        calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
    }
    
    console.log(calculator)
}

const inputDecimal = (dot) =>{
      // If the `displayValue` property does not contain a decimal point
    if (!calculator.displayValue.includes(dot)) {
        // Append the decimal point
        calculator.displayValue += dot;
    }
}

function handleOperator (nextOperator){
    
        // Destructure the properties on the calculator object
        const { firstOperand, displayValue, operator } = calculator
        // `parseFloat` converts the string contents of `displayValue`
        // to a floating-point number
        const inputValue = parseFloat(displayValue);

        // verify that `firstOperand` is null and that the `inputValue`
        // is not a `NaN` value
        if (firstOperand === null && !isNaN(inputValue)) {
          // Update the firstOperand property
            calculator.firstOperand = inputValue;
        }

        calculator.waitingForSecondOperand = true;
        calculator.operator = nextOperator;

}



//keys
const keys = document.querySelector(".calculator-keys");


//handle key presses
keys.addEventListener('click', (e)=>{
    
    //access clicked event
    const {target} = e;
    //es lo msimo que decir const target = e.target

    if(!target.matches("button")){
        return;
    }

    if(target.matches(".operator")){
        console.log(target.value,"operator");
        handleOperator(target.value);
        updateDisplay();    
        return;
    }

    if(target.classList.contains("decimal")){
        console.log(target.value,"decimal");
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if(target.classList.contains("all-clear")){
        console.log(target.value,"clear");
        return;
    }

    if(target.classList.contains("equal-sign")){
        console.log(target.value,"equal");
        return;
    }
    
    inputDigit(target.value);
    updateDisplay()

    });

}//cierra window onload

