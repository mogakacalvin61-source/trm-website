
// ==================================
// TRM WEBSITE - JAVASCRIPT
// ==================================


// 1. WELCOME MESSAGE FUNCTION

function welcomeMessage() {
    alert("Welcome to Teachers for Ruto Movement! Usawa ni Sawa, Mbele Pamoja!");
}


// 2. AUTOMATIC PHOTO SLIDESHOW

let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

function showNextSlide() {

    if (slides.length === 0) {
        return;
    }

    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
}

// Change photograph every 3 seconds
if (slides.length > 1) {
    setInterval(showNextSlide, 3000);
}


// 3. MOBILE NAVIGATION MENU

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    if (menu) {
        menu.classList.toggle("show");
    }
}


// 4. SMOOTH SCROLLING

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ==================================
// END OF TRM JAVASCRIPT
// ==================================
