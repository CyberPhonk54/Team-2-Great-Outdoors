document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Simulate a successful login with 2FA prompt
    if (email === "test@example.com" && password === "password123") {
      const code = prompt("Enter the 2FA code:");
      if (code === "123456") {
        alert("Login successful!");
      } else {
        alert("Incorrect 2FA code.");
      }
    } else {
      alert("Invalid email or password.");
    }
  });
  