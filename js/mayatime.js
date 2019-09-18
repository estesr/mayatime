(function ($) {

  Drupal.behaviors.mayatime = {
    attach: function (context, settings) {

    	$('.glossary-tip').click(function(e){
    			e.preventDefault();
    		});
			/******
			*** Page icon glyphs
			***/
			$('.field-name-field-page-glyph-image img[alt!=""]',context).qtip({
				position: {
					my: 'left center',
					at: 'right center'
				},
				style: {
					classes: 'page-glyph-image-tooltips'
				}

			});

			/******
			*** Interactive map tooltips
			***/
			$('.maya-world-interactive-map map area',context).qtip({
				position: {
					my: 'bottom center',
					at: 'top center'
				},
				content: {
					attr: 'alt' // Use the ALT attribute of the area map for the content
				},
				style: {
					classes: 'maya-world-map-tooltips'
				}
			});

      $('.maya-world-interactive-map map rect',context).qtip({
        position: {
          my: 'bottom center',
          at: 'top center'
        },
        content: {
          attr: 'alt' // Use the ALT attribute of the area map for the content
        },
        style: {
          classes: 'maya-world-map-tooltips'
        }
      });

			/******
			*** Glossary term tooltips
			***/
			$('.glossary-tip',context).qtip({
        // prerender: true,
				position: {
					/*my: 'bottom center',
					at: 'top center'
					*/
					my: 'bottom center',
					at: 'top center',
          viewport: $('.block-system-main'),
          container: $('.block-system-main'),
          adjust: {
            resize: true,
            // y: -12
          }
				},
				content: {
					attr: 'title' // Use the ALT attribute of the area map for the content
				},
				style: {
					classes: 'page-glyph-image-tooltips'
				}
			});

      // $('a.glossary-tip').mouseenter (function (e) {
      //
      //   // console.log($('.ui-tooltip').css('left'));
      //   var leftValue = $('.ui-tooltip').css('left');
      //   var leftOffset = leftValue.slice(0, leftValue.indexOf('p'));
      //   var tooltipAttr = $(this).attr('aria-describedby') + '-content';
      //   console.log(tooltipAttr)
      //   // var tooltipBox = $('.ui-tooltip').attr('aria-describedby', tooltipSelector + '-content');
      //   var tooltipBox = $('.ui-tooltip["aria-describedby", "tooltipAttr"]');
      //   console.log(tooltipBox);
      //   // if (leftOffset < 0) {
      //   //   tooltipBox.css('left', '20px !important');
      //   // } else if (leftOffset + 280 > $(window).width()) {
      //   //   tooltipBox.css({
      //   //     left: 'auto',
      //   //     right: '20px !important'
      //   //   })
      //   // }
      //   // if ($('.ui-tooltip') < 0)
      //

      $('.photo-gallery-teaser-preview a').click (function (e) {
        if ($(window).width() < 600) {
          e.preventDefault ();
          console.log('stop')
        } else {
          console.log('go')
        }
      })

			$('.node-photo-gallery .field-name-body.grid-4 .glossary-tip').qtip({
				position: {
					my: 'left top',
					at: 'left bottom'
				},
				content: {
					attr: 'title' // Use the ALT attribute of the area map for the content
				},
				style: {
					classes: 'page-glyph-image-tooltips'
				}
			});

			$('.block-menu-block-2 li',context).bind({
				click : function(e){
					el = $(this);
					destination = el.find('a').attr('href');
					window.location = destination;
				},
				hover: function(){

				}
			});

			/******
			*** Homepage sliding reveal menu
			***/
			$('.front-menu',context).bind({
				mouseenter: function(){
					$(this).find('img').animate({
						left: $(this).css('width')//'315px'
					});
					$(this).find('.mask').animate({
						left: '0px'
					});
				},
				mouseleave: function(){
					if($.browser.msie && $.browser.version <= 8.0){
						$(this).find('img').animate({
							left: '-6px'
						});
					}
					else{
						$(this).find('img').animate({
							left: '0px'
						});
					}


					$(this).find('.mask').animate({
						left: '-400px'
					})
				}
			})

      // responsive menu
      // $('#region-menu').click (function (e) {
      //   console.log('1');
      // })
    }
  };
})(jQuery);
