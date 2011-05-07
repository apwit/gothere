// Reconnect after Chrome has gone idle
chrome.idle.onStateChanged.addListener(reload);


// Let the server try to update connected client's hosted JS
now.update = reload;


function bindSocketDisconnect () {

  // If now.js loses it's connect, attempt to get it back by reloading the page
  socket.on('disconnect', reload);

}


// Simply reloads the page
function reload () {

  setTimeout(function () {

    location.reload();

  }, 1000);

}
