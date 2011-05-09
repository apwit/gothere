if (!localStorage.name) {

  var name = localStorage.name = prompt("Name please: ");
  chrome.extension.sendRequest({name: name});

}

now.ready(function () {

  $('#interface').replaceWith('<table id="interface"></table>');

  for (var key in now.users) {

    addUser(now.users[key][key], key);

  }

});

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

var addUser = now.addUser = function (name, userId) {

  // If for some reason these get fucked, don't show them
  if (!name || !userId) return false;

  // Set up the row and add the user's name to it
  var $row = $('<tr id="' + userId + '" />');
  $row.append('<td>' + name + '</td>');

  // Set up the form to type the URL in
  var $formTd = $('<td />');
  var $form = $('<form action="#" method="post"></form>').appendTo($formTd);
  $form.submit(formSubmit);
  $form.append('<input type="text" name="url" /><button type="submit" name="submit">Go there!</button>');
  $formTd.appendTo($row);

  // Add the whole row to the table
  $('#interface').append($row);

};


var removeUser = now.removeUser = function (userId) {

  $('#' + userId).remove();

};


function formSubmit (event) {

  var userId  = $(this).closest('tr').attr('id'),
      $input  = $(this).find('input[name=url]'),
      url     = $input.val();

  if (url.indexOf('http://') != 0) url = 'http://' + url;

  now.sendGoTo(userId, url);

  $input.val('');

  return false;

}
