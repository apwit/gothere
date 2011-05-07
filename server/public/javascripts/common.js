// Reconnect after Chrome has gone idle
chrome.idle.onStateChanged.addListener(function () {

  socket.connect();

});

// Let the server try to update connected client's hosted JS
now.update = function () {

  location.reload();

};

// Ping the server every 30 seconds to keep Chrome from dropping our sockets
setInterval(now.ping, 30000);
