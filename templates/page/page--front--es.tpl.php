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
		        			<h1 class="title" id="page-title"><?php print t('Bienvenidos');?></h1>
									<div id='front-menu-main' lang=''>
										<p class='home-open'>Los mayas de Mesoamérica son famosos por sus calendarios precisos y su conocimiento de la astronomía.</p>
										<p>A través de observaciones sistemáticas realizadas durante miles de años, los observadores mayas desarrollaron calendarios complejos y precisos que siguen marcando los ciclos agrícolas y ceremoniales en la actualidad. Únase a nosotros en una exploración del sistema de calendario maya y sus ciclos complejos. Escuche las voces de los mayas contemporáneos quienes entrelazan su pasado con su presente, y comparta con nosotros las tradiciones vivas del tiempo maya.</p>
									</div><!--home-main-->
									
									
									<!-- the maya -->
									<div class='front-menu-the-maya front-menu'>
										<h2><?php print l(t('Los mayas'),'node/6');?></h2>
										<div class='viewer'>
											<?php print theme('image',array('path'=>drupal_get_path('theme','mayatime') . '/img/main-menu-the-maya.jpg' ))?>
											<div class='mask'>
												<div class='mask-inner'>
													<?php print $mayatime_main_menu_front_descriptions['6']?>
													<?php print l(t('Learn More')."&nbsp;&raquo;",'node/6',array('html'=>TRUE,'attributes'=>array('class'=>array('display-block')))); ?>
												</div><!--mask-inner-->
											</div><!--mask-->
										</div><!-- viewer -->
									</div><!--front-menu-->
									<!-- end the maya -->
									
									
									
									<!-- calendar -->
									<div class='front-menu-calendar front-menu'>
										<h2 class='short'><?php print l(t('Calendario'),'node/10');?></h2>
										<div class='viewer'>
											<?php print theme('image',array('path'=>drupal_get_path('theme','mayatime') . '/img/main-menu-calendar.jpg' ))?>
											<div class='mask'>
												<div class='mask-inner'>
													<?php print $mayatime_main_menu_front_descriptions['10']?>
													<?php print l(t('Learn More')."&nbsp;&raquo;",'node/10',array('html'=>TRUE,'attributes'=>array('class'=>array('display-block')))); ?>
												</div><!--mask-inner-->
											</div><!--mask-->
										</div><!-- viewer -->
									</div><!--front-menu-->
									<!-- end calendar -->
																		
									
									<div id='front-menu-main-bottom'>
										<p class='italic'>Íconos culturales, como la serpiente emplumada, conectan a los mayas a su antiguo pasado. Como símbolo de fuerza y renovación, la serpiente emplumada conecta la Tierra con el cielo y trae la energía del Sol para la siembra.</p>
									</div><!-- front-menu-main-bottom -->
									
									
								</div><!--grid 4-->
								<div id="front-menu-aside" class='grid-6 prefix-1 alpha omega'>
									<!-- maya sun-->
									<div class='front-menu-maya-sun front-menu front-menu-right'>
										<h2><?php print l(t('El Sol maya'),'node/8');?></h2>
										<div class='viewer'>
											<?php print theme('image',array('path'=>drupal_get_path('theme','mayatime') . '/img/main-menu-maya-sun.jpg' ))?>
											<div class='mask'>
												<div class='mask-inner'>
													<?php print $mayatime_main_menu_front_descriptions['8']?>
													<?php print l(t('Learn More')."&nbsp;&raquo;",'node/8',array('html'=>TRUE,'attributes'=>array('class'=>array('display-block')))); ?>
												</div>
											</div>
										</div><!-- viewer -->
									</div><!--front-menu-->
									
									<div class='clear'></div>
									
									<!-- corn and maya time-->
									<div class='front-menu-corn-and-maya-time front-menu front-menu-right'>
										<h2 class='long'><?php print l(t('El maíz y el tiempo maya'),'node/12');?></h2>
										<div class='viewer'>
											<?php print theme('image',array('path'=>drupal_get_path('theme','mayatime') . '/img/main-menu-corn-and-maya-time.jpg' ))?>
											<div class='mask'>
												<div class='mask-inner'>
													<?php print $mayatime_main_menu_front_descriptions['12']?>
													<?php print l(t('Learn More')."&nbsp;&raquo;",'node/12',array('html'=>TRUE,'attributes'=>array('class'=>array('display-block')))); ?>
												</div>
											</div>
										</div><!-- viewer -->
									</div><!--front-menu-->
									
									<div class='clear'></div>
									
									<!-- resetting the count-->
									<div class='front-menu-2012-resetting front-menu front-menu-right'>
										<h2 class='long'><?php print l(t('2012: La cuenta reinicia'),'node/14');?></h2>
										<div class='viewer'>
											<?php print theme('image',array('path'=>drupal_get_path('theme','mayatime') . '/img/main-menu-2012-resetting.jpg' ))?>
											<div class='mask'>
												<div class='mask-inner'>
													<?php print $mayatime_main_menu_front_descriptions['14']?>
													<?php print l(t('Learn More')."&nbsp;&raquo;",'node/14',array('html'=>TRUE,'attributes'=>array('class'=>array('display-block')))); ?>
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
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-7212576-1', 'auto');
  ga('create', 'UA-38805967-1', {'name':'b'});
  ga('send', 'pageview');
  ga('b.send', 'pageview');
</script>
<!-- END of Google Analystics -->
