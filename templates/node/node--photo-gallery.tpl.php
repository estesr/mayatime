<article<?php print $attributes; ?>>  
  
  <div<?php print $content_attributes; ?>>
    <?php
      // We hide the comments and links now so that we can render them later.
      hide($content['comments']);
      hide($content['links']);
			//dsm($content);
      print render($content['photo_galleries4_entity_view_1']);
    ?>

  </div>
  
</article>