function r(min, max) {
    return Math.random() * (max - min) + min;
}

confetti({
    angle: r(55, 125),
    spread: r(50, 70),
    particleCount: r(50, 100)
});

let i = 0;
setInterval(function(){
    confetti({
        angle: i,
        spread: r(50, 70),
        particleCount: r(50, 100)
    });
    i += 10;
    i = i % 360;
}, 2000)