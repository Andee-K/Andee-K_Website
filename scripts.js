// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Reset form fields after submission
    document.getElementById('contactForm').reset();
});

$(document).ready(function() {
    $('.left-button').on('click', function() {
        console.log("Button was clicked!");
    });
});