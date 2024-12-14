// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle the menu visibility when clicking the hamburger icon
document.getElementById('hamburger-icon').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});


// Initialize EmailJS
emailjs.init("GE8eROodzjpRsN9wH");

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.sendForm("service_gc94r0o", "template_d5vu3vc", this)
        .then(function (response) {
            alert("Message sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("contact-form").reset(); // Reset form after success
        }, function (error) {
            alert("Failed to send message. Please try again.");
            console.error("FAILED...", error);
        });
});
