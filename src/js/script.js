// menu

let overlay = document.getElementById('overlay');
let openMenu = document.getElementById('openMenu');
let mobileMenu = document.querySelector('.mobileMenu');

openMenu.addEventListener('click', function () {
  overlay.classList.add('active');
  mobileMenu.classList.add('active');
})
overlay.addEventListener('click', function () {
  overlay.classList.remove('active');
  mobileMenu.classList.remove('active');
})
// acordion

let acordionBtn = Array.from(document.getElementsByClassName('acordionBtn'));

acordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.parentElement.classList.toggle('active');
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})
// swiper

var services = new Swiper(".services", {
  slidesPerView: 2.1,
  spaceBetween: 50,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
     1300: {
      slidesPerView: 6,
    },
  },
  autoplay: {
    delay: 2000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
