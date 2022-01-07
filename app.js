const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo');

// display  mobile menu
const mobilemenu =() => {
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')

};

menu.addEventListener('click', mobilemenu);

// show active menu when scrolling 

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home_page')
    const aboutMenu = document.querySelector('#about_page')
    const servicesMenu = document.querySelector('#services_page')

    let scrollPos = window.scrollY


    // add highlight class to my menu

    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        servicesMenu.classList.remove('highlight')
return
    }
    else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    }

    else if (window.innerWidth > 960 && scrollPos < 2345) {
        aboutMenu.classList.add('highlight')
       
        servicesMenu.classList.remove('highlight')
        return
    }

}


window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)


// close mobile menu when clicking on mobile menu
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menulinks.classList.remove('active')
    }
};

menulinks.addEventListener('click', hideMobileMenu);
menulinks.addEventListener('click', hideMobileMenu);