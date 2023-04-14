class Calculator {
	constructor(number1, number2, resultElement){
		this.number1 = number1;
		this.number2 = number2;
		this.resultElement = resultElement;
	}
	
	add() {
		const sum = parseFloat(this.number1.value) + parseFloat(this.number2.value);
		this.updateResult(sum);
	}
	
	subtract() {
		const difference = parseFloat(this.number1.value) - parseFloat(this.number2.value);
		this.updateResult(difference);
	}
	
	multiply() {
		const product = parseFloat(this.number1.value) * parseFloat(this.number2.value);
		this.updateResult(product);
	}
	
	divide() {
		const quotient = parseFloat(this.number1.value) / parseFloat(this.number2.value);
		this.updateResult(quotient);
	}
	
	updateResult(value) {
		this.resultElement.textContent = 'Result: ' + value;
	}
	
}


document.addEventListener('DOMContentLoaded', function(){
	const number1 = document.getElementById('number1');
	const number2 = document.getElementById('number2');
	const addButton = document.getElementById('addButton');
	const subtractButton = document.getElementById('subtractBuuton');
	const multiplyButton = document.getElementById('multiplyButton');
	const divideButton = document.getElementById('divideButton');
	const result = document.getElementById('result');
	
	const calculator = new Calculator(number1, number2, result);
	
	addButton.addEventListener('click', () => calculator.add());
	subtractButton.addEventListener('click', () => calculator.subtract());
	multiplyButton.addEventListener('click', () => calculator.multiply));
	divideButton.addEventListener('click', () => calculator.divide());
	
});
	