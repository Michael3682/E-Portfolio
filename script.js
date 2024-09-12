const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const animate1 = () => {
    var tl = gsap.timeline()

    tl.from("nav h1", {
        width: 0,
        delay: .3
    })
    tl.from("nav .button", {
        y: -30,
        opacity: 0,
        duration: .5,
        stagger: .1
    })
    tl.from("nav #btn", {
        x: 50,
        opacity: 0
    })
}
const animate2 = () => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#section1",
            scroller: "body",
            start: "top 50%",
            end: "top -5%",
            scrub: 1
        }
    })

    tl.from("#info1 h2, #info1 .info1, #info1 .info2, #info1 .info3", {
        opacity: 0,
        x: -50,
        stagger: .15
    })
}
const animate3 = () => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#section2",
            scroller: "body",
            start: "top 50%",
            end: "top -5%",
            scrub: 1
        }
    })

    tl.from("#info2 h2, #info2 .info1, #info2 .info2, #info2 .info3", {
        opacity: 0,
        x: 50,
        stagger: .15
    })
}
const animate4 = () => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#section3",
            scroller: "body",
            start: "top 50%",
            end: "top -5%",
            scrub: 1
        }
    })

    tl.from("#info3 h2, #info3 .info1, #info3 .info2, #info3 .info3", {
        opacity: 0,
        x: -50,
        stagger: .15
    })
}
const buttonsHoverAnimation = () => {
    const buttons = gsap.utils.toArray(".button");
    const btn = document.querySelector("#btn")
    const btn2 = document.querySelector("#btn2")

    var tl = gsap.timeline({ paused: true })
    var tl2 = gsap.timeline({ paused: true })
    var tl3 = gsap.timeline({ paused: true })

    buttons.forEach((item) => {
        let element = item.querySelector("span");
        var tl = gsap.timeline({ paused: true })
        tl.to(element, { backgroundColor: "#8f4c1299", duration: .15, })
        item.addEventListener("mouseenter", () => tl.play())
        item.addEventListener("mouseleave", () => tl.reverse())
    });

    tl.to("nav #btn", { backgroundColor: "transparent", color: "#fdca6f", duration: .3 })
    tl2.to(".parts #btn2", { backgroundColor: "transparent", color: "#fdca6f" })
    tl3.to("#icon", { duration: .2, yPercent: -150, ease: "power2.in" });
    tl3.set("#icon", { yPercent: 150 });
    tl3.to("#icon", { duration: .2, yPercent: 0 });

    btn.addEventListener("mouseenter", () => tl.play())
    btn.addEventListener("mouseleave", () => tl.reverse())
    btn2.addEventListener("mouseenter", () => { tl2.play(), tl3.play() })
    btn2.addEventListener("mouseleave", () => { tl2.reverse(), tl3.reverse() })
    btn2.addEventListener("click", () => {
        gsap.to(window, {
            duration: .1,
            scrollTo: "#section1"
        })
    })

    document.querySelectorAll("nav a").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            gsap.to(window, {
                duration: .1,
                scrollTo: {
                    y: "#section" + (index + 1)
                }
            });
        });
    });
}

const home = document.querySelector("#home")
home.addEventListener("click", () => {
    gsap.to(window, {
        duration: .1,
        scrollTo: "body",
    })
})

animate1()
animate2()
animate3()
animate4()
buttonsHoverAnimation()