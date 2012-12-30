/**
 * Created by Alexander Nielsen. alex@hitecherik.site11.com
 * 30 December 2012
 */

var Remainder = {
	cleared: false,

	/**
	 * Starts off Remainder, sets events.
	 */
	init: function(){
		// declares this.tried and this.allTried and sets them to 0.
		this.tried = 0;
		this.allTried = 0;

		// listens for form submition.
		$('input#submit').on('click', function(e){
			// fixes bug with clearance
			$('ol#here').show();

			// enabled clear button
			$('input#clear').removeAttr('disabled');

			// prevents default for no page reload
			e.preventDefault();

			// calls Remainder.calculateResult
			Remainder.calculateResult();
		});
	},

	/**
	 * Calculates result with remainder and formats result. Calls validation.
	 */
	calculateResult: function(){
		// caches this
		var me = this,
			divisionResult = {
				result: "NaN",
				modulo: "NaN"
			};

		// retrieves numerator and denominator values
		this.numerator = document.forms[0].elements[0].value;
		this.denominator = document.forms[0].elements[1].value;

		// calls divide to find result
		divisionResult = this.divide(this.numerator, this.denominator);
		this.result = divisionResult.result;
		this.modulo = divisionResult.modulo;

		// strings division and modulus together
		this.answer = "<li><b>" + this.result + "</b> remainder <b>" + this.modulo + "</b></li>";

		// runs this.validateResult.
		if(this.validateResult()){
			// if result is good
			me.printAnswer();
		} else {
			// if result is bad
			me.errorMessage();
		};
	},

	/**
	 * Divides with remainder using modulo. Can be universally used.
	 * @param  {integer} numerator   First number in division equation
	 * @param  {integer} denominator Second number in division equation
	 * @return {object}             Result and remainder returned in object
	 */
	divide: function(numerator, denominator){
		// sets variables
		var num = numerator,
			denom = denominator,
			answer = {
				result: "NaN",
				modulo: "NaN"
			};

		// calculates division and rounds down
		answer.result = Math.floor(num / denom).toString();

		// calculates remainder using modulus
		answer.modulo = (num % denom).toString();

		// returns answer object
		return answer;
	},

	/**
	 * Validates result, checks if NaN, Infinity and undefined is present
	 * @return {boolean} true to print answer, false for error message
	 */
	validateResult: function(){
		// declares default value of bool
		var bool = false;

		if (this.result!=="NaN" && this.result!=="Infinity" && this.result!==undefined) {
			// if no NaN, Infinity or undefined, then bool is true
			bool = true;
		};

		// returns bool to the this.calculateResult if statement
		return bool;
	},

	/**
	 * If this.validateResult returns true, then runs. Prints result and formats other results.
	 */
	printAnswer: function(){
		// adds 1 to this.tried, this.allTried and the answer archive index
		this.tried += 1;
		this.allTried += 1;
		this.answersArchive.index += 1;

		if (this.tried===1) {
			// if first go calls Page.startAnswers to show heading
			Page.startAnswers();
		};

		// prints answer and adds to archive index
		$("ol#here").append(this.answer);
		this.answersArchive.allAnswers.push(this.answer)

		// formats to make most recent answer green
		$('ol#here li:nth-child(' + (this.allTried - 1).toString() + ')').removeClass('prev');
		$('ol#here li:last').addClass('prev');

		// calls this.placeCursor to erase input and put cursor in first input
		this.placeCursor();
	},

	/**
	 * If this.validate returns false, then runs.
	 */
	errorMessage: function(){
		// alerts user of error
		alert("There has been a problem processing your answer. You must have left one or more of the fields blank, or not entered a number into the fields. Please return and try again.");

		// calls this.placeCursor to erase input and put cursor in first input
		this.placeCursor();
	},

	/**
	 * Erases inputs and places cursor in first input.
	 * @return {[type]} [description]
	 */
	placeCursor: function(){
		// declares function's helper variables
		var form = document.forms[0],
			num = form.elements[0],
			denum = form.elements[1];

		// resets all inputs
		num.value = "";
		denum.value = "";

		// puts cursor in first input for user convenience
		num.focus();
	},

	/**
	 * Called by Page.clearAnswers. Clears ol#here and resets this.tried to 0.
	 * @return {boolean} To continue in Page.clearAnswers or not
	 */
	clearAnswers: function(){
		// sets variable to be returned and cahces this.tried
		var bool = ($('ol#here').html()!==""),
			tried = this.tried;

		// checks to see if to clear or not
		if(bool){
			// empties ol#here smoothly
			$('ol#here').slideUp().empty();

			// sets this.tried to 0.
			tried = 0;
		} else {
			// if nothing to be cleared
			alert("Error: There are no answers to clear.");
		};

		this.tried = tried; // resets this.tried to tried, just in case

		return bool;
	},

	/**
	 * Stores an archive of all answers, in case the user needs them again.
	 * @type {Object}
	 */
	answersArchive: {
		allAnswers: [],
		index: -1, // to help with zero base
		
		/**
		 * Prints all answers in ol#here as list items
		 */
		recoverAnswers: function(){
			// declare helper variables
			var length = this.index + 1,
				me = this, // caches this to use in for statement
				html = '';

			for(var i = 0; i < length; i++){
				// adds to html (which will be printed)
				html += me.allAnswers[i];
			}

			// sets allTried so green highlighting works
			Remainder.allTried = this.allAnswers.length;

			$('ol#here').empty();
			$('ol#here').prepend(html);
			$('ol#here li').addClass('recovered');
			$('div.answers h2').show().next().slideDown();
		}
	},
};