// Preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".preloader").classList.add("hide");
  }, 400);
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
      $('.navbar').addClass('header_scrolled');
    } else {
      $('.navbar').removeClass('header_scrolled');
    }
  });
});

// Nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

// Navbar sector
window.addEventListener('scroll', () => {
  document.querySelector('.back_to_top').classList.toggle('open', window.scrollY > 100);

});
// Back to top 
const backBtn = document.querySelector('.back_to_top');
backBtn.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});


// Navbar
navbar.forEach(function (a) {
  a.addEventListener('click', function () {
    navCollapse.classList.remove('show');
  })
});

// Swiper JS

var swiper = new Swiper(".clientSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  },
});




// Project count

var options = {
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
  prefix: '',
  suffix: ''
};

var counts = [];

$('.statvalue').each(function () {
  var num = $(this).attr('numx');
  var nuen = $(this).text();
  if (nuen === "") {
    nuen = 0;
  }
  counts.push(new CountUp(this, nuen, num, 0, 3, options));
});

var waypoint1 = new Waypoint({
  element: document.getElementById("projects"),
  handler: function (direction) {
    if (direction == "up") {
      for (var i = 0; i < counts.length; i++) {
        counts[i].reset();
      }
    } else {
      for (var i = 0; i < counts.length; i++) {
        counts[i].start();
      }
    }
  },
  offset: "50%"
});