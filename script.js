// Simple scroll & form behavior
document.getElementById("learnMore").addEventListener("click", () => {
  document.getElementById("songs").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for reaching out! We'll get back to you soon.");
  e.target.reset();
});
