import mobileNav from './modules/mobile-nav.js';
mobileNav();

document.addEventListener('DOMContentLoaded', function() {
    
    function resizableSwiper(mediaQuery, selector, swiperOptions, callback) {
        const mediaQueryList = window.matchMedia(mediaQuery);
      
        const initSwiper = () => {
          if (mediaQueryList.matches) {

            new Swiper(selector, swiperOptions);

            if (callback) {
              callback();
            }
          }
        };
      

        initSwiper();
      

        mediaQueryList.addEventListener("change", initSwiper);
      }
      

      
    
      const someFunc = (instance) => {
        if (instance) {
          instance.on('slideChange', function (e) {
            console.log('*** mySwiper.activeIndex', instance.activeIndex);
          });
        }
      };
    
      resizableSwiper(
        '(max-width: 630px)',
        '.news__content',
        {
        navigation: {
          nextEl: '.news-button-right',
          prevEl: '.news-button-left',
        },
        },
        someFunc
      );

      resizableSwiper(
        'all',
        '.slider',
        {
        navigation: {
          nextEl: '.swiper-button-right',
          prevEl: '.swiper-button-left',
        },
        },
        someFunc
      );


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



// function accordion (){


	const btns = document.querySelectorAll('.mobile-links__parent-btn');

	btns.forEach(function(btn){
		btn.addEventListener('click', function(){
			console.log('Click!');

			const content = btn.nextElementSibling;
			console.log(content);

			const isOpen = btn.classList.toggle('active');

			if (isOpen) {
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				content.style.maxHeight = '0px';
			}

		})
	})

// }

});

