document.addEventListener('DOMContentLoaded', function () {
	const updateButton = document.getElementByld('updateButton');
	const dateTimeDisplay = document.getElementByld('dateTimeDisplay');
	
	updateButton.addEventListener('click', function () {
		const now =  new date();
		dateTimeDisplay.textContent = 'Current date and time: ' + now.toLocaleString();
	});
});