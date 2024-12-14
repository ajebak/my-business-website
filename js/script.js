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


// Ensure EmailJS is initialized
emailjs.init("GE8eROodzjpRsN9wH");

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Collect form values
    const formData = new FormData(this);

    // Prepare email parameters matching your template
    const emailParams = {
        from_name: formData.get('from_name'),
        from_email: formData.get('from_email'),
        message: formData.get('message')
    };

    // Send the email using EmailJS
    emailjs.send("service_ez3723h", "template_d5vu3vc", emailParams)
        .then(function (response) {
            alert("Message sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("contact-form").reset();
        }, function (error) {
            alert("Failed to send message. Please try again.");
            console.error("FAILED...", error);
        });
});
