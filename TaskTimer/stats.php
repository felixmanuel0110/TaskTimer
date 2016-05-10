<!DOCTYPE html>
<html lang="en">
<head>
  <title>Task Timer-Stats</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="bootstrap-3/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/stats.css">
  <script src="js/jquery-2.2.0.min.js"></script>
  <script src="bootstrap-3/js/bootstrap.min.js"></script>
  <script src="http://canvasjs.com/assets/script/canvasjs.min.js"></script>

</head>
<body>

<div class="container">
  <div class="col-sm-12" id="nav-sm">
    <div id="goBack">Go Back</div>
    <div id="logoutTimer">logout</div>
  </div>
  <div class="col-sm-12" id="topHolderStats">
    <div id="leftBtnHolderMain"></div>
    <div id="statsHolderMain">
      <div id="graphHolder"><div id="chartContainer">
  </div></div>
      <div id="dateRangeHolder">
        <div class="weekArw" id="changeRangeLftArw"></div>
        <div class="" id="changeRangeTitle">April 4-11</div>
        <div class="weekArw" id="changeRangeRgtArw"></div>
      </div>
    </div>
    <div id="rightBtnHolderMain"></div>
  </div>
  <div class="col-sm-12" id="bottomHolderStats">
    <div class="col-sm-12" id="avgAccuracy">Average Accuracy: ##%</div>
    <div class="col-sm-12" id="selectionHolderStats">
      <button type="button" class="btn myBtn" id="selection-button">Default long text for saying something irrelvent but long.</button>
      <button type="button" class="btn myBtn" id="selection-button">Default2 long text for saying something irrelvent but long.</button>
      <button type="button" class="btn myBtn" id="selection-button">Default3 long text for saying something irrelvent but long.</button>
    </div>
  </div>
</div>

<script src="js/myChart.js"></script>
<script src="js/stats.js"></script>
</body>
</html>
