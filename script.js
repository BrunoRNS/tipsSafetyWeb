document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  const homeLink = document.getElementById("goHome");
  const aboutLink = document.getElementById("goAbout");
  const toTipsBtn = document.getElementById("toTips");

  const homeSection = document.getElementById("home");
  const sSection = document.getElementById("selectable");
  const tipsSection = document.getElementById("tips");
  const aboutSection = document.getElementById("about");
  const body = document.body;

  const allSections = [homeSection, sSection, tipsSection, aboutSection];

  const showSection = (sectionToShow) => {
    allSections.forEach(section => {
      if (section) section.style.display = "none";
    });

    if (sectionToShow) {
      sectionToShow.style.display = "block";
      sectionToShow.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  }

  themeToggle?.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  learnMoreBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(sSection);
  });

  toTipsBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(tipsSection);
  });

  homeLink?.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(homeSection);
  });

  aboutLink?.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(aboutSection);
  });

 
  showSection(homeSection);
});
