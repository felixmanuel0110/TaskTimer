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
  <div class="col-sm-12" id="selectedItm">This some random text to show the correct fill space. aklfnvdka aldfkjlf sd ajfdsio</div>
  <div class="col-sm-12" id="estTimeHolder">
      <label for="estTime" id="estTimeLbl">Estimated Time:</label>
      <input type="time" class="form-control" id="estTimeInput">
  </div>
  <div class="col-sm-12" id="timerHolder">
    <button type="button" id="startBtn">START</button>
  </div>
  <div class="col-sm-12" id="acyTimeHolder">
    <label for="acyTime" id="acyTimeLbl">Accuracy:</label>
    <div id="acySec">###%</div>
  </div>
</div>


</body>
</html>
