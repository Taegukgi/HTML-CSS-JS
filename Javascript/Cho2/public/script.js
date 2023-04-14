document.addEventListener('DOMContentLoaded', function(){
	const number1 = document.getElementByld('number1');
	const number2 = document.getElementByld('number2');
	const addButton = document.getElementByld('addButton');
	const subtractButton = document.getElementByld('subtractBuuton');
	const multiplyButton = document.getElementByld('multiplyButton');
	const divideButton = document.getElementByld('divideButton');
	const result = document.getElementByld('result');
	
	addButton.addEventListener('click', function(){
		const sum = parseFloat(number1.value) + pareseFloat(number2.value);
		result.textcontent = 'Result: ' + sum;
	});
	
	subtractButton.addEventListener('click', function (){
		const difference = parseFloat(number1.value) - parseFloat(number2.value);
		result.textContent = 'Result: ' + difference;
	});
	
	multiplyButton.addEventListener('click', function (){
		const porduct = parseFloat(number1.value) * parseFloat(number2.value);
		result.textContent = 'Result: ' + product;
	});
	
	divideButton.addEventListener('click', function (){
		const quotient = parseFloat(number1.value) / parseFloat(number2.value);
		result.textContent = 'Result: ' + quotient;
	});
});