<!--
	Contact page sreenaths.com
-->

<?php
	$TITLE = "Sreenath S &#187; Projects";
	include "shared/prefix.php";
	include "shared/header.php";

	include "data/project_data.php";
?>

	<link rel="stylesheet" type="text/css" href="/css/projects.css">
	<link href="css/lightbox.css" rel="stylesheet" />

	<script src="/js/lightbox.js"></script>
	<script> sticky( "#sticky-bar" ); </script>

	<style type="text/css"> #projects-hlink{ color: #FFFFFF !important; } </style>

	<div class="grey-gradiant-half center">
		<div class="inline-block v-padding-2x">
			<div class=float>
				<div class=heading>Projects</div>
				<div class=sub-heading style="width:500px;">They are more than a few lines of code. They are, what I am.</div>
				<div class="description" style="font-size:14px;">
					<p>Programming is my first love, and from the first glimpse I knew that we would be together for life. My first notable work was released in 2002, and was a game. Over these years I have worked on numerous projects across multiple platforms, operating systems, and languages.</p>
				</div>
			</div>
		</div>
	</div>

	<div class="center inner-shade bg1">
		
		<div class="tag-bar">
			<div id="sticky-bar" class="tag-bar">
				<div class="inline-block v-padding">
					<div class=float>
						<div class=sub-heading>Tags</div>
						<ul>
							<?php
								$tagList = array();
								foreach( $projectData["tags"] as $tag ){
									array_push($tagList, '<li><a href="#" class="button"> <img src="',$tag["iconUrl"],'"/>',$tag["displayName"],' </a></li>');
								}
								echo ( implode("", $tagList) );
							?>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<ul class="projects-list">

		 	<?php foreach( $projectData["projects"] as $project ){ ?>
				
				<li class="project <?=implode(' ',$project['tags'])?>">
					<div class="inline-block v-padding-2x">
						<div class="float full-width">

							<div style="width:100%;height:165px;">

								<? if($project["link"]){ ?>
									<a href="<?=$project["link"]?>">
										<div class="rounded main-image" style="background-image:url(<?=$project["image"]?>);" ></div>
									</a>
								<? } else { ?>
										<div class="rounded main-image" style="background-image:url(<?=$project["image"]?>);" ></div>
								<? } ?>

								<div class="details-container">

									<div class="title" >

										<? if($project["link"]){ ?>
											<a class="hover-black" href="<?=$project["link"]?>"> <?=$project["displayName"]?></a>
										<? } else { ?>
											<?=$project["displayName"]?>
										<? } ?>

										<? if($project["git"]){ ?>
											<a class="hover-black" href="<?=$project["git"]?>"> <img src="/images/git.png"/></a>
										<? } ?>

										<div class="tags">
											<?
												foreach( $project["tags"] as $tagId ){
													$tag = $projectData["tags"][$tagId];
													echo("<img class=small-icon title=".$tag["displayName"]." src='".$tag["iconUrl"]."'>");
												}
											?>
											&nbsp;
										</div>

									</div>
									<div class="detail-type">Technologies</div> <div class="detail-value"><?=$project["technologies"]?></div>
									<div class="detail-type">Chrono</div> <div class="detail-value"><?=$project["chrono"]?></div>
									
									<? if( $project["company"] ){ ?>
										<div class="detail-type">Associate</div> <div class="detail-value"><?=$project["company"]?></div>
									<? } else { ?>
										<div class="detail-type">Project type</div> <div class="detail-value">Personal fun project</div>
									<? } ?>

									<?
										$showScreens = count($project["screens"])!=0;
										if( $showScreens ){
											echo("<div class=gallery-wrapper>");
											foreach( $project["screens"] as $screen ){
									?>
												<a href="<?=$screen?>.jpg" data-lightbox="<?=$project['id']?>" title="<?=$project['displayName']?>">
													<div class="rounded gallery-thumb" style="background-image:url(<?=$screen?>t.jpg);" ></div>
												</a>
									<?
											}
											echo("</div>");
										} else if(false){
									?>
										<div class="description"><?=$project["description"]?></div>
									<? } ?>
								
								</div>
							</div>

							<? if( true||$showScreens ){ ?>
								<div class="description" ><?=$project["description"]?></div>
							<? } ?>

						</div>
					</div>
				</li>

			<?php } ?>

		</ul>

	</div>

<?php
	include "shared/footer.php";
	include "shared/sufix.php";
?>