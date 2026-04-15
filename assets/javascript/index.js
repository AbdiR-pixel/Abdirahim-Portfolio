// Simple AOS-like scroll animation
function initAOS() {
  const els = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = parseInt(e.target.dataset.aosDelay || 0);
        setTimeout(() => e.target.classList.add('aos-animate'), delay);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 60) nav.style.padding = '0.6rem 0';
  else nav.style.padding = '1rem 0';
});

// Counter animation
function animateCounter(el, end, suffix='') {
  let start = 0;
  const step = end / 60;
  const timer = setInterval(() => {
    start = Math.min(start + step, end);
    el.textContent = Math.round(start) + suffix;
    if (start >= end) clearInterval(timer);
  }, 25);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const end = parseInt(e.target.dataset.count);
        const suffix = e.target.dataset.suffix || '';
        animateCounter(e.target, end, suffix);
        observer.unobserve(e.target);
      }
    });
  });
  counters.forEach(c => observer.observe(c));
}

// Form submit
 
// Validate form fields
function validateForm(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
  
  let isValid = true;
  let errors = [];
 
  // Check each required field
  inputs.forEach(input => {
    const value = input.value.trim(); // Remove extra spaces
    
    // Check if field is empty
    if (!value) {
      isValid = false;
      errors.push(`${input.name} is required`);
      input.classList.add('error-field'); // Add red border
    } else {
      input.classList.remove('error-field'); // Remove red border
    }
 
    // Special validation for email fields
    if (input.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errors.push('Email is not valid');
        input.classList.add('error-field');
      }
    }
  });
 
  return { isValid, errors };
}
 
// Display error messages
function showErrors(errors, containerId = 'error-container') {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
 
  if (errors.length > 0) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    
    // Create list of errors
    const errorList = errors.map(error => `<li>${error}</li>`).join('');
    errorDiv.innerHTML = `
      <strong>❌ Errors:</strong>
      <ul>${errorList}</ul>
    `;
    
    container.appendChild(errorDiv);
  }
}
 
// Display success message
function showSuccess(message = 'Form sent successfully!', containerId = 'error-container') {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message';
  successDiv.innerHTML = `<strong>✅ ${message}</strong>`;
  
  container.appendChild(successDiv);
 
  // Remove message after 4 seconds
  setTimeout(() => {
    successDiv.remove();
  }, 4000);
}
 
// Handle form submission
function submitForm(formId, containerId = 'error-container', submitButtonId = null) {
  return function(event) {
    event.preventDefault(); // Stop normal form submission
 
    // Validate the form
    const { isValid, errors } = validateForm(formId);
 
    // If there are errors, show them
    if (!isValid) {
      showErrors(errors, containerId);
      return;
    }
 
    // No errors - clear error container and show success
    document.getElementById(containerId).innerHTML = '';
    showSuccess('Message sent successfully!', containerId);
 
    // Animate the button if ID provided
    if (submitButtonId) {
      const btn = document.getElementById(submitButtonId);
      if (btn) {
        handleSubmit(btn);
      }
    }
 
    // Reset form after 2 seconds
    setTimeout(() => {
      document.getElementById(formId).reset();
      // Remove error styling from all fields
      document.querySelectorAll('.error-field').forEach(field => {
        field.classList.remove('error-field');
      });
    }, 2000);
  };
}
 
// Keep your original handleSubmit function - it's already perfect!
function handleSubmit(btn) {
  const original = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
  btn.style.background = '#27ae60';
  setTimeout(() => { btn.innerHTML = original; btn.style.background = ''; }, 3000);
}
 
// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // YOUR EXISTING CODE - Keep this
  initAOS();
  initCounters();
 
  // NEW: Attach validation to form submission
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', submitForm(
      'contactForm',           // Form ID
      'error-container',       // Message container ID
      'submitBtn'              // Button ID
    ));
  }
 
  // NEW: Remove error styling when user starts typing
  document.querySelectorAll('input[required], textarea[required], select[required]').forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('error-field');
    });
  });
});