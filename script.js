const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const navAnimations = () => {
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
const Section1TextAnimation = () => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#section1",
            scroller: "body",
            start: "top 50%",
            end: "top -5%",
            scrub: 1
        }
    })

    tl.from("#info1 h2, #info1 .info1, #info1 .info2", {
        opacity: 0,
        x: -50,
        stagger: .15
    })
}
const Section2TextAnimation = () => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#section2",
            scroller: "body",
            start: "top 50%",
            end: "top -5%",
            scrub: 1
        }
    })

    tl.from("#info2 h2, #info2 .info1, #info2 .info2", {
        opacity: 0,
        x: 50,
        stagger: .15
    })
}
const Section3TextAnimation = () => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#section3",
            scroller: "body",
            start: "top 50%",
            end: "top -5%",
            scrub: 1
        }
    })

    tl.from("#info3 h2, #info3 .info1, #info3 .info2", {
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
const scrollToHome = () => {
    const home = document.querySelector("#home")
    home.addEventListener("click", () => {
        gsap.to(window, {
            duration: .1,
            scrollTo: "body",
        })
    })
}
const Section1ImageAnimations = () => {
    const imgContainer = document.querySelector("#imageContainer1")
    var tl = gsap.timeline()

    tl.from(".imageInfo1 p", {
        x: 100,
        opacity: 0,
        stagger: .1,
        duration: .25,
    })

    tl.pause()

    imgContainer.addEventListener("click", () => {
        if (imgContainer.className == 'closed') {
            tl.play()
            imgContainer.className = 'open'
        }
        else if (imgContainer.className == 'open') {
            tl.reverse()
            imgContainer.className = 'closed'
        }
    })

    const animateOverlay = () => {
        const imgContainer = document.querySelector("#imageContainer1")

        var tl = gsap.timeline()

        tl.to("#image1", {
            'webkitFilter': 'blur(1.5px)',
            duration: .1
        })
        tl.to(".imageInfo1", {
            backgroundColor: 'rgba(0, 0, 0, .5)',
            border: '1px solid #8f4c12'
        })

        tl.pause()

        imgContainer.addEventListener("click", () => {
            if (imgContainer.className == 'closed') {
                tl.reverse()
            }
            else if (imgContainer.className == 'open') {
                tl.play()
            }
        })

    }
    animateOverlay()
}
const Section2ImageAnimations = () => {
    const imgContainer = document.querySelector("#imageContainer2")
    var tl = gsap.timeline()

    tl.from(".imageInfo2 p", {
        x: -100,
        opacity: 0,
        stagger: .1,
        duration: .25,
    })

    tl.pause()

    imgContainer.addEventListener("click", () => {
        if (imgContainer.className == 'closed') {
            tl.play()
            imgContainer.className = 'open'
        }
        else if (imgContainer.className == 'open') {
            tl.reverse()
            imgContainer.className = 'closed'
        }
    })

    const animateOverlay = () => {
        const imgContainer = document.querySelector("#imageContainer2")

        var tl = gsap.timeline()

        tl.to("#image2", {
            'webkitFilter': 'blur(1.5px)',
            duration: .1
        })
        tl.to(".imageInfo2", {
            backgroundColor: 'rgba(0, 0, 0, .5)',
            border: '1px solid #8f4c12'
        })

        tl.pause()

        imgContainer.addEventListener("click", () => {
            if (imgContainer.className == 'closed') {
                tl.reverse()
            }
            else if (imgContainer.className == 'open') {
                tl.play()
            }
        })

    }
    animateOverlay()
}
const Section3ImageAnimations = () => {
    const imgContainer = document.querySelector("#imageContainer3")
    var tl = gsap.timeline()

    tl.from(".imageInfo3 p", {
        x: 100,
        opacity: 0,
        stagger: .1,
        duration: .25,
    })

    tl.pause()

    imgContainer.addEventListener("click", () => {
        if (imgContainer.className == 'closed') {
            tl.play()
            imgContainer.className = 'open'
        }
        else if (imgContainer.className == 'open') {
            tl.reverse()
            imgContainer.className = 'closed'
        }
    })

    const animateOverlay = () => {
        const imgContainer = document.querySelector("#imageContainer3")

        var tl = gsap.timeline()

        tl.to("#image3", {
            'webkitFilter': 'blur(1.5px)',
            duration: .1
        })
        tl.to(".imageInfo3", {
            backgroundColor: 'rgba(0, 0, 0, .5)',
            border: '1px solid #8f4c12'
        })

        tl.pause()

        imgContainer.addEventListener("click", () => {
            if (imgContainer.className == 'closed') {
                tl.reverse()
            }
            else if (imgContainer.className == 'open') {
                tl.play()
            }
        })

    }
    animateOverlay()
}

navAnimations()

Section1TextAnimation()
Section1ImageAnimations()

Section2TextAnimation()
Section2ImageAnimations()

Section3TextAnimation()
Section3ImageAnimations()

scrollToHome()
buttonsHoverAnimation()