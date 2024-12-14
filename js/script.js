// Initialize EmailJS
emailjs.init("jkUMwZvx9mb7WTwVZ");

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

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the form values
    const formData = new FormData(this);

    // Ensure these keys match EmailJS template variables
    const emailParams = {
        from_name: formData.get('name'),    // Matches 'from_name' in template
        from_email: formData.get('email'), // Matches 'from_email' in template
        message: formData.get('message'),  // Matches 'message' in template
        to_email: 'bomotfarmstockltd27@gmail.com' // Hardcoded business email
    };

    // Send the email using EmailJS
    emailjs.send("service_hgnbabc", "template_d5vu3vc", emailParams)
        .then(function (response) {
            alert("Message sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("contact-form").reset();
        }, function (error) {
            alert("Failed to send message. Please try again.");
            console.error("FAILED...", error);
        });
});

