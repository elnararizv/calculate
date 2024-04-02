let nums = document.querySelectorAll('.number-btn');
let operation = document.querySelectorAll('.operators');
let result = document.querySelector('#result');
let enteredValue = '';
let enteredOp = '';

nums.forEach(function(num) {
    num.addEventListener('click', function() {
        enteredValue += num.value;
        result.value = enteredValue;
    });
});

operation.forEach(function(op) {
    op.addEventListener('click', function() {
        enteredOp = op.value;
        enteredValue += enteredOp;
        result.value = enteredValue;
        
    });
});
function calculate() {
    let operatorIndex = enteredValue.indexOf(enteredOp);
    let num1 = parseFloat(enteredValue.substring(0, operatorIndex));
    let num2 = parseFloat(enteredValue.substring(operatorIndex + 1));

    let resultValue;
    switch(enteredOp) {
        case '+':
            resultValue = num1 + num2;
            break;
        case '-':
            resultValue = num1 - num2;
            break;
        case '*':
            resultValue = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                resultValue = num1 / num2;
            } else {
                resultValue = "0";
            }
            break;
        default:
            resultValue = "Error";
    }

    result.value = resultValue;
    enteredValue = '';
    enteredOp = '';
}

document.getElementById('equal').addEventListener('click', function() {
    if (enteredValue !== '') {
        calculate();
    }
});

document.getElementById('clear').addEventListener('click', function() {
      result.value = '';
    enteredValue = '';
    enteredOp = '';
});

