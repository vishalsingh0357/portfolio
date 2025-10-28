// Function to handle active navigation link on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        // Adjust offset based on your header height to ensure the link becomes active 
        // when the section hits the top of the viewport.
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // Remove 'active' class from all links
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            // Add 'active' class to the current section's link
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
};

// Smooth scrolling for all internal anchor links (e.g., clicking on a nav link)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// NOTE: The form submission logic is handled by Formspree via the HTML 'action' attribute, 
// so no custom JavaScript is required here for the contact form to work.