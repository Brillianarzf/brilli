document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p><p>Address: ${address}</p>`;
});

let currentIndex = 0;
function showNextSlide() {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  const carousel = document.querySelector(".carousel");

  currentIndex = (currentIndex + 1) % totalSlides;
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds

function showVisitorName() {
  const visitorName = document.getElementById("visitorName").value;
  const visitorGreeting = document.getElementById("visitorGreeting");
  visitorGreeting.textContent = `Hello, ${visitorName}!`;

  // Hide the modal
  document.getElementById("nameModal").style.display = "none";
}

// Show the modal on page load
window.onload = function () {
  document.getElementById("nameModal").style.display = "block";
};
