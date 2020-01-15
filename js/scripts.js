// Back-end logic:

function tbsToCup(tbs) {
	return tbs / 16;
};

function cupToTbs(cup) {
	return cup * 16;
};

function tspToTbs(tsp) {
	return tsp / 3;
};

function tbsToTsp(tbs) {
	return tbs * 3;
};

function cupToGal(cup) {
	return cup / 16;
};

function galToCup(gal) {
	return gal * 16;
};

function qtToGal(qt) {
	return qt /4;
};

function galToQt(gal) {
	return gal * 4;
};

function ptToQt(pt) {
	return pt / 2;
};

function qtToPt(qt) {
	return qt * 2;
};

function cupToPt(cup) {
	return cup / 2;
};

function ptToCup(pt) {
	return pt * 2;
};

function cupToFlOz(cup) {
	return cup / 8;
};

function flOztoCup(flOz) {
	return flOz * 8;
};

// Front-end logic:

$(document).ready(function() {
	$("form").submit(function(event) {
		event.preventDefault();
		var quantity = parseInt($("input#quantity").val());
		var conversionType = parseInt($("#conversiontype").val());

		var result;
		if (conversionType === 1) {
			result = tbsToCup(quantity);
		} else if (conversionType === 2) {
			result = cupToTbs(quantity);
		} else if (conversionType === 3) {
			result = tspToTbs(quantity);
		} else if (conversionType === 4) {
			result = tbsToTsp(quantity);
		} else if (conversionType === 5) {
			result = cupToGal(quantity)
		} else if (conversionType === 6) {
			result = galToCup(quantity)
		} else if (conversionType === 7) {
			result = qtToGal(quantity)
		} else if (conversionType === 8) {
			result = galToQt(quantity);
		} else if (conversionType === 9) {
			result = ptToQt(quantity);
		} else if (conversionType === 10) {
			result = qtToPt(quantity);
		} else if (conversionType === 11) {
			result = cupToPt(quantity);
		} else if (conversionType === 12) {
			result = ptToCup(quantity);
		} else if (conversionType === 13) {
			result = cupToFlOz(quantity);
		} else if (conversionType === 14) {
			result = flOztoCup(quantity);
		}

		$("#result").show();
		$(".result").text(result);
	})
})