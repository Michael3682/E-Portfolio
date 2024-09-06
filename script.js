const animate1 = () => {
    var tl = gsap.timeline()

    tl.from("nav", { y: -100, duration: .7, delay: .5 })
    tl.from("nav h1", { opacity: 0, delay: .5, duration: .5, stagger: .15 })
    tl.from("nav a", { y: -30, opacity: 0, duration: .5, stagger: .15 })
    tl.from("nav button", { x: 50, opacity: 0 })
}
const buttonsHoverAnimation = () => {
    const buttons = gsap.utils.toArray(".btn");
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

    tl.to("nav button", { backgroundColor: "transparent", color: "#fdca6f", duration: .3 })
    tl2.to(".parts #btn2", { backgroundColor: "transparent", color: "#fdca6f" })
    tl3.to("#icon", { duration: .2, yPercent: -150, ease: "power2.in" });
    tl3.set("#icon", { yPercent: 150 });
    tl3.to("#icon", { duration: .2, yPercent: 0 });

    btn.addEventListener("mouseenter", () => tl.play())
    btn.addEventListener("mouseleave", () => tl.reverse())
    btn2.addEventListener("mouseenter", () => { tl2.play(), tl3.play() })
    btn2.addEventListener("mouseleave", () => { tl2.reverse(), tl3.reverse() })
    btn2.addEventListener("click", () => document.querySelector("#section1").scrollIntoView({ behavior: 'smooth'}))
}

const home = document.querySelector("#home")
home.addEventListener("click", () => document.querySelector("body").scrollIntoView({ behavior: 'smooth' }))


animate1()
buttonsHoverAnimation()