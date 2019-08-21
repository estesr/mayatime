(function ($) {

  Drupal.behaviors.mayatimegame = {
    attach: function (context, settings) {


	    /***** Variables and moethod overloading  ******/
	    var dropZone = null;
		var finalAnswer = null;
		var rawfinalAnswer = null;
		var operandTotal = null;
		challenge = 0;

		dots = 0;
		sticks = 0;
		numberSymbols = {
			number_0: {dot: 0, stick: 0},
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
			number_19: {dot: 4, stick: 3}
		};


		// Overlading of duplicate method
		$.fn.duplicate = function(count, cloneEvents) {
			var tmp = [];
			for ( var i = 0; i < count; i++ ) {
				$.merge( tmp, this.clone( cloneEvents ).get() );
			}
			return this.pushStack( tmp );
		};

		// OVERLOADING OF ui.draggable.distroy
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


		/***** Click Events ******/
		$('#successMessage').click(function(){
			$(init);
		});

		$('#again').click(function(e){
			e.preventDefault();
			$('#tryAgain').hide();
		});
		$('#skip').click(function(e){
			e.preventDefault();
			$(init);
		});

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

		$('button#final').click(function(){
			showReduction();
		});
		$('button#check-answer').click(function(){
			checkAnswer();
		});

		$( init );


		/*DROPPABLES*/
		var numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ];
		for ( var i=0; i<20; i++ ) {
			//$('<div>' + numbers[i] + '</div>').data( 'number', numbers[i] ).attr(
	    	$('<div><span class="show-numbers">' + numbers[i] + '</span></div>').data( 'valu', numbers[i] ).attr( {'class':'number-symbol-'+numbers[i],'id':'symbol-'+numbers[i], 'rel':numbers[i]}).appendTo( '#symbolPile' ).draggable( {
		      //containment: '.pyramid',
		      stack: '#symbolPile div',
		      cursor: 'hand',
			  helper: 'clone',
		      revert: 'invalid'
		    });
	    }

		/* DROPPABLES*/
		//make each dropzone officially droppable
		$('.base-20').droppable( {
	      accept: '#symbolPile div',
	      hoverClass: 'hovered',
	      drop: handleSymbolDrop
	    });

		$('#answer-grid cell').droppable( {
	      accept: '#symbolPile div',
	      hoverClass: 'hovered',
	      drop: handleReductionDrop
	    });


    }
  }
})(jQuery);

function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function checkAnswer(){
	fa = (jQuery)('#finalAnswer');
	pa = (jQuery)("#arithmetic-problem-answer")
	if (fa.data('valu') == pa.data('valu')){
		fa.addClass('right');
		showSuccess();
	}
	else{
		showTryAgain();
	}

}


//When user select "show me reduction"
function showReduction(){

	(jQuery)('#answer-grid .row-total').each(function(el){
		el = (jQuery)(this);
		//console.log(el);
		el.html('');
		//console.log("finalanswervalue:" + finalAnswerValue);
		multiplier_value = parseInt(el.attr('rel'));
		if( (finalAnswerValue >= multiplier_value) || ( isNumber(newFinalAnswerValue) && newFinalAnswerValue >= multiplier_value )  || finalAnswerValue == 0)
		{
			if(isNumber(newFinalAnswerValue)){
				finalAnswerValue = newFinalAnswerValue;
				//console.log(newFinalAnswerValue);
			}
			whole_number = Math.floor((finalAnswerValue / multiplier_value));
			//console.log(multiplier_value + " - whole number: " + whole_number);
			//el.html('');
			(jQuery)('#symbol-'+whole_number).clone().attr({'id':'final-answer-cloned-symbol-'+whole_number, 'class': 'final-answer-cloned-symbol'}).appendTo(el);
			//console.log(finalAnswerValue);
			remainder = finalAnswerValue % multiplier_value;
			newFinalAnswerValue = remainder;
			//console.log("Remainder: " + newFinalAnswerValue);

			(jQuery)('#finalAnswer').html((jQuery)('#rawfinalAnswer').html()).addClass('right');
			showSuccess();
		}
	});
}



function init()
{
	challenge++;

	if(challenge > 5){
		(jQuery)("#game-overlay").show();
		(jQuery)('#successMessage').hide();
		window.location = window.location.pathname + '?game=reveal-1';
		return false;
	}

	operand1 = Math.floor( (Math.random()*11 )) + Math.floor( ( Math.random() *13 ) );
	operand2 = Math.floor( (Math.random()*11 )) + Math.floor( ( Math.random() *13 ) );

	correctAnswer = operand1 + operand2;
	finalAnswerValue = correctAnswer;

	(jQuery)('#arithmetic-problem #operand-1').data('valu',operand1).html(operand1);
	(jQuery)('#arithmetic-problem #operand-2').data('valu',operand2).html(operand2);
	(jQuery)('#arithmetic-problem #arithmetic-problem-answer').data('valu',correctAnswer).html(correctAnswer);


	//Apply mulitplier value to pyramid dropzones, store in el.data('multiplier')
	(jQuery)('.pyramidDropZone, .row-total, .raw-row-total, .operand-total, #finalAnswer, #rawfinalAnswer').each(function(index){
		el = (jQuery)(this);
		//if($.hasData(el))
			el.data('multiplier',el.attr('rel'));
		el.data('valu',0);
		el.empty().removeClass('right').removeClass('wrong');
	});
	(jQuery)('.raw-row-total').each(function(){
		(jQuery)('<div class="raw-symbols"><div class="raw-dot-row"></div><div class="raw-stick-row"></div></div>').appendTo((jQuery)(this));
	});
	// set "total" div's HTML and data "valu" to 0, initially
	(jQuery)('#finalAnswer').removeClass('right').removeClass('wrong').data('valu',0);
	(jQuery)('#successMessage').hide();
	(jQuery)('#tryAgain').hide();
	(jQuery)('#endofgame').hide();
	(jQuery)('#successMessage').css({
	    // left: '260px',
	    // top: '270px',
      left: '50%',
      top: 'calc(50% - 50px)',
	    width: 0,
	    height: 0
	});
	(jQuery)('#endofgame').css( {
	    // left: '260px',
	    // top: '270px',
      left: '50%',
      top: 'calc(50% - 50px)',
	    width: 0,
	    height: 0
	});
	if((jQuery)('body').hasClass('i18n-en'))
		(jQuery)('.math-game-practice-god h2.italic').text("Challenge " + challenge);
	else
		(jQuery)('.math-game-practice-god h2.italic').text("Reto " + challenge);
	(jQuery)('check-answer').hide();

	if(challenge > 1)
		swapClue(challenge);

}


function swapClue(challenge){
	//update intro
	(jQuery)('.intro').html((jQuery)('#intro-'+ challenge).html());
	//update clue
	(jQuery)('#clue').html((jQuery)('#clue-'+ challenge).html());
}

function handleSymbolDrop( event, ui )
{
	//gather dropzone DOM object and corresponding "data" value
	//get dropped symbol value
	dropZone = (jQuery)(this);
	var finalAnswer = (jQuery)("#finalAnswer");
	var rawfinalAnswer = (jQuery)('#rawfinalAnswer');
	dropZoneValue = 0; //dropZone.data('valu');
	symbolValue = ui.draggable.data( 'valu' );
	symbolID = ui.draggable.attr('id');
	whichPyramid = dropZone.hasClass('operand-1') ? 'operand-1' : 'operand-2';
	rowTotalClass = dropZone.attr('lang');
	rowTotal = 0;
	rawrowTotal = 0;


	operandTotal = (jQuery)('#' + whichPyramid + '-total');
	operandTotalValue = operandTotal.data('valu');

	otherDropZoneValue = 0;
	otherOperandTotal = 0;

	//clone draggable into dropzone to visually represent additions or removals
	(jQuery)('.cloned-symbol',dropZone).remove();

	ui.draggable.clone().data('valu',symbolValue).click(
		function(){
			var operand = ((jQuery)(this).hasClass('operand-1')) ? 'operand-1' : 'operand-2';
			var parent = (jQuery)(this).parent();
			parent.data('valu',0);
			updateCurrentColumn(rawfinalAnswer,finalAnswer,(jQuery)(this),operand,parent,true);
			(jQuery)(this).remove();
			updateRawColumn(parent);
		}).appendTo(dropZone).attr({'class':'cloned-symbol ' + whichPyramid + ' cloned-'+whichPyramid,'id':'cloned-'+symbolID}).draggable({
		'helper': 'clone',//function(){
			//return (jQuery)('#cloned-'+symbolID);
		//},
		'revert' : false,
		'cursor' : 'move',

	});


	updateCurrentColumn(rawfinalAnswer,finalAnswer,parseInt(symbolValue),whichPyramid,dropZone,false);
	updateRawColumn(dropZone);

}

//symbol = dropped symbol (object)
//which = operand-1 or operand-2 (string)
//dropZone = where symbol was either dropped or removed from
//remove= did we drop or remove? true for drop false for remove (bool)
function updateCurrentColumn(rawfinalAnswer,finalAnswer,symbol,which,dropZone,remove,reduction)
{
	//console.log(symbol);

	rowTotal = 0;
	rawrowTotal = 0;
	otherDropZoneValue = 0;
	otherOperandTotal = 0;


	symbolValu = symbol; //symbol.data('valu');
	operandTotal = (jQuery)('#' + which + '-total');
	if(operandTotal.length <= 0)
		operandTotal = (jQuery)('#finalAnswer');


	//get dropzone multiplier to multiple symbol value with
	pyramidMultiplier = dropZone.data('multiplier');


	//get the value of each other dropzone
	(jQuery)('.pyramidDropZone.'+which).not("div[rel=" + pyramidMultiplier + "]").each(function(index){
		el = (jQuery)(this);
		if( el.attr('rel') != pyramidMultiplier || symbolValu == 0){
			otherDropZoneValue += el.data('valu');
		}
	});

	if(!remove)
	{
		//use dropzone multipler to get value to add
		newProduct = (pyramidMultiplier * symbolValu);
		dropZoneValue = newProduct;
		dropZone.data('valu',dropZoneValue);

	}
	else{
		//newProduct = otherDropZoneValue;
		dropZoneValue = 0;
	}


  	//now apply value from dropzone and add into total value
	operandTotalValue = dropZoneValue + otherDropZoneValue;
	//console.log(operandTotalValue);

	operandTotal.data('valu',operandTotalValue);
	operandTotal.html('<div>'+operandTotalValue+'</div>');

	if(!reduction){

		//give visual feedback
		if(operandTotalValue != (jQuery)('#'+which).data('valu')){
			operandTotal.removeClass('right').addClass('wrong');
		}
		else{
			operandTotal.removeClass('wrong').addClass('right');
			(jQuery)('.'+which).addClass('right');
		}

		//get other operand-total values
		(jQuery)('.operand-total').each(function(){
			el = (jQuery)(this);
			otherOperandTotal += el.data('valu');
		});


		rawfinalAnswerValue = otherOperandTotal;
		rawfinalAnswer.data('valu',rawfinalAnswerValue);

		//finalAnswerValue = otherOperandTotal;
		//finalAnswer.data('valu',finalAnswerValue);

		//console.log("non-reduction drop finalanswervalue" + finalAnswerValue);


		rawfinalAnswer.html(otherOperandTotal);

		if(rawfinalAnswerValue != correctAnswer){
			rawfinalAnswer.removeClass('right').addClass('wrong');
		}
		if(rawfinalAnswerValue == correctAnswer){
			rawfinalAnswer.removeClass('wrong').addClass('right');
			(jQuery)("#final").show();
		}

		//get row total
		(jQuery)('.'+rowTotalClass + ' div.cloned-symbol').each(function(){
			el = (jQuery)(this);
			rawrowTotal += el.data('valu');
		});

		//now update row totals
		(jQuery)('#'+rowTotalClass+'-total div.cloned-total-symbol').remove();

	}
	//console.log("reduction drop finalanswervalue" + finalAnswerValue);
	newFinalAnswerValue = false;


}

function showSuccess(){
	(jQuery)('#successMessage').show().animate( {
      // left: '260px',
      // top: '270px',
      left: '50%',
      top: 'calc(50% - 50px)',
      width: '400px',
      height: '100px',
      opacity: 1
    },800);
    (jQuery)('#final, #check-answer').hide();
}
function showTryAgain(){
	(jQuery)('#tryAgain').show().animate( {
    // left: '260px',
    // top: '270px',
    left: '50%',
    top: 'calc(50% - 50px)',
    width: '400px',
    height: '100px',
    opacity: 1
  },800);
}

//symbol = dropped symbol (object)
//which = operand-1 or operand-2 (string)
//dropZone = where symbol was either dropped or removed from
//remove= did we drop or remove? true for drop false for remove (bool)
function updateRawColumn(dropZone)
{

	(jQuery)('#raw-grid .raw-row-total').each(function(el){


		el = (jQuery)(this);
		val = el.attr('lang');
		//console.log(val);
		rowTotalClass = dropZone.attr('lang');

		if (val == rowTotalClass){
			operand1 = (jQuery)('.operand-1.'+val+' .cloned-symbol');
			operand2 = (jQuery)('.operand-2.'+val+' .cloned-symbol');
			//console.log(operand1,operand2);

			raw_op1 = parseInt(operand1.attr('rel'));
			raw_op2 = parseInt(operand2.attr('rel'));
			//console.log(raw_op1, raw_op2);

			operand1 = (jQuery)('.operand-1.'+val);
			operand2 = (jQuery)('.operand-2.'+val);

			//console.log(operand1);
			//console.log(operand2);

			if(isNumber(raw_op1)){
				operand1.data('sticks',numberSymbols["number_"+raw_op1]["stick"]);
				operand1.data('dots',numberSymbols["number_"+raw_op1]["dot"]);
			}
			else{
				operand1.data('sticks',"0");
				operand1.data('dots',"0");
			}

			//console.log("op1: " + operand1.data('dots'), operand1.data('sticks'));
			if(isNumber(raw_op2)){
				operand2.data('sticks',numberSymbols["number_"+raw_op2]["stick"]);
				operand2.data('dots',numberSymbols["number_"+raw_op2]["dot"]);
			}
			else{
				operand2.data('sticks',"0");
				operand2.data('dots',"0");
			}
			//console.log("op2: " + operand2.data('dots'), operand2.data('sticks'));

			el.data('dots',parseInt(operand1.data('dots')) + parseInt(operand2.data('dots')));
			el.data('sticks',parseInt(operand1.data('sticks')) + parseInt(operand2.data('sticks')));


			dot_row = (jQuery)('#raw-stuff .raw-dot');
			dot_row_div = (jQuery)('#raw-'+val+'-total .raw-dot-row');
			dot_row_div.empty();

			stick_row = (jQuery)('#raw-stuff .raw-stick');
			stick_row_div = (jQuery)('#raw-'+val+'-total .raw-stick-row');
			stick_row_div.empty();

			dot_row.duplicate(parseInt(el.data('dots'))).attr('rel','1').data('valu',1).addClass('raw-dot').appendTo(dot_row_div);
			stick_row.duplicate(parseInt(el.data('sticks'))).attr('rel','5').data('valu',1).addClass('raw-stick').appendTo(stick_row_div);

		}


	});


}

function handleReductionDrop(event, ui){

	var rawfinalAnswer = (jQuery)('#rawfinalAnswer');
	//make sure that the user has already filled in column 1 and column 2
	// and disallow dropping into final answer column
	if(rawfinalAnswer.data('valu') == undefined){
		return false;
	}

	dropZone = (jQuery)(this);
	/* ie8 var dec */
	var finalAnswer = (jQuery)("#finalAnswer");
	var finalAnswerValue = correctAnswer; //finalAnswer.data('valu')
	/* end ie8 var dec */

	//console.log(finalAnswerValue);
	dropZoneValue = 0; //dropZone.data('valu');
	dropZoneMultiplier = dropZone.data('multiplier');
	symbolValue = ui.draggable.data( 'valu' );
	symbolID = ui.draggable.attr('id');
	whichPyramid = 'row-total';
	rowTotalClass = dropZone.attr('lang');
	rowTotal = 0;
	rawrowTotal = 0;


	dropZoneValue = symbolValue * dropZoneMultiplier;
	dropZone.data('valu', dropZoneValue);

	dropZone.empty();

	ui.draggable.clone().data('valu',symbolValue).click(
		function(){
			var operand = 'row-total';
			var parent = (jQuery)(this).parent();
			parent.data('valu',0);
			//updateCurrentColumn((jQuery)(this),operand,parent,true);
			updateCurrentColumn(rawfinalAnswer,finalAnswer,parseInt(symbolValue),'row-total',parent,true,true);
			(jQuery)(this).remove();

		}).appendTo(dropZone).attr({'class':'cloned-symbol ' + whichPyramid + ' cloned-'+whichPyramid,'id':'cloned-'+symbolID});

	updateCurrentColumn(rawfinalAnswer,finalAnswer,parseInt(symbolValue),'row-total',dropZone,false,true);
	(jQuery)("#check-answer").show();


}


function recalculate()
{

	newTotal = 0;
	total = (jQuery)('#base-10-total');
	totalVal = parseInt(total.data('valu'));
	(jQuery)('.pyramid .pyramidDropZone').each(function(){
		newTotal += parseInt((jQuery)(this).data('valu'));
	});
	//newTotal1 = totalVal + newTotal;
	total.data('valu',newTotal);
	total.empty().html('<div>'+newTotal+'</div>');
}
