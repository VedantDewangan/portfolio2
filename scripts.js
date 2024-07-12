document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    const aboutMe = document.querySelector('.about-me');
    const skills = document.querySelector('.skills');
    const projects = document.querySelector('.projects');
    const contact = document.querySelector('.contact');

    window.addEventListener('scroll', function () {
        // Navbar opacity change on scroll
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Fade in elements on scroll
        fadeInOnScroll(hero);
        fadeInOnScroll(aboutMe);
        fadeInOnScroll(skills);
        fadeInOnScroll(projects);
        fadeInOnScroll(contact);
    });

    function fadeInOnScroll(element) {
        if (!element) return;

        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3; // Adjust as needed for timing

        if (elementPosition < screenPosition) {
            element.classList.add('show');
        }
    }

    // Dark mode toggle functionality
    const toggleModeBtn = document.querySelector('.toggle-mode-btn');
    const body = document.querySelector('body');

    toggleModeBtn.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});
