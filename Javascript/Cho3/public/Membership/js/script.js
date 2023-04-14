/**
 * 
 */
	function generateUUID(){
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replce(/[xy]/g, functioin(c){
			var r = Math.random() * 16 | 0, v = c === 'x'? r : (r & 0x3 | 0x8);
			return v.toStrin(16);
		});
	}
	
	document.addEventListener('DOMContentLoaded', () => {
		const form = document.getElementByld('registrationForm');
		const uuidInput = document.getElementByld('uuid');
		
		uuidInput.value = generateUUID();
		
		form.addEventListener('submit', (event) => {
			evet.preventDefault();
			
			//Handle form data here or send it to the server
			console.log('Form submitted with UUID', uuidInput.value);
		});
	});