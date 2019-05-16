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
      <h2>Estela C de Quiriguá</h2>
      <div class='glyph-image-wrap'><img src="{{ path }}" /></div>
      <p><strong>MAYA:</strong> {{ maya }} </p>
      <p><strong>TRADUCCIÓN:</strong> {{ translation }} </p>
      <p><strong>SIGNIFICADO:</strong> {{ meaning }} </p>
      <small><i>Continúe al próximo glifo o haga </i><a class="start-over" href="#">CLICK AQUÍ</a> <i>para regresar al inicio</i></li></small>
      <br/><small>Una traducción más detallada de los jeroglíficos en la Estela C de Quiriguá se puede ver <a href='/sites/default/files/resources/Estela%20C%20de%20Quirigua%20descifrada.pdf'>aquí</a>.</small>
    </div>
  </script>

  <script id="complete_glyph" type="text/html">
    <div class="glyph-detail">
      <h2>Estela C de Quiriguá</h2>
      <h4>Historia Completa:</h4>
      <p>La historia comienza al amanecer de la 4ta era de los mayas, en la fecha del calendario de Cuenta Larga 13 baktún, 0 katun, 0 tun, 0 winal, 0 k’in, 4 Ajaw, 8 Kumk’u, que corresponde a agosto 11, 3114 a.C. En esta fecha mitológica, solamente los dioses creadores estaban presentes para encender el fogón de la creación. Los dioses “plantaron” tres piedras en el centro del cielo para crear el mundo e iniciar el corrido del tiempo. Los Dioses Remeros plantaron las tres piedras. La primer piedra se hincó en un lugar llamado Nah Ho’ Chan, y fue llamada piedra de jaguar. El Dios Ihk’ Naah Chak hincó la segunda piedra en un lugar llamado Lakam Kaaj, y fue llamada piedra de tiburón. El Dios Itzamnaah Yahx Kokaaj Muut hincó la tercera piedra, y fue llamada piedra de agua. Todo esto ocurrió en la orilla del cielo, en el Lugar de las Primeras Tres Piedras. Ocurrió cuando se completó el ciclo de calendario de trece baktun (5.126 años). El Dios Supremo supervisó el acto de creación. Su nombre es Wak Chan Ajaw.</p>
      <p>Una traducción más detallada de los jeroglíficos en la Estela C de Quiriguá se puede ver <a href='/sites/default/files/resources/Estela%20C%20de%20Quirigua%20descifrada.pdf'>aquí</a>.</p>
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