	var form_opj = document.getElementById('form')
	form_opj.addEventListener('submit',handleSubmit);
	form_opj.addEventListener('name','email','contact',inputenter);

function inputenter(e){
	if(e.key == 'enter')
		handleSubmit2;
}
function handleSubmit(){
	var error = '';
	var result = '';

	var name =  document.getElementById("name").value;
	var email =  document.getElementById("email").value;
	var contact =  document.getElementById("contact").value;


	if(name == '' || email == '' || contact == '') {
		error = "không được để trống";
	}else{
		result += "name :" + name + "<br/>";
		result += "Email :" + email +"<br/>";
		result += "Contact No :" + contact;
	}

	var opj_error = document.getElementById('error');
	opj_error.innerHTML = error;

	var opj_result = document.getElementById('result');
	opj_result.innerHTML =  result;

	event.preventDefault();

}