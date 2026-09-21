function emoji() {
  let p = document.createElement("p");
  document.body.appendChild(p);
  p.classList.add("emoji");
  let dot = document.createElement("label");
  document.body.appendChild(dot);
  dot.classList.add("dots");
  dot.textContent = ".";
  let emojis = ["🌹"];
  let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const tl = gsap.timeline();
  const tl2 = gsap.timeline();
  p.textContent = randomEmoji;
  tl.fromTo(
    p,
    {
      x: Math.random() * window.innerWidth,
      scale: Math.random() * 1.5 + 2,
    },
    {
      duration: Math.random() * 15 + 10,
      y: window.innerHeight + 200,
      rotate: Math.random() * 200 + 360,
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
  let randomHeight = Math.random() * innerHeight;
  let randomWidth = Math.random() * innerWidth;
  dot.style.left = `${randomWidth}px`;
  dot.style.top = `${randomHeight}px`;
  dot.style.opacity = "0";
  tl2.from(dot, {
    y: randomHeight,
    duration: Math.random()  * 10 + 10,
    ease: "none",
    opacity: 1
  })
  
  .to(dot,{
    y: -500,
  }, "<")

  .to(dot,
  {
    opacity: 0,
    onComplete: () => {
      dot.remove();
      },
    });
}
setInterval(emoji, 1000);

gsap.from(".title", {
  duration: 1,
  stagger: 0.1,
  opacity: 0,
  ease: "power1.inout",
  delay: 0.5,
});
gsap.from(".sub-title", {
  opacity: 0,
  duration: 4,
  delay: 3,
});

const audio = new Audio("../audio/audio.mp3");

audio.volume = 0.4;
audio.loop = true;
audio.play();