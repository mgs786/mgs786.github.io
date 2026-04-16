function scrollTopPage() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

const roles = [
  "Software Engineer",
  "AI/ML Specialist",
  "Full Stack Developer"
];

let i = 0, j = 0;
let current = "", isDeleting = false;

function typeEffect() {
  const element = document.getElementById("dynamic-text");
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