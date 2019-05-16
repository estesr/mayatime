<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 *
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */

/**
 * Override or insert PHPTemplate variables into the templates.
 *
 */
function mayatime_preprocess_page(&$vars) {

	if (module_exists('path')) {
		$alias = drupal_get_path_alias(str_replace('/translate', '',str_replace('/edit', '', $_GET['q'])));
		// Setup some suggestions for page templates, based on node->type
		if (isset($vars['node']->type) && arg(2) != 'edit' && arg(2) !='translate') {
			$vars['theme_hook_suggestions'][] = 'page__'. $vars['node']->type;
		}


		/****************
		** Handle template 3 page layout customization
		****************/
		if(isset($vars['node']->type) && in_array($vars['node']->nid,variable_get('mayatime_template_3_nids')))
		{
			$vars['title_hidden'] = 1;
			$vars['theme_hook_suggestions'][] = 'page__page_template3';

		}

		/****************
		** Handle template 3a page layout customization
		****************/
		if(isset($vars['node']->type) && in_array($vars['node']->nid,variable_get('mayatime_template_3a_nids')))
		{
			$vars['title_hidden'] = 1;
			$vars['theme_hook_suggestions'][] = 'page__page_template3a';

		}

		/****************
		** Handle template 4 page layout customization
		****************/
		if(isset($vars['node']->type) && in_array($vars['node']->nid,variable_get('mayatime_template_4_nids')))
		{
			$vars['theme_hook_suggestions'][] = 'page__page_template4';

		}

		/****************
		** Handle front page template english/spanish layout customization
		****************/
		if($vars["is_front"] === TRUE && $vars['language']->language == "es")
		{
			$vars['theme_hook_suggestions'][] = 'page__front__es';

		}
		/****************
		** Sitemap module doesn't allow translation of page title
		****************/
		if($alias == "sitemap")
		{
			drupal_set_title(t('Sitemap'));
		}
	}



	//add Jquery tooltip plugin to every page.
	drupal_add_js(drupal_get_path('theme', 'mayatime') .'/js/math-game/jquery.ui.touch-punch.min.js', 'file');
	drupal_add_js(drupal_get_path('theme', 'mayatime') . '/js/jquery.qtip.min.js');
	drupal_add_js(drupal_get_path('theme', 'mayatime') . '/js/mayatime.js');

	//add toolip css
	drupal_add_css(drupal_get_path('theme', 'mayatime') . '/css/jquery.qtip.min.css');


	// OCIO security
	// seems to break the modal iframe display of photo gallerys (like @ URL /the-maya/maya-world)
	//drupal_add_js('if (window != top) top.location.href = location.href;', 'inline');

}



/****************
** Implementation of theme_preprocess_node()
** Here we are adding template suggestion based on node type and NID.
** Because several pages that are within a section have different layouts, here we
** are assigning template suggestions based on NID.
** The IK_util module provides the NIDs. There is a admin interface where NID can be updated
** Also  adding some grid classes to block for layout and positioning and appearance Based on URL
*****************/
function mayatime_preprocess_node(&$vars, $hook) {

	//default template suggestions for all nodes
	$vars['theme_hook_suggestions'] = array();
	$vars['theme_hook_suggestions'][] = 'node';

	//individual node being displayed
	if($vars['page']){

		//global, overarching
		$vars['theme_hook_suggestions'][] = 'node__page';
		$vars['theme_hook_suggestions'][] = 'node__'.$vars['node']->type.'_page';
		$vars['theme_hook_suggestions'][] = 'node__'.$vars['node']->nid.'_page';



		//specific for certain nodes to assign template 1, 2, or 3
		if(in_array($vars['nid'],variable_get('mayatime_template_3_nids')))
		{
			$vars['theme_hook_suggestions'][] = 'node__template3_page';
			if(count($vars['node']->field_page_instructions) > 0){
				$vars['attributes_array']['class'][] = 'grid-10 alpha';
			}

		}

		//specific for certain nodes to assign template 1, 2, or 3
		if(in_array($vars['nid'],variable_get('mayatime_template_3a_nids')))
		{
			$vars['theme_hook_suggestions'][] = 'node__template3a_page';
			$vars['attributes_array']['class'][] = 'grid-8 omega push-4';
		}

		//specific for certain nodes to assign template 1, 2, or 3, 4
		//if(in_array($vars['nid'],variable_get('mayatime_template_5_nids')))
		//{
		//	$vars['theme_hook_suggestions'][] = 'node__template5_page';
			//$vars['attributes_array']['class'][] = '';
		//}



	}

	//multiple nodes being displayed on one page in either teaser
	//or full view
	else{
		//template suggestions for nodes in general
		$vars['theme_hook_suggestions'][] = 'node__'.$vars['node']->type;
		$vars['theme_hook_suggestions'][] = 'node__'.$vars['node']->nid;

		//template suggestions for nodes in teaser view
		//more granular control
		if($vars['teaser']){
			$vars['theme_hook_suggestions'][] = 'node__'.$vars['node']->type.'_teaser';
			$vars['theme_hook_suggestions'][] = 'node__'.$vars['node']->nid.'_teaser';
			//dsm($vars);
		}
	}



}


/**
 * Override or insert PHPTemplate variables into the templates.
 */
function mayatime_preprocess_html(&$variables) {
	global $language;
  if(in_array('page-node-41',$variables['classes_array']) || in_array('page-node-42',$variables['classes_array'])){
  	$variables['theme_hook_suggestion'] = "html__glyph_interactive_".$language->language;
  }
}


/****************
** Implementation of theme_preprocess_block()
** Here we are mostly adding some grid classes to block for layout and positioning and appearance
*****************/
function mayatime_preprocess_block(&$variables) {
	global $language;

	/**********
	** Interactive Map block
	**********/
	if($variables['block_id'] == 1 && $variables['block_html_id'] == 'block-block-4'){

	}

	/**********
	** Glyph Interactive blocks
	**********/
	if($variables['block_html_id'] == 'block-block-20' || $variables['block_html_id'] == 'block-block-21'){
		drupal_add_js(drupal_get_path('theme', 'mayatime') .'/js/glyph-interactive/icanhaz.js', 'file');
		drupal_add_js(drupal_get_path('theme', 'mayatime') .'/js/glyph-interactive/app-'. $language->language .'.js', 'file');
		drupal_add_css(drupal_get_path('theme', 'mayatime') .'/css/glyph-interactive.css', 'file');
		//drupal_add_js($glyph_template,array('type' => 'inline', 'scope' => 'header', 'weight' => 5));
		//drupal_add_js($glyph_template2,array('type' => 'inline', 'scope' => 'header', 'weight' => 6));
	}


	/**********
	** Calendar Converter  blocks
	**********/
	if($variables['block_html_id'] == 'block-block-5' || $variables['block_html_id'] == 'block-block-7'){
		drupal_add_js(drupal_get_path('theme', 'mayatime') .'/js/calendar-converter/calendar-converter-'. $language->language .'.js', 'file');
		drupal_add_css(drupal_get_path('theme', 'mayatime') .'/css/calendar-converter.css', 'file');
	}

	/**********
	** Math Game blocks
	**********/
	if($variables['block_html_id'] == 'block-block-8' || $variables['block_html_id'] == 'block-block-9'){
		drupal_add_css(drupal_get_path('theme', 'mayatime') .'/css/math-game-landing.css', 'file');

		// here, we want to load the appropriate block for the practice rounds (or landing page)
		// based on a parameter from the URL ("game=practice-1")
		if(array_key_exists('game', $_GET)){

			drupal_add_library('system', 'ui.draggable');
			drupal_add_library('system', 'ui.droppable');
			// load the stylesheet for the game or for practice
			if(preg_match("/practice/", $_GET['game'])){
				drupal_add_css(drupal_get_path('theme', 'mayatime') .'/css/math-game-practice.css', 'file');
			}
			else{
				drupal_add_css(drupal_get_path('theme', 'mayatime') .'/css/math-game.css', 'file');
			}

			switch($_GET['game']){
				case "practice-1":
					$delta = ($language->language == "en") ? 10  : 11;
						drupal_add_js(drupal_get_path('theme', 'mayatime') .'/js/math-game/practice-1-'.$language->language.'.js', 'file');
				break;
				case "practice-2":
					$delta = ($language->language == "en") ? 12  : 13;
				break;
				case "practice-3":
					$delta = ($language->language == "en") ? 14  : 15;
				break;
				case "practice-4":
					$delta = ($language->language == "en") ? 16  : 17;
					drupal_add_css(drupal_get_path('theme', 'mayatime') .'/css/math-game.css', 'file');
				break;
				case "practice-5":
					$delta = ($language->language == "en") ? 18  : 19;
					drupal_add_css(drupal_get_path('theme', 'mayatime') .'/css/math-game.css', 'file');
				break;
				case "game-intro":
				default:
					$delta = ($language->language == "en") ? 29  : 30;
				break;
				case "game-1":
					$delta = ($language->language == "en") ? 23  : 24;
				break;
				case "game-2":
					$delta = ($language->language == "en") ? 25  : 26;
				break;
				case "game-3":
					$delta = ($language->language == "en") ? 27  : 28;
					break;
				case "reveal-1":
					$delta = ($language->language == "en") ? 31  : 32;
				break;
				case "reveal-2":
					$delta = ($language->language == "en") ? 33  : 34;
				break;
				case "reveal-3":
					$delta = ($language->language == "en") ? 35  : 36;
				break;
			}

			//load the JS for each round or practice round
			if(!preg_match("/reveal/",$_GET['game']) && $_GET['game'] != "practice-1" ){
				drupal_add_js(drupal_get_path('theme', 'mayatime') .'/js/math-game/' . $_GET['game'] .'.js', 'file');
			}
			//load the block for the round and replace the original block with this rounds block.
			$block = block_load('block', $delta);
			$render_array = _block_get_renderable_array(_block_render_blocks(array($block)));
			$round_output = render($render_array);

			$variables['content'] = $round_output;
		}


	}


	/**********
	** secondary nav menu block (header)
	**********/
	if($variables['block_id'] == 1 && $variables['block_html_id'] == 'block-menu-block-1'){

		// Theming for the main secondary navigation. Depending on the section, we have background colors
		// that are assigned to the menu background.
		$variables['attributes_array']['class'][] = 'corner-all';
		$path = explode("/",$_GET['q']);

		//node IDs (en and es)
		$maya = variable_get('mayatime_maya_section_pages_nids');
		$maya_sun = variable_get('mayatime_maya_sun_section_pages_nids');
		$calendar = variable_get('mayatime_calendar_section_pages_nids');
		$corn_maya_time = variable_get('mayatime_corn_maya_time_section_pages_nids');
		$resetting_the_count =variable_get('mayatime_resetting_the_count_section_pages_nids');

		if(in_array(intval($path[1]),$maya)){
			$variables['attributes_array']['class'][] = 'green';
		}
		else if(in_array(intval($path[1]),$maya_sun)){
			$variables['attributes_array']['class'][] = 'gold';
		}
		else if(in_array(intval($path[1]),$calendar)){
			$variables['attributes_array']['class'][] = 'blue';
		}
		else if(in_array(intval($path[1]),$corn_maya_time)){
			$variables['attributes_array']['class'][] = 'tan';
		}
		else if(in_array(intval($path[1]),$resetting_the_count)){
			$variables['attributes_array']['class'][] = 'dark-gold';
		}
		else{
			$variables['attributes_array']['class'][] = 'green';
		}

	}

	/**********
	** footer block logo
	**********/
	if($variables['block_html_id'] == 'block-block-1'){
		$variables['attributes_array']['class'][] = 'grid-6 alpha';
	}
	/**********
	** tertiary menu
	**********/
	if($variables['block_html_id'] == 'block-menu-menu-tertiary-menu'){
		$variables['attributes_array']['class'][] = 'grid-6 omega pad-top-30 align-right';
	}


	/**********
	** Main system block for templates 2 and 3
	**********/
	//if($variables['block_html_id'] == 'block-system-main' && in_array(max(array_keys($variables['elements']['nodes'])),variable_get('mayatime_template_3_nids')))
	//{
		//error_log(max(array_keys($variables['elements']['nodes'])));
		//$variables['theme_hook_suggestions'][] = "block__system__main-template3";
		//$variables['attributes_array']['class'][] = 'grid-10 alpha';
	//}



}


/***************************
**Implementation of theme_menu_link
This is how we style the individual menu blocks  - this is the 2nd level navigation on pages like /the-maya/maya-world
***************************/
function mayatime_menu_link__menu_block__1($variables) {
	//dsm($variables['element']);

	$element = $variables['element'];
		$sub_menu = '';
	$class_attributes = "";

  	if ($element['#below']) {
    	$sub_menu = drupal_render($element['#below']);
  	}

	//dsm($element['#localized_options']['attributes']);
	if(array_key_exists('attributes',$element['#localized_options'])){
		$class_attributes = (array_key_exists('class',$element['#localized_options']['attributes'])) ? " active " : "";
	}

	$icon = str_replace('/',"_",$element['#href']);

	$output = '<div class="memu-block-1-glyph-icon '. $class_attributes .' " id="memu-block-1-glyph-icon--'.$icon.'">'.l('&nbsp;',$element['#href'],array('html'=>TRUE)).'</div>';

	$output .= '<div class="menu-block-1-desc">';
	$output .= l($element['#title'], $element['#href'], $element['#localized_options']);
	$output .="<br/>";
	if(array_key_exists('attributes',$element['#original_link']['options']))
		$output .= $element['#original_link']['options']['attributes']['title']."<br/>";
	$output .= l(t('Learn More').'&nbsp;&raquo;',$element['#href'],array('html'=>TRUE,'attributes' => array('class'=>array('learn-more'))));
  	$output .= "</div><!--menu-block-1-desc-->";

	$output .= "<div class='clear'></div>";

	return '<li ' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";

}

/***************************
**Implementation of theme_menu_link
This is how we style the individual menu blocks
***************************/
function mayatime_menu_link__menu_block__2($variables) {
	global $language;

	$element = $variables['element'];

	//here, we are setting the additional text for the menu items. we've already used the description field
	//so instead of attaching an extra field on a node that we'd have to query, we will place them here.
	//array indices are nodeIDs
	$menu_desc = variable_get('mayatime_menu_block_2_item_descriptions_'.$language->language);
	$node_id = explode('/',$element['#href']);
	$node_id = $node_id[1];


	//get "section" from URL to put in class of menu-block wrapper
	$section = drupal_get_path_alias($_GET['q']);
	$element['#attributes']['class'][] = $section;
	//quick hack to remove 2012-
	$section = str_replace('2012-','',$section);



  	$sub_menu = '';
	//add page title as class
  	$name_id = strtolower(strip_tags($element['#title']));

	// remove colons and anything past colons
  	if (strpos($name_id, ':')) $name_id = substr ($name_id, 0, strpos($name_id, ':'));
	//Preserve alphanumerics, everything else goes away
  	$pattern = '/[^a-z ]+/ ';
  	$name_id = preg_replace($pattern,'', $name_id);
	$name_id = preg_replace('/\s/','-', $name_id);

  	$element['#attributes']['class'][] = ' corner-med-all menu-' . $element['#original_link']['mlid'] . ' '.$name_id;


  	if ($element['#below']) {
    	$sub_menu = drupal_render($element['#below']);
  	}

	$output = '<div class="menu-item-desc corner-big-all ' . $section . '"><h4>' . $element['#title'] . '</h4><p>' . $menu_desc[$node_id] . '</p>';
	$output .= l(t('Learn More').'&nbsp;&raquo;',$element['#href'],array('html'=>TRUE,'attributes' => array('class'=>array('learn-more'))));
	$output .= '</div>';
  //$output .= l($element['#title'], $element['#href'], $element['#localized_options']);


	return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}




/***************************
**Implementation of theme_preprocess_field
** Node fields are assigned grid values, or have other information appended.
***************************/
function mayatime_preprocess_field(&$vars) {

	/***************************
	**format gallery body to use grid-4 to align items horizontally.
	******/
	if($vars['element']['#field_name'] == "body" && $vars['element']['#bundle']=="photo_gallery" && $vars['element']['#view_mode'] != 'teaser'){
		$vars['classes_array'][] = 'grid-4 alpha';
	}

	/***************************
	**here, we are adding the image caption to the alt field of the image tag, which will be picked up by thr galleria slideshow
	*********/
	if($vars['element']['#field_name'] == "field_photo" && $vars['element']['#bundle']=="photo"){
		$vars['theme_hook_suggestions'][] = "field__field__photo__photo__slideshow";
		//$vars['title_attributes_array']['alt'] =
		$vars['items'][0]['file']['#alt'] = $vars['element']['#object']->field_photo_caption['und'][0]['value'];
		$vars['items'][0]['file']['#alt'] .= "&nbsp;<span class='italic'>" . t('Photo Credit:') . "&nbsp;" . $vars['element']['#object']->field_photo_credit['und'][0]['safe_value'] ."</span>";
	}

	/***************************
	**for page glyph icons, we are also adding the description and name fields to the alt tag for use with qtip (for tooltips on rollover)
	**************/
	if($vars['element']['#field_name'] == "field_page_glyph_image" && $vars['element']['#bundle']=="page" && count($vars['items']) > 0){

		if( count($vars['element']['#object']->field_page_glyph_name) > 0 ){
			$vars['items'][0]['file']['#title'] = $vars['element']['#object']->field_page_glyph_name['und'][0]['safe_value'];
			$vars['items'][0]['file']['#title'] .= ": " . $vars['element']['#object']->field_page_glyph_description['und'][0]['safe_value'];

			$vars['items'][0]['file']['#alt'] = $vars['items'][0]['file']['#title'];
		}

	}


	/***************************
	** The field_page_primary_node_ref will always float right in template 2, let's add float-right to its classes
	**************/
	if($vars['element']['#field_name'] == "field_page_primary_node_ref" && $vars['element']['#bundle']=="page"){
		$vars['classes_array'][] = 'float-right';

		if(property_exists($vars['element']['#object']->field_page_primary_node_ref['und'][0]['node'],'field_zip_archive')){ //&& $vars['element']['#object']->field_page_primary_node_ref['und'][0]['node']->field_zip_archive['und'][0]['uri'] != ""){


			$vars['mayatime_zip_archive'] = l(t("Download zip file of all gallery images")."&nbsp;&raquo;",file_create_url($vars['element']['#object']->field_page_primary_node_ref['und'][0]['node']->field_zip_archive['und'][0]['uri']),array('html'=>TRUE));

			//dsm($vars);
		}
	}

	/***************************
	** For template 2,
	**************/
	if($vars['element']['#field_name'] == "field_page_quote" && $vars['element']['#bundle']=="page"){


	}


}
