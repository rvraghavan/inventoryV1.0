<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<!DOCTYPE html>
<html lang="en">
<head>

<title>Accounting and Inventory System</title>
<meta name="viewport" id="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
<link rel="icon" type="image/ico" href="images/favico/favicon.png" /> 

<link href='css/bootstrap.css' rel='stylesheet' type='text/css'> <!-- bootstrap 3.3.0 -->

<link rel="stylesheet" type="text/css" href="css/jquery-ui.css" />
<link rel="stylesheet" type="text/css" href="css/ui.jqgrid.css" />
<link rel="stylesheet" type="text/css" href="css/datepicker.css" />
    
<link href='css/style.css' rel='stylesheet' type='text/css'> <!-- Custom -->
<link href="css/font-awesome.css" rel="stylesheet" />
<!-- <link rel="stylesheet" href="styles/jquery.dataTables.css" />  --> <!-- Datatable - theme -->

<script src="scripts/lib/jquery-3.1.0.min.js"></script>
<script type="text/javascript" src="scripts/lib/bootstrap.js"></script>
<script type="text/javascript" src="scripts/lib/bootstrap-datepicker.js"></script>

 <!-- jqGrid Core Library files -->
	<script src="scripts/lib/jqGrid/jquery.jqGrid.min.js"></script>
	<script src="scripts/lib/jqGrid/jquery.jqGrid.src.js"></script>
	<script src="scripts/lib/jqGrid/grid.locale-en.js"></script>
	<script src="scripts/lib/jqGrid/jquery-ui-custom.min.js"></script>
	
<script type="text/javascript" src="scripts/template/maintemplate.js"></script>
<script type="text/javascript" src="scripts/template/menu.js"></script>
<script type="text/javascript" src="scripts/template/commonUtils.js"></script> <!-- /Util - Common Js methods -->


</head>
<body>
	<header id="headerMenu"></header>
	<div class="main-container container-fluid">
		<%-- <tiles:insertAttribute name="menu" /> --%>
		<div class="content-wrapper" id="contentDiv">
			<!-- dynamic jsp -->
		</div>		
	</div>
	<footer id="footer"></footer>
</body>
</html>