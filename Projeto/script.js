gsap.from(".subline", {
    opacity: 0,
    width: 0,
    duration: 3.5,
    delay: 1.3
});
const tl = gsap.timeline();
tl.from(".container", {
    y: 150,
    duration: 1,
    opacity: 0,
    stagger: 0.1,
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