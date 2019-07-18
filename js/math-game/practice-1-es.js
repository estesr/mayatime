(function ($) {

  Drupal.behaviors.mayatimepractice = {
    attach: function (context, settings) {

    	var correctCards = 0;
		numberSymbols = {number_0: {dot: 0, stick: 0},
		number_1: {dot: 1, stick: 0},
		number_2: {dot: 2, stick: 0},
		number_3: {dot: 3, stick: 0},
		number_4: {dot: 4, stick: 0},
		number_5: {dot: 0, stick: 1},
		number_6: {dot: 1, stick: 1},
		number_7: {dot: 2, stick: 1},
		number_8: {dot: 3, stick: 1},
		number_9: {dot: 4, stick: 1},
		number_10: {dot: 0, stick: 2},
		number_11: {dot: 1, stick: 2},
		number_12: {dot: 2, stick: 2},
		number_13: {dot: 3, stick: 2},
		number_14: {dot: 4, stick: 2},
		number_15: {dot: 0, stick: 3},
		number_16: {dot: 1, stick: 3},
		number_17: {dot: 2, stick: 3},
		number_18: {dot: 3, stick: 3},
		number_19: {dot: 4, stick: 3}};


		$( init );


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



		var numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ];
		for ( var i=0; i<20; i++ ) {
			//$('<div>' + numbers[i] + '</div>').data( 'number', numbers[i] ).attr(
	    	$('<div>' +'</div>').data( 'number', numbers[i] ).attr( {'class':'hide-symbol number-symbol-'+numbers[i],'id':'symbol-'+numbers[i], 'rel':numbers[i]}).appendTo( '#symbolBox' );
	    }



		var symbols = { 0:'concha', 1:'frijol', 5:'palito' };

		$.each(symbols,function(key,value){
			$('<span/>',{'id': 'symbol'+key,'class':'symbol ' + value, 'rel': value}).data('number',parseInt(key)).appendTo( '#symbolBox' ).draggable({
		     containment: '#content',
		     cursor: 'move',
			 helper: 'clone',
			 opacity: 0.7,
			 revert: 'true'
		   });
		});

		$('<div/>').appendTo( '#numberSlot' ).data('valu',0).droppable( {
	     accept: '#symbolBox span.symbol',
	     hoverClass: 'hovered',
	     drop: handleSymbolDrop
	   });


		$('button').click(function(){
			clearSlot();
			$( init );
		});


		$('#successMessage').click(function(){
			if($('#number').data('valu') == 19){
				$(this).hide();
				$('#endofgame').show().animate( {
          // left: '260px',
          left: '50%',
		      // top: '250px',
		      // width: '270px',
          bottom: '350px',
		      height: '100px',
		      opacity: 1,
		    },800);
			}
			else{
        $(this).hide().css({
          // 'left':'260px',
          left: '50%',
          // 'top':'270px'
          bottom: '350px',
        });
				nuvalue= parseInt($('#number').data('valu')) + 1;
				$('#number').data('valu',nuvalue);
				$('#number').html($('#number').data('valu'));
				//console.log($('#number').data('valu'));
				$( clearSlot );
				$('#numberSlot div').droppable();
				$('#user-number').html('0');
				$('#numberSlot div.ui-droppable').removeClass('right');
			}

		});

		$('#tryAgain').click(function(){
			$(this).hide();
			$('#numberSlot div').removeClass('wrong');
		});


    }
  }
})(jQuery);






function clearSlot(){
	(jQuery)('.ui-droppable').html('');
	(jQuery)('#numberSlot div.ui-droppable').data('valu', 0);
}

function init() {

  // Hide the success message
  (jQuery)('#successMessage').hide();
  (jQuery)('#tryAgain').hide();
  (jQuery)('#endofgame').hide();
  (jQuery)('#successMessage').css( {
    // left: '260px',
    left: '50%',
    // top: '270px',
    bottom: '350px',
    width: 0,
    height: 0
  });
	(jQuery)('#endofgame').css( {
    // left: '260px',
    left: '50%',
    // top: '270px',
    bottom: '350px',
    // width: 0,
    width: '400px',
    height: 0
  });

	num = (jQuery)('#number');
	//change number

	if(!num.data('valu')){
			num.data('valu',0).html('0');
			(jQuery)('#user-number').data('valu',0).html('0');
	}


	//console.log("number data valu: " + (jQuery)('#number').data('valu'));

}

function showCorrect(correctValue,symbolValue)
{
	updateUserNumber(totalValue);
	slot = (jQuery)('#numberSlot div.ui-droppable');
	slot.removeClass('wrong').addClass('correct');


	(jQuery)('#symbol-'+correctValue).clone().attr('id', 'symbol-clone'+symbolValue).draggable().appendTo((jQuery)('#numberSlot div.ui-droppable')).show();
	//ui.draggable.clone().attr('id', 'symbol-clone'+symbolValue).draggable().appendTo((jQuery)('#numberSlot div.ui-droppable'));


	(jQuery)('#successMessage').show().animate( {
    // left: '260px',
    left: '50%',
    // top: '270px',
    bottom: '350px',
    width: '400px',
    height: '100px',
    opacity: 1,
    },800);


}

function revertAndWrong(ui,correctValue)
{

	ui.draggable.draggable( 'option', 'revert', true );
	slot = (jQuery)('#numberSlot div.ui-droppable');
	slot.addClass('wrong');


	num = ui.draggable.data( 'number' );
	sym = ui.draggable.attr('rel');
	var tryagain = (jQuery)('#tryAgain');
	gender = (num == 0) ? "a" : "";
	tryagain.empty().html("<p>¡inténtelo de nuevo! un" + gender + " " + sym + " (que vale " + num + ") no se utiliza para escribir el número " + correctValue + ".<br/><br/>Haga clic en esta casilla para continuar.</p>");
	tryagain.show().animate( {
    // left: '260px',
    left: '50%',
    // top: '270px',
    bottom: '350px',
    width: '400px',
    height: '100px',
    opacity: 1,
	  },800);
	ui.draggable.draggable( 'option', 'revert', false );
}

function revertAndWrongMultiple(ui,correctValue,numberSymbols)
{
	ui.draggable.draggable( 'option', 'revert', true );
	slot = (jQuery)('#numberSlot div.ui-droppable');
	slot.addClass('wrong');


	num = ui.draggable.data( 'number' );
	sym = ui.draggable.attr('rel');

	verbTense = (numberSymbols == 1) ? "is" : "are";
	plural = (numberSymbols == 1) ? "" : "s";
	plural = (sym == 'frijol') ? "es" : plural;
	var tryagain = (jQuery)('#tryAgain');

	tryagain.empty().html("<p>¡inténtelo de nuevo! Solo " + numberSymbols + " " + sym + plural + " se utiliza para escribir el número " + correctValue + ".<br/><b>Haga clic en esta casilla para continuar.</b></p>");
	// quick fix for error message verbiage for the #15.
	if(correctValue == 15 && num == 1)
		tryagain.empty().html("<p>¡inténtelo de nuevo! Un frijol (que vale 1) no se utiliza para escribir el número " + correctValue + ".<br/><b>Haga clic en esta casilla para continuar.</b></p>");

	tryagain.show().animate( {
    // left: '260px',
    left: '50%',
    // top: '270px',
    bottom: '350px',
    width: '400px',
    height: '100px',
    opacity: 1,
  	},800);
	ui.draggable.draggable( 'option', 'revert', false );
}

function showClone(symbolValue,totalValue,ui)
{
	ui.draggable.clone().attr('id', 'symbol-clone'+symbolValue).draggable().appendTo((jQuery)('#numberSlot div.ui-droppable')).show();
	(jQuery)('#numberSlot div.ui-droppable').data('valu', totalValue);
	updateUserNumber(totalValue);
}

function clearClones()
{
	(jQuery)('.ui-droppable .symbol').remove();
}

function updateUserNumber(totalValue)
{
	(jQuery)('#user-number').html(totalValue);
}

function handleSymbolDrop( event, ui )
{

	slotValue = parseInt((jQuery)(this).data( 'valu' ));

  correctValue = (jQuery)('#number').data('valu');
  symbolValue = ui.draggable.data( 'number' );


  switch(correctValue)
	{

		case 0:
			if(symbolValue != 0 )
				revertAndWrong(ui,correctValue);
			else{
				totalValue = slotValue + symbolValue;
				slotValue = totalValue;
				showCorrect(correctValue,symbolValue);
			}
		break;
		case 1:
			if(symbolValue != 1 )
				revertAndWrong(ui,correctValue);
			else{
				totalValue = slotValue + symbolValue;
				slotValue = totalValue;
				showCorrect(correctValue,symbolValue);
			}

		break;

		case 2:
		case 3:
		case 4:
			if(symbolValue != 1 )
				revertAndWrong(ui,correctValue);
			else
			{
				(jQuery)('#numberSlot div.ui-droppable').removeClass('wrong');
				totalValue = slotValue + symbolValue;
				slotValue = totalValue;
				showClone(symbolValue,totalValue,ui);
				if(correctValue == slotValue){
					clearClones();
					showCorrect(correctValue,symbolValue);
				}
			}//else
		break;

		case 5:
			if(symbolValue == 1 || symbolValue == 0 )
				revertAndWrong(ui,correctValue);
			else
			{
				ui.draggable.draggable( 'option', 'revert', false );
				totalValue = slotValue + symbolValue;
				slotValue = totalValue;
				(jQuery)('#numberSlot div.ui-droppable').data('valu', totalValue);
				if(correctValue == slotValue){

					showCorrect(correctValue,symbolValue);
				}

			}//else
		break;
		case 6:
			if(symbolValue == 1)
			{

				if((jQuery)('.ui-droppable span.frijol').size() < 1){
					totalValue = slotValue + symbolValue;
					slotValue = totalValue;
					showClone(symbolValue,totalValue,ui);
				}
				else{
					totalValue = slotValue;
					revertAndWrongMultiple(ui,correctValue,1);
				}

				if(correctValue == slotValue){
					clearClones();
					showCorrect(correctValue,symbolValue);
				}

			}
			else if(symbolValue == 0){
				totalValue = slotValue;
				revertAndWrong(ui,correctValue);
			}
			else
			{
				if((jQuery)('.ui-droppable span.palito').size() < 1){
					totalValue = slotValue + symbolValue;
					slotValue = totalValue;
					showClone(symbolValue,totalValue,ui);
				}
				else{
					totalValue = slotValue;
					revertAndWrongMultiple(ui,correctValue,1);
				}

				if(correctValue == slotValue){
					clearClones();
					showCorrect(correctValue,symbolValue);
				}

			}//else
		break;

		case 7:
			if(symbolValue == 1)
			{

				if((jQuery)('.ui-droppable span.frijol').size() < 2){
					totalValue = slotValue + symbolValue;
					slotValue = totalValue;
					showClone(symbolValue,totalValue,ui);
				}
				else{
					totalValue = slotValue;
					revertAndWrongMultiple(ui,correctValue,2);
				}

				if(correctValue == slotValue){
					clearClones();
					showCorrect(correctValue,symbolValue);
				}

			}
			else if(symbolValue == 0){
				totalValue = slotValue;
				revertAndWrong(ui,correctValue);
			}
			else
			{
				if((jQuery)('.ui-droppable span.palito').size() < 1){
					totalValue = slotValue + symbolValue;
					slotValue = totalValue;
					showClone(symbolValue,totalValue,ui);
				}
				else{
					totalValue = slotValue;
					revertAndWrongMultiple(ui,correctValue,1);
				}

				if(correctValue == slotValue){
					clearClones();
					showCorrect(correctValue,symbolValue);
				}

			}//else
		break;

		case 8:
			if(symbolValue == 1)
			{

				if((jQuery)('.ui-droppable span.frijol').size() < 3){
					totalValue = slotValue + symbolValue;
					slotValue = totalValue;
					showClone(symbolValue,totalValue,ui);
				}
				else{
					totalValue = slotValue;
					revertAndWrongMultiple(ui,correctValue,3);
				}

				if(correctValue == slotValue){
					clearClones();
					showCorrect(correctValue,symbolValue);
				}

			}
			else if(symbolValue == 0){
				totalValue = slotValue;
				revertAndWrong(ui,correctValue);
			}
			else
			{
				if((jQuery)('.ui-droppable span.palito').size() < 1){
					totalValue = slotValue + symbolValue;
					slotValue = totalValue;
					showClone(symbolValue,totalValue,ui);
				}
				else{
					totalValue = slotValue;
					revertAndWrongMultiple(ui,correctValue,1);
				}

				if(correctValue == slotValue){
					clearClones();
					showCorrect(correctValue,symbolValue);
				}

			}//else
		break;

		case 9:
		case 11:
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			if(symbolValue == 1)
			{

				if((jQuery)('.ui-droppable span.frijol').size() < numberSymbols["number_"+correctValue]['dot']){
					totalValue = slotValue + symbolValue;
					slotValue = totalValue;
					showClone(symbolValue,totalValue,ui);
				}
				else{
					totalValue = slotValue;
					revertAndWrongMultiple(ui,correctValue,numberSymbols["number_"+correctValue]['dot']);
				}

				if(correctValue == slotValue){
					clearClones();
					showCorrect(correctValue,symbolValue);
				}

			}
			else if(symbolValue == 0){
				totalValue = slotValue;
				revertAndWrong(ui,correctValue);
			}
			else
			{

				if((jQuery)('.ui-droppable span.palito').size() < numberSymbols["number_"+correctValue]['stick']){
					totalValue = slotValue + symbolValue;
					slotValue = totalValue;
					showClone(symbolValue,totalValue,ui);
				}
				else{
					totalValue = slotValue;
					revertAndWrongMultiple(ui,correctValue,numberSymbols["number_"+correctValue]['stick']);
				}

				if(correctValue == slotValue){
					clearClones();
					showCorrect(correctValue,symbolValue);
				}

			}//else
		break;

		case 10:
			if(symbolValue == 1 || symbolValue == 0)
			{
				totalValue = slotValue;
				revertAndWrong(ui,correctValue);
			}
			else
			{
				if((jQuery)('.ui-droppable span.palito').size() < 2){
					totalValue = slotValue + symbolValue;
					slotValue = totalValue;
					showClone(symbolValue,totalValue,ui);
				}
				else{
					totalValue = slotValue;
					revertAndWrongMultiple(ui,correctValue,1);
				}

				if(correctValue == slotValue){
					clearClones();
					showCorrect(correctValue,symbolValue);
				}

			}//else
		break;


	}
	return true;
}
