document.addEvenListener('DOMContentLoaded', function(){
	const toggleButton = document.getElementByld('toggleButton');
	const content = document.getElementByld('content');
	
	toggleButton.addEventListener('click', function () {
		if(content.style.display === 'none'){
			content.style.display = 'blcok';
		} else {
			content.style.display = 'none'
		}
	});
});