   const loginForm = document.getElementById("login-form");
   const loginButton = document.getElementById("login-form-submit");
   const loginErrorMsg = document.getElementById("login-error-msg");
   
   // When the login button is clicked, the following code is executed
   loginButton.addEventListener("click", e => {
     // Prevent the default submission of the form
     e.preventDefault();
     // Get the values input by the user in the form fields
     const username = loginForm.username.value;
     const password = loginForm.password.value;
   
     if (username === "user" && password === "") {
       // If the credentials are valid, show an alert box and reload the page
       location.replace("accounts/user/index.html");
     }

 if (username === "jaan" && password === "degenerate") {
       // If the credentials are valid, show an alert box and reload the page
       location.replace("accounts/jaan/index.html");
     }

     if (username === "slimebor" && password === "GAME12") {
       // If the credentials are valid, show an alert box and reload the page
       location.replace("accounts/slimebor/index.html");
     }
     
          if (username === "suprat1k" && password === "gaykid") {
       // If the credentials are valid, show an alert box and reload the page
       location.replace("accounts/suprat1k/index.html");
     }
     
               if (username === "eardylan" && password === "eardylan") {
       // If the credentials are valid, show an alert box and reload the page
       location.replace("accounts/eardylan/index.html");
     }
     else {
       // Otherwise, make the login error message show (change its oppacity)
       alert("Incorrect password!");
     }
   });