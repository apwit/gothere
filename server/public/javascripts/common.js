socket.transport.socket.onerror = function () {

  location.reload();

};

setTimeout(function () {

  setInterval(function () {

    if (!socket.connected) location.reload();

  }, 1000);

}, 5000);
