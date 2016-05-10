
function trim (inputString) {
	if (typeof inputString != "string") {return inputString;}
	var retValue = inputString;
	var ch = retValue.substring(0,1);

	// Check for spaces at the beginning of the string
	while (ch == " ") {
		retValue = retValue.substring(1, retValue.length);
		ch = retValue.substring(0,1);
	}

	// Check for spaces at the end of the string
	while (ch == " ") {
		retValue = retValue.substring(0, retValue.length-1);
		ch = retValue.substring(retValue.length-1,retValue.length);
	}

	// Checks for two spaces in the string
	while (retValue.indexOf("  ") != -1){
		retValue = retValue.substring(0, retValue.indexOf("  ")) +
		 retValue.substring(retValue.indexOf("  ")+1, retValue.length);
	}

	return retValue;
}


function emailValidation(strEmail) {
    var patt = new RegExp(".*@.*\.[a-zA-Z]{2,}");
    var res = patt.test(strEmail);
    return res;
}

function passwordValidation(strPassword) {
    if (strPassword.length >= 6) {
    	res = true;
    } else {
    	res = false;
    }
    return res;
}

function invalidChar(str) {
    var patt = new RegExp("/:|;|}|{|\[|\]|\//");
    var res = patt.test(str);
    return res;
}

// Password
	// Password must be at least 6 characters long.

//Function to validate the addtask form. 
function validatetask (thevalue, thename){
var nowcont = true;
thevalue = trim(thevalue);
if (thename == "email"){ 
	if (thevalue == ""){
	 document.getElementById("errorMessage").innerHTML = "You must enter a email."; 
	 document.getElementById("signupForm").email.focus(); nowcont = false;
	  } else if (invalidChar(thevalue)) {
		document.getElementById("errorMessage").innerHTML = "You have entered some special characters that are not allowed."; 
	 	document.getElementById("signupForm").email.focus(); nowcont = false;
	} else if (!emailValidation(thevalue)){
	 document.getElementById("errorMessage").innerHTML = "That doesn't look like an email address, please try agian."; 
	 document.getElementById("signupForm").email.focus(); nowcont = false;
	  } 
}


if (thename == "password"){ 
	if (thevalue == ""){
	 document.getElementById("errorMessage").innerHTML = "You must enter a password."; 
	 document.getElementById("signupForm").password.focus(); nowcont = false;
	  } else if (invalidChar(thevalue)) {
		document.getElementById("errorMessage").innerHTML = "You have entered some special characters that are not allowed."; 
	 	document.getElementById("signupForm").password.focus(); nowcont = false;
	} else if (!passwordValidation(thevalue)){
	 document.getElementById("errorMessage").innerHTML = "Password must be at least 6 characters long."; 
	 document.getElementById("signupForm").password.focus(); nowcont = false;
	  } 
}


	return nowcont;

}









 var aok;
//Functions to submit a form. 
function getformvalues (fobj, valfunc){
var str = ""; 
aok = true; 
var val;
//Run through a list of all objects contained within the form. 
for(var i = 0; i < fobj.elements.length; i++){ 
	if(valfunc) {
	 if (aok == true){ 
		val = valfunc (fobj.elements[i].value,fobj.elements[i].name);
 		if (val == false){ 
 			aok = false; 
 		} 
 	} 
 } 
 str += fobj.elements[i].name + "=" + escape(fobj.elements[i].value) + "&"; 
 }
 //Then return the string values. 
 return str;
}







function submitform (theform, serverPage, objID, valfunc){
 var file = serverPage; 
 var str = getformvalues(theform,valfunc);

 //If the validation is ok. 
 if (aok == true){ 
 	obj = document.getElementById(objID);
 	processajax (serverPage, obj, "post", str); 
 } 

}



// Function to create an XMLHttp Object

function getxmlhttp () {
	// Create a boolean variable to check for a valid Microsoft active x instance
	var xmlhttp = false;

	// Check if we are using internet explorer
	try {
		// If the javascript version is greater than 5
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		// If not, then use the older active x object
		try {
			// If we are using internet explorer
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {
			// Else we must be using a non-internet explorer browser
			xmlhttp = false;
		}

	}

		// If not using IE, create a JavaScript instance of the object
		if (!xmlhttp && typeof XMLHTTPRequest != 'undefined') {
			xmlhttp = new XMLHTTPRequest();
		}

		return xmlhttp;
}


	// Function to process an XMLHttpRequest
	function processajax (serverPage, obj, getOrPost, str) {
		// Get an XMLHttpRequest object for use
		var xmlhttp = new XMLHttpRequest();

		if (getOrPost == "get") {
			xmlhttp.open("GET", serverPage);

			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					obj.innerHTML = xmlhttp.responseText;
				}
			} 
			xmlhttp.send(null);

		} else {
			xmlhttp.open("POST", serverPage, true);
			xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					obj.innerHTML = xmlhttp.responseText;
				}
			}
			xmlhttp.send(str);
		}
	}

