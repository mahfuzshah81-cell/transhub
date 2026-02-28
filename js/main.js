window.addEventListener('load', function () {
  var preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
  document.body.style.overflow = 'visible';
});

/**
 * Nav Toggler Mobile
 */
const toggleNav = document.querySelector('.toggle-wrap');
toggleNav.addEventListener('click', function () {
  this.classList.toggle('active');
});


document.querySelectorAll('.navbar li.nav-item a').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1),
      targetElement = document.getElementById(targetId),
      headerHeight = 48,
      targetPosition = targetElement.offsetTop - headerHeight,
      startPosition = window.pageYOffset,
      distance = targetPosition - startPosition,
      duration = 1200;
    let start = null;
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start,
        progressRate = Math.min(progress / duration, 1),
        ease = easeInOutExpo(progressRate);
      window.scrollTo(0, startPosition + distance * ease);
      if (progress < duration) window.requestAnimationFrame(step);
    });
    function easeInOutExpo(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
    }
  });
});

/*-------------------------------
   Typed Js
   ---------------------------------*/
var typed = new Typed('#element', {
  strings: ['Air Fright.', 'Cargo Services.', 'Transportation.','Warehousing.', 'Road Fright.','Logistics Companies.'],
  typeSpeed: 100,
  loop: true,
  smartBackspace: true,
});

document.addEventListener("DOMContentLoaded", function () {
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5, // Adjust the speed for a smooth effect
    imgPosition: "50% 50%", // Ensures background image stays centered
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const lenis = new Lenis({
    smooth: true,    // Enables smooth scrolling
    lerp: 0.1,       // Lower values = smoother (0.1 - 0.2 recommended)
    infinite: false, // Set to true for continuous scrolling
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});


AOS.init({
  duration: 1000, // Animation duration (1s)
  easing: 'ease-in-out', // Smooth easing
  once: true, // Animates once per scroll
});
