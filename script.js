function scrollTopPage() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

/* TYPEWRITER */
const roles = [
  "Software Engineer",
  "AI/ML Specialist",
  "Full Stack Developer"
];

let i = 0, j = 0;
let current = "", deleting = false;

function type() {
  const el = document.getElementById("dynamic-role");

  if (!deleting) {
    current = roles[i].substring(0, j++);
  } else {
    current = roles[i].substring(0, j--);
  }

  el.textContent = current;

  if (!deleting && j === roles[i].length) {
    deleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (deleting && j === 0) {
    deleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(type, deleting ? 50 : 100);
}

type();

/* PARALLAX */
window.addEventListener("scroll", () => {
  document.body.style.backgroundPositionY =
    window.scrollY * 0.3 + "px";
});