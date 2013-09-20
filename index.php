<!--
	Main page sreenaths.com
-->

<?php

// Remove in web, just for th fonts
//curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
//curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

?>

<?php
	$TITLE = "Sreenath Somarajapuram";
	include "shared/prefix.php";
	include "shared/header.php";
?>

		<link rel="stylesheet" type="text/css" href="/css/home.css">
		<script src="/js/parallax.js"></script>

		<style type="text/css"> #home-hlink{ color: #FFFFFF !important; } </style>

		<div class="paralax-container grey-gradiant center">
			<div class=inline-block>
				<img src="/images/techIcons/ruby.png" x="1400" style="left:835px;top:500px"/>
				<img src="/images/techIcons/unity.png" x="1200" style="left:630px;top:480px"/>
				<img src="/images/techIcons/shell.png" x="-50" style="left:135px;top:250px"/>
				<img src="/images/techIcons/php.png" x="-10" style="left:160px;top:320px"/>
				<img src="/images/techIcons/java.png" x="1000" style="left:805px;top:240px"/>
				<img src="/images/techIcons/c.png" x="900" style="left:750px;top:70px"/>
				<img src="/images/techIcons/cpp.png" x="900" style="left:695px;top:110px"/>

				<img src="/images/techIcons/jquery.png" x="900" style="left:700px;top:350px"/>
				<img src="/images/techIcons/css3.png" x="800" style="left:620px;top:330px"/>
				<img src="/images/techIcons/html5.png" x="700" style="left:510px;top:330px;"/> 
				<img src="/images/techIcons/javascript.png" x="900" style="left:620px;top:430px"/>

				<img src="/images/techIcons/starling.png" x="900" style="left:590px;top:180px;"/> 
				<img src="/images/techIcons/as3.png" x="900" style="left:495px;top:100px;"/>
				<img src="/images/me.png" x="0" style="left:60px;top:0px;pointer-events:none;"/>
			</div>
		</div>

		<script> initiateImgParallax($(".paralax-container")); </script>

		<div class="center bg1 v-padding" style="height:390px;">
			<div class="inline-block v-padding">
				<div class=center>
					<div class=sub-heading style="border-bottom:1px solid #CCCCCC;">My Current Assignment</div>
					<div class="v-padding description">
						<a href="http://apps.facebook.com/playhiddenshadows"><img src="/images/hs.png"></br></a>
						I'm working on Zynga's latest game in the hidden objects genre, <i>Hidden Shadows</i>. Our team is behind both the web and mobile versions of the game. My tasks include creation of some key features, and polishing the game for better user experience. I have also taken up the task to crack starling framework for creating new and better UI components.
					</div>
				</div>
			</div>
		</div>

		<div class="center inner-shade bg2 v-padding" style="height:180px;">
			<div class="inline-block v-padding">
				<div class=center>
					<div class=sub-heading style="border-bottom:1px solid #CCCCCC;">Contact Me</div>
					<div class="v-padding">
						<a title="E-Mail" href="mailto:mailme@sreenaths.com" ><img src="/images/icons/mail-icon.png" /></a>
						<a title="Facebook" href="http://www.facebook.com/sreenathsomarajapuram" ><img src="/images/icons/facebook-icon.png" /></a>
						<a title="LinkedIn" href="http://in.linkedin.com/pub/sreenath-somarajapuram/24/993/a84" ><img src="/images/icons/linkedin-icon.png" /></a>
						<a title="Blogger" href="http://myauxiliarymemory.blogspot.in/" ><img src="/images/icons/blogger-icon.png" /></a>
						<a title="Google+" href="https://plus.google.com/u/0/107899876735168906791/about" ><img src="/images/icons/google-icon.png" /></a>
						<div class="v-padding">
							<a href="skype:sreenath-s?add"><image src="/images/icons/skype.png" style="margin-top:-6px;" align=middle> <span class="small-text">Feel free to skype me at <i>sreenath-s</i></span> <image src="images/plus-button.png" style="margin-top:-8px;" align=middle></a><br/>
							<a href="tel:+919611745548"><image src="/images/icons/phone.png" style="margin-top:-6px;" align=middle> <span class="small-text">Or call me at <i>+91-9611-745548</i></span></a>
						</div>
					</div>
				</div>
			</div>
		</div>

<?php
	include "shared/footer.php";
	include "shared/sufix.php";
?>
