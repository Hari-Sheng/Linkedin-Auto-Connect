chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "https://www.linkedin.com/people/pymk/hub";
  chrome.tabs.create({ url: newURL });
  chrome.tabs.executeScript(null, {file: "linkedin.js"});
});


