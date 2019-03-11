// Save the reference to text-field into a variable. | <input type="text">
const userInput = document.getElementById("user-input");
// Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
const btn = document.getElementById("add-item");
// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
const displayData = document.getElementById("display-items");
// Save the reference to paragraph for feedback | <p class="feedback"></p>
const err = document.querySelector(".error");

// Start function addItem.
function addItem() {
    // Create list-item and store output in a variable.
    userInput.value = userInput.value.trim();
    // Check if user entered the value in input text-field.
    if(userInput.value !== "") {
    // If so:
       // Use textContent property on created list-item
        let list = document.createElement("li");
       // and assign it with the value of the text written in the text-field
        list.textContent = userInput.value;
       // Append list item to unordered list.
        displayData.appendChild(list);
       // Clear a feedback-message.
        err.textContent = "";
       // Clear the text-field.
        userInput.value = "";
       // Put the cursor back to text-field
        userInput.focus();
        userInput.select();
        err.style.display = 'none';
        
    // End if. 
    // Otherwise:
    } else {
       // Print the message nothing entered in the paragraph "feedback"
        err.textContent = "ERROR: Nothing has been entered.";
        //display error message
        err.style.display = 'block';
    // End otherwise.
    }
// End function addItem.
}
// Register your function addItem for click event on button.
btn.addEventListener("click", addItem);