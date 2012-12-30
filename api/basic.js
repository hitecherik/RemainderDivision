/**
 * Divides with remainder using modulo. Can be universally used.
 * @param  {integer} numerator   First number in division equation
 * @param  {integer} denominator Second number in division equation
 * @return {object}             Result and remainder returned in object
 */
function remainder(numerator, denominator){
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
}