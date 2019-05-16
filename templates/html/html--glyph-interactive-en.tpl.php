<?php print $doctype; ?>
<html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf->version . $rdf->namespaces; ?>>
<head<?php print $rdf->profile; ?>>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>  
  <?php print $styles; ?>
  <?php print $scripts; ?>
  <!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
  <!-- Glyph Template -->
  <script id="glyph" type="text/html">
    <div class="glyph-detail">
      <h2>Stela C of Quirigua</h2>
      <div class='glyph-image-wrap'><img src="{{ path }}" /></div>
      <p><strong>MAYA:</strong> {{ maya }} </p>
      <p><strong>TRANSLATION:</strong> {{ translation }} </p>
      <p><strong>MEANING:</strong> {{ meaning }} </p>
      <p class='red'><span class='italic'>Continue to the next glyph or </span><a class="start-over" href="#">CLICK HERE</a> <span class='italic'>to return to start.</span></p>
      <p>A more detailed translation of the hieroglyphs in Stela C of Quiriguá can be found <a href='/sites/default/files/resources/Quirigua%20Stela%20C%20Deciphered.pdf' title='a link to PDF file with information about hieroglyphs'>here</a>.</p>
    </div>
  </script>

  <script id="complete_glyph" type="text/html">
    <div class="glyph-detail">
      <h2>Stela C of Quirigua</h2>
      <h4>Complete Story:</h4>
      <p>The story begins with the dawn of the <a href='#' class='glossary-tip' title='Within the Maya world view, or cosmology, we are now living in the 4th era of creation.'>4th era of the Maya</a>, on the Long Count date 13 baktun, 0 katun, 0 tun, 0 winal, 0 kin, 4 Ajaw, 8 Kumk’u, corresponding to August 11, 3114 BCE. On this mythological date, only the creator gods were present to start the fire of creation. The gods “planted” three stones at the center of the sky to create the world and the beginning of time. The Paddler Gods set the stones. The first stone was set in a place called Nah Ho’ Chan; it was called the jaguar stone. God Ihk’ Naah Chak set the second stone in a place called Lakam Kaaj; it was called the shark stone. God Itzamnaah Yahx Kokaaj Muut set the third stone; it was called the water stone. All this took place at the edge of the sky, called First Three Stone Place. It happened at a time when the calendar cycle of thirteen baktun (5,126 years) was completed. The Supreme God supervised the creation. His name is Wak Chan Ajaw.</p>
      <p>A more detailed translation of the hieroglyphs in Stela C of Quiriguá can be found <a href='/sites/default/files/resources/Quirigua%20Stela%20C%20Deciphered.pdf' title='a link to PDF file with information about hieroglyphs'>here</a>.</p>
    </div>
  </script>
</head>
<body<?php print $attributes;?>>
  <div id="skip-link">
    <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
  </div>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
</body>
</html>