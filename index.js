const navToogle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToogle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu_visible");
});