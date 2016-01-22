<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Animated Gradient Tool</title>
  <meta name="description" content="Animated Gradient Tool">
  <meta name="author" content="Felix Manuel">

  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/slider.css">
  <script src="js/jquery-2.1.4.min.js"></script>
  <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
	<cfscript>
		// Hex values for color
	    colorArray_1 = ["0099F7", "2980b9", "4DA0B0", "2F7336", "C02425", "c2e59c", "8E0E00", "fc00ff", "00C9FF", "004FF9", "7b4397", "FDFC47", "F0C27B", "780206", "0ABFBC", "003973"];
	    colorArray_2 = ["F11712", "2c3e50", "D39D38", "AA3A38", "F0CB35", "64b3f4", "1F1C18", "00dbde", "92FE9D", "FFF94C", "dc2430", "24FE41", "4B1248", "061161", "FC354C", "E5E5BE"];

	    // Random Number used for picking colors
	    indexPos = RandRange(1, 16, "SHA1PRNG");

	    // Default speed of Animation
	    speed = 10;
	    
	    // New hex color
	    strHEX_Left = colorArray_1[indexPos];
		strHEX_Right = colorArray_2[indexPos];

		// Grab the corresponding Hex for each color
		strRed_Left = Mid( strHEX_Left, 1, 2 );
		strGreen_Left = Mid( strHEX_Left, 3, 2 );
		strBlue_Left = Mid( strHEX_Left, 5, 2 );

		strRed_Right = Mid( strHEX_Right, 1, 2 );
		strGreen_Right = Mid( strHEX_Right, 3, 2 );
		strBlue_Right = Mid( strHEX_Right, 5, 2 );
	    
	</cfscript>

	<cfsavecontent variable="gradientAnimation">
		background-size: 400% 400%;
	    -webkit-animation: defaultBackgroundGradient <cfoutput>#speed#</cfoutput>s ease infinite;
		-moz-animation: defaultBackgroundGradient <cfoutput>#speed#</cfoutput>s ease infinite;
		animation: defaultBackgroundGradient <cfoutput>#speed#</cfoutput>s ease infinite; 
	</cfsavecontent>

 



<cfset gradientAngle = RandRange(34, 334, "SHA1PRNG") />

<cfscript>
	// Helps prevent low gradient animation quality by avoiding problem values
	    while(gradientAngle GE 165 && gradientAngle LE 195) {
	    	gradientAngle = RandRange(34, 359, "SHA1PRNG");
	    }
	    
	    
	</cfscript>


</head>

<body style="background:linear-gradient(<cfoutput>#gradientAngle#</cfoutput>deg, #<cfoutput>#colorArray_2[indexPos]#</cfoutput>, #<cfoutput>#colorArray_1[indexPos]#</cfoutput>); <cfoutput>#gradientAnimation#</cfoutput>">
<form class="ag-form" action="#" onkeypress="return event.keyCode != 13;">
<div class="mainSection">
	<div class="topHolder">
	  <div class="leftSection">
	    <header class="title">Color 1</header>
	    <div class="colorSectionSmallBox">
	    	<div class="colorArea_L" style="background-color:#<cfoutput>#colorArray_1[indexPos]#</cfoutput>;"></div>
	    	<div class="colorHex" id="color1">
	    		#<cfoutput>#UCase(colorArray_1[indexPos])#</cfoutput>
	    	</div>
	    </div>
	    <div class="redValues">
	      <div class="letterSec">R</div>
	      <div class="sliderSec">
	      	<input type="range" id="leftColor" class="sliderBar red_L" min="0" max="255" value="<cfoutput>#InputBaseN( strRed_Left, 16 )#</cfoutput>" step="1" onchange="hexUpdateL();" />
	      </div>
	      <div class="percentageSec" id="leftRedValue">
	      	<cfoutput>#InputBaseN( strRed_Left, 16 )#</cfoutput>
	      </div>
	    </div>
	    <div class="greenValues">
	      <div class="letterSec">G</div>
	      <div class="sliderSec">
	      	<input type="range" id="leftColor" class="sliderBar green_L" min="0" max="255" value="<cfoutput>#InputBaseN( strGreen_Left, 16 )#</cfoutput>" step="1" onchange="hexUpdateL();" />
	      </div>
	      <div class="percentageSec" id="leftGreenValue">
	      	<cfoutput>#InputBaseN( strGreen_Left, 16 )#</cfoutput>
	      </div>
	    </div>
	    <div class="blueValues">
	      <div class="letterSec">B</div>
	      <div class="sliderSec">
	      	<input type="range" id="leftColor" class="sliderBar blue_L" min="0" max="255" value="<cfoutput>#InputBaseN( strBlue_Left, 16 )#</cfoutput>" step="1" onchange="hexUpdateL();" />
	      </div>
	      <div class="percentageSec" id="leftBlueValue">
	      	<cfoutput>#InputBaseN( strBlue_Left, 16 )#</cfoutput>
	      </div>
		</div>
  	  </div>

  <div class="rightSection">
    <header class="title">COLOR 2</header>
    <div class="colorSectionSmallBox">
    	<div class="colorArea_R" style="background-color:#<cfoutput>#colorArray_2[indexPos]#</cfoutput>;"></div>
    	<div class="colorHex" id="color2">
    		#<cfoutput>#UCase(colorArray_2[indexPos])#</cfoutput>
    	</div>
    </div>
    <div class="redValues">
      <div class="letterSec">R</div>
      <div class="sliderSec">
      	<input type="range" id="rightColor" class="sliderBar red_R" min="0" max="255" value="<cfoutput>#InputBaseN( strRed_Right, 16 )#</cfoutput>" step="1" onchange="hexUpdateR();" />
      </div>
      <div class="percentageSec" id="rightRedValue">
      	<cfoutput>#InputBaseN( strRed_Right, 16 )#</cfoutput>
      </div>
    </div>
    <div class="greenValues">
      <div class="letterSec">G</div>
      <div class="sliderSec">
      	<input type="range" id="rightColor" class="sliderBar green_R" min="0" max="255" value="<cfoutput>#InputBaseN( strGreen_Right, 16 )#</cfoutput>" step="1" onchange="hexUpdateR();" />
      </div>
      <div class="percentageSec" id="rightGreenValue">
      	<cfoutput>#InputBaseN( strGreen_Right, 16 )#</cfoutput>
      </div>
    </div>
    <div class="blueValues">
      <div class="letterSec">B</div>
      <div class="sliderSec">
      	<input type="range" id="rightColor" class="sliderBar blue_R" min="0" max="255" value="<cfoutput>#InputBaseN( strBlue_Right, 16 )#</cfoutput>" step="1" onchange="hexUpdateR();" />
      </div>
      <div class="percentageSec" id="rightBlueValue">
      	<cfoutput>#InputBaseN( strBlue_Right, 16 )#</cfoutput>
      </div>
    </div>
  </div>

  </div>
<div class="bottomHolder">

<div class="leftBottomSection">
  <div class="gradientAngleHolder">
  	<header class="gah-title">Gradient Angle</header>
  	<input type="range" id="gradientAngleValue" class="sliderBar" min="0" max="255" value="<cfoutput>#gradientAngle#</cfoutput>" step="1" onchange="cssUpdateDisplay();" />
  </div>
  <div class="speedHolder">
  	<header class="gah-title">Speed</header>
  	<input type="range" class="sliderBar" id="speedValue" min="0" max="59" value="<cfoutput>#speed#</cfoutput>" step="1" onchange="cssUpdateDisplay();" />
  </div>
  </div>

  <div class="bottomSection">
  	<header class="bottomHeader">
  		<input class="nameAnimation" type="text" name="nameAnimation" value="AnimationName" onchange="cssUpdateDisplay();">
  	</header>
  	<div class="css-Holder">
  		background: linear-gradient(<cfoutput>#gradientAngle#</cfoutput>deg, #<cfoutput>#colorArray_1[indexPos]#</cfoutput>, #<cfoutput>#colorArray_2[indexPos]#</cfoutput>);<br>
		background-size: 400% 400%;
		<br>
		<br>
		-webkit-animation: AnimationName <cfoutput>#speed#</cfoutput>s ease infinite;<br>
		-moz-animation: AnimationName <cfoutput>#speed#</cfoutput>s ease infinite;<br>
		animation: AnimationName <cfoutput>#speed#</cfoutput>s ease infinite;
		<br>
		<br>
		@-webkit-keyframes AnimationName {<br>
		    0%{background-position:0% 50%}<br>
		    50%{background-position:100% 50%}<br>
		    100%{background-position:0% 50%}<br>
		}<br>
		@-moz-keyframes AnimationName {<br>
		    0%{background-position:0% 50%}<br>
		    50%{background-position:100% 50%}<br>
		    100%{background-position:0% 50%}<br>
		}<br>
		@keyframes AnimationName { <br>
		    0%{background-position:0% 50%}<br>
		    50%{background-position:100% 50%}<br>
		    100%{background-position:0% 50%}<br>
		}
  	</div>
  </div>
  <div class="rightBottomSection">
	  <div class="randomBtnHolder"> <a href="index.cfm">Random</a></div>
  </div>
  
  </div>
</div>
</form>




 
  <script src="js/main.js"></script>
</body>
</html>