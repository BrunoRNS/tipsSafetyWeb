// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
  
  // Selecting various elements from the DOM by their IDs
  
  const themeToggle = document.getElementById("themeToggle"); // Button to toggle the theme
  const learnMoreBtn = document.getElementById("learnMoreBtn"); // Button to learn more
  const homeLink = document.getElementById("goHome"); // Link to go to the home section
  const aboutLink = document.getElementById("goAbout"); // Link to go to the about section
  const toTipsBtn = document.getElementById("toTips"); // Button to go to the tips section

  // Selecting the different sections of the page
  const homeSection = document.getElementById("home"); // Home section
  const sSection = document.getElementById("selectable"); // Selectable section
  const tipsSection = document.getElementById("tips"); // Tips section
  const aboutSection = document.getElementById("about"); // About section
  const body = document.body; // Reference to the body element

  // Array containing all sections for easy management
  const allSections = [homeSection, sSection, tipsSection, aboutSection];

  // Function to show a specific section and hide others
  const showSection = (sectionToShow) => {
    // Hide all sections
    allSections.forEach(section => {
      if (section) section.style.display = "none"; // Set display to none for each section
    });

    // Show the selected section
    if (sectionToShow) {
      sectionToShow.style.display = "block"; // Set display to block for the selected section
      sectionToShow.scrollIntoView({ behavior: "smooth" }); // Smoothly scroll to the selected section
    }
  };

  // Theme: Load user's preference from local storage
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode"); // Add dark mode class to body if the preference is dark
    themeToggle.textContent = "☀️"; // Change the theme toggle button text to indicate light mode
  }

  // Event listener for the theme toggle button
  themeToggle?.addEventListener("click", () => {
    body.classList.toggle("dark-mode"); // Toggle the dark mode class on the body
    const isDark = body.classList.contains("dark-mode"); // Check if dark mode is active
    themeToggle.textContent = isDark ? "☀️" : "🌙"; // Update button text based on the current theme
    localStorage.setItem("theme", isDark ? "dark" : "light"); // Save the current theme preference to local storage
  });

  // Event listener for the "Learn More" button
  learnMoreBtn?.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    showSection(sSection); // Show the selectable section
  });

  // Event listener for the "To Tips" button
  toTipsBtn?.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    showSection(tipsSection); // Show the tips section
  });

  // Event listener for the "Go Home" link
  homeLink?.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    showSection(homeSection); // Show the home section
  });

  // Event listener for the "Go About" link
  aboutLink?.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    showSection(aboutSection); // Show the about section
  });

  // Initially show the home section when the page loads
  showSection(homeSection);
});
