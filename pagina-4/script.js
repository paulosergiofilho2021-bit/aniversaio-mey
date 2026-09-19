function emoji() {
  let p = document.createElement("p");
  document.body.appendChild(p);
  p.classList.add("emoji");
  let emojis = ["❤️", "🌸", "💐", "🎉", "🎁"];
  let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const tl = gsap.timeline();
  p.textContent = randomEmoji;
  tl.fromTo(
    p,
    {
      x: Math.random() * window.innerWidth,
      scale: Math.random() * 1.5 + 2,
    },
    {
      duration: Math.random() * 10 + 10,
      y: window.innerHeight + 200,
      rotate: 360,
      ease: "none",
    },
  ).to(p, {
    scale: 0,
    opacity: 0,
    ease: "none",
    onComplete: () => {
      p.remove();
    },
  });
}
setInterval(emoji, 800);

const video1 = document.querySelector(".video-1");
const video2 = document.querySelector(".video-2");

video1.addEventListener("click", () => {
  if (video1.paused) {
    video1.play();
    video2.pause();
  };
});

video2.setAttribute("click", () => {
  if(video2.paused){
    video2.play();
    video1.pause();
  };
});
