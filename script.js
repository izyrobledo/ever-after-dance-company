document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitButton = contactForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  formNote.textContent = 'Sending...';

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' }
    });

    if (response.ok) {
      formNote.textContent = "Thanks for reaching out! We'll get back to you soon.";
      contactForm.reset();
    } else {
      formNote.textContent = 'Something went wrong. Please email isabellarobledo3@gmail.com directly.';
    }
  } catch {
    formNote.textContent = 'Something went wrong. Please email isabellarobledo3@gmail.com directly.';
  } finally {
    submitButton.disabled = false;
  }
});
