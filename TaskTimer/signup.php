<!DOCTYPE html>
<html lang="en">
<head>
  <title>Task Timer-signup</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="bootstrap-3/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/signup.css">
  <script src="js/jquery-2.2.0.min.js"></script>
  <script src="bootstrap-3/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <div class="col-sm-12" id="nav-lg">
    <div id="logoHolder"></div>
  </div>

    <form role="form"  id="signupForm">
      <div class="form-group">
        <label for="email">Email address:</label>
        <input type="email" class="form-control" id="email" placeholder="name@company.com">
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd" placeholder="Create a password">
      </div>
      <div class="form-group">
        <label>By clicking the button below you agree to the <a href="#">Terms of Service.</a></label>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-default center-block" id="submitBtn">Sign Up</button>
      </div>
      
    </form>



</body>
</html>
