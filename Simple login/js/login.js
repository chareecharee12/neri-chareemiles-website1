function login() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var real_username = "Chammy";
    var real_password = "mems1212";

    if (username === "" || password === "") {
        document.getElementById("error").innerHTML = "All textboxes are required";
    }
    else {
        document.getElementById("error").innerHTML = "Welcome " + username;
    }
        if (username === real_username && password === real_password) {
        document.getElementById("error").innerHTML = "Welcome " + username;
    }
    else {
        document.getElementById("error").innerHTML = "Invalid username and password";
    }

    // alert(username);
    // alert(password);

}
function forgot() {
    alert("You clicked forgot password");
}