// ==========================================
// AROGYA SANJEEVANI - WEBSITE SCRIPT
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuClose = document.getElementById("menuClose");

// ------------------------------------------
// CURRENT YEAR
// ------------------------------------------

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// ------------------------------------------
// OPEN MOBILE MENU
// ------------------------------------------

menuBtn?.addEventListener("click", () => {
  mobileMenu?.classList.add("active");

  menuBtn.setAttribute("aria-expanded", "true");

  document.body.style.overflow = "hidden";
});

// ------------------------------------------
// CLOSE MOBILE MENU
// ------------------------------------------

menuClose?.addEventListener("click", () => {
  closeMobileMenu();
});

function closeMobileMenu() {
  mobileMenu?.classList.remove("active");

  menuBtn?.setAttribute("aria-expanded", "false");

  document.body.style.overflow = "";
}

// ------------------------------------------
// CLOSE MENU AFTER CLICKING LINK
// ------------------------------------------

document
  .querySelectorAll(".mobile-menu nav a")
  .forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

// ------------------------------------------
// ESC KEY
// ------------------------------------------

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileMenu();
  }
});

// ------------------------------------------
// PHONE NUMBER - ONLY 10 DIGITS
// ------------------------------------------

const phone = document.getElementById("phone");

phone?.addEventListener("input", () => {
  phone.value = phone.value
    .replace(/\D/g, "")
    .slice(0, 10);
});

// ------------------------------------------
// ACTIVE NAVIGATION
// ------------------------------------------

function setActiveNav() {
  const links = document.querySelectorAll(".mobile-menu nav a");

  let current = "home";

  document
    .querySelectorAll("main section[id]")
    .forEach((section) => {

      const sectionTop =
        section.getBoundingClientRect().top;

      if (sectionTop <= 150) {
        current = section.id;
      }
    });

  links.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
}

window.addEventListener(
  "scroll",
  setActiveNav,
  { passive: true }
);

// ------------------------------------------
// RESIZE
// ------------------------------------------

window.addEventListener("resize", () => {

  if (window.innerWidth >= 700) {
    closeMobileMenu();
  }

});