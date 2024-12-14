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
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_hgnbabc", "template_d5vu3vc", this)
        .then(function (response) {
            alert("Message sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("contact-form").reset();
        }, function (error) {
            alert("Failed to send message. Please try again.");
            console.error("FAILED...", error);
        });
});


document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the form values
    const formData = new FormData(this);

    // Set the recipient email to your business email
    const businessEmail = 'bomotfarmstockltd27@gmail.com';
    formData.append('to_email', businessEmail);

    // Pass the form data for from_name and other fields dynamically
    formData.append('from_name', formData.get('name')); // Name from the form
    formData.append('email', formData.get('email')); // Email from the form
    formData.append('message', formData.get('message')); // Message from the form

    // Send the email using EmailJS
    emailjs.sendForm("service_hgnbabc", "template_d5vu3vc", formData)
        .then(function (response) {
            alert("Message sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("contact-form").reset();
        }, function (error) {
            alert("Failed to send message. Please try again.");
            console.error("FAILED...", error);
        });
});

