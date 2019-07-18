(function ($) {

  Drupal.behaviors.mayatimepractice = {
    attach: function (context, settings) {


    	function handleSymbolDrop( event, ui )
		{
			//gather dropzone DOM object and corresponding "data" value
			//get dropped symbol value
			dropZone = (jQuery)(this);
			dropZoneValue = 0; //dropZone.data('valu');
			symbolValue = ui.draggable.data( 'number' );
			symbolID = ui.draggable.attr('id');
			whichPyramid = dropZone.hasClass('base-10') ? 'base-10' : 'base-20';
			total = (jQuery)('#' + whichPyramid + '-total');
			totalValue = total.data('valu');
			otherDropZoneValue = 0;
			number = (jQuery)('#number-to-solve').data('valu');


			//clone draggable into dropzone to visually represent additions or removals
			(jQuery)('.cloned-symbol',dropZone).remove();

			ui.draggable.clone(false).click(function(){ (jQuery)(this).parent().data('valu',0); (jQuery)(this).remove();  recalculate(); }).appendTo(dropZone).attr({'class':'cloned-symbol cloned-'+whichPyramid,'id':'cloned-'+symbolID}).draggable({
				'helper': 'original',//function(){
					//return (jQuery)('#cloned-'+symbolID);
				//},
				'revert' : false,
				'cursor' : 'move',

			});

			//get dropzone multiplier to multiple symbol value with
			pyramidMultiplier = dropZone.data('multiplier');

			//get the value of each other dropzone
			(jQuery)('.pyramidDropZone.'+whichPyramid).not("div[rel=" + pyramidMultiplier + "]").each(function(index){
				//console.log((jQuery)(this),(jQuery)(this).data('valu'));
				otherDropZoneValue += (jQuery)(this).data('valu');
				//console.log((jQuery)(this).attr('rel') + " slot:" + (jQuery)(this).data('valu'));
				//console.log("other dropzonevalue:" + otherDropZoneValue);
			});

			//use dropzone multipler to get value to add
			newProduct = (pyramidMultiplier * symbolValue);

			//get value of symbols  in dropzone (to keep up with number of symbols in each one to then use for total calculation)
			dropZoneValue = newProduct;
			dropZone.data('valu',dropZoneValue);



		  	//now apply value from dropzone and add into total value
			totalValue = dropZoneValue + otherDropZoneValue;
			total.data('valu',totalValue);
			total.html('<div>'+totalValue+'</div>');

			if(totalValue == number){
				total.addClass('correct')
				showSuccess();
			}
		}

		function recalculate()
		{

			newTotal = 0;
			total = (jQuery)('#base-10-total');
			totalVal = parseInt(total.data('valu'));
			(jQuery)('.pyramid .pyramidDropZone').each(function(){
				//console.log((jQuery)(this),(jQuery)(this).data('valu'));
				newTotal += parseInt((jQuery)(this).data('valu'));
				//console.log("new total: " + newTotal);
			});
			//newTotal1 = totalVal + newTotal;
			total.data('valu',newTotal);
			total.empty().html('<div>'+newTotal+'</div>');
		}




		/***** OVERLOADING OF ui.draggable.distroy ******/
		//overwrite the distroy method that removes the draggable property
		$.ui.draggable.prototype.destroy = function (ul, item) { };
		//re-create the distroy method as "remove" with same functionalty.
		$.ui.draggable.prototype.remove = function() {
		    if(!this.element.data('draggable')) return;
		    this.element
		        .removeData("draggable")
		        .unbind(".draggable")
		        .removeClass("ui-draggable"
		            + " ui-draggable-dragging"
		            + " ui-draggable-disabled");
		    this._mouseDestroy();

		    return this;
		};
		/*********************************************/


		$('a#show-numbers').click(function(e){
			e.preventDefault();
			el = $(this);

			if(el.hasClass('hide')){
				el.removeClass('hide').addClass('show');
				if($('body').hasClass('i18n-es'))
					el.text('MUESTRA LOS NÚMEROS');
				else{
					el.text('Show Numbers');
				}

				$('#symbolPile .show-numbers').each(function(index){
					$(this).hide();
				});
			}
			else{
				if($('body').hasClass('i18n-es'))
					el.text('ESCONDE LOS NÚMEROS');
				else{
					el.text('Hide Numbers');
				}
				el.removeClass('show').addClass('hide');
				$('#symbolPile .show-numbers').each(function(index){
					$(this).show();
				});
			}

		});


		//Apply mulitplier value to pyramid dropzones, store in el.data('multiplier')
		$('.pyramidDropZone').each(function(index){
			el = $(this);
			el.data('multiplier',el.attr('rel'));
			el.data('valu',0);
		});


		// Create the pile of numbers / symbols
		var numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
		for ( var i=0; i<10; i++ ) {
	    	$('<div><span class="show-numbers">' + numbers[i] + '</span></div>').data( 'number', numbers[i] ).attr( {'id':'symbol-'+numbers[i], 'rel':numbers[i], 'class': 'number-symbol-'+numbers[i]}).appendTo( '#symbolPile' ).draggable( {
		      //containment: '.pyramid',
		      stack: '#symbolPile div',
		      cursor: 'hand',
			  helper: 'clone',
		      revert: 'invalid'
		    });
	    }

		//make each dropzone officially droppable
		$('.pyramid div').droppable( {
	      accept: '#symbolPile div',
	      hoverClass: 'hovered',
	      drop: handleSymbolDrop
	    });




		$('#new-number').click(function(){
			init();
		});

		$('#successMessage').click(function(){
			init();
		});

		init();

		function init()
		{
			//set up problem to solve
			number = Math.floor( (Math.random()*98 ) + (Math.random()*28 ) + (Math.random()*110 ) );
			$('#number-to-solve').data('valu',number).html(number);

			// set "total" div's HTML and data "valu" to 0, initially
			$('#base-10-total').data('valu',0).empty().removeClass('correct').removeClass('wrong');
			//console.log($('#base-10-total').data('valu'));
			$('.pyramidDropZone').each(function(){
				//console.log($(this));
				$(this).data('valu',0);
			})
			$('.cloned-symbol').remove();

			$('.total').removeClass('correct');
			//recalculate();
			$('#successMessage').css( {
			    // left: '260px',
			    // top: '270px',
          left: '50%',
          bottom: '350px',
			    width: 0,
			    height: 0
			  }).hide();
		}

		function showSuccess(){
			(jQuery)('#successMessage').show().animate( {
		      // left: '260px',
		      // top: '270px',
          left: '50%',
          bottom: '350px',
		      width: '400px',
		      height: '100px',
		      opacity: 1
		    },800);
		}
  	}
  }
})(jQuery);
