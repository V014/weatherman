document.addEventListener("DOMContentLoaded", event=> {
  // Initialize Firebase
  const app = firebase.app();
});

// 1. FOR YOUR "SIGN IN" BUTTON (Blocks new users)
function googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            // Check if this is a brand new account
            if (result.additionalUserInfo.isNewUser) {
                alert("No account found with this Google profile. Please Sign Up first!");
                
                // Delete the automatically created auth account right away
                result.user.delete().then(() => {
                    firebase.auth().signOut();
                });
            } else {
                // Existing user! Send them through
                window.location.href = "dashboard.html";
            }
        })
        .catch(error => {
            console.error("Error during Google sign in:", error);
            alert("Failed to sign in.");
        });
}

// 2. FOR YOUR "SIGN UP" BUTTON (Only for creating new accounts)
function googleSignUp() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            // Check if they already had an account
            if (!result.additionalUserInfo.isNewUser) {
                alert("You already have an account! Logging you in automatically.");
                window.location.href = "dashboard.html";
            } else {
                // Successful brand new registration
                alert("Account created successfully!");
                window.location.href = "dashboard.html";
            }
        })
        .catch(error => {
            console.error("Error during Google sign up:", error);
            alert("Failed to sign up.");
        });
}