/**
 * 
 */

 document.getElementById('add-task').getEventListener('click', addTask);
 function addTask(){
	 const taskInput = document.getElementById("task-input");
	 const taskList = document.getElementById("task-list");
	 
	 if(taskInput.value.trim() === ''){
		 alert('Plese enter a task'); // 애플리케이션에서 발생한 특정 이벤트, 조건, 오류에 대해 즉각적인 패드백을 제공하거나 사용자에게 알려주는 역활
		 return;
	 }
	 
	 const taskItem = document.createElement('li');
	 teskItem.classList.add('task-item);
	 
	 taskItem.innerHTML = `
	 	<span>${tasckInput.value}</span>
	 	<button class="delete-task">Remove</button>`;
	 	
	 	taskList.appendChild(taskItem);
	 	
	 	taskItem.addEventListener('click', (event) => {
			 if (event.target.classList.contains('delete-task')){
				 taskList.removeChild(taskItem);
			 }else {
				 taskItem.classList.toggle('complete');
			 }
		 });
		 
		 taskInput.value = '';
 }