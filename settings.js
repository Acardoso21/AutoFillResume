document.getElementById('save').addEventListener('click', function() {
    let info = document.getElementById('info').value;
    chrome.storage.local.set({ 'info': info }, function() {
      alert('Settings saved');
    });
  });
  