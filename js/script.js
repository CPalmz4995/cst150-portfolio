// ========================================
// Smooth Navigation
// ========================================

// Select all navigation links that point to a section on the page
const navLinks = document.querySelectorAll('.nav-links a');

// Add a click event to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {

        // Stop the browser from instantly jumping to the section
        event.preventDefault();

        // Get the section ID from the link
        const targetId = this.getAttribute('href');

        // Find the matching section
        const targetSection = document.querySelector(targetId);

        // Smoothly scroll to the section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// ========================================
// Dynamic Project Cards
// ========================================

// Select the container where project cards will appear
const projectsContainer = document.querySelector('#projects-container');

// Loop through each project stored in data.js
projects.forEach(project => {

    // Create a new article element
    const projectCard = document.createElement('article');

    // Add the project-card CSS class
    projectCard.classList.add('project-card');

    // Create the technology tags
    const technologyTags = project.technologies
        .map(technology => `<span>${technology}</span>`)
        .join('');

    // Add the project information to the card
    projectCard.innerHTML = `
        ${project.image ? `
            <img
                src="${project.image}"
                alt="Screenshot of ${project.title}"
                class="project-image"
            >
        ` : ''}

        <h3>${project.title}</h3>

        <p>${project.description}</p>

        <div class="project-tags">
            ${technologyTags}
        </div>
    `;

    // Add the completed project card to the page
    projectsContainer.appendChild(projectCard);
});


// ========================================
// Contact Form
// ========================================

// Select the contact form and message area
const contactForm = document.querySelector('#contact-form');
const formMessage = document.querySelector('#form-message');

// Run this code when the form is submitted
contactForm.addEventListener('submit', function(event) {

    // Prevent the page from reloading
    event.preventDefault();

    // Get the values entered by the user
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    // Check that all fields contain information
    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Please complete all fields.';
        return;
    }

    // Display a confirmation message
    formMessage.textContent = `Thanks ${name}! Your message has been received.`;

    // Clear the form
    contactForm.reset();
});