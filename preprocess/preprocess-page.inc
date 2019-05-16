<?php

function mayatime_alpha_preprocess_page(&$vars) {

	// Grab variables from ik_util that contain the menu item descriptions
	if($vars['is_front'] === TRUE){
		if($vars['language']->language =="en")
			$vars['mayatime_main_menu_front_descriptions'] = variable_get('mayatime_menu_main_menu_item_descriptions_en');
		else if($vars['language']->language =="es")
			$vars['mayatime_main_menu_front_descriptions'] = variable_get('mayatime_menu_main_menu_item_descriptions_es');
	}
}