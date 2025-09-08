// Typing Effect for Title

const text = "Anu Portfolio";

let i = 0;

function typeEffect() {

  if (i < text.length) {

    document.getElementById("typing-text").innerHTML += text.charAt(i);

    i++;

    setTimeout(typeEffect, 100);

  }

}

window.onload = typeEffect;

// Smooth Scroll for Navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({

      behavior: "smooth"

    });

  });

});

// Contact Form Alert

document.getElementById("contactForm").addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Message sent successfully! Thank you for contacting.");

  this.reset();

});