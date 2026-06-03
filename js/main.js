// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('bg-white', 'shadow-md', 'py-2');
        nav.classList.remove('py-4');
    } else {
        nav.classList.remove('bg-white', 'shadow-md', 'py-2');
        nav.classList.add('py-4');
    }
});

// Mobile Menu Toggle
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => {
    menu.classList.toggle('translate-x-full');
    btn.innerHTML = menu.classList.contains('translate-x-full') ? '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>';
});

// Typing Effect
const textElement = document.getElementById('typing-text');
const lang = localStorage.getItem('preferredLang') || 'fr';
const words = translations[lang].titles;
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Reveal on Scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    type();
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

