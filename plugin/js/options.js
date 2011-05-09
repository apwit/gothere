(function () { // Wrap page in a closure



$(function() {
	
	var flash = setInterval(function() {
		$('#flashing_header').toggleClass('invert');
	}, 500);
	var flashing = true;
	
	
	var ogText = $('#flashing_header').text();
	$('#flashing_header').hover(function() {
		if (flashing) $(this).text('Plz, stop this flashing!!!!!')
	}, function() {
		if (flashing) $(this).text(ogText);
	})
	.click(function() {
		clearInterval(flash);
		flashing = false;
		$(this).text(ogText);
	});
	
});



})(); // End closure