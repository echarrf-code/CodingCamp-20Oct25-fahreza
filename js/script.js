welcomeSpeech();


function welcomeSpeech() {
    /// show prompt to ask name for user's name
    let name = prompt("Please enter your name:");

    // greet the user with their name
   document.getElementById("greet-name").innerHTML = `Hi ${name}, `;
}
/// function to validate form
function validateForm() {
    // get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

/// check if any field is empty
    if (name === "" || email === "" || message === "") {
        /// show alert if any field is empty
        alert("Please fill in all fields.");
        return false;
    } else {
        /// show thank you message if all fields are filled
        alert("Thank you for your message, " + name + "!");
        return true;
    
    }
}


   

    


