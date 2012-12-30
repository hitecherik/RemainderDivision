/**
 * Created by Alexander Nielsen. alex@hitecherik.site11.com
 * 29 December 2012
 */

var Page = {
	init: function(){
		// call Remainder.init
		Remainder.init();

		// hides appropriate elements
		$('p.error').hide();
		$('div.answers h2').hide();
		$('footer div.footer-content').hide();


		// sets events
		$('footer h2').on('click', function(){
			Page.toggleAbout();
		}); // toggle about
		$('input#clear').on('click', function(e){
			e.preventDefault();
			Page.clearAnswers();
		}); // clear all answers
		$('input#recover').on('click', function(e){
			e.preventDefault(); // prevents reload
			$('input#recover').attr('disabled', 'true'); // disables re-recovery
			Remainder.answersArchive.recoverAnswers(); // calls remainder.js's method
		}); // recover cleared answers
	},

	toggleAbout: function(){
		// toggles footer paragraph visibility
		$('footer div.footer-content').slideToggle();
	},

	clearAnswers: function(){
		// calls Remainder.clearAnswers then hides div.answers h2.
		if(Remainder.clearAnswers()){
			$('div.answers h2').hide();

			// makes recovery of answers enabled
			$('input#recover').removeAttr('disabled');
		};
	},

	startAnswers: function(){
		// shows div.answers h2
		$('div.answers h2').show();
	}
};

// call Page.init and start off all JS:
(function(){
	Page.init();
})();