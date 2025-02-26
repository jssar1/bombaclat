// JavaScript for opening and closing the booking modal
const modal = document.getElementById("bookingModal");
const bookNowButton = document.getElementById("book-now");
const closeButton = document.querySelector(".close");

// When the "Book Now" button is clicked, show the modal
bookNowButton.addEventListener("click", () => {
  modal.style.display = "block";
});

// When the "X" button (close button) is clicked, close the modal
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// When the user clicks anywhere outside the modal, close the modal
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Form submission for booking
const bookingForm = document.getElementById("booking-form");
bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const checkinDate = document.getElementById("checkin-date").value;
  const checkoutDate = document.getElementById("checkout-date").value;

  // Simple validation to check if all fields are filled
  if (name && email && checkinDate && checkoutDate) {
    alert(`Booking successful for ${name} from ${checkinDate} to ${checkoutDate}`);
    modal.style.display = "none"; // Closes the modal after submission
  } else {
    alert("Please fill out all the fields.");
  }
});

// Play Audio for About Us section
const aboutAudioButton = document.getElementById('play-about-audio');
const aboutAudio = document.getElementById('about-audio');

aboutAudioButton.addEventListener('click', () => {
  if (aboutAudio.paused) {
    aboutAudio.play(); // Play the audio if it's paused
    aboutAudioButton.textContent = 'Pause About Us Audio'; // Change button text
  } else {
    aboutAudio.pause(); // Pause the audio if it's playing
    aboutAudioButton.textContent = 'Play About Us Audio'; // Change button text
  }
});

// Play Audio for Facility sections
const facilityButtons = document.querySelectorAll('.play-facility-audio');
facilityButtons.forEach((button) => {
  const audio = button.nextElementSibling; // Get the <audio> element that follows the button

  button.addEventListener('click', () => {
    if (audio.paused) {
      audio.play(); // Play the audio if it's paused
      button.textContent = 'Pause Audio'; // Change button text
    } else {
      audio.pause(); // Pause the audio if it's playing
      button.textContent = 'Play Audio'; // Change button text
    }
  });
});
// Animated Navigation Menu
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navMenu.style.transition = 'transform 0.5s ease-in-out';
});
// Smooth Scrolling Effect
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

