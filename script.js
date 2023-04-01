function validateLoginForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return false;
  }

  // Add more validation code here if needed

  return true;
}

function validateSignupForm() {
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var newUsername = document.getElementById("new-username").value;
  var newPassword = document.getElementById("new-password").value;

  if (
    fullname === "" ||
    email === "" ||
    newUsername === "" ||
    newPassword === ""
  ) {
    alert("Please fill in all fields.");
    return false;
    // Add more validation code here if needed
  }
}
