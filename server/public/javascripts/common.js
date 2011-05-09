var socketInt = setInterval(function () {

  if (!socket) return;

  socket.transport.socket.onerror = function () {

    location.reload();

  };

  clearInterval(socket);

}, 100);


setTimeout(function () {

  setInterval(function () {

    if (!socket.connected) location.reload();

  }, 1000);

}, 5000);
