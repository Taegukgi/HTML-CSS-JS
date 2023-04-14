document.addEventListener('DOMContentLoaded', function(){
	const colorPicker = document.getElementByld('colorPicker');
	
	colorPicker.addEventListener('change', function (){
		document.body.style.backgroundColor = colorPicker.value;
	});
});