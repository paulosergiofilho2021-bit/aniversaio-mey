gsap.from(".subline", {
    opacity: 0,
    width: 0,
    duration: 3.5,
    delay: 2.3
});
const tl = gsap.timeline();
tl.from(".container", {
    y: 150,
    duration: 0.8,
    opacity: 0,
    stagger: 0.1,
    delay: 1.6,
    ease: "back.out(2.5)"
})
function emoji () {
    let p = document.createElement("p");
    document.body.appendChild(p);
    p.classList.add("emoji");
    let emojis = ["❤️", "🌸","💐","🎉","🎁"];
    let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const tl = gsap.timeline();
    p.textContent = randomEmoji;
    tl.fromTo(p,
        {
            x: Math.random() * window.innerWidth,
            scale: Math.random() * 1.5 + 2,
        },
        {
            duration: (Math.random() * 10) + 10,
            y: window.innerHeight + 200,
            rotate: 360,
            ease: "none",
        }).
        to(p, {
            scale: 0,
            opacity: 0,
            ease: "none",
            onComplete: () => {
                p.remove();
            }
        });
};
setInterval(emoji, 800);
const containerLetter = document.querySelector(".container-lettter");
const boxMessage = document.querySelector(".box-message");
boxMessage.style.display = "none";
const phrase = document.querySelector("#phrase");
phrase.style.display = "none";
const anchor = document.querySelector(".anchor");
anchor.style.display = "none";

setTimeout(() => {containerLetter.addEventListener("mousedown", () => {
    boxMessage.style.display = "block";
    const letterEmoji = document.querySelector(".letter-emoji");
    letterEmoji.textContent = "♥️";
    phrase.style.display = "block";
    anchor.style.display = "block";
})}, 1000);


const preloader = document.querySelector(".preloader");
const progress = document.querySelector(".progress");
let porcentage = 0;
const counter = document.querySelector(".porcentage");

const loading = setInterval(() => {
        porcentage += 1;
        
        progress.style.width = `${porcentage}%`
        if(porcentage >= 100){
            clearInterval(loading);
        };
        counter.textContent = `Carregando: ${porcentage}%`
}, 10);


window.addEventListener("load", () => {
    setTimeout(() => {
        preloader.classList.add("hide");
    }, 1000);
});
preloader.addEventListener("transitionend", () => {
    preloader.style.display = "none";
})