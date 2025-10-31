// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {

    // Select the form and the fields
    const contactForm = document.getElementById('contactForm');
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');
    const userMessage = document.getElementById('userMessage');
    const formSuccess = document.getElementById('formSuccess');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Add a submit event listener to the form
    contactForm.addEventListener('submit', function (event) {
        
        // Prevent the form from submitting by default
        event.preventDefault();

        let isValid = true; // Assume the form is valid initially

        // Validate Name
        if (userName.value.trim() === '') 
            {
            userName.classList.add('is-invalid');
            isValid = false;
            } 
        else
            {
            userName.classList.remove('is-invalid');
            userName.classList.add('is-valid');
            }

        // Validate Email
        if (!emailRegex.test(userEmail.value.trim())) 
            {
            userEmail.classList.add('is-invalid');
            isValid = false;
            } 
        else 
            {
            userEmail.classList.remove('is-invalid');
            userEmail.classList.add('is-valid');
            }

        // Validate Message
        if (userMessage.value.trim() === '') 
            {
            userMessage.classList.add('is-invalid');
            isValid = false;
            } 
        else 
            {
            userMessage.classList.remove('is-invalid');
            userMessage.classList.add('is-valid');
            }

        // If all fields are valid
        if (isValid === true) 
            {            
            contactForm.classList.add('d-none'); // Hide the form
            formSuccess.classList.remove('d-none'); // Show success message
            }
    });
});