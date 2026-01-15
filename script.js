// ===================== NAVBAR SCROLL =====================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if(window.scrollY > 50) navbar.classList.add('scrolled'); 
  else navbar.classList.remove('scrolled');

  // Highlight nav links
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + 150;
  sections.forEach(sec => {
    const id = sec.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if(sec.offsetTop <= scrollPos && (sec.offsetTop + sec.offsetHeight) > scrollPos) link.classList.add('active-link');
    else link.classList.remove('active-link');
  });
});

// ===================== SMOOTH SCROLL =====================
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({behavior: 'smooth'});
  });
});

// ===================== FADE-IN SECTIONS =====================
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('active');
  });
}, {threshold: 0.2});
sections.forEach(sec => observer.observe(sec));

// ===================== PROJECT CARDS HOVER =====================
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-10px) scale(1.03)');
  card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0) scale(1)');
});

// ===================== SOCIAL BUTTONS =====================
document.querySelectorAll('.social-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => { btn.style.transform='scale(1.1)'; btn.style.opacity='0.85'; });
  btn.addEventListener('mouseleave', () => { btn.style.transform='scale(1)'; btn.style.opacity='1'; });
});

// ===================== CONTACT FORM WITH EMAILJS =====================
emailjs.init('YOUR_PUBLIC_KEY'); // <-- Replace with your EmailJS Public Key
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  const formData = {
    from_name: contactForm.querySelector('input[type="text"]').value,
    from_email: contactForm.querySelector('input[type="email"]').value,
    message: contactForm.querySelector('textarea').value
  };
  emailjs.send('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',formData)
    .then(()=>{ alert('Message sent successfully! ✅'); contactForm.reset(); })
    .catch(err=>{ console.error('EmailJS error:', err); alert('Oops! Something went wrong. ❌'); });
});

// ===================== HERO BUTTONS INTERACTIONS =====================
document.querySelectorAll('.hero-buttons a').forEach(btn => {
  btn.addEventListener('mouseenter', ()=>btn.style.transform='scale(1.05)');
  btn.addEventListener('mouseleave', ()=>btn.style.transform='scale(1)');
});
