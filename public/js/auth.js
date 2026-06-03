document.addEventListener("DOMContentLoaded", event=> {
  // Initialize Firebase
  const app = firebase.app();
});

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            // console.log("User Info:", user);
            // Redirect to the dashboard after successful login
            window.location.href = "dashboard.html";
        })
        .catch(error => {
            console.error("Error during Google login:", error);
            alert("Failed to log in with Google. Please try again.");
        });
} 