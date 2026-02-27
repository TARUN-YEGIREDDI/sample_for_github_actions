document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Validate username
        var username = document.getElementById("fname").value;
        if (username === "") {
            alert("Please enter a username");
            return;
        }

        // Validate password
        var password = document.getElementById("password").value;
        if (password === "") {
            alert("Please enter a password");
            return;
        }
        
        if (password.length < 5)
        {
            alert("password should be greater than 5 characters");
            return;
        }
        // If all validations pass, submit the form
        this.submit();
    });
});
