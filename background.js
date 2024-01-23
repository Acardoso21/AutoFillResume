chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: autofillForm,
    });
  });
  
  function autofillForm() {
    // Get all input elements within the form
    let inputs = document.querySelectorAll('input');
  
    // Loop through the input elements
    for (let i = 0; i < inputs.length; i++) {
      // Get the associated label element
      let label = document.querySelector(`label[for="${inputs[i].id}"]`);
  
      // Check if the label exists
      if (label) {
        // Convert the label text to lowercase for easier comparison
        let labelText = label.textContent.toLowerCase();
  
        // Check the label text and set the input value accordingly
        if (labelText.includes('first name')) {
          inputs[i].value = 'Your First Name';
        } else if (labelText.includes('last name')) {
          inputs[i].value = 'Your Last Name';
        } else if (labelText.includes('name')) {
          inputs[i].value = 'Your Full Name';
        } else if (labelText.includes('address')) {
          inputs[i].value = 'Your Address';
        }else if (labelText.includes('email')) {
            inputs[i].value = 'Your Email';
        } else if (labelText.includes('phone')) {
            inputs[i].value = 'Your Phone Number';
        } else if (labelText.includes('city')) {
            inputs[i].value = 'Your City';
        } else if (labelText.includes('state')) {
            inputs[i].value = 'Your State';
        } else if (labelText.includes('zip') || labelText.includes('postal')) {
            inputs[i].value = 'Your Zip Code';
        } else if (labelText.includes('country')) {
            inputs[i].value = 'Your Country';
        } else if (labelText.includes('username')) {
            inputs[i].value = 'Your Username';
        } else if (labelText.includes('password')) {
            inputs[i].value = 'Your Password';
        } if (labelText.includes('education')) {
            inputs[i].value = 'Your Highest Level of Education';
        } else if (labelText.includes('school') || labelText.includes('university')) {
            inputs[i].value = 'Your School or University Name';
        } else if (labelText.includes('major')) {
            inputs[i].value = 'Your Major';
        } else if (labelText.includes('degree')) {
            inputs[i].value = 'Your Degree';
        } else if (labelText.includes('graduation date')) {
            inputs[i].value = 'Your Graduation Date';
        } else if (labelText.includes('job title')) {
            inputs[i].value = 'Your Job Title';
        } else if (labelText.includes('company')) {
            inputs[i].value = 'Your Company Name';
        } else if (labelText.includes('start date')) {
            inputs[i].value = 'Your Job Start Date';
        } else if (labelText.includes('end date')) {
            inputs[i].value = 'Your Job End Date';
        } else if (labelText.includes('skills')) {
            inputs[i].value = 'Your Skills';
        } 
        // Add more conditions here for other input types
      }
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
  