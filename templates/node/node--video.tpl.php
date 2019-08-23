<article<?php print $attributes; ?>>
  <div<?php print $content_attributes; ?>>
    <?php
      // We hide the comments and links now so that we can render them later.
      hide($content['comments']);
      hide($content['links']);
	  	//hide($content['title']);
      print render($content['field_video']);
    ?>
    <?php if(array_key_exists('0',$content['field_video_transcript'])):?>
      <?php if($content['field_video_transcript']['0']['#file']->uri):?>
      <div class='zip-archive-link' style='margin-top:10px'>
        <div class='float-left'>
          <h6><?php print $title; ?></h6>
          <?php global $language; $url_path = ($language->language == 'en') ? 'node/17' : 'node/18';?>
          <small><?php print t("Images used in this video can be downloaded in the")."&nbsp;".l(t('Resources Section'),$url_path,array('language'=>$language))."&nbsp;".t("of the site");?>.</small>
        </div>
        <div class='float-right'>
          <?php print l(t("Download PDF transcript of video")."&nbsp;&raquo;",file_create_url($content['field_video_transcript']['0']['#file']->uri),array('html'=>TRUE)); ?>
        </div>
        <div class='clear'></div>
      </div>
      <?php endif;?>
    <?php endif;?>
  </div>

</article>
