$(document).ready(function(){

// Exit Overlay
$(".modal-content").on("click", "#close", function(){
	// Grab user input and make sure their is some value 
	var userInput = document.getElementById("usr").value;
	if(userInput.trim() == "") {
		userInput = "Default";
	}
	// Display Selection Item
	$("#selection-button-add").before('<button type="button" class="btn" id="selection-button">' + userInput + '</button>');
	// Clear User input field 
	document.getElementById("usr").value = "";
 });



// Keep track of whether or not a selection is active
var selectedBtn = false;
// Using on() binds the dynamically created items, allowing them to be clicked
$("#selectionHolderMain").on("click", "#selection-button", function(){
	// Only allow One item to be selected at a time
	if (!selectedBtn) {
    	$(this).siblings().removeClass("activeItm");
    	$(this).addClass("activeItm");
    	selectedBtn = true;
    } else {
    	$(this).siblings().removeClass("activeItm");
    	$(this).removeClass("activeItm");
    	selectedBtn = false;
    }

});








}); 