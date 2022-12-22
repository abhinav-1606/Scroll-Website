const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

//Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling

const highlightMenu = async () => {
    const elem =  document.querySelector('.highlight')
    const homeMenu =  document.querySelector('#home-page')
    const aboutMenu =  document.querySelector('#about-page')
    const servicesMenu =  document.querySelector('#services-page')
    let scrollPos = window.scrollY
    console.log(scrollPos)

    // adds "highlight" class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return;
    } else if(window.innerWidth > 960 && scrollPos > 600  && scrollPos < 1600){
        aboutMenu.classList.add('highlight')
        servicesMenu.classList.remove('highlight')
        return;
    } else if(window.innerWidth > 960 && scrollPos > 1600 && scrollPos < 2345){
        aboutMenu.classList.remove('highlight')
        servicesMenu.classList.add('highlight')
        return;
    }
    if(elem && window.innerWidth >960 && scrollPos < 600 || elem){
        elem.classList.remove('highlight')
    }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);