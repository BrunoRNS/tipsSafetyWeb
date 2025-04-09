window.onload = function() {

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
