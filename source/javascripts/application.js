document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('close-menu').addEventListener('click', toggleMenu)
  document.getElementById('open-menu').addEventListener('click', toggleMenu)

  function toggleMenu (){
    document.getElementById('menu-mobile').classList.toggle('menu-mobile-visible')
  }
  
  // Smooth scroll on click
  document.querySelectorAll('.scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {  
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
});
