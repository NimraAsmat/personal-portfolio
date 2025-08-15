const text = ["<span class='frontend'>Frontend Developer</span>", "<span class='designer'>Web Designer</span>"];
let i = 0, j = 0;
let isDeleting = false;
const typed = document.getElementById("typed-text");

function typeEffect() {
  const currentText = text[i];
  const plainText = currentText.replace(/<[^>]+>/g, "");
  if (!isDeleting) {
    typed.innerHTML = currentText.replace(plainText, plainText.substring(0, j++));
    if (j > plainText.length) isDeleting = true;
  } else {
    typed.innerHTML = currentText.replace(plainText, plainText.substring(0, j--));
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }
  setTimeout(typeEffect, 120);
}
typeEffect();

// highlight Nimra Asmat
document.addEventListener("DOMContentLoaded", () => {
  const homeSection = document.getElementById("home");
  homeSection.style.display = "flex";
  homeSection.style.flexDirection = "column";
  homeSection.style.justifyContent = "center";
  homeSection.style.alignItems = "center";
  homeSection.style.minHeight = "100vh";

  const homeHeading = document.querySelector("#home h2");
  homeHeading.innerHTML = homeHeading.innerHTML.replace(
    /Nimra Asmat/i,
    "<span class='highlight-name'>Nimra Asmat</span>"
  );

  // add introductory paragraph
  const paragraph = document.createElement("p");
  paragraph.textContent = "I am a passionate individual who enjoys creating beautiful, user-friendly websites and continuously learning new technologies.";
  paragraph.classList.add("intro-paragraph");
  const resumeBtn = document.querySelector(".resume-btn");
  resumeBtn.insertAdjacentElement("beforebegin", paragraph);

  // add social icons with clickable links
  const socialContainer = document.createElement("div");
  socialContainer.classList.add("social-links");
  socialContainer.innerHTML =`
    <a href="https://www.linkedin.com/in/nimra-asmat-428698369" target="_blank" class="social-placeholder linkedin">in</a>
    <a href="https://www.instagram.com" target="_blank" class="social-placeholder instagram">IG</a>
    <a href="https://www.facebook.com" target="_blank" class="social-placeholder facebook">f</a>
 ` ;
  resumeBtn.insertAdjacentElement("beforebegin", socialContainer);
});

// contact Form Validation
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formStatus.style.color = "red";
    formStatus.textContent = "Please fill out all fields.";
  } else if (!email.includes("@") || !email.includes(".")) {
    formStatus.style.color = "red";
    formStatus.textContent = "Please enter a valid email.";
  } else {
    formStatus.style.color = "#00bcd4";
    formStatus.textContent = "Message sent successfully!";
    form.reset();

    // auto-hide message after 2 seconds
    setTimeout(() => {
      formStatus.textContent = "";
    }, 2000);
  }
});



// scroll to top button
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// dark mode toggle
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// profile image animation 
const profileImg = document.querySelector("#home img");
profileImg.classList.add("animated-profile");

// enlarge font size of typed text
typed.style.fontSize = "1.8rem";
typed.style.fontWeight = "bold";

// additional styling for name highlight
typed.classList.add("animated-text");


const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

fadeElements.forEach(el => observer.observe(el)); 

function showOverlay(clickedCard) {
  const allCards = document.querySelectorAll('.project-card');

  // Remove 'active' class from all other cards
  allCards.forEach(card => {
    if (card !== clickedCard) {
      card.classList.remove('active');
    }
  });


  // toggle 'active' class on the clicked card
  clickedCard.classList.toggle('active');
}



   document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById('burgerMenu');
    const navLinks = document.getElementById('navLinks');

    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });
