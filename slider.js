function doFirst() {
  new Swiper(".swiper", {
    speed: 2000, // 設置過渡動畫速度
    spaceBetween: 100, // 設置滑塊間距
    loop: true,
    autoplay: {
      delay: 2500,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

window.addEventListener("load", doFirst);
