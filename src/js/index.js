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

      


    const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');
    // modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
});

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

}

// modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) { 
        closeModal();
    }
});





});
mobileNav();
