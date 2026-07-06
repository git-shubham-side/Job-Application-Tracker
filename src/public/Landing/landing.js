// Initialize Lucide Icons on the page
lucide.createIcons();

// // Add interaction to the Get Started button
// document.addEventListener("DOMContentLoaded", () => {
//   const getStartedBtn = document.getElementById("get-started-btn");

//   getStartedBtn.addEventListener("click", () => {
//     // In a real application, this would redirect to the registration page
//     alert("Redirecting to the JobDeck registration page...");
//   });
// });

//Function to redirect page to Signup on Line no : 78
function redirectPage() {
  window.location.href = "/api/v1/signup";
}
