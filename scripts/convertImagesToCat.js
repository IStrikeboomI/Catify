chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.ib, {
       code: `for (let x of document.getElementsByTagName('img')) {
		   x.src = 'https://raw.githubusercontent.com/IStrikeboomI/Catify/main/icons/full.jpg'
		   }`
    });
});