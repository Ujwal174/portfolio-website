// Typing Animation (simple)
const text = "Hi, I'm Ujwal Kumar B R";
let index = 0;
const typingEl = document.getElementById('typingText');
function typeEffect() {
    if (!typingEl) return;
    if (index < text.length) {
        typingEl.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    } else {
        // cursor blink (optional)
        typingEl.innerHTML += '<span class="cursor">|</span>';
    }
}
typeEffect();

// Dark Mode Toggle
const darkToggle = document.getElementById('darkModeToggle');
darkToggle && darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // save preference
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// load preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 220) scrollTopBtn.style.display = 'block';
    else scrollTopBtn.style.display = 'none';
});
scrollTopBtn && scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
menuToggle && menuToggle.addEventListener('click', () => {
    if (!mobileNav) return;
    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
});

// Basic client-side form handling (prevents actual submit if formspree id not set)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const action = contactForm.getAttribute('action') || '';
        if (action.includes('{your_form_id}')) {
            e.preventDefault();
            alert('Please replace {your_form_id} in the form action with your Formspree form ID. See README.txt for instructions.');
        } else {
            // allow normal submit to Formspree
        }
    });
}
