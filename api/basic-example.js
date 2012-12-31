/**
 * Created by Alexander Nielsen. alex@hitecherik.site11.com
 * 31 December 2012
 *
 * Example on using basic.js
 */

// quickly import minified version of basic.js
function remainder(c,e){var b=c,a=e,d={result:"NaN",modulo:"NaN"};d.result=Math.floor(b/a).toString();d.modulo=(b%a).toString();return d};


/**
 * Example of use below. Detailed instructions at http://git.io/muGgIA
 */

(function(){
	// declare numerator and denominator
	var numerator = 20, //number being divided
		denominator = 3; //number being divided by

	// retrieve answer
	var answer = remainder(numerator, denominator); //returns object

	// put answer into variables
	var result = answer.result, //rounded result
		remainder = answer.modulo; //remainder
})();