const checkbox = document.querySelector('.burger');
const nav = document.querySelector('nav ul');
const main = document.querySelector('main');

/* Add or remove class responsive */
checkbox.addEventListener('change', (e) => {
    if(event.target.checked) {
        nav.classList.add('responsive-menu');
    } else {
        nav.classList.remove('responsive-menu');
    }
});

/* Uncheck the checkbox input and hide responsive menu */
const linkMenu = nav.querySelectorAll('li a');
for(let i = 0; i < linkMenu.length; i++) {
    linkMenu[i].addEventListener('click', () => {
        checkbox.checked = false;
        nav.classList.remove('responsive-menu');
    });
}