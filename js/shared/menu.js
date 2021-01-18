function openCloseMobileMenu() {
    var navMenu = document.getElementById('navigation-menu');
    var menuIcon = document.getElementById('icn-menu');
    if (navMenu) {
        navMenu.classList.toggle('mobile-menu-visible');
    }
    if(menuIcon) {
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-close');
    }
}