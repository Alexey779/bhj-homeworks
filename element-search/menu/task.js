const menu = document.getElementsByClassName('menu__link');
const menuSub = document.getElementsByClassName('menu_main'); 

let menuAct = document.getElementsByClassName("menu_active");

for ( let i = 0; i < menu.length; i++){
    menu.item(i).onclick = menuActTog;
}

function menuActTog() {
    const element = this;
    const parent = element.parentElement;
    const subMenu = parent.querySelector("ul.menu");

    if(subMenu) {
        subMenu.classList.toggle("menu_active");
        return false;
    }
}
