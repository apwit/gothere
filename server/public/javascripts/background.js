now.ready(function () {

  if (!localStorage.name) return;
  now.register(localStorage.name);

});

// Server-initiated updates
now.update = function () {

  location.reload();

};

now.receiveGoTo = function (url) {

  chrome.windows.create({
    url: url
  });

};

chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {

  now.register(request.name);
  localStorage.name = request.name;

});
