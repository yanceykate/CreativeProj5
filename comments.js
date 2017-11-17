$(document).ready(function(){
  $("#postComment").click(function(){
      $("#flame").css("filter","hue-rotate(90deg)");
      var myobj = {Name:$("#name").val(),Comment:$("#comment").val()};
      jobj = JSON.stringify(myobj);
      
	var url = "comment";
	$.ajax({
	url:url,
	type: "POST",
	data: jobj,
	contentType: "application/json; charset=utf-8",
	success: function(data,textStatus) {
	    $("#done").html(textStatus.toUpperCase());
	}
	})
  $('#done').delay(3000).fadeOut('slow');
  });
 $("#getComments").click(function() {
    $.getJSON('comment', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment in data) {
        com = data[comment];
        everything += "<li> Name: " + com.Name + " -- House: " + com.Comment + "</li>";
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })
  });
$("#getRandom").click(function() {
    $("#flame").css("filter","hue-rotate(0deg)");
    $.getJSON('comment', function(data) {
      console.log(data);
	console.log(data.length);
      var everything = "<p>";
      var comment=Math.floor((Math.random() * data.length));
        com = data[comment];
        everything += "Congratulations " + com.Name + " of "+ com.Comment + ", you have been selected to represent Hogwarts in the Triwizard Tournament!";
      
      everything += "</p>";
      $("#comments").html(everything);
    })
  });
  $("#deleteComments").click(function() {
        $("#flame").css("filter","hue-rotate(270deg)");
	var url="comment";
	$.ajax({
	url:url,
	type: "DELETE",
	data: jobj,
	contentType: "application/json; charset=utf-8",
	success: function(data,textStatus) {
	    $("#done").html(textStatus);
	}
	})

  });
});