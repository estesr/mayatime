<?php 
/**
 * @file
 * Alpha's theme implementation to display a single Drupal page.
 */
?>
<div<?php print $attributes; ?>>
  <?php if (isset($page['header'])) : ?>
    <?php print render($page['header']); ?>
  <?php endif; ?>
	<?php //print_r($)?>
	
	
  <section id="section-content" class="section section-content">
	  <div id="zone-content-wrapper-front" class="zone-wrapper zone-content-wrapper clearfix">  
	  	<div id="zone-content" class="zone zone-content clearfix container-12">    
		        <div class="grid-12 region region-content alpha omega" id="region-content">
		  				<div class="region-inner region-content-inner">
								<div class='grid-4 alpha omega'>
		    					<a id="main-content"></a>
		        			<h1 class="title" id="page-title"><?php print t('Welcome');?></h1>
									<div id='front-menu-main' lang=''>
										<p class='home-open'>The Maya of Mesoamerica are renowned for their precise calendars and their knowledge of astronomy.</p>
										<p>Through systematic observations conducted over thousands of years, Maya skywatchers developed complex and accurate calendars that continue to mark agricultural and ceremonial cycles today. Join us in an exploration of the Maya Calendar system and its intricate cycles. Hear the voices of contemporary Maya people as they weave their past and present together, and share with us their living traditions of Maya time.</p>
									</div><!--home-main-->
									
									
									<!-- the maya -->
									<div class='front-menu-the-maya front-menu'>
										<h2><?php print l(t('The Maya'),'node/5');?></h2>
										<div class='viewer'>
											<?php print theme('image',array('path'=>drupal_get_path('theme','mayatime') . '/img/main-menu-the-maya.jpg' ))?>
											<div class='mask'>
												<div class='mask-inner'>
													<?php print $mayatime_main_menu_front_descriptions['5']?>
													<?php print l(t('Learn More')."&nbsp;&raquo;",'node/5',array('html'=>TRUE,'attributes'=>array('class'=>array('display-block')))); ?>
												</div><!--mask-inner-->
											</div><!--mask-->
										</div><!-- viewer -->
									</div><!--front-menu-->
									<!-- end the maya -->
									
									
									
									<!-- calendar -->
									<div class='front-menu-calendar front-menu'>
										<h2><?php print l(t('Calendar'),'node/9');?></h2>
										<div class='viewer'>
											<?php print theme('image',array('path'=>drupal_get_path('theme','mayatime') . '/img/main-menu-calendar.jpg' ))?>
											<div class='mask'>
												<div class='mask-inner'>
													<?php print $mayatime_main_menu_front_descriptions['9']?>
													<?php print l(t('Learn More')."&nbsp;&raquo;",'node/9',array('html'=>TRUE,'attributes'=>array('class'=>array('display-block')))); ?>
												</div><!--mask-inner-->
											</div><!--mask-->
										</div><!-- viewer -->
									</div><!--front-menu-->
									<!-- end calendar -->
																		
									
									<div id='front-menu-main-bottom'>
										<p class='italic'>Cultural icons, like the feathered serpent, link the Maya to their ancient past.  As a symbol of strength and renewal, the feathered serpent connects the land and the sky, and brings the energy of the Sun to the Earth for planting.</p>
									</div><!-- front-menu-main-bottom -->
									
									
								</div><!--grid 4-->
								<div id="front-menu-aside" class='grid-6 prefix-1 alpha omega'>
									<!-- maya sun-->
									<div class='front-menu-maya-sun front-menu front-menu-right'>
										<h2><?php print l(t('Maya Sun'),'node/7'); ?></h2>
										<div class='viewer'>
											<?php print theme('image',array('path'=>drupal_get_path('theme','mayatime') . '/img/main-menu-maya-sun.jpg' ))?>
											<div class='mask'>
												<div class='mask-inner'>
													<?php print $mayatime_main_menu_front_descriptions['7']?>
													<?php print l(t('Learn More')."&nbsp;&raquo;",'node/7',array('html'=>TRUE,'attributes'=>array('class'=>array('display-block')))); ?>
												</div>
											</div>
										</div><!-- viewer -->
									</div><!--front-menu-->
									
									<div class='clear'></div>
									
									<!-- corn and maya time-->
									<div class='front-menu-corn-and-maya-time front-menu front-menu-right'>
										<h2 class='long'><?php print l(t('Corn and Maya Time'),'node/11');?></h2>
										<div class='viewer'>
											<?php print theme('image',array('path'=>drupal_get_path('theme','mayatime') . '/img/main-menu-corn-and-maya-time.jpg' ))?>
											<div class='mask'>
												<div class='mask-inner'>
													<?php print $mayatime_main_menu_front_descriptions['11']?>
													<?php print l(t('Learn More')."&nbsp;&raquo;",'node/11',array('html'=>TRUE,'attributes'=>array('class'=>array('display-block')))); ?>
												</div>
											</div>
										</div><!-- viewer -->
									</div><!--front-menu-->
									
									<div class='clear'></div>
									
									<!-- resetting the count-->
									<div class='front-menu-2012-resetting front-menu front-menu-right'>
										<h2 class='long'><?php print l(t('2012: Resetting the Count'),'node/13');?></h2>
										<div class='viewer'>
											<?php print theme('image',array('path'=>drupal_get_path('theme','mayatime') . '/img/main-menu-2012-resetting.jpg' ))?>
											<div class='mask'>
												<div class='mask-inner'>
													<?php print $mayatime_main_menu_front_descriptions['13']?>
													<?php print l(t('Learn More')."&nbsp;&raquo;",'node/13',array('html'=>TRUE,'attributes'=>array('class'=>array('display-block')))); ?>
												</div>
											</div>
										</div><!-- viewer -->
									</div><!--front-menu-->
									
									
									
								</div><!--grid-6-->

		        	</div><!--region-inner-->
						</div><!--region-content-->
					</div><!--zone-content-->
				</div><!--zone-content-wrapper-->
	</section>
  
  <?php if (isset($page['footer'])) : ?>
    <?php print render($page['footer']); ?>
  <?php endif; ?>
</div>

<!-- START OF SmartSource Data Collector TAG -->
<!-- Copyright (c) 1996-2012 Webtrends Inc.  All rights reserved. -->
<!-- Version: 9.4.0 -->
<!-- Tag Builder Version: 4.1  -->
<!-- Created: 12/20/2012 9:32:53 PM -->
<script src="/sites/all/themes/mayatime/js/webtrends.js" type="text/javascript"></script>
<!-- ----------------------------------------------------------------------------------- -->
<!-- Warning: The two script blocks below must remain inline. Moving them to an external -->
<!-- JavaScript include file can cause serious problems with cross-domain tracking.      -->
<!-- ----------------------------------------------------------------------------------- -->
<script type="text/javascript">
//<![CDATA[
var _tag=new WebTrends();
_tag.dcsGetId();
//]]>
</script>
<script type="text/javascript">
//<![CDATA[
_tag.dcsCustom=function(){
// Add custom parameters here.
//_tag.DCSext.param_name=param_value;
}
_tag.dcsCollect();
//]]>
</script>
<noscript>
<div><img alt="DCSIMG" id="DCSIMG" width="1" height="1" src="//logs1.smithsonian.museum/dcs7ggy1sbdzpxnq3uhtz7kz8_6u8p/njs.gif?dcsuri=/nojavascript&amp;WT.js=No&amp;WT.tv=9.4.0&amp;dcssip=www.maya.nmai.si.edu"/></div>
</noscript>
<!-- END OF SmartSource Data Collector TAG -->

<!-- START of Google Analystics -->
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-7212576-1']);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
<!-- END of Google Analystics -->
