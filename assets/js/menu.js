const checkbox = document.querySelector('.burger');
const nav = document.querySelector('nav ul');
const main = document.querySelector('main');

/**
 * Detecting click outside the element
 * @param {*} checkbox 
 * @param {*} nav 
 */
const detectClickOutSide = (checkbox, nav) => {
    document.addEventListener('click', (e) => {
        e.stopPropagation();
        let targetElement = e.target;
    
        if(targetElement != nav && targetElement != checkbox) {
            uncheckAndRemoveClass(checkbox, nav)
        } 
    
    });
};

/**
 * Uncheck and remove the class of element
 * @param {*} checkbox 
 * @param {*} nav 
 */
const uncheckAndRemoveClass = (checkbox, nav) => {
    checkbox.checked = false;
    nav.classList.remove('responsive-menu');
}


/* Add or remove class responsive */
checkbox.addEventListener('change', (e) => {
    if(e.target.checked) {
        nav.classList.add('responsive-menu');
        detectClickOutSide(checkbox, nav);

    } else {
        nav.classList.remove('responsive-menu');
    }
});

/* Uncheck the checkbox input and hide responsive menu when a link is clicked */
const linkMenu = nav.querySelectorAll('li a');

for(let i = 0; i < linkMenu.length; i++) {
    linkMenu[i].addEventListener('click', () => {
        uncheckAndRemoveClass(checkbox, nav);
    });
}