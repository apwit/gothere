now.ready(function () {

  if (localStorage.name) now.register(localStorage.name);

});

now.receiveGoTo = function (url) {

  chrome.windows.create({
    url: url
  });

};

chrome.extension.onRequest.addListener(function (req, sen, res) {

  now.register(req.name);
  localStorage.name = req.name;

});
