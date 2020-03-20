const btnMenu = document.querySelector('.btn-menu');
const container = document.querySelector('.container');
const listMenu = document.querySelector('.list-menu');
const listMenuLi = document.querySelectorAll('.list-menu > li');


btnMenu.addEventListener('mouseover', () => {
    listMenu.classList.add('menu-part')
});

btnMenu.addEventListener('click', () => {
    if(listMenu.classList.contains('menu-open')){
        listMenu.classList.remove('menu-part')
        listMenu.classList.remove('menu-open')
    } else {
        listMenu.classList.add('menu-open')
    }
});

btnMenu.addEventListener('mouseout', () => {
    listMenu.classList.remove('menu-part')
});

listMenuLi.forEach(item => {
    item.addEventListener('mouseover', () => {
        listMenu.classList.remove('menu-part')
        listMenu.classList.add('menu-open')
    })
});

container.addEventListener('click', e => {
    event.stopImmediatePropagation()
    if(e.target === container){
        listMenu.classList.remove('menu-open')
        listMenu.classList.remove('menu-part')
    }
});