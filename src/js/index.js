import mobileNav from "./modules/mobile-nav.js";
mobileNav();

document.addEventListener("DOMContentLoaded", function () {
  //swiper
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
      instance.on("slideChange", function (e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper(
    "(max-width: 630px)",
    ".news__content",
    {
      navigation: {
        nextEl: ".news-button-right",
        prevEl: ".news-button-left",
      },
    },
    someFunc
  );

  resizableSwiper(
    "all",
    ".slider",
    {
      navigation: {
        nextEl: ".swiper-button-right",
        prevEl: ".swiper-button-left",
      },
    },
    someFunc
  );

  //faqs
  const faqs = document.querySelectorAll(".faq__item");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faqs.forEach((otherFaq) => {
        if (otherFaq !== faq && otherFaq.classList.contains("active")) {
          otherFaq.classList.remove("active");
        }
      });

      faq.classList.toggle("active");
    });
  });
  //phonemask

  const phoneInputs = document.querySelectorAll(".phone");

  phoneInputs.forEach((phoneInput) => {
    const mask = new IMask(phoneInput, {
      mask: "+{7}(000)-000-00-00",
    });
  });

  const mailistButton = document.querySelector(".mailist__button");

  mailistButton.addEventListener("click", buttonHandler);

  function buttonHandler(e) {
    e.preventDefault();
    phoneInputs.forEach((phoneInput) => {
      console.log(phoneInput.value);
    });
  }

  //checbox

  const checkboxes = document.querySelectorAll(
    '.mailist__checkbox input[type="checkbox"]'
  );

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const isChecked = this.checked;
      const label = this.nextElementSibling;

      if (isChecked) {
        label.querySelector(".checkbox").classList.add("checked");
      } else {
        label.querySelector(".checkbox").classList.remove("checked");
      }
    });
  });

  //modal window
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal");

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });








  const mobileLinksParent = document.querySelectorAll('.mobile-links__parent-btn');
  
  mobileLinksParent.forEach(parent => {
    parent.addEventListener('click', function() {
      this.parentNode.classList.toggle('open');
      const siblings = this.parentNode.parentNode.children;
      for (let sibling of siblings) {
        if (sibling !== this.parentNode) {
          sibling.classList.remove('open');
        }
      }
    });
  });

  // mobile nav accardion

  const btns = document.querySelectorAll(".mobile-links__parent-btn");

  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      console.log("Click!");

      const content = btn.nextElementSibling;
      console.log(content);

      const isOpen = btn.classList.toggle("active");

      if (isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0px";
      }
    });
  });

  //header dropdown

  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(function (dropdown) {
    let timeout;
    dropdown.addEventListener("mouseenter", function () {
      const dropdownContent = this.querySelector(".dropdown-content");
      dropdownContent.style.display = "flex";
      dropdownContent.style.opacity = 1;

      if (timeout) clearTimeout(timeout);
    });

    dropdown.addEventListener("mouseleave", function () {
      const dropdownContent = this.querySelector(".dropdown-content");
      timeout = setTimeout(function () {
        dropdownContent.style.display = "none";
        dropdownContent.style.opacity = 0;
      }, 300);
    });
  });
});
