// Reconnect after Chrome has gone idle
chrome.idle.onStateChanged.addListener(function () {

  reconnect();

});


// Let the server try to update connected client's hosted JS
now.update = function () {

  location.reload();

};


// Ping the server every 30 seconds to keep Chrome from dropping our sockets
setInterval(now.ping, 30000);


// If now.js loses it's connect, attempt to get it back by reloading the page
now.on('disconnect', function () {

  reconnect();

});


// Until now.js implements a reconnect, we just reload the page
function reconnect () {

  location.reload();

}
