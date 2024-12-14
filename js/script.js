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

    // Collect form values correctly
    const formData = new FormData(this);

    // Correct the data object based on input names
    const emailParams = {
        from_name: formData.get('from_name'),   // Matches input name
        from_email: formData.get('from_email'), // Matches input name
        message: formData.get('message'),       // Matches input name
        to_email: 'bomotfarmstockltd27@gmail.com' // Business email
    };

    // Ensure EmailJS initialization
    emailjs.init("4fzZNrgeSvYfjd8iS");

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
