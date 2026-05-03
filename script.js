const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop:true,
  
  autoplay:{
    delay:2000,
    disableoninteraction:false,
  },
   navigation: {
  nextEl: ".mySwiper .swiper-button-next",
  prevEl: ".mySwiper .swiper-button-prev",
},
pagination: {
    el: ".mySwiper .swiper-pagination", // ✅ scoped
    clickable: true,
  },
});

 