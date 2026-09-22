```javascript
/* =========================
   TYPING EFFECT
========================= */

const roles = [
    "Java Full Stack Developer",
    "Frontend Developer",
    "Java Developer",
    "Web Developer"
];

const typingText = document.querySelector(".home-content h3 span");

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (isDeleting) {

        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;
    }


    /* Finished typing */

    if (!isDeleting && characterIndex === currentRole.length) {

        isDeleting = true;

        setTimeout(typeEffect, 1500);

        return;
    }


    /* Finished deleting */

    if (isDeleting && characterIndex === 0) {

        isDeleting = false;

        roleIndex++;

        if (roleIndex === roles.length) {
            roleIndex = 0;
        }
    }


    const speed = isDeleting ? 50 : 100;

    setTimeout(typeEffect, speed);
}


typeEffect();



/* =========================
   NAVBAR ACTIVE LINK
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});



/* =========================
   SCROLL REVEAL EFFECT
========================= */

const revealElements = document.querySelectorAll(
    ".about-content, .about-image, .skill-box, .project-card, .contact-info, .contact-form"
);


function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.querySelector(".contact-form");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting me! I will get back to you soon."
    );

    contactForm.reset();

});



/* =========================
   DOWNLOAD CV BUTTON
========================= */

const downloadButton =
    document.querySelector(".home-buttons .btn:nth-child(2)");


downloadButton.addEventListener("click", function(event) {

    event.preventDefault();

    alert(
        "Resume download will be available soon!"
    );

});



/* =========================
   PROJECT BUTTON
========================= */

const projectButtons =
    document.querySelectorAll(".project-card .btn");


projectButtons.forEach(button => {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        alert(
            "Project link will be added soon!"
        );

    });

});



/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
    "Welcome to Siva Sankar's Portfolio 🚀"
);
emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY"
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const button = contactForm.querySelector("button");

    button.textContent = "Sending...";
    button.disabled = true;

    emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        contactForm
    )
    .then(function (response) {

        console.log("SUCCESS!", response.status, response.text);

        alert("Message sent successfully! ✅");

        contactForm.reset();

        button.textContent = "Send Message";
        button.disabled = false;

    })
    .catch(function (error) {

        console.log("FAILED...", error);

        alert("Message failed to send ❌ Check Console");

        button.textContent = "Send Message";
        button.disabled = false;

    });

});
