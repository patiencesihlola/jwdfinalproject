const addform = document.querySelector("#addform");
addform.addEventListener("submit",formD)

function formD() {
    const names = document.querySelector("#name");
    const description = document.querySelector("#description");
    const assignedTo = document.querySelector("#assigned");
    const dueDate = document.querySelector("#date");
    const statusD = document.querySelector("#status");
    let valData = 0;
}
  console.log("Name :" + names.value.length);
  console.log("Description :" + description.value.length);
  console.log("Assigned To :" + assignedTo.value.length);
  console.log("Due Date :" + dueDate.value);
  console.log("Status:" + statusD.value);

  // Form validation for Task Name Field min length 5
  if (names.value.length < 3) {
   messages.push('Name must be longer than 3 characters')
  } else {
    return 'Name is valid, please continue';
    valData++;
  }

// Form validation for Task Assigned Field min length 5
if (assignedTo.value.length < 3) {
    messages.push('Name must be longer than 3 characters')
  } else {
     return;
     valData++;
   }

  // Form validation for Due Date Field not empty
  // try your own validation for a date in the future
   if (dueDate === new Date()) {
    messages.push("Enter a valid date");
  } else {
    return;
    valData++;
  }
  // Form validation for Task Status Field not empty
  if (statusD.value === '' || statusD.value == null) {
    messages.push('Please select status')
    //   }
  } else {
    return messages;
    valData++;
  }
  
  // If validation fails then function will not proceed further and
  // will return. The value of validationFail will also needed to be
  // reset to 0.
  // ----------------------------------------------------------------------------------
  if (valData > 0) {
    valData = 0;
    return;
  }
