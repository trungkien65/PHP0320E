
//bài 1
	var form_opj =  document.getElementById('form');
	if(form_opj){
		form_opj.addEventListener('submit',handleSubmit);
	}
function handleSubmit(){
	var error = '';
	var result = '';

	var name =  document.getElementById("input-name").value;
	var age =  document.getElementById("input-age").value;

	if(name == '' || age == '') {
		error = "Tên hoặc tuổi không được để trống";
	}else if (isNaN(age)) {
		error = "mời nhập tuổi";
	}else{
		result += "tên đã nhập :" + name + "<br/>";
		result += "tuổi đã nhập :" + age;
	}

	var opj_error = document.getElementById('error');
	opj_error.innerHTML = error;

	var opj_result = document.getElementById('result');
	opj_result.innerHTML =  result;

	event.preventDefault();
}


//bài 2


	var form_opj2 =  document.getElementById('form');
	if(form_opj2){
	form_opj2.addEventListener('submit2',handleSubmit2);
	form_opj2.addEventListener('input-name2','input-age2',inputenter);
	}

function inputenter(e){
	if(e.key == 'enter')
		handleSubmit2;
}
function handleSubmit2(){
	var error = '';
	var result = '';

	var name =  document.getElementById("input-name2").value;
	var age =  document.getElementById("input-age2").value;

	if(name == '' || age == '') {
		error = "Tên hoặc tuổi không được để trống";
	}else if(isNaN(age)) {
		error = "mời nhập tuổi";
	}else {
		show = "tên đã nhập : " + name + "\n";
		show += "tuổi đã nhập :" + age;

		alert(show);
	}

	var opj_error = document.getElementById('error2');
	opj_error.innerHTML = error;

	event.preventDefault();
}
