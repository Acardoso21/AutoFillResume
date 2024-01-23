chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: autofillForm,
    });
  });
  
  function autofillForm() {
      // Get the form element
  let form = document.querySelector('form');

  // Check if the form exists
  if (form) {
    // Get the input elements within the form
    let inputs = form.querySelectorAll('input');

    // Loop through the input elements and set their value
    for (let i = 0; i < inputs.length; i++) {
      // Check the type of the input field
      if (inputs[i].type === 'text') {
        // Set the value of the text field
        inputs[i].value = 'Your Text Here';
      } else if (inputs[i].type === 'email') {
        // Set the value of the email field
        inputs[i].value = 'example@example.com';
      }
      // Add more conditions here for other input types
    }

    // Submit the form
    form.submit();
  } else {
    console.log('No form found on this page.');
  }
}
    // This is where you would implement the autofill functionality.
    // For example, you might find a form on the page and fill in certain fields.
    // This is just a placeholder and won't actually autofill anything.
    // alert('Autofill button clicked!');
//   }
  

// Save data to storage
chrome.storage.local.set({key: 'value'}, function() {
    console.log('Value is set to ' + 'value');
  });
  
  // Get data from storage
  chrome.storage.local.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
  });
  