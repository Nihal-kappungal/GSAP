//  Intro animation (runs once)
let intro = gsap.timeline({
    onComplete:startLoop
})

intro.from("header", {
    y: -100,
    duration: 0.5,
    delay: 1,
    opacity: 0,
})
.from(".middle", {
    scale: 0,
    rotate: 360,
    duration: 0.5,
})
.from(".left, .right", {
    y: -10,
    opacity: 0,
    duration: 0.3,
})
.from("li", {
    y: -10,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
})
.from(".content img", {
    opacity: 0,
    duration: 1,
})

// Infinite rotation (separate timeline)
function startLoop(){
    let loop = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.5
})

loop.to([".one", ".two", ".three", ".four"], {
    rotate: "+=360",
    duration: 1,
    stagger: 1
})
}
