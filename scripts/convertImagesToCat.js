chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.ib, {
       code: "for (x in document.getElementsByTagName('img')) {document.getElementsByTagName('img')[x].src = 'https://raw.githubusercontent.com/IStrikeboomI/cat/master/src/Strikeboom/cat/images/cat1.jpg'}"
    });
});