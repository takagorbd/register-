// Firebase কানেক্ট করা
const firebaseConfig = {
    apiKey: "তোমার_API_KEY",
    authDomain: "তোমার_PROJECT_ID.firebaseapp.com",
    projectId: "তোমার_PROJECT_ID",
    storageBucket: "তোমার_PROJECT_ID.appspot.com",
    messagingSenderId: "তোমার_SENDER_ID",
    appId: "তোমার_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// সাইন আপ ফাংশন
function signup() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let referralCode = document.getElementById("referral-code").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            let user = userCredential.user;
            user.updateProfile({ displayName: name });

            alert("Sign Up Successful!");
            console.log("Referral Code:", referralCode);
            window.location.href = "dashboard.html"; // সফল হলে ড্যাশবোর্ডে পাঠাবে
        })
        .catch(error => {
            alert(error.message);
        });
}

// লগইন ফাংশন
function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Login Successful!");
            window.location.href = "dashboard.html"; // সফল হলে ড্যাশবোর্ডে পাঠাবে
        })
        .catch(error => {
            alert(error.message);
        });
}

// পাসওয়ার্ড রিসেট ফাংশন
function resetPassword() {
    let email = prompt("Enter your email to reset password:");
    if (email) {
        auth.sendPasswordResetEmail(email)
            .then(() => {
                alert("Password reset email sent! Check your inbox.");
            })
            .catch(error => {
                alert(error.message);
            });
    }
}

// সাইন আপ এবং লগইন ফর্ম টগল করা
function toggleForm() {
    let title = document.getElementById("form-title");
    let signupForm = document.getElementById("signup-form");
    let loginForm = document.getElementById("login-form");
    let toggleText = document.getElementById("toggle-text");

    if (signupForm.style.display === "none") {
        signupForm.style.display = "block";
        loginForm.style.display = "none";
        title.innerText = "Sign Up";
        toggleText.innerHTML = `Already have an account? <a href="#" onclick="toggleForm()">Login</a>`;
    } else {
        signupForm.style.display = "none";
        loginForm.style.display = "block";
        title.innerText = "Login";
        toggleText.innerHTML = `Don't have an account? <a href="#" onclick="toggleForm()">Sign Up</a>`;
    }
            }
