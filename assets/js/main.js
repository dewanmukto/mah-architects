document.addEventListener("DOMContentLoaded", function () {
  gsap.to(".hero h1", {
    duration: 2,
    opacity: 1,
    y: -20,
    ease: "power2.out"
  });
});