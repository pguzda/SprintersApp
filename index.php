<?php
	$basepath = 'http://public.off7.net/talentoday/sprinters';
?>
<!DOCTYPE html>
<html lang="fr" ng-app="Sprinters">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="">
		<meta name="author" content="">
		
		<title>Sprinters App</title>
		
		<!-- CSS - Vendors -->
		<link rel="stylesheet" href="<?php echo $basepath; ?>/vendors/bootstrap/dist/css/bootstrap.css">

		<!-- CSS - App -->
		<link rel="stylesheet" href="<?php echo $basepath; ?>/assets/styles/css/app.css">
		
		<!-- Scripts - Vendors -->
		<script type="text/javascript" src="<?php echo $basepath; ?>/vendors/jquery/dist/jquery.js"></script>
		<script type="text/javascript" src="<?php echo $basepath; ?>/vendors/angular/angular.js"></script>
		<script type="text/javascript" src="<?php echo $basepath; ?>/vendors/angular-route/angular-route.js"></script>
		<script type="text/javascript" src="<?php echo $basepath; ?>/vendors/angular-resource/angular-resource.js"></script>
		<script type="text/javascript" src="<?php echo $basepath; ?>/vendors/bootstrap/dist/js/bootstrap.js"></script>
		<script type="text/javascript" src="<?php echo $basepath; ?>/vendors/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js"></script>
		
		<!-- Scripts - App -->
		<script type="text/javascript" src="<?php echo $basepath; ?>/app.js"></script>
		<script type="text/javascript" src="<?php echo $basepath; ?>/application/sprinters/Sprinters.js"></script>
		<script type="text/javascript" src="<?php echo $basepath; ?>/utils/services.js"></script>
		<!-- Scripts - App - Utils -->
		
		
		<!-- Scripts - Global -->
	</head>
	
	<body>
		
		<!-- No JS -->
		<noscript>
			<div class="noscript">
				<div class="warning"></div>
				This website requires <strong>JavaScript</strong> activated to run.<br>
				Please activate it in your browser settings.
			</div>
		</noscript>
		<!-- / No JS -->
		
		
		
		<!-- Header -->
		<div ng-include="'<?php echo $basepath; ?>/application/header.html'"></div>		
		
		
		<!-- Content -->
		<div ng-include="'<?php echo $basepath; ?>/application/content.html'"></div>
		
		<!-- Footer -->
		<div ng-include="'<?php echo $basepath; ?>/application/footer.html'"></div>
		
	</body>
</html>