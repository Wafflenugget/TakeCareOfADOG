// Animation script: Fade in sections when they come into view
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
});
