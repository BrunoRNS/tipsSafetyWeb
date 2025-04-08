window.onload = function() {
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
      showSection(homeSection);
};
