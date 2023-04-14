document.getElementById('change-color').addEventListener('click',function(){
	//클래스 선택자를 사용하여 모든 목록 항목을 선택
	var listltems = document.querySelectorAll('li');

	//각 항목에 'highlight' 클래스를 추가/제거
	listltems.forEach(function (item){
		item.classList.toggle('highlight');
	});
});

