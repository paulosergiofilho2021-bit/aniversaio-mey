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

const container = document.querySelector(".container");
const boxtMessage1 = document.querySelector(".text-message-1");
const images = document.querySelector(".images");
const messageKae = document.querySelector(".container-kae");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.transform = "translateX(0)";
      entry.target.style.opacity = "1";
    }
  });
});

observer.observe(container);
observer.observe(boxtMessage1);
observer.observe(images);
observer.observe(messageKae);

const gift = document.querySelector(".gift");
const imgRosa = document.querySelector(".image-rosa");
gift.addEventListener("click", () => {
  gift.style.opacity = "0";
  imgRosa.style.opacity = "1";
});

let counter = 0;
let counterOpacity = 5;
const phraseHeart = document.querySelector(".phrase-heart");
const heart = document.querySelector(".heart");
const button1 = document.querySelector(".buttton-1");
const button2 = document.querySelector(".buttton-2");
const subBar = document.querySelector(".sub-bar");
const opacityCounter = document.querySelector(".opacity-counter");

button1.addEventListener("click", () => {
  if (counter < 100) {
    counterOpacity -= 1;
    counter += 20;
    subBar.style.height = `${counter}%`;
    opacityCounter.textContent = `${counter}%`;
    phraseHeart.style.filter = `blur(${counterOpacity}px)`;
    heart.style.filter = `blur(${counterOpacity}px)`;
  }
});

button2.addEventListener("click", () => {
  if (counter > 0) {
    counterOpacity += 1;
    counter -= 20;
    subBar.style.height = `${counter}%`;
    opacityCounter.textContent = `${counter}%`;
    phraseHeart.style.filter = `blur(${counterOpacity}px)`;
    heart.style.filter = `blur(${counterOpacity}px)`;
  }
});
console.log(counter)