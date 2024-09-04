const animate1 = () => {
    var tl = gsap.timeline()

    tl.from("nav h1, a", {
        y: -30,
        opacity: 0,
        delay: .3,
        duration: .6,
        stagger: .15
    })
    tl.from("button", {
        x: 50,
        opacity: 0
    })
}

const buttonsHoverAnimation = () => {
    const buttons = gsap.utils.toArray(".btn");
    buttons.forEach((item) => {
        let element = item.querySelector("span");
        var tl = gsap.timeline({ paused: true })

        tl.to(element, {
            backgroundColor: "#8b8b837a",
            duration: .2,
        })

        item.addEventListener("mouseenter", () => tl.play())
        item.addEventListener("mouseleave", () => tl.reverse())
    });

    const btn = document.querySelector("#btn")
    var tl = gsap.timeline({ paused: true })

    tl.to("nav button", {
        backgroundColor: "transparent",
        color: "#4e342e"
    })

    btn.addEventListener("mouseenter", () => tl.play())
    btn.addEventListener("mouseleave", () => tl.reverse())
}

const animate2 = () => {
    gsap.to(".content .img1", {
        x: -50,
        scrollTrigger: {
            trigger: ".landingPage",
            scroller: "body",
            scrub: 3,
            start: "top 0%",
            end: "top -200%",
            markers: true
        }
    })
    // gsap.to(".content .img2", {

    // })
    // gsap.to(".content .img3", {

    // })
}

buttonsHoverAnimation()
animate1()
animate2()