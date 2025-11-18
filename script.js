// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar fica mais escura ao rolar
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(10,10,10,0.98)';
    navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
  } else {
    navbar.style.background = 'rgba(20,20,20,0.95)';
    navbar.style.boxShadow = 'none';
  }
});