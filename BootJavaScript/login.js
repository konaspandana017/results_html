function login() {
    let username = document.getElementById("txtusername").value;
    let password = document.getElementById("txtpassword").value;

    if (username === "" || password === "") {
        alert("Enter valid username and password");
    } 
    else if (username === "faculty" && password === "password123") {
        alert("Login Successful");
    } 
    else {
        alert("Enter valid username or password");
    }
}
