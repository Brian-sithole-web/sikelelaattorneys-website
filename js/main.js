var whatsAppNumber = "27647395430";

function showPage(pageId) {
  var pages = document.querySelectorAll(".page");
  var links = document.querySelectorAll(".site-nav a");

  pages.forEach(function (page) {
    page.classList.toggle("active", page.id === pageId);
  });

  links.forEach(function (link) {
    link.classList.toggle("is-current", link.getAttribute("data-page") === pageId);
  });

  closeMenu();
  window.scrollTo(0, 0);
}

function toggleMenu() {
  var header = document.querySelector(".site-header");
  var isOpen = header.classList.toggle("menu-open");
  document.querySelector(".menu-button").setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function closeMenu() {
  document.querySelector(".site-header").classList.remove("menu-open");
  document.querySelector(".menu-button").setAttribute("aria-expanded", "false");
}

function sendWhatsAppMessage(event) {
  event.preventDefault();

  var message = "Good day Sikelela Attorneys. My name is " + document.getElementById("client-name").value
    + ". I am in " + document.getElementById("client-city").value
    + ". Phone: " + document.getElementById("client-phone").value
    + ". I need help with: " + document.getElementById("client-need").value
    + ". " + document.getElementById("client-message").value;

  window.open("https://wa.me/" + whatsAppNumber + "?text=" + encodeURIComponent(message), "_blank");
}

function startSite() {
  document.querySelectorAll("[data-page]").forEach(function (control) {
    control.addEventListener("click", function (event) {
      event.preventDefault();
      showPage(control.getAttribute("data-page"));
    });
  });

  document.querySelector(".menu-button").addEventListener("click", toggleMenu);
  document.querySelector(".consultation-form").addEventListener("submit", sendWhatsAppMessage);
}

document.addEventListener("DOMContentLoaded", startSite);
