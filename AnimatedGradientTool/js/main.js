// default value
var rgb = "rgb(0,0,0)";




	// rgb to hex function
	function rgb2hex(rgb){
	 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
	 return (rgb && rgb.length === 4) ? "#" +
	  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
	  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
	  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
	}


	// hex to rgb function
	function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    	} : null;
	}


// Updates the whole page when a change is made
function cssUpdateDisplay() 
{
	// Css code being displayed to the user
	$(".css-Holder").html("background: linear-gradient(" + $("#gradientAngleValue").val() + "deg, " + $("#color1").html().toUpperCase() + ", " + $("#color2").html().toUpperCase() + ");" + "<br>" +
		"background-size: 400% 400%;" +  "<br>" +
		"<br>" +
		"-webkit-animation: " + $(".nameAnimation").val() + " " + $("#speedValue").val() + "s ease infinite;" + "<br>" +
		"-moz-animation: " + $(".nameAnimation").val() + " " + $("#speedValue").val() + "s ease infinite;" + "<br>" +
		"animation: " + $(".nameAnimation").val() + " " + $("#speedValue").val() + "s ease infinite; " + "<br>" +
		"<br>" +
		"@-webkit-keyframes " + $(".nameAnimation").val() + " {"+ "<br>" +
		"0%{background-position:0% 50%}"+ "<br>" +
		"50%{background-position:100% 50%}"+ "<br>" +
		"100%{background-position:0% 50%}"+ "<br>" +
		"}"+ "<br>" +
		"@-moz-keyframes " + $(".nameAnimation").val() + " {"+ "<br>" +
		"0%{background-position:0% 50%}"+ "<br>" +
		"50%{background-position:100% 50%}"+ "<br>" +
		"100%{background-position:0% 50%}"+ "<br>" +
		"}"+ "<br>" +
		"@keyframes " + $(".nameAnimation").val() + " { "+ "<br>" +
		"0%{background-position:0% 50%}"+ "<br>" +
		"50%{background-position:100% 50%}"+ "<br>" +
		"100%{background-position:0% 50%}"+ "<br>" +
		"}");

	// Large background gradient animation
	$('body').css({
    		"background": "linear-gradient("+ $('#gradientAngleValue').val() + "deg, "+ $(".colorArea_L").css("background-color") + ", " + $(".colorArea_R").css("background-color") + ")",
			"background-size": "400% 400%",
			'-webkit-animation': "defaultBackgroundGradient " + $("#speedValue").val() + "s ease infinite",
    		'-moz-animation': "defaultBackgroundGradient " + $("#speedValue").val() + "s ease infinite",
    		'animation': "defaultBackgroundGradient " + $("#speedValue").val() + "s ease infinite"
		});


}


	// Update Hex Value for Color1
	function hexUpdateL()
	{
		// rgba value to be turned into hex
		rgb = "rgba(" + $('.red_L').val() + "," + $('.green_L').val() + "," + $('.blue_L').val() + ", 1)";
			
		// rgba to Hex 
		$("#color1").html(rgb2hex(rgb).toUpperCase());

		// Set color area background
		$(".colorArea_L").css("background-color", rgb2hex(rgb));
		
		// Sync input range with the displayed value 
		$("#leftRedValue").html($('.red_L').val());
		$("#leftGreenValue").html($('.green_L').val());
		$("#leftBlueValue").html($('.blue_L').val());
		

		// Update Css Value being Displayed
		cssUpdateDisplay();
	}

	// Update Hex Value for Color2
	function hexUpdateR()
	{
		// rgba value to be turned into hex
		rgb = "rgba(" + $('#gradientAngleValue').val() + "," + $('.green_R').val() + "," + $('.blue_R').val() + ", 1)";
			
		// rgba to Hex
		$("#color2").html(rgb2hex(rgb).toUpperCase());

		// Set color area background
		$(".colorArea_R").css("background-color", rgb2hex(rgb));

		// Sync input range with the displayed value 
		$("#rightRedValue").html($('.red_R').val());
		$("#rightGreenValue").html($('.green_R').val());
		$("#rightBlueValue").html($('.blue_R').val());

		// Update Css Value being Displayed
		cssUpdateDisplay();
	}

