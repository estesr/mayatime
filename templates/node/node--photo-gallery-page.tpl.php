<article<?php print $attributes; ?>>
  <?php print $user_picture; ?>
  
  <?php //if (!$page && $title): ?>
  <header>
    <?php print render($title_prefix); ?>
    <h1<?php print $title_attributes; ?>><?php print $title ?></h1>
    <?php print render($title_suffix); ?>
  </header>
  <?php //endif; ?>
  
  <?php if ($display_submitted): ?>
  <footer class="submitted"><?php print $date; ?> -- <?php print $name; ?></footer>
  <?php endif; ?>  
  
  <div<?php print $content_attributes; ?>>
    <?php
      // We hide the comments and links now so that we can render them later.
      hide($content['comments']);
      hide($content['links']);
      print render($content);
    ?>
		<?php if(count($content['body']['#object']->field_zip_archive) > 0):?>
		<div class='zip-archive-link'>
			<div class='float-right' style='width:160px'>
				<?php print l(t("Download zip file of all gallery images")."&nbsp;&raquo;",file_create_url($content['body']['#object']->field_zip_archive['und'][0]['uri']),array('html'=>TRUE)); ?>
			</div>
		</div>
		<?php endif;?>
  </div>
  
  <div class="clearfix">
    <?php if (!empty($content['links'])): ?>
      <nav class="links node-links clearfix"><?php print render($content['links']); ?></nav>
    <?php endif; ?>

    <?php print render($content['comments']); ?>
  </div>
</article>