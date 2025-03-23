document.addEventListener("DOMContentLoaded", function () {
    const formTitle = document.getElementById("form-title");
    const authBtn = document.getElementById("auth-btn");
    const toggleForm = document.getElementById("toggle-form");
    const emailField = document.getElementById("email");
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm-password");
    const referralField = document.getElementById("referral");
    
    let isLogin = false;

    toggleForm.addEventListener("click", function () {
        isLogin = !isLogin;
        if (isLogin) {
            formTitle.innerText = "Login";
            authBtn.innerText = "Login";
            usernameField.style.display = "none";
            confirmPasswordField.style.display = "none";
            referralField.style.display = "none";
            toggleForm.innerHTML = `Don't have an account? <a href="#">Register</a>`;
        } else {
            formTitle.innerText = "Register";
            authBtn.innerText = "Register";
            usernameField.style.display = "block";
            confirmPasswordField.style.display = "block";
            referralField.style.display = "block";
            toggleForm.innerHTML = `Already have an account? <a href="#">Login</a>`;
        }
    });

    authBtn.addEventListener("click", function () {
        const email = emailField.value;
        const username = usernameField.value;
        const password = passwordField.value;
        const confirmPassword = confirmPasswordField.value;

        if (!isLogin) {
            // Registration
            if (!email || !username || !password || !confirmPassword) {
                alert("Please fill all fields.");
                return;
            }
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            const user = { email, username, password };
            localStorage.setItem("user", JSON.stringify(user));
            alert("Registration successful! Now login.");
            toggleForm.click(); 
        } else {
            // Login
            const storedUser = JSON.parse(localStorage.getItem("user"));
            if (storedUser && storedUser.email === email && storedUser.password === password) {
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid email or password!");
            }
        }
    });
});
