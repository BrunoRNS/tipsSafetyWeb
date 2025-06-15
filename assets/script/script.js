// SectionManager: Handles showing/hiding sections
class SectionManager {
  constructor(sections) {
    this.sections = sections;
  }

  show(section) {
    this.sections.forEach(sec => {
      if (sec) sec.style.display = "none";
    });
    if (section) {
      section.style.display = "block";
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
}

// ThemeManager: Handles theme toggling and persistence
class ThemeManager {
  constructor(body, toggleBtn) {
    this.body = body;
    this.toggleBtn = toggleBtn;
    this.init();
  }

  init() {
    const theme = localStorage.getItem("theme");
    this.applyTheme(theme === "dark");
    this.toggleBtn?.addEventListener("click", () => this.toggleTheme());
  }

  applyTheme(isDark) {
    if (isDark) {
      this.body.classList.add("dark-mode");
      if (this.toggleBtn) this.toggleBtn.textContent = "☀️";
    } else {
      this.body.classList.remove("dark-mode");
      if (this.toggleBtn) this.toggleBtn.textContent = "🌙";
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  toggleTheme() {
    const isDark = !this.body.classList.contains("dark-mode");
    this.applyTheme(isDark);
  }
}

// EventBinder: Handles binding navigation events
class EventBinder {
  constructor(sectionManager, elements) {
    this.sectionManager = sectionManager;
    this.elements = elements;
    this.bindEvents();
  }

  bindEvents() {
    this.elements.learnMoreBtn?.addEventListener("click", e => {
      e.preventDefault();
      this.sectionManager.show(this.elements.sSection);
    });
    this.elements.toTipsBtn?.addEventListener("click", e => {
      e.preventDefault();
      this.sectionManager.show(this.elements.tipsSection);
    });
    this.elements.homeLink?.addEventListener("click", e => {
      e.preventDefault();
      this.sectionManager.show(this.elements.homeSection);
    });
    this.elements.aboutLink?.addEventListener("click", e => {
      e.preventDefault();
      this.sectionManager.show(this.elements.aboutSection);
    });
  }
}

// Main initialization
document.addEventListener("DOMContentLoaded", () => {
  const elements = {
    themeToggle: document.getElementById("themeToggle"),
    learnMoreBtn: document.getElementById("learnMoreBtn"),
    homeLink: document.getElementById("goHome"),
    aboutLink: document.getElementById("goAbout"),
    toTipsBtn: document.getElementById("toTips"),
    homeSection: document.getElementById("home"),
    sSection: document.getElementById("selectable"),
    tipsSection: document.getElementById("tips"),
    aboutSection: document.getElementById("about"),
    body: document.body,
  };

  const allSections = [
    elements.homeSection,
    elements.sSection,
    elements.tipsSection,
    elements.aboutSection,
  ];

  const sectionManager = new SectionManager(allSections);
  new ThemeManager(elements.body, elements.themeToggle);
  new EventBinder(sectionManager, elements);

  // Show home section by default
  sectionManager.show(elements.homeSection);
});
