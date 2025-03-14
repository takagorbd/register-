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
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Sign Up Successful!");
            window.location.href = "dashboard.html"; // সাইন আপ সফল হলে ড্যাশবোর্ডে পাঠাবে
        })
        .catch(error => {
            alert(error.message);
        });
}

// লগইন ফাংশন
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Login Successful!");
            window.location.href = "dashboard.html"; // লগইন সফল হলে ড্যাশবোর্ডে পাঠাবে
        })
        .catch(error => {
            alert(error.message);
        });
}

// সাইন আপ এবং লগইন ফর্ম টগল করা
function toggleForm() {
    let title = document.getElementById("form-title");
    let signupBtn = document.getElementById("signup-btn");
    let loginBtn = document.getElementById("login-btn");
    let toggleText = document.getElementById("toggle-text");

    if (signupBtn.style.display === "none") {
        signupBtn.style.display = "block";
        loginBtn.style.display = "none";
        title.innerText = "Sign Up";
        toggleText.innerHTML = `Already have an account? <a href="#" onclick="toggleForm()">Login</a>`;
    } else {
        signupBtn.style.display = "none";
        loginBtn.style.display = "block";
        title.innerText = "Login";
        toggleText.innerHTML = `Don't have an account? <a href="#" onclick="toggleForm()">Sign Up</a>`;
    }
  }
