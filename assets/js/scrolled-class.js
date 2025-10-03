const scrollThreshold = 100;

const myElement = document.getElementById('__scrolled_class'); 
const myElement2 = document.getElementById('__scrolled_classTwo'); 

window.addEventListener('scroll', () => {
  const isScrolled = window.scrollY > scrollThreshold;

  if (myElement) {
    myElement.classList.toggle('__scrolled_class', isScrolled);
  }

  if (myElement2) {
    myElement2.classList.toggle('__scrolled_classTwo', isScrolled);
  }
});

