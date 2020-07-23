const buttonMenu = document.getElementById("button_menu");  // NAV BUTTON
const buttonSocial = document.getElementById("button_social");
const menuNav = document.getElementById("menu_nav");
const socialNav = document.getElementById("social_nav");
let openMenu = false;
let openSocialMenu = false;

const toggleMenu = () => {
    if (!openMenu) {
        buttonMenu.classList.add("button_menu_open");
        menuNav.classList.add("nav_open");
        menuNav.style.display = "flex";
        openMenu = true;
        socialNav.classList.remove("nav_open");
        socialNav.style.display = "none";
        openSocialMenu = false;
    } else {
        buttonMenu.classList.remove("button_menu_open");
        menuNav.classList.remove("nav_open");
        menuNav.style.display = "none";
        openMenu = false;
    }    
}

const toggleSocialMenu = () => {
    if (!openSocialMenu) {
        socialNav.classList.add("nav_open");
        socialNav.style.display = "flex";
        openSocialMenu = true;
        buttonMenu.classList.remove("button_menu_open");
        menuNav.classList.remove("nav_open");
        menuNav.style.display = "none";
        openMenu = false;
    } else {
        socialNav.classList.remove("nav_open");
        socialNav.style.display = "none";
        openSocialMenu = false;
    }
}

buttonMenu.addEventListener("click", toggleMenu);
buttonSocial.addEventListener("click", toggleSocialMenu);

let currentSlide = 0;  // SLIDER
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll('.dot')

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none"
    dots.forEach((dot, index) => {
      dot.classList.remove("active")
    })
  })
  slides[n].style.display = "block"
  dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", init(currentSlide))
const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
  init(currentSlide)
}

document.querySelector(".next").addEventListener('click', next);
document.querySelector(".prev").addEventListener('click', prev);


setInterval(() => {
  next()
}, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide)
    init(i)
    currentSlide = i
  })
});