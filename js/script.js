
window.addEventListener('DOMContentLoaded', (event) => {
  
  // swiper slider func 
  function initSlider() {

    new Swiper('.customer__slider', {
  
      spaceBetween: 30,
      slidesPerView: 1,
    
      navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      },
    
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 40
        }
      }
  
    
    });

  } 
  
  // runing number animation 
  function initNumberAnimation(num, elm, dellay, timer, stp) {
    function start() {

      const time = timer;
      const step = stp;

      let l = document.querySelector(elm);
      let n = 1;
      let t =Math.round(time / (num / step));
      let interval = setInterval(() => {
        n = n + step;
        if (n == num) {
          clearInterval(interval);
        }
        l.innerHTML = n + '+';
      },
      t);
    }
    setTimeout(start, dellay);
  }
  
  // menu func 
  function initMenu() {
    const logInGroup = document.querySelector('.nav__login');
    const navMenu = document.querySelector('.nav__menu');
    const togglerMenu = document.querySelector('.burger');

    togglerMenu.addEventListener('click', () => {
    
      togglerMenu.classList.toggle('active');
      navMenu.classList.toggle('active');
      logInGroup.classList.toggle('active');
    })
  }
  
  // Scroll Spy func
  function initScrollSpy() {
    const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
              document.querySelector(`.nav__link[href="#${id}"]`).classList.add('active');
            } else {
              document.querySelector(`.nav__link[href="#${id}"]`).classList.remove('active');
            }
          });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
          observer.observe(section);
    });
  }
  
  // tab func
  function initTab() {

    const footerTab = document.querySelector('.footer__info');
    footerTab.addEventListener('click', (event) => {

      let classCheck = event.target.parentElement.classList.contains('active');
      if (!window.innerWidth >= 768) return;
  
      if (event.target.tagName === 'H3') {
        footerTab.querySelectorAll('h3').forEach((item) => {item.parentElement.classList.remove('active')})
        classCheck ? event.target.parentElement.classList.remove('active') :
        event.target.parentElement.classList.add('active');
      }

    });
  }

  // Scroll animation
  function initAos() {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      
    
      offset: 100,
      delay: 0,
      duration: 600,
      easing: 'ease',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    
    });
  }

  // preloader on/off 
  function initLoader() {
    let preloader = document.querySelector('.preload');
    setTimeout(() => preloader.classList.add('preloadHide'), 1000);
  }

  // Initializes logic of a page.

  function init() {

    initLoader();
    initAos();
    initScrollSpy();
    initMenu();
    initSlider();
    initTab();
    initNumberAnimation(99, '.card__num--user', 2300, 2000, 1);
    initNumberAnimation(30, '.card__num--location', 2500, 1800, 1);
    initNumberAnimation(50, '.card__num--hosts', 2700, 1600, 1);

  }

  init()
});