
// Navbar
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


// input images

// header change image
function headerimg(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('header')
                .css("background-image",`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${e.target.result}')`);
                console.log(e.target.result);
                console.log(input.files);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

//  change image
function changeImg(input, imgClass) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(imgClass)
            .attr('src', e.target.result); 
        };

        reader.readAsDataURL(input.files[0]);
    }
}




