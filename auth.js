// Firebase configuration and initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
                  apiKey: "AIzaSyDDi9sVa1vCnz_SUoXfcgHU1lcAahGBf_U",
    authDomain: "tttd-ace9f.firebaseapp.com",
    projectId: "tttd-ace9f",
    storageBucket: "tttd-ace9f.firebasestorage.app",
    messagingSenderId: "852747713147",
    appId: "1:852747713147:web:a0327c36d89eb9fccd80de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Email/Password Sign In
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User logged in successfully
            console.log("User logged in:", userCredential.user);
            // Redirect to dashboard or home page
            window.location.href = 'dashboard.html'; 
        })
        .catch((error) => {
            console.error("Error logging in:", error.message);
            alert("Error: " + error.message);
        });
});

// Google Sign-In
function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("User logged in with Google:", result.user);
            // Redirect to dashboard or home page
            window.location.href = 'dashboard.html'; 
        })
        .catch((error) => {
            console.error("Error during Google login:", error.message);
            alert("Error: " + error.message);
        });
}

// Create Account with Email/Password
document.getElementById('createAccountForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User created successfully
            console.log("User created:", userCredential.user);
            // Redirect to login page after successful registration
            window.location.href = 'login.html'; 
        })
        .catch((error) => {
            console.error("Error creating user:", error.message);
            alert("Error: " + error.message);
        });
});
