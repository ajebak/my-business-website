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

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(this);

    // Prepare email parameters
    const emailParams = {
        from_name: formData.get('from_name'),
        from_email: formData.get('from_email'),
        message: formData.get('message')
    };

    // Send email
    emailjs.send("service_fzc07hp", "template_d5vu3vc", emailParams)
        .then((response) => {
            alert("Message sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
            this.reset();
        })
        .catch((error) => {
            alert("Failed to send message. Please try again.");
            console.error("FAILED...", error);
        });
});
