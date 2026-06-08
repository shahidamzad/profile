// Scroll reveal animations
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Mouse events for interactive elements
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
  });
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

document.querySelectorAll('.tag').forEach(tag => {
  tag.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.08)';
  });
  tag.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

document.querySelectorAll('h1').forEach(heading => {
  heading.addEventListener('mouseenter', function() {
    this.style.opacity = '0.9';
  });
  heading.addEventListener('mouseleave', function() {
    this.style.opacity = '1';
  });
});

document.querySelectorAll('.section-title').forEach(title => {
  title.addEventListener('mouseenter', function() {
    this.style.transform = 'translateX(8px)';
  });
  title.addEventListener('mouseleave', function() {
    this.style.transform = 'translateX(0)';
  });
});

document.querySelectorAll('.highlight-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.borderLeft = '3px solid var(--accent)';
    this.style.paddingLeft = '1.7rem';
  });
  item.addEventListener('mouseleave', function() {
    this.style.borderLeft = 'none';
    this.style.paddingLeft = '2rem';
  });
});