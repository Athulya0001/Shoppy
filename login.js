const userName = document.getElementById("username");
      const password = document.getElementById("password");

      function handleSubmit() {
        const userInput = userName.value.trim();
        const passwordInput = password.value.trim();

        if(userInput!==''&& password!==''){
            localStorage.setItem("username", userInput);
            localStorage.setItem("password", passwordInput);

            console.log(userInput, "user")
            console.log(passwordInput, "password")
        }else{
            alert("Please enter a valid username and password")
        }
      }