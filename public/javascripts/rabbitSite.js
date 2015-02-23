$(document).ready(function(){
})
var getNews = function(){
	$.ajax({url:"news"})
	.done(function(data){
		for(var x in data){
			if(data[x].message){
				$(".newsContainer")
				.prepend("<div style='display:inline'>" + 
				"<button style='display:inline;' onclick='deleteMessage(this)'>delete</button>" + 
				"<div style='display:inline' class='date'>" + data[x].date + "</div>: " + 
				data[x].message.toString() +"</div><hr>");
			}
		}
		$(".newsContainer").prepend("<hr>");

	})
}

var deleteMessage = function(e){
	var uSure = prompt("u sure you wanna do that bro? Enter yes or y");
	if(uSure === "yes" || uSure === "y"){
		var dateDelete = $(e).parent().children().eq(1).text();
		$.ajax({
			url:"/newsDelete",
			method:"POST",
			data:{date:dateDelete}
		})
		$(e).parent().remove();
	} else{
		alert('nothing deleted');
	}
}
//this should eventually check for user validity
var validate = function(){

}