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
				<div class="img-float" x="1400" style="left:835px;top:500px;background-image: url('/images/techIcons/ruby.png');width:70px;height:88px;"/>&nbsp;</div>
				<div class="img-float" x="1200" style="left:630px;top:480px;background-image: url('/images/techIcons/unity.png');width:220px;height:101px;"/>&nbsp;</div>
				<div class="img-float" x="-50" style="left:135px;top:250px;background-image: url('/images/techIcons/shell.png');width:100px;height:84px;"/>&nbsp;</div>
				<div class="img-float" x="-10" style="left:160px;top:320px;background-image: url('/images/techIcons/php.png');width:120px;height:70px;"/>&nbsp;</div>
				<div class="img-float" x="1000" style="left:805px;top:240px;background-image: url('/images/techIcons/java.png');width:170px;height:95px;"/>&nbsp;</div>
				<div class="img-float" x="900" style="left:750px;top:70px;background-image: url('/images/techIcons/c.png');width:60px;height:71px;"/>&nbsp;</div>
				<div class="img-float" x="900" style="left:695px;top:110px;background-image: url('/images/techIcons/cpp.png');width:170px;height:84px;"/>&nbsp;</div>

				<div class="img-float" x="900" style="left:700px;top:350px;background-image: url('/images/techIcons/jquery.png');width:174px;height:59px;"/>&nbsp;</div>
				<div class="img-float" x="800" style="left:620px;top:330px;background-image: url('/images/techIcons/css3.png');width:90px;height:120px;"/>&nbsp;</div>
				<div class="img-float" x="700" style="left:510px;top:330px;background-image: url('/images/techIcons/html5.png');width:127px;height:170px;"/>&nbsp;</div> 
				<div class="img-float" x="900" style="left:620px;top:430px;background-image: url('/images/techIcons/javascript.png');width:220px;height:53px;"/>&nbsp;</div>

				<div class="img-float" x="900" style="left:590px;top:180px;background-image: url('/images/techIcons/starling.png');width:216px;height:124px;"/>&nbsp;</div>
				<div class="img-float" x="900" style="left:495px;top:100px;background-image: url('/images/techIcons/as3.png');width:160px;height:160px;"/>&nbsp;</div>
				<div class="img-float" x="0" style="left:60px;top:0px;pointer-events:none;"><img src="/images/me.png"/></div>
			</div>
		</div>

		<script> initiateImgParallax($(".paralax-container")); </script>

		<div class="center bg1 v-padding" style="height:250px;">
			<div class="inline-block v-padding">
				<div class=center>
					<div class=sub-heading style="border-bottom:1px solid #CCCCCC;">My Current Assignment</div>
					<div class="v-padding description">
						<a href="http://www.myntra.com/"><img src="/images/myntra.png"></br></a>
						Myntra is an Indian online shopping retailer of fashion and casual lifestyle products. We currently offers close to 50,000 products from more than 600 Indian and international brands, and ships about 5 million goods per month by hosting around 3,000 sellers.
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
