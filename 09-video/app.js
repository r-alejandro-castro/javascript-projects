const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", () => {
  btn.classList.toggle("slide");
  btn.classList.contains("slide") ? video.pause() : video.play();
});

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});