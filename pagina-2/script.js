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

const container = document.querySelector(".container");
const after = document.querySelector("#after");
const before = document.querySelector("#before");
const counter = document.querySelector(".counter");
let counterNumber = 1
counter.textContent = `${counterNumber} /9`;

after.addEventListener("click", () => {
    container.scrollBy({
        left: 320,
        behavior: "smooth",
    });

    counterNumber++;
    
    if (counterNumber > 9){
        counterNumber = 9;
    };
    counter.textContent = `${counterNumber} /9`;
});
before.addEventListener("click", () => {
    container.scrollBy({
        left: -320,
        behavior: "smooth",
    });
    counterNumber--;
    
    if (counterNumber < 2){
        counterNumber = 1;
    };
    counter.textContent = `${counterNumber} /9`;
});