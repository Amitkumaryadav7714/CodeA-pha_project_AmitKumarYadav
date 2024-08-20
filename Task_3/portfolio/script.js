document.addEventListener("DOMContentLoaded", function() {
    // Function to add 'section-visible' class when section is in view
    const observerOptions = {
        threshold: 0.2 // Trigger animation when 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target); // Remove observer after it's been triggered
            }
        });
    }, observerOptions);

    // Target all sections that should be animated
    const sections = document.querySelectorAll('.about-section, .skills-section, .resume-section, .contact-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const contactIcons = document.querySelectorAll('.contact-icon');

    contactIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            if (icon.href) {
                window.open(icon.href, '_blank');
            }
        });
    });
});
