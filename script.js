function calculate(operator) {

    const firstNumber = parseFloat(
        document.getElementById("number1").value
    );

    const secondNumber = parseFloat(
        document.getElementById("number2").value
    );

    let answer;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById("result").textContent = "Enter two numbers";
        return;
    }

    if (operator === "+") {
        answer = firstNumber + secondNumber;
    }

    else if (operator === "-") {
        answer = firstNumber - secondNumber;
    }

    else if (operator === "*") {
        answer = firstNumber * secondNumber;
    }

    else if (operator === "/") {

        if (secondNumber === 0) {
            document.getElementById("result").textContent =
                "Cannot divide by zero";

            return;
        }

        answer = firstNumber / secondNumber;
    }

    document.getElementById("result").textContent = answer;
}