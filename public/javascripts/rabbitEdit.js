var imageForm = document.getElementById("image-form");
var images = document.getElementById("files");
var subButton = document.getElementById("upload-images");

document.getElementById("submitButton").onclick = function(){
	document.getElementById("submitButton").disabled = true;
	document.getElementById("rabbit-info").submit();
}

imageForm.onsubmit = function(event){
	event.preventDefault();
	subButton.innerHTML = "uploading Images";

	//access files property of input
	var files = images.files;
	if(document.getElementById("rabbitName")){
		var name = document.getElementById("rabbitName").value;
	}else{
		alert("need to submit rabbit info before uploading images")
	}
	/* FormData objects provide a way to easily construct a set of 
	key/value pairs representing form fields and their values, which can 
	then be easily sent using the XMLHttpRequest send() method.
	It uses the same format a form would use if the encoding type were 
	set to "multipart/form-data"*/
	var formData = new FormData();
	//append images into formdata object
	for(var i =0; i < files.length; i++){
		if(files[i].type.match("image.*")){
			formData.append("photos", files[i], name + i);
		}
	}

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/rabbitsEdit/image", true);
	xhr.onload = function(){
		if(xhr.status === 200){
			subButton.innerHTML = "Uploaded"

		}else{
			alert("error");
		}
	}
	xhr.send(formData);
}
