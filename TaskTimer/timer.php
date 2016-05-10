<!DOCTYPE html>
<html lang="en">
<head>
  <title>Task Timer-timer</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="bootstrap-3/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/timer.css">
  <script src="js/jquery-2.2.0.min.js"></script>
  <script src="bootstrap-3/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <div class="col-sm-12" id="nav-sm">
    <div id="goBack">Go Back</div>
    <a href="#" id="logoutTimer">logout</a>
  </div>
  <div class="col-sm-12" id="selectedItm"></div>
  <div class="col-sm-12" id="estTimeHolder">
      <label for="estTime" id="estTimeLbl">Estimated Time:</label>
      <input type="number" value="00" name="quantity" class="form-control hours" id="estTimeInput" min="0" max="24" step="1" onchange="if(parseInt(this.value,10)<10)this.value='0'+this.value;">
      <label id="timeInd">:</label>
      <input type="number" value="00" name="quantity" class="form-control minutes" id="estTimeInput" min="0" max="60" step="1" onchange="if(parseInt(this.value,10)<10)this.value='0'+this.value;">
      <label id="timeInd">:</label>
      <input type="number" value="00" name="quantity" class="form-control seconds" id="estTimeInput" min="0" max="60" step="1" onchange="if(parseInt(this.value,10)<10)this.value='0'+this.value;">
  </div>
  <div class="col-sm-12" id="timerHolder">
    <button type="button" id="startBtn">START</button>
  </div>
  <div class="col-sm-12" id="acyTimeHolder">
    <label for="acyTime" id="acyTimeLbl">Accuracy:</label>
    <div id="acySec">###%</div>
  </div>
</div>

<script src="js/timer.jquery.js"></script>
<script src="js/timer.js"></script>
</body>
</html>
