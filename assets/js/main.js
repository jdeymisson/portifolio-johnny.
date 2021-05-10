const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.76);
    target.forEach((e) => {
       if ((windowTop) > e.offsetTop) {
            e.classList.add(animationClass);
       } else {
        e.classList.remove(animationClass);
       }
    })
}

window.addEventListener('scroll', () => {
    animeScroll();
});


const menu_btn = document.querySelector('.hamburger');
const menu_mobile = document.querySelector('.menu-mobile');

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('is-active');
    menu_mobile.classList.toggle('is-active');
});