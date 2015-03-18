$( document ).ready(function() {
 	$('#submitted').hide();
	$('#error').hide();
	$('#readyToSubmit').hide();
	$('#serverError').hide();
	$('#submitButton').prop('disabled', true);
	$('#newName').keypress(submitRabbit);
	$('#newAge').keypress(submitRabbit);
	$('#newDescription').keypress(submitRabbit);

	$('#submitButton').on('click', submitData);
})

function submitRabbit(){
	var error = false;
	var numImages = 0;
	if($('#newName').val() === ''){
		error = true;
	}
	if($('#newAge').val() === ''){
		error = true;
	}
	if($('#newDescription').val() === ''){
		error = true;
	}
	if($('#image1').val() === ''){
		error = true;
		numImages = 1;
	}
	if($('#image2').val() === ''){
		numImages++;
	}
	if($('#image3').val() === ''){
		numImages++;
	}
	if(error){
		$('#error').show();
		return;
	}else{
		$('#imageNumber').val(numImages);
		$('#error').hide();
		$('#readyToSubmit').show();
		$('#submitButton').prop('disabled', false);

	}
}
//submit data, need to build backend route first and db and files for imgs
var submitData = function(){
	$('#readyToSubmit').hide();
	$('#error').hide();
	$('#submitted').show();
	$('#serverError').show();
	$('#submitButton').prop('disabled', true);
}

