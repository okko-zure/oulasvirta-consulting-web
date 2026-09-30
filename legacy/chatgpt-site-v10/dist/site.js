'use strict';
// The embedded review surface can restrict in-frame page navigation. A user click
// opens the selected locale as a full page; standalone browsing stays in one tab.
if (window.self !== window.top) {
  document.querySelectorAll('.language-switch a, .writing-section a[href^="/"]').forEach((link) => {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
}
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#main-nav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 1201px)').addEventListener('change', closeMenu);

const contactForm = document.querySelector('#yhteydenottolomake');
if (contactForm) {
  const topicSelect = contactForm.querySelector('[name="topic"]');
  const formStatus = contactForm.querySelector('.form-status');
  const emailFallback = contactForm.querySelector('.form-email-fallback');
  // Native form submission lets FormSubmit perform its supported anti-spam
  // verification. Do not proxy it through the Worker or disable reCAPTCHA.
  contactForm.target = window.self !== window.top ? '_blank' : '_self';

  function updateFormFields() {
    const fields = Object.fromEntries(new FormData(contactForm));
    const subject = 'Oulasvirta Consulting – ' + topicSelect.options[topicSelect.selectedIndex].text;
    const body = [fields.name, fields.company, fields.email, '', fields.message].filter((line) => line != null).join('\n');
    emailFallback.href = 'mailto:katja@oulasvirta.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    contactForm.elements.namedItem('_subject').value = subject;
    contactForm.elements.namedItem('language').value = document.documentElement.lang.toUpperCase();
    // Every language uses the same form identity and returns to its own page.
    contactForm.elements.namedItem('_url').value = window.location.origin + '/';
    const next = new URL(window.location.pathname, window.location.origin);
    next.searchParams.set('contact', 'sent');
    next.hash = 'yhteydenottolomake';
    contactForm.elements.namedItem('_next').value = next.href;
  }
  function setFormStatus(state) {
    formStatus.dataset.state = state;
    formStatus.textContent = contactForm.querySelector(`[data-form-message="${state}"]`).textContent;
  }
  contactForm.addEventListener('input', updateFormFields);
  document.querySelectorAll('a[href="#yhteydenottolomake"]').forEach((link) => {
    link.addEventListener('click', () => {
      if (link.dataset.contactTopic) topicSelect.value = link.dataset.contactTopic;
      updateFormFields();
      contactForm.querySelector('h3').focus({ preventScroll: true });
    });
  });
  contactForm.addEventListener('submit', (event) => {
    if (contactForm.elements.namedItem('_honey').value) {
      event.preventDefault();
      setFormStatus('invalid');
      return;
    }
    updateFormFields();
    // Keep the browser's POST intact. A click is never treated as email delivery.
    // Preserve the text if the confirmation page opens in a separate tab.
    setFormStatus('pending');
  });
  updateFormFields();
  const current = new URL(window.location.href);
  if (current.searchParams.get('contact') === 'sent') {
    setFormStatus('success');
    formStatus.focus({ preventScroll: true });
    current.searchParams.delete('contact');
    window.history.replaceState(null, '', current.pathname + current.search + current.hash);
  }
}
