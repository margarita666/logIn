'use strict';

(function(){
	
	var btnLogIn=document.querySelector('.admin');
	btnLogIn.onclick = logIn;


})()


function logIn(){
	var adminName = prompt('Кто пришел?'),
	adminPassword;
	if (adminName==null){
		alert('Вход отменён');
	}else if(adminName!='Админ'){
		alert('Я вас не знаю')
	}else{
		adminPassword=prompt('Пароль');
		if(adminPassword==null){
			alert('Вход отменён')
			
		}else if(adminPassword!='Черный Властелин'){
			alert('Пароль неверен')
		}else{
			alert(`Добро пожаловать, ${adminPassword}!`)
		}
	}
}




