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

const next = document.querySelector("#next");
const previous = document.querySelector("#previous");
const subBar = document.querySelector(".sub-bar");
const buttons = document.querySelector(".buttons");
let counter = 0;
const image = document.querySelector(".image");
const containerLetter = document.querySelector(".container-letter");
const timer = true;

image.addEventListener("click", () => {
  buttons.style.opacity = "1";
  image.classList.add("hidden");
  containerLetter.style.opacity = "1";
  setTimeout(() => {
    image.style.display = "none";
  }, 1000);
});
next.addEventListener("click", () => {
  if (counter < 2) {
    const message = document.querySelectorAll(".message")[counter];
    counter++;
    message.classList.add("next");
    if (counter == 3) {
      counter--;
    }
  }
  subBar.style.width = `${counter * 50}%`;
  console.log(counter);
});
previous.addEventListener("click", () => {
    counter--;
    if (counter < 0) {
      counter++;
    }
    const message = document.querySelectorAll(".message")[counter];
    message.classList.remove("next");
    console.log(counter);
    subBar.style.width = `${counter * 50}%`;
});
