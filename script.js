// Modal Elements
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close-btn");

// Show Modal
document.querySelectorAll(".info-btn").forEach(button => {
  button.addEventListener("click", () => {
    modalText.textContent = button.getAttribute("data-info");
    modal.style.display = "flex";
  });
});

// Close Modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close Modal on Outside Click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
