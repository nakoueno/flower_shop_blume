// const swiper = new Swiper(".swiper", {
//   loop: true,
//   slidesPerView: 4, // PCなら3枚表示
//   speed: 4000,
//   autoplay: {
//     delay: 0,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     768: {        // PC
//       slidesPerView: 4,
//     },
//   },
// });




const swiper = new Swiper(".swiper", {
  loop: true, // ループ有効
  slidesPerView: 2, // 一度に表示する枚数
  speed: 8000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay: 0, // 途切れなくループ
  },
});