document.addEventListener("DOMContentLoaded", () => {
    // Hero Section (fade + slide-up for heading)
    gsap.from(".hero h1", {
      duration: 2,
      y: 50,
      opacity: 0,
      ease: "power4.out"
    });
  
    // About Section (split entrance: left text from left, image from right)
    gsap.from("#about > div:first-child", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
  
    gsap.from("#about > div:last-child", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
  
    // Team Section (fade and bounce-in each team member)
    gsap.from(".team-member", {
      scrollTrigger: {
        trigger: ".team-section",
        start: "top 85%",
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "back.out(1.4)"
    });
  
    // Why Us Section (text fade from bottom and right-align float-in)
    gsap.from(".why-us-section > div:first-child", {
      scrollTrigger: {
        trigger: ".why-us-section",
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  
    gsap.from(".why-us-section > div:last-child", {
      scrollTrigger: {
        trigger: ".why-us-section",
        start: "top 80%",
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out"
    });
    
    // Contact Section (fade and scale-in each column)
    gsap.from(".contact-grid > div", {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 85%",
      },
      opacity: 0,
      scale: 0.9,
      duration: 1,
      stagger: 0.3,
      ease: "power1.out"
    });
  });
  