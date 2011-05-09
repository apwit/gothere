setTimeout(function () {

  setInterval(function () {

    if (!socket.connected) location.reload();

  }, 1000);

}, 5000);
