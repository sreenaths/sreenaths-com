
<!DOCTYPE html>
<html>

	<head profile="http://www.w3.org/2005/10/profile">
		<title><?=$TITLE?></title>
		<link rel="stylesheet" type="text/css" href="/css/shared.css">
		
		<link rel="stylesheet" href="/images/loader.gif"/>

		<link rel="icon" type="image/png" href="/favicon.png">

		<script src="/js/jq.js"></script>
		<script src="/js/shared.js"></script>
	</head>

	<body class="landscape">

		<div id="loadingMsg" class="loading-msg">
			<img src="/images/ss.png" style="width:32px;height:32px;">
			Loading</br>
			<img src="/images/loader.gif">
		</div>

		<div id="mainContainer" class="main-container">

		<script>

			_('loadingMsg').style.display = 'block';
			_('mainContainer').style.display = 'none';

			$(window).load(function(){
				fadeOutIn( '#loadingMsg', '#mainContainer' );
			});
		</script>
