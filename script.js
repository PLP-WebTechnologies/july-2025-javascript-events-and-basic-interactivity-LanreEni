// ===== Part 1: Event Handling (Light/Dark mode) =====
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

// ===== Part 2: Interactive Elements =====

// Counter Game
let count = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("increment").addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});
document.getElementById("decrement").addEventListener("click", () => {
  count--;
  counterDisplay.textContent = count;
});
document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
});

// FAQ Section (toggle answers)
const questions = document.querySelectorAll(".question");
questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ===== Part 3: Form Validation =====
const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear errors
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  document.getElementById("formMessage").textContent = "";

  let valid = true;

  // Validate name
  const name = document.getElementById("name").value.trim();
  if (name.length < 2) {
    document.getElementById("nameError").textContent =
      "Name must be at least 2 characters.";
    valid = false;
  }

  // Validate email with regex
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    valid = false;
  }

  // Validate password
  const password = document.getElementById("password").value;
  const passPattern = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
  if (!passPattern.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters, include a number and uppercase letter.";
    valid = false;
  }

  // Confirm password
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (confirmPassword !== password) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match.";
    valid = false;
  }

  // Final feedback
  if (valid) {
    document.getElementById("formMessage").textContent =
      "✅ Form submitted successfully!";
    document.getElementById("formMessage").style.color = "green";
    form.reset();
  } else {
    document.getElementById("formMessage").textContent =
      "❌ Please correct the errors and try again.";
    document.getElementById("formMessage").style.color = "red";
  }
});
