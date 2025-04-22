---
layout: default
title: Home
---

<div class="hero">
  <h1>Architecture is our Passion<br>and Our Passion is our Profession</h1>
</div>

<div class="carousel-wrapper">
  <div class="carousel" id="imageCarousel">
    <div class="slide"><img src="/images/Multi unit Residential.tif" alt="Multi Unit Residential"><p>Multi Unit Residential</p></div>
    <div class="slide"><img src="/images/Custom Houses.tif" alt="Custom Houses"><p>Custom Houses</p></div>
    <div class="slide"><img src="/images/Commercial Buildings.tif" alt="Commercial Buildings"><p>Commercial Buildings</p></div>
    <div class="slide"><img src="/images/Industrial Buildings.tif" alt="Industrial Buildings"><p>Industrial Buildings</p></div>
    <div class="slide"><img src="/images/Institutional Buildings.tif" alt="Institutional Buildings"><p>Institutional Buildings</p></div>
 </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById('imageCarousel');
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    function rotateCarousel() {
      index = (index + 1) % slides.length;
      const offset = -index * 100;
      carousel.style.transform = `translateX(${offset}%)`;
    }

    setInterval(rotateCarousel, 5000); // change every 5 seconds
  });
</script>
