//check off Specific Todo by clicking
 $("ul").on("click", "li", function(){
 /* This is the first method:

 	// $(this).css("color", "gray");
 	// $(this).css("text-decoration", "line-through");
 	// //if li is gray
 	// console.log($(this).css("color"));
 	if($(this).css("color") === "rgb(128, 128, 128)"){
 		// console.log("This is Gray!");
 		//return it black
 		$(this).css({

 			color: "black",
 			textDecoration: "none"
 		});
 	} else{

 		$(this).css({

 		color: "gray",
 		textDecoration: "line-through"
 	});
 	}*/
 	
/*This is second method: */

 	$(this).toggleClass("completed");

 	
 });

 //click on x delete to do

 $("ul").on("click", "span", function(event){
 	$(this).parent().fadeOut(700, function(){
		$(this).remove();

 	});
 	event.stopPropagation();
 });

 $("input[type='text'").keypress(function(event){

 	if(event.which === 13){
 		// Grabbing new todo text from input
 		var todoText = $(this).val();
 		$(this).val("");
 		//create new li and add to ul
 		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
 	}
 });

 $(".fa-plus").click(function(){

 	$("input[type='text'").fadeToggle();
 });