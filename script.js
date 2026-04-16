// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// TYPE EFFECT
const roles = [
  "Software Engineer",
  "AI/ML Specialist",
  "Full Stack Developer",
  "System Designer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function typeEffect() {
  const element = document.getElementById("dynamic-text");

  if (!element) return;

  current = roles[i];

  if (!isDeleting) {
    element.textContent = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    element.textContent = current.substring(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, 80);
}

typeEffect();