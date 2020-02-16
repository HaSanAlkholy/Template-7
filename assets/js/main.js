let navCollapse = false;

document.querySelector('.navbar-toggler').addEventListener('click', e => {

    if (!navCollapse) {
        document.querySelector('.navbar-collapse').classList.add('navbar-collabse-show');
        navCollapse = true;
    }
});


document.querySelector('.navbar-collapse').addEventListener('click', e => {
   if (navCollapse) {
    //   if(e.target.classList[0] !== 'nav-link'){
        document.querySelector('.navbar-collapse').classList.remove('navbar-collabse-show');
        navCollapse = false;
    //   }
   }
});

