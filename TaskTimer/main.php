<!DOCTYPE html>
<html lang="en">
<head>
  <title>Task Timer-main</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="bootstrap-3/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/main.css">
  <script src="js/jquery-2.2.0.min.js"></script>
  <script src="bootstrap-3/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">


 <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <form role="form">
            <div class="form-group">
              <label for="usr">Description:</label>
              <input type="text" class="form-control" id="usr">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" id="close">Close</button>
        </div>
      </div>
      
    </div>
  </div>








  <div class="col-sm-12" id="nav-sm">
    <a href="#" id="logoutMain">logout</a>
  </div>
  <div class="col-sm-12" id="topHolderMain">
    <div id="topSideHolder-main">
      <div id="statsBtnMain">Statistics</div>
    </div>
    <div id="topSideHolder-main">
      <div id="timerBtnMain">Timer</div>
    </div>
  </div>
  <div class="col-sm-12" id="bottomHolderMain">
    <div class="col-sm-12" id="selectionTitle">Select a category</div>
    <div class="col-sm-12" id="selectionHolderMain">
      
      <button type="button" class="btn" id="selection-button">Default long text for saying something irrelvent but long.</button>
      <button type="button" class="btn btn-success" id="selection-button-add" data-toggle="modal" data-target="#myModal">+</button>

    </div>
    
  </div>
</div>

<script src="js/main.js"></script>
</body>
</html>
