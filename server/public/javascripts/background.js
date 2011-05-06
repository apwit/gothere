localStorage.name = "Brendan";

now.ready(function () {

  console.log('now is read');
  now.register("BOBSAGGOT");

});

// Server-initiated updates
now.update = function () {

  location.reload();

};

now.receiveGoTo = function (url) {

  console.log("Going to: " + url);

  chrome.windows.create({
    url: url
  });

};
