<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
	<head>
	<title>Inventory</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	<!-- All the files that are required -->
	<link href='css/bootstrap.css' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	<link href='http://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
	<link href='css/login/loginstyle.css' rel='stylesheet' type='text/css'>
	
	<script src="scripts/lib/jquery-3.1.0.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.13.1/jquery.validate.min.js"></script>
	
	
	
	</head>
	<body>
		<!-- Where all the magic happens -->
		<!-- LOGIN FORM -->
		<div class="text-center" style="padding:50px 0">
			<div class="logo"><img src="" /> Login into Inventory System</div>
			<!-- Main Form -->
			<div class="login-form-1">
				<!-- <form id="login-form" class="text-left"> -->
				<form class="form login-form"  namespace="/"  action="login.action" method="post" >
					<div class="login-form-main-message"></div>
					<div class="main-login-form">
						<div class="login-group">
							<div class="form-group">
								<label for="lg_username" class="sr-only">Username</label>
								<input type="text" class="form-control" id="lg_username" name="lg_username" placeholder="username">
							</div>
							<div class="form-group">
								<label for="lg_password" class="sr-only">Password</label>
								<input type="password" class="form-control" id="lg_password" name="lg_password" placeholder="password">
							</div>					
						</div>
						<button type="submit" class="login-button"><i class="fa fa-chevron-right"></i></button>
					</div>			
				</form>
			</div>
			<!-- end:Main Form -->
		</div>
	</body>
</html>