// Highlight input focus with only purple border (no glow)
document.querySelectorAll(".form-control").forEach(input => {
  input.addEventListener("focus", () => {
    input.style.borderColor = "purple";
    input.style.boxShadow = "none"; // no glow
  });
  input.addEventListener("blur", () => {
    input.style.borderColor = ""; // reset to default
  });
});

// DOB validation
const dobInput = document.getElementById("dob");
const dobError = document.getElementById("dobError");

document.getElementById("registrationForm").addEventListener("submit", function(event) {
  let dob = new Date(dobInput.value);
  let today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  let m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  if (isNaN(dob.getTime()) || age < 18) {
    event.preventDefault();
    dobInput.classList.add("is-invalid");
    dobError.style.display = "block";
  } else {
    dobInput.classList.remove("is-invalid");
    dobError.style.display = "none";
  }
});
