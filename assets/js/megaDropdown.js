document.addEventListener("DOMContentLoaded", function () {
  const megaItems = document.querySelectorAll(".has-mega");
  const navItems = document.querySelector(".__nav_items");
  let closeTimeout;

  function closeAllDropdowns() {
    megaItems.forEach((item) => {
      const dropdown = item.querySelector(".mega-dropdown");
      if (dropdown) {
        dropdown.style.display = "none";
        dropdown.style.opacity = "0";
        dropdown.style.visibility = "hidden";
        dropdown.style.transform = "translateY(10px)";
      }
    });
  }

  function openDropdown(item) {
    const dropdown = item.querySelector(".mega-dropdown");
    if (dropdown) {
      dropdown.style.display = "grid";
      setTimeout(() => {
        dropdown.style.opacity = "1";
        dropdown.style.visibility = "visible";
        dropdown.style.transform = "translateY(0)";
      }, 10);
    }
  }

  function scheduleClose() {
    closeTimeout = setTimeout(() => {
      closeAllDropdowns();
    }, 200);
  }

  function cancelClose() {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }
  }

  megaItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      cancelClose();
      closeAllDropdowns();
      openDropdown(this);
    });

    item.addEventListener("mouseleave", function () {
      scheduleClose();
    });

    const dropdown = item.querySelector(".mega-dropdown");
    if (dropdown) {
      dropdown.addEventListener("mouseenter", function () {
        cancelClose();
      });

      dropdown.addEventListener("mouseleave", function () {
        scheduleClose();
      });
    }
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".__nav_items")) {
      closeAllDropdowns();
    }
  });

  let scrollTimeout;
  window.addEventListener("scroll", function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      closeAllDropdowns();
    }, 100);
  });
});

window.onscroll = function () {
  invertedsec();
};
function invertedsec() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("mega-dropdown").classList.add("__css_on-scroll");
  } else {
    document
      .getElementById("mega-dropdown")
      .classList.remove("__css_on-scroll");
  }

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("mega-vTwo").classList.add("__css_on-scroll");
  } else {
    document.getElementById("mega-vTwo").classList.remove("__css_on-scroll");
  }

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("mega-vThree").classList.add("__css_on-scroll");
  } else {
    document.getElementById("mega-vThree").classList.remove("__css_on-scroll");
  }

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("mega-vFour").classList.add("__css_on-scroll");
  } else {
    document.getElementById("mega-vFour").classList.remove("__css_on-scroll");
  }

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("mega-vFive").classList.add("__css_on-scroll");
  } else {
    document.getElementById("mega-vFive").classList.remove("__css_on-scroll");
  }

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("mega-vSix").classList.add("__css_on-scroll");
  } else {
    document.getElementById("mega-vSix").classList.remove("__css_on-scroll");
  }

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("mega-vSeven").classList.add("__css_on-scroll");
  } else {
    document.getElementById("mega-vSeven").classList.remove("__css_on-scroll");
  }
}
