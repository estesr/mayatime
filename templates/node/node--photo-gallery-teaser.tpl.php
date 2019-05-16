<article<?php print $attributes; ?>>
  <?php print $user_picture; ?>
  
  <?php if (!$page && $title): ?>
  <header>
    <?php //print render($title_prefix); ?>
    <!--<h4<?php print $title_attributes; ?>><a href="<?php print $node_url ?>" title="<?php print $title ?>"><?php print $title ?></a></h4> -->
    <?php //print render($title_suffix); ?>
  </header>
  <?php endif; ?>
  
  
  <div<?php print $content_attributes; ?>>
    <?php
      // We hide the comments and links now so that we can render them later.
      hide($content['comments']);
      hide($content['links']);
      print render($content);
    ?>
    <div class='photo-gallery-teaser-preview'>
      <?php print l($title."&nbsp;&raquo;","node/$nid",array('query'=>array('width'=>'1000','height'=>'600','iframe'=>'true'),'html' => TRUE, 'attributes'=>array('class'=>array('colorbox-load'))));?>
    </div>
  </div>
  
  <div class="clearfix">
    <?php if (!empty($content['links'])): ?>
      <nav class="links node-links clearfix"><?php print render($content['links']); ?></nav>
    <?php endif; ?>

    <?php print render($content['comments']); ?>
  </div>
</article>