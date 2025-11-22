function showRegister() {
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("registerForm").classList.add("active");
    document.getElementById("form-title").innerText = "Register";
}

function showLogin() {
    document.getElementById("registerForm").classList.remove("active");
    document.getElementById("loginForm").classList.add("active");
    document.getElementById("form-title").innerText = "Login";
}

// Optional: Basic Validation
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Login Successful ✔");
});

document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Registration Successful ✔");
});
