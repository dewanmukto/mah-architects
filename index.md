---
layout: default
title: Home
---

<!-- Home section -->
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

<!-- About section -->

<div id="about" class="about-section columns-2">
  <div>
    <p><b>About</b></p>
    <p><b>MAH Architects Inc.</b>, previously known as A&A, was established in 2018 in Ontario, 
Canada. The firm has completed numerous projects and offers architectural services for 
various building types, including residential, commercial, retail, industrial, institutional, 
restaurant and café, healthcare, and hospitality facilities such as hotels and motels.</p>
    <p><b>Why Your Project Requires Architects ?</b></p>
    <p>The Architect, who functions as advisor, coordinator, and technical manager, in 
addition to being a creative artist, can design and administer a contract that 
ensures a project is completed on time, within budget, and meets the required 
standards of quality.</p>
    <p>According to Ontario jurisdiction by law, certain types of projects must involve 
an architect to ensure public health, safety, welfare, sustainable growth, and 
environmental protection. When determining if your project requires 
architectural services, hiring a qualified architect can be beneficial. Architects 
have expertise in built environments and are knowledgeable about complex 
regulatory requirements such as building codes, zoning bylaws, the construction 
process, and environmental considerations. 
</p>
  </div>
  <div>
    <h2>Jurisdictions We had Experience</h2>
    <img src="/images/jury.png" alt="Jurisdictions" style="width:100%; height:auto;">
  </div>
</div>

<div class="team-section columns-3">
  <div class="team-member">
    <img src="/images/Alamgir1.jpg" alt="Mohd Alamgir Hossain">
    <div>
      <h3>Mohd Alamgir Hossain</h3>
      <p>Principal Architect<br />OAA. MRAIC. MIAB.<br />Designated RHFAC professional</p>
      <p>Alamgir; a licensed and registered Architect at OAA, a member of RAIC, IAB, and a 
designated RHFAC accessibility professional with over 20 years of experience in the 
architectural service industry. His practice encompasses various project types, including 
residential, commercial, industrial, retail, restaurant and café, institutional, healthcare, 
and hospitality facilities. A core principle of his practice is sustainability and adaptability, 
incorporating universal accessible design principles in the built environment.</p>
    </div>
  </div>
  <div class="team-member">
    <img src="/images/Babita.png" alt="Babita Babita">
    <div>
      <h3>Babita Babita</h3>
      <p>Administrative Assistant</p>
    </div>
  </div>
  <div class="team-member">
    <img src="/images/Mohona.jpg" alt="Mohona Das Orthi">
    <div>
      <h3>Mohona Das Orthi</h3>
      <p>Architectural Designer</p>
    </div>
  </div>
</div>

<div class="why-us-section columns-2">
  <div>
    <p>Why Choose Us?</p>
    <p>MAH Architects Inc. is dedicated to client-first sustainable architecture. We 
believe great architecture is a colaborative process, reflecting the input and 
ideas of everyone involved rather than solely the architect's vision.</p>
    <p>Our team comprises licensed, registered, and experienced architects, visionary 
designers, and supporting engineering professionals. This integrated team 
efficiently leverages their expertise to create architectural masterpieces. </p>
    <p>Our working tools included modern technology such as Building Information 
Modeling software (BIM) and contract administration software to ensure 
seamless construction and compliance with jurisdictional construction 
standards.</p>
    <p>Our practice rules and regulations are folowed as standardized by the <b>Royal 
Architectural Institute of Canada (RAIC)</b>, <b>Ontario Association of Architects (OAA)</b>, 
and other local and International regulatory bodies.</p>
    <div style="display:flex; gap:1rem; margin-top:1rem;">
      <img src="/images/OAA Logo.jpg" width="100">
      <img src="/images/RHFAC Professional.jpg" width="100">
      <img src="/images/raic-member-2024.png" width="100">
    </div>
  </div>
  <div class="right-align">
    <p>Services We Offer</p><br />
    <p>Feasibility Studies/ Facility Assessments</p>
    <p>Architectural and Interior Design</p>
    <p>Zoning Amendment/ Site Plan Approvals/ Committee of Adjustments/ Building Permit</p>
    <p>Structural and MEP service integration</p>
    <p>Bidding and Contract negotiations</p>
    <p>Project Contract Administration</p>
    <p>Construction Management</p>
  </div>
</div>


<!-- Contact section -->

<div id="contact" class="contact-section contact-grid">
  <div>
    <p>MAH Architects Inc.<br>155 Desrbourne Blvd.<br>Brampton, ON L6T 1K1</p>
    <p>Email: maharchitectsinc@outlook.com</p>
  </div>
  <div>
    <p>Follow Us:</p>
    <p>🔗 LinkedIn</p>
    <p>📧 Email</p>
  </div>
  <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.6828932546!2d-79.6918444!3d43.71713869999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d33b2710b6f%3A0x3ffe1b6e9c4970fe!2sMAH%20Architects%20Inc.!5e0!3m2!1sen!2sbd!4v1745314083923!5m2!1sen!2sbd" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</div>