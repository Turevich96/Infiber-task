function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overlow', 'hidden');
        } else {
            $('body').css('overlow', 'visible');
        }
    }
}

burgerMenu('.burger-menu');

// checkbox
let svg = document.querySelector('.check__on');
let svg2 = document.querySelector('.on2');
let svg3 = document.querySelector('.on3');
let svg4 = document.querySelector('.on4');
let svg5 = document.querySelector('.on5');
let svg6 = document.querySelector('.on6');
let svg7 = document.querySelector('.on7');
let svg8 = document.querySelector('.on8');
let svg9 = document.querySelector('.on9');
let svg10 = document.querySelector('.on10');
let svg11 = document.querySelector('.on11');
let svg12 = document.querySelector('.on12');
let svg13 = document.querySelector('.on13');
let svg14 = document.querySelector('.on14');
// console.log(svg)
$('#on').on('click', function () {
    if ($(this).is(':checked')) {
        svg.classList.add('block')
    } else {
        svg.classList.remove('block')
    }
});
$('#on2').on('click', function () {
    if ($(this).is(':checked')) {
        svg2.classList.add('block')
    } else {
        svg2.classList.remove('block')
    }
});
$('#on3').on('click', function () {
    if ($(this).is(':checked')) {
        svg3.classList.add('block')
    } else {
        svg3.classList.remove('block')
    }
});
$('#on4').on('click', function () {
    if ($(this).is(':checked')) {
        svg4.classList.add('block')
    } else {
        svg4.classList.remove('block')
    }
});
$('#on5').on('click', function () {
    if ($(this).is(':checked')) {
        svg5.classList.add('block')
    } else {
        svg5.classList.remove('block')
    }
});
$('#on6').on('click', function () {
    if ($(this).is(':checked')) {
        svg6.classList.add('block')
    } else {
        svg6.classList.remove('block')
    }
});
$('#on7').on('click', function () {
    if ($(this).is(':checked')) {
        svg7.classList.add('block')
    } else {
        svg7.classList.remove('block')
    }
});
$('#on8').on('click', function () {
    if ($(this).is(':checked')) {
        svg8.classList.add('block')
    } else {
        svg8.classList.remove('block')
    }
});
$('#on9').on('click', function () {
    if ($(this).is(':checked')) {
        svg9.classList.add('block')
    } else {
        svg9.classList.remove('block')
    }
});
$('#on10').on('click', function () {
    if ($(this).is(':checked')) {
        svg10.classList.add('block')
    } else {
        svg10.classList.remove('block')
    }
});
$('#on11').on('click', function () {
    if ($(this).is(':checked')) {
        svg11.classList.add('block')
    } else {
        svg11.classList.remove('block')
    }
});
$('#on12').on('click', function () {
    if ($(this).is(':checked')) {
        svg12.classList.add('block')
    } else {
        svg12.classList.remove('block')
    }
});
$('#on13').on('click', function () {
    if ($(this).is(':checked')) {
        svg13.classList.add('block')
    } else {
        svg13.classList.remove('block')
    }
});
$('#on14').on('click', function () {
    if ($(this).is(':checked')) {
        svg14.classList.add('block')
    } else {
        svg14.classList.remove('block')
    }
});
// slider 

$('#slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 5,
    prevArrow: "<img src='./assets/img/nav_l.png' class='prev' alt='1'>",
    nextArrow: "<img src='./assets/img/nav_r.png' class='next' alt='2'>",
});