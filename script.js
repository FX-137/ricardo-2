
// Ícones
feather.replace();

// Ano
document.getElementById('year').textContent = new Date().getFullYear();

// Modais
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    const body = document.body;
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        body.style.overflow = 'hidden';
    } else {
        modal.classList.add('hidden');
        body.style.overflow = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
// Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
// Add animations to sections when they come into view
    const animateOnScroll = () => {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.classList.add('fade-in');
            }
        });
    };

    // Run once on load and then on scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});
