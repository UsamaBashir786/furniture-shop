const scrollThreshold = 60;

const myElement = document.getElementById("scrolled-class");
const myElement2 = document.getElementById("mega-dropdown");

window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY > scrollThreshold;

    if (myElement) {
        myElement.classList.toggle("scrolled-class", isScrolled);
    }
    if (myElement2) {
        myElement2.classList.toggle("css-on-scroll", isScrolled);
    }
});
