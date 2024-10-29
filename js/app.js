function doFirst() {
  let hero = document.querySelector(".hero");
  let animation = document.querySelector(".intro-animation");

  const timeLine = gsap.timeline({
    onStart: disableScroll,
    onComplete: () => {
      // 在動畫結束後淡出 intro-animation
      gsap.to(animation, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          animation.style.pointerEvents = "none"; // 禁止再點到開場動畫物件
          animation.style.display = "none"; // 隱藏開場動畫
        },
      });
      enableScroll();
    },
  });

  timeLine.from(hero, { opacity: 0, duration: 2, ease: "power2.in" }).to(
    hero,
    {
      rotation: 1080,
      duration: 2.5,
      ease: "power2.inOut",
    },
    "-=0.5"
  );
}

// 禁用滾動
function disableScroll() {
  document.body.style.overflow = "hidden";
}

// 啟用滾動
function enableScroll() {
  document.body.style.overflow = "auto";
}

window.addEventListener("load", doFirst);
