import { SwiperOptions } from "swiper";

export const swipeConfig_coverFlow :SwiperOptions = {
  loop: false,
  speed: 1000,
  autoplay: false,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slideToClickedSlide: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 400,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

export const newCoverflow_swiper:SwiperOptions = {

        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
}