/*========== MENU TOOGLE ==========*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/* MENAMPILKAN MENU SAAT TOGGLE DI KLIK */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* MENYEMBUNYKAN MENU SAAT TOGGLE DI KLIK*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* MENYEMBUNYIKAN MENU SAAT LINK DI KLIK */
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  /*INI ADALAH UNTUK MEMBUAT PADA LIST MENU APABULA DI KLIK MAKA MENGHAPUS CLASS SHOW-MENU SEPERTI PADA MENU TOGGLE */
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*MEMBUAT BACKGROUND HEADER MENJADI BLUR JIKA DI SCROLL*/
const blurHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

// MENGIRIM EMAIL
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault(); // Memperbaiki kesalahan penulisan "preventDefault"
  // serviceID - TemplateID - #form - PublicKey
  emailjs
    .sendForm(
      "service_8sb5v23",
      "template_25nnqbm",
      "#contact-form",
      "CamMHHiZ-Pp_2VJNK"
    )
    .then(
      () => {
        // Menampilkan pesan terkirim
        contactMessage.textContent = "Message sent successfully 😀";
        // Menghapus pesan setelah lima detik
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
        // Membersihkan field input
        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message not sent(Terjadi Error) 😌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/* MENAMPILKAN SCROLL UP */
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  //Menambah dan menghapus class show scroll
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/* AKTIF LINK */
const sections = document.querySelectorAll("section[id]");

const scrollAktive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollAktive);

/* SCROLL REVEAL */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: 400,
  //reset true // animatoins repeat
});

sr.reveal(".home__data, .experience, .skills, .contact__contaiter");
sr.reveal(".home__img", { delay: 600 });
sr.reveal(".home__scroll", { delay: 800 });
sr.reveal(".work__card, .services__card", { interval: 100 });
sr.reveal(".about__content", { origin: "right" });
sr.reveal(".about__img", { origin: "left" });
