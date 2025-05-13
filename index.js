document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("animateBtn");

  // Retrieve user preference from localStorage
  const userPreference = localStorage.getItem("buttonClicked");
  if (userPreference) {
    alert("Welcome back! You clicked the button last time.");
  }

  // Add click event to button
  button.addEventListener("click", () => {
    button.style.transform = "rotate(360deg)";
    button.style.transition = "transform 0.5s ease";

    // Store user preference in localStorage
    localStorage.setItem("buttonClicked", "true");
  });
});