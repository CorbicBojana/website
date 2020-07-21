const buttonMenu = document.getElementById("button_menu");
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