const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Variables
const header2 = $('.header .header-2')
const loginForm = $('.login-form-container')


$('#search-btn').onclick = () => {
    $('.search-form').classList.toggle('active')
}

$('#login-btn').onclick = () => {
    loginForm.classList.toggle('active')
}

$('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active')
}

window.onscroll = () => {
    $('.search-form').classList.remove('active')

    if (window.scrollY > 80) header2.classList.add('active')
    else header2.classList.remove('active')
}

window.onload = () => {
    if (window.scrollY > 80) header2.classList.add('active')
    else header2.classList.remove('active')
}


// SLIDER
var swiper = new Swiper('.books-slider', {
    loop: true,
    centeredSliders: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
})

// FEATURED SECTION
var swiper = new Swiper('.featured-slider', {
    spaceBetween: 10,
    loop: true,
    centeredSliders: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        }
    }
})

// ARRIVAL SECTION
var swiper = new Swiper('.arrivals-slider', {
    spaceBetween: 10,
    loop: true,
    centeredSliders: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
})

// REVIEWS SECTION
var swiper = new Swiper('.reviews-slider', {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSliders: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
})