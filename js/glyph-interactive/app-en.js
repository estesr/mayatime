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
          "translation": "...[the patron god of the twenty year period is] B'i...",
          "meaning": "The story begins with the dawn of the 4th era of the Maya, on the Long Count date"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a3.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a3.jpg",
          "maya": "uhxlaju’n pik",
          "translation": "[in] thirteen b’aak’tuun",
          "meaning": "13 baktun"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b3.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b3.jpg",
          "maya": "mi[hi]l(?) winikhaab’",
          "translation": "zero k’atuun",
          "meaning": "0 katun"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a4.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a4.jpg",
          "maya": "mi[hi]l(?) haab’",
          "translation": "zero tuun",
          "meaning": "0 tun"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b4.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b4.jpg",
          "maya": "mi[h] winal",
          "translation": "zero winal",
          "meaning": "0 winal"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a5.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a5.jpg",
          "maya": "mi[hi]l(?) k’in",
          "translation": "zero k’iin",
          "meaning": "0 kin"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b5.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b5.jpg",
          "maya": "chan ajaw k’in(?)",
          "translation": "day(?) 4 Ajaw",
          "meaning": "4 Ajaw"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a6.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a6.jpg",
          "maya": "waxak hulo’hl",
          "translation": "8 Kumk’u’[August 11, 3114 BCE in the Gregorian Calendar]",
          "meaning": "8 Kumk’u, corresponding to August 11, 3114 BCE."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b6.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b6.jpg",
          "maya": "mje[h]laj k’o’b’",
          "translation": "the hearth was replaced",
          "meaning": "On this mythological date, only the creator gods were present to start the fire of creation."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a7.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a7.jpg",
          "maya": "k’a[h]l[a]j uhx tuun",
          "translation": "three stones were tied",
          "meaning": "The gods “planted” three stones at the center of the sky to create the world and the beginning of time."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b7.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b7.jpg",
          "maya": "Utz’apa’w",
          "translation": "The Paddler Gods set ",
          "meaning": "The Paddler Gods set the stones."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a8.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a8.jpg",
          "maya": "tuun...",
          "translation": "the stone",
          "meaning": "The first stone was set"
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
          "translation": "it already happened at Nah Ho’ Chan",
          "meaning": "in a place called Nah Ho’ Chan;"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b9.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b9.jpg",
          "maya": "hix... tuuna[’]",
          "translation": "the jaguar stone throne",
          "meaning": "it was called the jaguar stone."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a10.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a10.jpg",
          "maya": "Utz’apa’w tuun ",
          "translation": "[The god] ",
          "meaning": "God"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b10.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b10.jpg",
          "maya": "Ihk’ Naah Chak...",
          "translation": "Ihk’ Naah Chak… knelt the stone",
          "meaning": "Ihk’ Naah Chak set the second stone"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a11.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a11.jpg",
          "maya": "u[h]tiiy Lakam(?) Kaaj(?)",
          "translation": "it already happened at Lakam(?) Kaaj(?)",
          "meaning": "in a place called Lakam Kaaj;"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b11.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b11.jpg",
          "maya": "Xook... tuun",
          "translation": "the shark stone throne",
          "meaning": "it was called the shark stone."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a12.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a12.jpg",
          "maya": "I u[h]tiiy k’altuun ",
          "translation": "Then, it had already happened, the tying of the stone ",
          "meaning": "God"
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b12.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b12.jpg",
          "maya": "Itzamnaah Yahx Kokaaj Muut",
          "translation": "of Itzamnaah [Yahx] Kokaaj Muut ",
          "meaning": "Itzamnaah Yahx Kokaaj Muut set the third stone; "
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a13.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a13.jpg",
          "maya": "ha’... tuun",
          "translation": "the water stone throne",
          "meaning": "it was called the water stone."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b13.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b13.jpg",
          "maya": "U[h]tiiy ti’ chan",
          "translation": "It already happened at the edge of the sky",
          "meaning": "All this took place at the edge of the sky."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a14.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a14.jpg",
          "maya": "Yahx...nal",
          "translation": "First Three Stone Place",
          "meaning": "called First Three Stone Place."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b14.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b14.jpg",
          "maya": "Tzutz[u’]y uhxlaju’n pik",
          "translation": "thirteen b’aak’tuun were completed",
          "meaning": "It happened at a time when the calendar cycle of thirteen baktun (5,126 years) was completed."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/a15.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/a15.jpg",
          "maya": "ukab’jiiy ",
          "translation": "[the god] Wak Chan Ajaw already supervised it",
          "meaning": "The Supreme God supervised the creation."
        },
        {
          "path": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/b15.jpg",
          "overlay": "/sites/all/themes/mayatime/img/glyph-interactive/glyphs/overlay/b15.jpg",
          "maya": "Wak Chan Ajaw",
          "translation": "Wak Chan Ajaw",
          "meaning": "His name is Wak Chan Ajaw."
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
