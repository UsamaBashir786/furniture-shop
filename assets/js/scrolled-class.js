const scrollThreshold = 50;

const myElement = document.getElementById('scrolled-class'); 
const myElement2 = document.getElementById('scrolled-classTwo'); 

window.addEventListener('scroll', () => {
  const isScrolled = window.scrollY > scrollThreshold;

  if (myElement) {
    myElement.classList.toggle('scrolled-class', isScrolled);
  }

  if (myElement2) {
    myElement2.classList.toggle('scrolled-classTwo', isScrolled);
  }
});

