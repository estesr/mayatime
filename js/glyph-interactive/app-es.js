(function ($){

  Drupal.behaviors.mayatime = {
    attach: function (context, settings) {

      (jQuery)('.field-name-field-page-glyph-image img[alt!=""]',context).qtip({
        position: {
          my: 'left center',
          at: 'right center'
        },
        style: {
          classes: 'page-glyph-image-tooltips'
        }
          
      });
      // data for the interactive
      var glyph_data = 
      {"glyphs":[
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a1-b2.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a1-b2.jpg",
          "maya": "... B'i",
          "translation": "‘…[el dios patrono de la veintena es] B’i…",
          "meaning": "La historia comienza al amanecer de la 4ta era de los mayas, en la fecha del calendario de Cuenta Larga"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a3.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a3.jpg",
          "maya": "uhxlaju’n pik",
          "translation": "[en] trece b’aak’tuunes",
          "meaning": "13 baktun"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b3.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b3.jpg",
          "maya": "mi[hi]l(?) winikhaab’",
          "translation": "cero k’atuunes",
          "meaning": "0 katun"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a4.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a4.jpg",
          "maya": "mi[hi]l(?) haab’",
          "translation": "cero tuunes",
          "meaning": "0 tun"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b4.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b4.jpg",
          "maya": "mi[h] winal",
          "translation": "cero winales",
          "meaning": "0 winal"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a5.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a5.jpg",
          "maya": "mi[hi]l(?) k’in",
          "translation": "cero k’iines",
          "meaning": "0 kin"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b5.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b5.jpg",
          "maya": "chan ajaw k’in(?)",
          "translation": "día(?) 4 ajaw",
          "meaning": "4 Ajaw"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a6.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a6.jpg",
          "maya": "waxak hulo’hl",
          "translation": "8 kumk’u’[agosto 11 de 3114 a.C. en el calendario gregoriano]",
          "meaning": "8 Kumk’u, que corresponde a agosto 11, 3114 a.C."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b6.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b6.jpg",
          "maya": "mje[h]laj k’o’b’",
          "translation": "el fogón fue sustituido",
          "meaning": "En esta fecha mitológica, solamente los dioses creadores estaban presentes para encender el fogón de la creación."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a7.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a7.jpg",
          "maya": "k’a[h]l[a]j uhx tuun",
          "translation": "las tres piedras fueron atadas.",
          "meaning": "Los dioses “plantaron” tres piedras en el centro del cielo para crear el mundo e iniciar el corrido del tiempo."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b7.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b7.jpg",
          "maya": "Utz’apa’w",
          "translation": "Los Dioses Remeros hincaron ",
          "meaning": "Los Dioses Remeros plantaron las tres piedras."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a8.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a8.jpg",
          "maya": "tuun...",
          "translation": "tla piedra",
          "meaning": "La primer piedra se hincó"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b8.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b8.jpg",
          "maya": "??",
          "translation": "??",
          "meaning": "??"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a9.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a9.jpg",
          "maya": "u[h]tiiy Nah Ho’ Chan",
          "translation": "había ocurrido ya en Nah Ho’ Chan",
          "meaning": "en un lugar llamado Nah Ho’ Chan,"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b9.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b9.jpg",
          "maya": "hix... tuuna[’]",
          "translation": "la piedra trono de jaguar",
          "meaning": "y fue llamada piedra de jaguar."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a10.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a10.jpg",
          "maya": "Utz’apa’w tuun ",
          "translation": "[El dios] ",
          "meaning": "El Dios"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b10.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b10.jpg",
          "maya": "Ihk’ Naah Chak...",
          "translation": "Ihk’ Naah Chak… hincó la piedra",
          "meaning": "Ihk’ Naah Chak hincó la segunda piedra"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a11.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a11.jpg",
          "maya": "u[h]tiiy Lakam(?) Kaaj(?)",
          "translation": "había ocurrido ya en Lakam(?) Kaaj(?)",
          "meaning": "en un lugar llamado Lakam Kaaj,"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b11.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b11.jpg",
          "maya": "Xook... tuun",
          "translation": "la piedra trono de tiburón",
          "meaning": "y fue llamada piedra de tiburón."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a12.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a12.jpg",
          "maya": "I u[h]tiiy k’altuun ",
          "translation": "Entonces había pasado ya la atadura de piedra ",
          "meaning": "El Dios"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b12.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b12.jpg",
          "maya": "Itzamnaah Yahx Kokaaj Muut",
          "translation": "de Itzamnaah [Yahx] Kokaaj Muut ",
          "meaning": "Kokaaj Muut hincó la tercera piedra,  "
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a13.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a13.jpg",
          "maya": "ha’... tuun",
          "translation": "la piedra de trono de agua",
          "meaning": "y fue llamada piedra de agua."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b13.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b13.jpg",
          "maya": "U[h]tiiy ti’ chan",
          "translation": "Había ocurrido ya en la orilla del cielo,",
          "meaning": "Todo esto ocurrió en la orilla del cielo,"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a14.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a14.jpg",
          "maya": "Yahx...nal",
          "translation": "Lugar de las Primeras Tres Piedras",
          "meaning": "en el Lugar de las Primeras Tres Piedras."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b14.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b14.jpg",
          "maya": "Tzutz[u’]y uhxlaju’n pik",
          "translation": "Trece b’aak’tuunes se terminaron,",
          "meaning": "Ocurrió cuando se completó el ciclo de calendario de trece baktun (5.126 años)."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a15.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a15.jpg",
          "maya": "ukab’jiiy ",
          "translation": "[el dios] Wak Chan Ajaw lo había supervisado ya [el dios]",
          "meaning": "El Dios Supremo supervisó el acto de creación."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b15.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b15.jpg",
          "maya": "Wak Chan Ajaw",
          "translation": "Wak Chan Ajaw",
          "meaning": "Su nombre es Wak Chan Ajaw."
        }
      ]};

      var starting_content = $("div.glyph-content-text").html();

      $("div.glyphs ul li").click(function(e){
        e.preventDefault();
        clearOverlays();
        var glyph_id = $(this).attr("data-glyph-id");
        
        if ($(this).attr("class") == 'complete') {
          var glyph = ich.complete_glyph();
          $("div.glyph-content-text").html(glyph);
        }
        else {
          var glyph = ich.glyph(glyph_data.glyphs[glyph_id]);
          $("div.glyph-content-text").html(glyph);
          var overlay = glyph_data.glyphs[glyph_id].overlay;
          
          var img_str = "<img src="+overlay+" width='170' height='150' />";

          if (glyph_id == 0) {
            var img_str = "<img style='margin-left: 7px;' src="+overlay+" width='363' height='316' />";
          }
          
          $(this).find("a").html(img_str);
          $(this).unbind("mouseenter").unbind("mouseleave");
          $(this).css("border", "none");
        }
        
      });

      $("a.start-over").live('click',function(e){
        e.preventDefault();
        clearOverlays();
        $("div.glyph-content-text").html(starting_content);
      });

    

      resetHoverEvents();




    }
  }
})(jQuery);
  function clearOverlays() {
    (jQuery)("div.glyphs ul li a").each(function(){
      (jQuery)(this).html("");
    });
    resetHoverEvents();
  }

  function resetHoverEvents() {
    (jQuery)("div.glyphs ul li").hover(function(){
      (jQuery)(this).css("border", "3px solid #552911");
    }, function(){ 
      (jQuery)(this).css("border", "none");
    });
  }
