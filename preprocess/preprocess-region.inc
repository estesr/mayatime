<?php

function mayatime_alpha_preprocess_region(&$vars) {

	//get NID for checking against template NIDs list
	$nid = explode('/',$_GET['q']);
	if( count($nid) > 0 ){
		if( $nid[0] == 'node' && (array_key_exists('1',$nid) && is_numeric($nid[1]) ) ){
			$nid = $nid[1];
		}
	}
	else{
		$nid = 0;
	}


	// get path alias (considering /es paths for spanish content)
	global $language;
	$lang = $language->language;
	//other content items are given a particular template, based on path auto alias.
	$alias = drupal_get_path_alias($_GET['q'],$lang);

	if(strpos($alias,'/')){
		$alias_parts = explode('/',$alias);
		$section = $alias_parts[0];
	}
	else{
		$section = $alias;
	}


	if($vars['region'] =="sidebar_second"){
		if(in_array($nid,variable_get('mayatime_template_4_nids')) || $section == "glossary"){
			$vars['elements']['#grid']['columns'] = "3";
			$vars['attributes_array']['class'][] = 'template-4';
		}
		
	}

	if($vars['region'] =="content"){
		
		$template_2_node_ids = array();
		

		//Assigning template 2 (skinny leftside bar + main content right) to gallery nodes and nodes as dictated by NID

		if(in_array($nid,variable_get('mayatime_template_2_nids'))){
			$vars['elements']['#grid']['columns'] = "12";
			$vars['attributes_array']['class'][] = 'template-2';
			if($section){
				$vars['theme_hook_suggestions'][] = "region__content_template2";
			}
		}
		
		
		
		//Assigning template 3 (full width) to gallery nodes and nodes as dictated by NID
		//map interactive
		//math game
		if(in_array($nid,variable_get('mayatime_template_3_nids')) || $section == "gallery"){
			$vars['elements']['#grid']['columns'] = "12";
			$vars['attributes_array']['class'][] = 'template-3';
			//$vars['title_attributes_array'][] = 'element-invisible';
			if($section){
				$vars['theme_hook_suggestions'][] = "region__content_$section";
			}
		}
		
		
		//Assigning template 3a (full width) nodes as dictated by NID

		//calendar converter		
		if(in_array($nid,variable_get('mayatime_template_3a_nids'))){
			$vars['elements']['#grid']['columns'] = "12";
			$vars['attributes_array']['class'][] = 'template-3a';
			if($section){
				$vars['theme_hook_suggestions'][] = "region__content_$section";
			}
		}
		
		
		//Assigning template 4 (content + sidebar)
		if(in_array($nid,variable_get('mayatime_template_4_nids')) || $section == "glossary"){
			$vars['elements']['#grid']['columns'] = "9";
			$vars['attributes_array']['class'][] = 'template-4';
			if($section){
				$vars['theme_hook_suggestions'][] = "region__content_template4";
			}
		}

		//Assigning template 5 (full width content)
		if(in_array($nid,variable_get('mayatime_template_5_nids'))){
			$vars['elements']['#grid']['columns'] = "12";
			$vars['attributes_array']['class'][] = 'template-5';
			if($section){
				$vars['theme_hook_suggestions'][] = "region__content_template5";
			}
		}
		
		
		
	//dsm($vars);
	}
	
	
}
