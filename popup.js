document.getElementById('settings').addEventListener('click', function() {
    chrome.tabs.create({ url: 'settings.html' });
  });
  