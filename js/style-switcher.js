/* ========== Toggle Style Switcher ========== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide Style Switcher On Scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

/* ========== Theme Color ========== */
const alternateStyle = document.querySelectorAll(".alternate-style");
const setActiveStyle = (color) => {
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
};

/* ========== Light and Dark Mode ========== */
const dayNigth = document.querySelector(".day-night");
dayNigth.addEventListener("click", () => {
  dayNigth.querySelector("i").classList.toggle("fa-sun");
  dayNigth.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNigth.querySelector("i").classList.add("fa-sun");
  } else {
    dayNigth.querySelector("i").classList.add("fa-moon");
  }
});
