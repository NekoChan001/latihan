document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.navbar a');
  for (const link of links) {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Mencegah aksi default link
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          targetElement.scrollIntoView({ behavior: 'smooth' });
      });
  }
});
