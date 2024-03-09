import gsap from "gsap"

export const removeLoader = setComplete => {
  const tl = gsap.timeline({
    onComplete: () => {
      setComplete(true)
    },
  })

  tl.to(
    ".load",
    {
      duration: 1.4,
      width: "100%",
      ease: "Expo.easeInOut",
    },
    "+=.8"
  )
    .to(".counter", {
      duration: 0.3,
      opacity: 0,
      display: "none",
    })
    .to(
      ".load",
      {
        duration: 0.4,
        height: "100%",
        ease: "Expo.easeInOut",
      },
      "+=.5"
    )
    .to("body", {
      duration: 0.1,
      background: "rgb(5 11 18)",
    })
    .to(
      ".bground",
      {
        duration: 0.8,
        width: "100%",
        ease: "Expo.easeInOut",
      },
      "-=.1"
    )
    .to(".preloader", {
      duration: 0.5,
      opacity: 0,
      display: "none",
    })
}

export const heroAnim = () => {
  const tl = gsap.timeline({
   
  })
  tl.from(
    ".ov-h h1",
    {
      duration: 1.5,
      y: 60,
      opacity: 0,
      stagger:{
each:0.16,
      },
    
    },
    "+=.3"
  )
  tl.from(
    ".ov-h p",
    {
      duration: 1,
      y: 20,
      opacity: 0,
      stagger: 0.3,
      delay: 0,
      ease: "Power3.easeOut",
    },
    "+=.3"
  )
  
}
