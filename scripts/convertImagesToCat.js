chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.ib, {
       code: "for (x in document.getElementsByTagName('img')) {document.getElementsByTagName('img')[x].src = 'https://raw.githubusercontent.com/IStrikeboomI/Catify/main/icons/full.jpg'}"
    });
});