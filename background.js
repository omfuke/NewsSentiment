console.log("alksdfsf");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  chrome.tabs.sendMessage(tab.id, { txt: "hello" });
}
