
gsap.from (".container", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
});
function emoji () {
    let p = document.createElement("p");
    document.body.appendChild(p);
    p.classList.add("emoji");
    let emojis = ["❤️", "🌸","💐","🎉","🎁"];
    let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    p.textContent = randomEmoji;
    const tl = gsap.timeline();
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
        })
}
setInterval(emoji, 800);
gsap.from(".subline", {
    opacity: 0,
    width: 0,
    duration: 3.5,
    delay: 1.5
})