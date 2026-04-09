const refs = {
  openMenuBtn: document.querySelector("[data-menu-open]"),
  closeMenuBtn: document.querySelector("[data-menu-close]"),
  menu: document.querySelector("[data-menu]"),
  orderServiceBtn: document.querySelector(".hero .button"),
  backdrop: document.querySelector(".backdrop"),
  modal: document.querySelector(".modal"),
  closeModalBtn: document.querySelector(".modal-close"),
};

function openMenu() {
  refs.menu.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  refs.menu.classList.remove("is-open");
  document.body.style.overflow = "";
}

function openModal() {
  refs.backdrop.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  refs.backdrop.classList.remove("is-open");
  document.body.style.overflow = "";
}

if (refs.openMenuBtn && refs.closeMenuBtn && refs.menu) {
  refs.openMenuBtn.addEventListener("click", openMenu);
  refs.closeMenuBtn.addEventListener("click", closeMenu);

  refs.menu.addEventListener("click", (event) => {
    if (event.target === refs.menu) {
      closeMenu();
    }
  });
}

if (refs.orderServiceBtn && refs.backdrop && refs.closeModalBtn) {
  refs.orderServiceBtn.addEventListener("click", (event) => {
    event.preventDefault();
    openModal();
  });

  refs.closeModalBtn.addEventListener("click", closeModal);

  refs.backdrop.addEventListener("click", (event) => {
    if (event.target === refs.backdrop) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeModal();
  }
});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Form submitted");

    contactForm.reset();
    closeModal();
  });
}

const subscriptionForm = document.querySelector(".subscription-form");

if (subscriptionForm) {
  subscriptionForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("You added our list");

    subscriptionForm.reset();
  });
}
