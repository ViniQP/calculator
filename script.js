let n1 = 0
let n2 = 0
let currentButton = ''
let operatorChecker = 0


// functions list
const functions = {
    add: add(),
    subtract: subtract(),
    multiply: multiply(),
    divide: divide(),
    rest: rest(),
    power: power()
}


// functions
function add(number1, number2) {
    let calc = number1 + number2
    return calc;
}
function subtract(number1, number2) {
    if (number1 > number2) {
        let calc = number1 - number2
        return calc;
    } else {
        calc = number2 - number1
        return calc;
    }
}
function multiply(number1, number2) {
    let calc = number1 * number2
    return calc;
}
function divide(number1, number2) {
    if (number2 == 0) {
        return 'OOPS!';
    }
    let calc = number1 / number2
    return calc;
}
function rest(number1, number2) {   
    let calc = number1 % number2
    return calc;
}
function power(number1, number2) {
    let calc = number1
    for (let i = 1; i < number2; i++) {
        calc = number1 * calc
    }  
    return calc;
}
 

// modify display
function populateDisplay(operator) {
    const displayH1 = document.getElementById('displayH1')
    const displayN = document.getElementById('firstN')
    if (operator == "EQUAL") {
        function second() {
            n2 = displayH1.innerHTML
            console.log(n2)
        }
        second()
    }
    if (operator == true) {
        function saveNumber() {
            displayN.innerHTML = `${displayH1.innerHTML}${operatorBtn}`
            n1 = displayH1.innerHTML
            clear()
        }
        saveNumber()
    }

    if (displayH1.innerHTML == "0") {
        displayH1.innerHTML = `${currentButtonContent}`
    } else {
        displayH1.innerHTML += `${currentButtonContent}`
    }
    function clear() {
        displayH1.innerHTML = '0'
        console.log(displayH1.innerHTML)
    }

    function clearAll() {
        displayH1.innerHTML = ''
        displayN.innerHTML = ''
        operatorChecker = 0
    }

    if (operator == "clear") {
        clearAll()
    }
}


// buttons selectors
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let currentButton = button.id
        if (currentButton in numberButtonList) {
            operator = false
            currentButtonContent = numberButtonList[currentButton]
            console.log(currentButton)
            populateDisplay(currentButton)
        }

        if (currentButton in operatorButtonList) {
            currentButtonContent = ''
            let operator = true
            if (operatorChecker == 1) {
                equal()
                operatorBtn = operatorButtonList[currentButton]
                populateDisplay(operator) 
                operatorChecker++
            }
            else if (operatorChecker == 2) {
                operatorBtn = ''
                operator = ''
                equal()
                populateDisplay('clear')
            }
            else {
            operatorBtn = operatorButtonList[currentButton]
            populateDisplay(operator) 
            operatorChecker++
            }
        }

        if (currentButton == "btnEqual") {
           equal()
        }
        if (currentButton == 'btnClear') {
            populateDisplay('clear')
        }
    })
}) 


// create equal() function
function equal() {
    populateDisplay("EQUAL")
    let number1 = parseInt(n1)
    let number2 = parseInt(n2)
    let equal = equalSign(number1, number2)
    populateDisplay('clear')
    const displayH1 = document.getElementById('displayH1')
    displayH1.innerHTML = equal
    operatorChecker = false
}


// buttons database (for checkers/analysers)
const numberButtonList = {
    btnOne: '1',
    btnTwo: '2',
    btnThree: '3',
    btnFour: '4',
    btnFive: '5',
    btnSix: '6',
    btnSeven: '7',
    btnEight: '8',
    btnNine: '9',
    btnZero: '0',

}
const operatorButtonList = {
    btnPlus: '+',
    btnSubtract: '-',
    btnMultiply: 'x',
    btnDivide: '/',
    btnPercent: '%',
    btnX: '^',
}


// checker
function equalSign(number1, number2) {
    if (!(number1)) {
        number1 = 0
    }  
    else if(!(number2)) {
        number2 = 0
    }
    let operator = operatorBtn 
    if (operator == '+') {
        let displayResult = add(number1, number2)
        return displayResult;
    } 
    else if (operator == '-') {
        let displayResult = subtract(number1, number2)
        return displayResult;

    } 
    else if (operator == 'x') {
        let displayResult = multiply(number1, number2)
        return displayResult;
    }
    else if (operator == '/') {
        let displayResult = divide(number1, number2)
        return displayResult;
    }
    else if (operator == '%') {
        let displayResult = rest(number1, number2)
        return displayResult;
    }
    else if (operator == '^') {
        let displayResult = power(number1, number2)
        return displayResult;
    }
    return displayResult;
}
