




// Show/hide forms
 function showLogin() {
    document.getElementById("loginContainer").style.display = "block";
    document.getElementById("signupContainer").style.display = "none";
    document.getElementById("forgotContainer").style.display = "none";
  }

  function showSignup() {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("signupContainer").style.display = "block";
    document.getElementById("forgotContainer").style.display = "none";
  }

function showForgot() {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("signupContainer").style.display = "none";
    document.getElementById("forgotContainer").style.display = "block";
  }

  // Signup
  function signup() {
  const username = document.getElementById("signupUsername").value.trim();
  const emailInput = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  if (!username || !emailInput || !password || !confirmPassword) {
    alert("Please fill all fields");
    return;
  }

  // Email must be a valid gmail address
  const emailPattern = /^[^\s@]+@gmail\.com$/;
  if (!emailPattern.test(emailInput.toLowerCase())) {
    alert("Please enter a valid Gmail address (e.g., example@gmail.com)");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const email = emailInput.toLowerCase();

  let users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[email]) {
    alert("Account already exists with this email");
    return;
  }

  users[email] = { username, password };
  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful!");

  document.getElementById("signupUsername").value = "";
  document.getElementById("signupEmail").value = "";
  document.getElementById("signupPassword").value = "";
  document.getElementById("confirmPassword").value = "";

  showLogin();
}


  // Login
function login() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (!users[email]) {
        alert("User not found. Please sign up first.");
        return;
    }

    if (users[email].password === password) {
        alert("Login successful!");

        // Save login status & name
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loggedInUser", email); // store email
        localStorage.setItem("loggedInName", users[email].username); // store name

        document.getElementById("loginEmail").value = "";
        document.getElementById("loginPassword").value = "";

        window.location.href = "index.html"; 
    } else {
        alert("Incorrect password!");
    }
}




  // Reset password
function resetPassword() {
  const emailInput = document.getElementById("forgotEmail").value.trim();
  const newPassword = document.getElementById("newPassword").value.trim();

  if (!emailInput || !newPassword) {
    alert("Please fill all fields");
    return;
  }

  const email = emailInput.toLowerCase();  // Normalize email to lowercase

  let users = JSON.parse(localStorage.getItem("users")) || {};

  if (!users[email]) {
    alert("User not found!");
    return;
  }

  users[email].password = newPassword;
  localStorage.setItem("users", JSON.stringify(users));

  alert("Password updated successfully!");
  showLogin();
}



// --------user login info display--------

window.onload = function() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userName = localStorage.getItem("loggedInName");
  
  if (isLoggedIn === "true" && userName) {
      // Hide login button, show user info
      document.getElementById("loginBtnItem").style.display = "none";
      document.getElementById("userInfo").style.display = "block";

      // Avatar first + first character
      const nameParts = userName.trim().split(" "); 
      let firstChar = nameParts[0].charAt(0).toUpperCase(); 
      let secondChar = nameParts.length > 1 ? nameParts[1].charAt(0).toUpperCase() : ""; 
      
      document.getElementById("userAvatar").textContent = firstChar + secondChar;
      

      // Full name
      document.getElementById("userName").textContent = userName;
  }
}

// Logout function
function logout() {
  localStorage.setItem("isLoggedIn", "false");
  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("loggedInName");
  location.reload();
}

// ----- Login User info ------

Upage.document.getElementById('Upage');
function Showuser() {
  Upage.style.display = 'block';  
}
function Hideuser() {
  Upage.style.display = 'none';
}