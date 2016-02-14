function addition(firstNumber, secondNumber) {
	var a = (parseInt(firstNumber) + parseInt(secondNumber));
		return (a);
}

function subtraction(firstNumber, secondNumber) {
	var b = (parseInt(firstNumber) - parseInt(secondNumber));
		return (b);
}

function multiplication(firstNumber, secondNumber) {
	var c = (parseInt(firstNumber) * parseInt(secondNumber));
		return (c);
}

function division (firstNumber, secondNumber) {
	var d = (parseInt(firstNumber) / parseInt(secondNumber));
		return (d);
}

function calc() {
	
	var operator = prompt("What function to perform? Addition (+)? Subtraction (-)? Multiplication (*)? Division (/)?");
	
	var firstNumber = parseInt(prompt("Enter first number"));
	var secondNumber = parseInt(prompt("Enter second number"));
	
	switch(operator) {
			  case "Addition": alert(addition(firstNumber, secondNumber));
			  break;
			  case "Subtraction": alert(subtraction(firstNumber, secondNumber));
			  break;
			  case "Multiplication": alert(multiplication(firstNumber, secondNumber));
			  break;
			  case "Division": alert(division(firstNumber, secondNumber));
			  break;
			  default: alert("Wrong operator");
			}
}

do {
	calc();
} while (confirm("That's all?"));