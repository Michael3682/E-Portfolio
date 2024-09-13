const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const scrolling = () => {
    const body = document.querySelector("body")

    body.className = "scrollDisabled"
    let count = 10

    const timer = setInterval(() => {
        count--
        if (count == 0) {
            clearInterval(timer);
            body.className = "scrollEnabled"
        }
    }, 500);
}
const introAnimation = () => {
    var tl = gsap.timeline()

    const breakText = () => {
        var h1 = document.querySelector("#intro1")
        var h1Text = h1.textContent
        var splittedText = h1Text.split("")
        var clutter = ""

        splittedText.forEach((e, i) => {
            if (i < 8) {
                clutter += `<span class="a">${e}</span>`
            }
        })

        h1.innerHTML = clutter
    }
    breakText()
    tl.from("#intro1 .a", {
        x: -50,
        opacity: 0,
        stagger: .09
    })
    let count2 = 2
    const timer = setInterval(() => {
        count2--
        if (count2 == 0) {
            clearInterval(timer);
            tl.to("#intro1 .a", {
                y: -100,
                opacity: 0,
                stagger: .09
            })
            tl.to("#intro2", {
                y: -70,
                opacity: 1,
                stagger: .09
            })
            tl.to("#intro2 span", {
                x: -70,
                opacity: 1,
                stagger: .09
            })
            tl.to("#intro", {
                y: -1000,
                delay: .5,
                duration: 1.3
            })

        }
    }, 500);

}
const navAnimations = () => {
    var tl = gsap.timeline()

    tl.from("nav h1", {
        width: 0,
        delay: 4.5
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
            end: "top -3%",
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
            end: "top -3%",
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
            end: "top -3%",
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
const burgerMenu = () => {
    const menu = document.querySelector(".menuButton");
    const icon = document.querySelector("#icon");
    const buttons = document.querySelector(".buttons");

    const SMALL_SCREEN_QUERY = "(max-width: 879px)";

    const updateUI = () => {
        const isSmallScreen = window.matchMedia(SMALL_SCREEN_QUERY).matches;

        if (isSmallScreen) {
            menu.hidden = false;
            buttons.style.display = 'none';
            buttons.className = 'buttons2';
            icon.className = 'bi bi-grid';
        } else {
            menu.hidden = true;
            buttons.style.display = 'flex';
            buttons.className = 'buttons';
            icon.className = 'bi bi-grid';
        }
    };

    updateUI();

    window.addEventListener("resize", updateUI);

    menu.addEventListener("click", () => {
        if (buttons.style.display === 'none') {
            buttons.style.display = 'flex';
            icon.className = 'bi bi-grid-fill';
        } else {
            // let count = 3
            // const timer = setInterval(() => {
            //     count--
            //     if (count == 0) {
            //         clearInterval(timer);
            //         buttons.style.display = 'none';
            //     }
            // }, 500);
            buttons.style.display = 'none';
            icon.className = 'bi bi-grid';
        }
    });
};

scrolling()
introAnimation()
navAnimations()

Section1TextAnimation()
Section1ImageAnimations()

Section2TextAnimation()
Section2ImageAnimations()

Section3TextAnimation()
Section3ImageAnimations()

scrollToHome()
buttonsHoverAnimation()
burgerMenu()