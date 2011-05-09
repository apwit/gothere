now.ready(function () {

  if (!localStorage.name) return;
  now.register(localStorage.name);

});

now.receiveGoTo = function (url) {

  chrome.windows.create({
    url: url
  });

};

chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {

  now.register(request.name);
  localStorage.name = request.name;

});
