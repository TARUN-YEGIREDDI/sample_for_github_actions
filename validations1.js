document.addEventListener("DOMContentLoaded", function(){
    var form = document.querySelector("form");
    
    form.addEventListener("submit", function(event){
        event.preventDefault();

        // validate firstname
        var firstname = document.getElementById("fname").value;
        if (firstname === "") {
            alert("Please enter a first name");
            return;
        }

        var lastname = document.getElementById("lname").value;
        if (lastname === "") {
            alert("Please enter a lastname");
            return;
        }

        var password = document.getElementById("password").value;
        if (password === "") {
            alert("Please enter a password");
            return;
        }

        if(password.length < 5)
        {
            alert("password should be greater than 5 characters");
            return;
        }

        var cpassword = document.getElementById("cpassword").value;
        if(cpassword !== password)
        {
            alert("enter the correct password...");
            return;
        }

        this.submit();
    });
});