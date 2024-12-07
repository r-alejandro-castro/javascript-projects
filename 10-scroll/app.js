// ********** set date ************
// select span

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  const container = linksContainer;
  container.style.height = container.getBoundingClientRect().height === 0 ? `${links.getBoundingClientRect().height}px` : 0;
});

// ********** fixed navbar ************

const navbar = document.querySelector("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    navbar.classList.toggle("fixed-nav", scrollHeight > navbar.getBoundingClientRect().height);
    topLink.classList.toggle("show-link", scrollHeight > 500);
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const position = element.offsetTop - navHeight + (navHeight > 82 ? linksContainer.getBoundingClientRect().height : 0);

    window.scrollTo({ top: position, behavior: 'smooth' });
    linksContainer.style.height = 0; // Cerrar contenedor de enlaces
  });
});
// calculate heights