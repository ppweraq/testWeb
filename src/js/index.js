import mobileNav from './modules/mobile-nav.js';

document.addEventListener('DOMContentLoaded', function() {
    
    const swiper = new Swiper('.slider', {
        navigation: {
          nextEl: '.swiper-button-right',
          prevEl: '.swiper-button-left',
        }
      });

      const faqs = document.querySelectorAll('.faq__item');

      faqs.forEach(faq => {
          faq.addEventListener('click', () => {
              faqs.forEach(otherFaq => {
                  if (otherFaq !== faq && otherFaq.classList.contains('active')) {
                      otherFaq.classList.remove('active');
                  }
              });
      
              faq.classList.toggle('active');
          });
      });

      const phoneInput = document.querySelector('.phone')
      const mailistButton = document.querySelector('.mailist__button')
      const mask = new IMask(phoneInput, {
        mask: '+{7}(000)-000-00-00'
      })
      mailistButton.addEventListener('click', buttonHandler)
      function buttonHandler (e) {
        e.preventDefault();
        console.log(mask.masked.unmaskedValue);
      }


});
mobileNav();
