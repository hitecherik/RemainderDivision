(function(){
	var tried = 0;

	$('p.error').hide();
	$('div.answers h2').hide();
	$('footer p').hide().prev().on('click', function(){
		$(this).next().slideToggle();
	});

	$('input#submit').on('click', function(e){
		 var numerator = document.forms[0].elements[0].value,
			denominator = document.forms[0].elements[1].value,
			result = Math.floor(numerator / denominator).toString(),
			modulo = (numerator % denominator).toString(),
			answer = "<li><b>" + result + "</b> remainder <b>" + modulo + "</b></li>"; 

		if (result==="NaN" || result==="Infinity" || result===undefined) {
			var form = document.forms[0],
				num = form.elements[0],
				denum = form.elements[1];

			alert("There has been a problem processing your answer. You must have left one or more of the fields blank, or not entered a number into the fields. Please return and try again.");

			num.value = "";
			denum.value = "";

			num.focus();
		} else {
			tried += 1;
			if (tried===1) {
				$('div.answers h2').show();
			};

			$("ol#here").append(answer);
		}

		$('ol#here li:nth-child(' + (tried - 1).toString() + ')').removeClass('prev');
		$('ol#here li:last').addClass('prev');

		e.preventDefault();
	});
})();