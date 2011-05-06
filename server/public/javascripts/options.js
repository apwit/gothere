now.ready(function () {

  console.log(now);

$('#interface').replaceWith('<table id="interface"></table>');

  for (var key in now.users) {

    addUser(now.users[key][key], key);

  }

});

// Server-initiated updates
now.update = function () {

  location.reload();

};


var addUser = now.addUser = function (name, userId) {

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

}


var removeUser = now.removeUser = function (userId) {

  $('#' + userId).remove();

}


function formSubmit (event) {

  var userId  = $(this).closest('tr').attr('id')
      url     = $(this).find('input[name=url]').val();

  now.sendGoTo(userId, url);

  return false;

}
