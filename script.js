const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const reservationForm = document.querySelector(".reservation-form");
const formMessage = document.querySelector(".form-message");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "关闭导航" : "打开导航");
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "打开导航");
    }
  });
}

if (reservationForm && formMessage) {
  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.classList.remove("is-error");

    if (!reservationForm.checkValidity()) {
      formMessage.textContent = "请先填写姓名、电话、日期和人数。";
      formMessage.classList.add("is-error");
      reservationForm.reportValidity();
      return;
    }

    formMessage.textContent = "预约请求已记录，我们会尽快与您确认。";
    reservationForm.reset();
  });
}
