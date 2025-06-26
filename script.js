// ===== Typing Animation =====
const roles = [
  "Frontend Developer",
  "JavaScript Enthusiast",
  "Web Intern at CodeSpark"
];
let roleIndex = 0;
let charIndex = 0;
const typingText = document.querySelector(".typing-text");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingText.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// ===== Theme Toggle =====
const toggleBtn = document.getElementById("toggle-theme");
const themeIcon = document.getElementById("theme-icon");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeIcon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
});

// ===== Dummy Form Submit =====
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been received.");
});






