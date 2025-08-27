
document.getElementById("contactForm").addEventListener("submit", (e) => {
  if (e.target.name.value === "" || e.target.email.value === ""  || e.target.message.value === "") {
    alert("Please fill in all fields");
  }
  else {
    alert("Form submitted!");
  }
    
});

