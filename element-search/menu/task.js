const menu = document.getElementsByClassName('menu__link');
const menuSub = document.getElementsByClassName('menu_sub'); 
let menuArr = Array.from(menu);

let menuSubArr = Array.from(menuSub);

menuArr.forEach(element => {
     element.onclick = function(){    

        if(element.nextElementSibling.className === 'menu menu_sub menu_active' &&
        element.nextElementSibling.closest('.menu_main') === element.closest('.menu_main')){
            this.nextElementSibling.classList.remove('menu_active')
            return; 
        }else{
            menuSubArr.filter(item => item.closest('.menu_main') === element.closest('.menu_main')).forEach(point => point.className = 'menu menu_sub');
            element.nextElementSibling.className = 'menu menu_sub menu_active';
            return false;
        }
    }
}); 