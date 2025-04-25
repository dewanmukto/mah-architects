---
layout: default
title: Home
---

<!-- Hero Section with Carousel -->
<section class="hero-carousel">
  <div class="veil"></div>
  <div class="tagline">
    <h1>Architecture is our Passion</h1>
    <h2>and Our Passion is our Profession</h2>
  </div>
  <div class="caption"></div>
</section>

<script>
  const imageUrls = [
    "/images/projects/Multi unit Residential.png",
    "/images/projects/Custom Houses.png",
    "/images/projects/Commercial Buildings.png",
    "/images/projects/Industrial Buildings.png",
    "/images/projects/Institutional Buildings.png"
  ];

  const captions = [
    "Multi-Unit Residential",
    "Custom Houses",
    "Commercial Buildings",
    "Industrial Buildings",
    "Institutional Buildings"
  ];

  let currentIndex = 0;
  const hero = document.querySelector('.hero-carousel');
  const veil = document.querySelector('.veil');
  const tagline = document.querySelector('.tagline');
  const caption = document.querySelector('.caption');

  hero.style.backgroundImage = `url('${imageUrls[currentIndex]}')`;
  caption.textContent = captions[currentIndex];

  window.addEventListener('load', () => {
    setTimeout(() => {
      tagline.style.opacity = 1;
    }, 50);

    setTimeout(() => {
      veil.style.opacity = 0;
    }, 500);

    setTimeout(() => {
      tagline.style.opacity = 0;
      caption.style.opacity = 1;
      veil.remove();
    }, 2500);

    setInterval(() => {
      currentIndex = (currentIndex + 1) % imageUrls.length;
      hero.style.backgroundImage = `url('${imageUrls[currentIndex]}')`;

      caption.style.opacity = 0;
      setTimeout(() => {
        caption.textContent = captions[currentIndex];
        caption.style.opacity = 1;
      }, 800);
    }, 5000);
  });
</script>


<!-- About section -->

<div id="about" class="about-section columns-2">
  <div>
    <h2>About</h2>
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
    <img src="/images/logos/jury.png" alt="Jurisdictions" style="width:50%; height:auto;">
  </div>
</div>

<section class="team-section">
  <h2>Team</h2>
  <div class="team-grid">
    <div class="team-member">
      <img src="/images/team/Alamgir1.jpg" alt="Mohd Alamgir Hossain">
      <div class="bio">
        <h3>Mohd Alamgir Hossain</h3>
        <p>Principal Architect<br>OAA. MRAIC. MIAB.<br>Designated RHFAC professional</p>
        <p class="description">
          Alamgir; a licensed and registered Architect at OAA, a member of RAIC, IAB, and a 
          designated RHFAC accessibility professional with over 20 years of experience in the 
          architectural service industry. His practice encompasses various project types, including 
          residential, commercial, industrial, retail, restaurant and café, institutional, healthcare, 
          and hospitality facilities. A core principle of his practice is sustainability and adaptability, 
          incorporating universal accessible design principles in the built environment.
        </p>
      </div>
    </div>
    <div class="team-member">
      <img src="/images/team/Babita.png" alt="Babita Babita">
      <div class="bio">
        <h3>Babita Babita</h3>
        <p>Administrative Assistant</p>
      </div>
    </div>
    <div class="team-member">
      <img src="/images/team/Mohona.jpg" alt="Mohona Das Orthi">
      <div class="bio">
        <h3>Mohona Das Orthi</h3>
        <p>Architectural Designer</p>
      </div>
    </div>
  </div>
</section>


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
      <img src="/images/logos/OAA Logo.png" height="120">
      <img src="/images/logos/RHFAC Professional.png" height="100">
      <img src="/images/logos/raic-member-2024.png" height="80">
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

<!-- Portfolio Section -->
<div id="portfolio" class="projects-section">

  <div class="project-pair">
    <div class="project-block">
      <h3>Residential Buildings</h3>
      <div class="project-row">
        <div class="project-image">
          <img src="/images/sketches/image1.jpeg" alt="Residential">
        </div>
        <div class="project-text">
          <p><strong>Single and Multifamily Residential Buildings</strong></p>
          <p>MAH Architects Inc. has successfully completed more than fifty (50) residential projects throughout the Greater Toronto Area. This includes custom homes, additions and renovations of residential buildings, as well as duplexes, triplexes, fourplexes, laneway and garden suites, and low to mid-rise condominium developments.</p>
        </div>
      </div>
    </div>
    <div class="project-block">
      <h3>Commercial/ Retail/ Restaurants and Cafe</h3>
      <div class="project-row">
        <div class="project-image">
          <img src="/images/sketches/image4.jpeg" alt="Commercial">
        </div>
        <div class="project-text">
          <p><strong>Mixed-use Commercial, Retail, Restaurants and Café</strong></p>
          <p>MAH Architects Inc. provides design services for commercial buildings, including office interior alterations, retail fit-outs, and restaurant/café design within the Greater Toronto Area and globally.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="project-pair">
    <div class="project-block">
      <h3>Industrial Buildings</h3>
      <div class="project-row">
        <div class="project-image">
          <img src="/images/sketches/image3.jpeg" alt="Industrial">
        </div>
        <div class="project-text">
          <p><strong>Industrial (Warehouse and Distribution Center)</strong></p>
          <p>We have extensive experience in designing, permitting, and administrating the construction of warehouses and distribution centers across Ontario and Canada.</p>
        </div>
      </div>
    </div>
    <div class="project-block">
      <h3>Hospitality/ Healthcare Facilities</h3>
      <div class="project-row">
        <div class="project-image">
          <img src="/images/sketches/image2.jpeg" alt="Healthcare">
        </div>
        <div class="project-text">
          <p><strong>Healthcare Facilities Design</strong></p>
          <p>We have experience in designing a 200-bed general hospital for the Bangladesh Navy, along with the specialized design of a trauma and burn unit, as well as an ICU building for CMH Hospital located in Dhaka, Bangladesh.
We worked on interior alterations for small clinics in Ontario and are dedicated to serving healthcare establishments of all sizes.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="project-pair">
    <div class="project-block">
      <h3>Accessibility Expertise</h3>
      <div class="project-row">
        <div class="project-image">
          <img src="/images/accessib.jpg" alt="Accessibility">
        </div>
        <div class="project-text">
          <p><strong>Accessibility Assessment and Recommendation</strong></p>
          <p>Meaningful accessibility and a universal design approach are key points of our practice. As designated accessibility professionals, we conduct assessments of built environments and provide expert opinions and recommendations to ensure building accessibility for everyone.</p>
        </div>
      </div>
    </div>
    <div class="project-block">
      <h3>Design and Visualization</h3>
      <div class="project-row">
        <div class="project-image">
          <img src="/images/projects/220 ruggle render 11.jpg" alt="Design and Visualization">
        </div>
        <div class="project-text">
          <p><strong>Technical aspects of Design and Visualization</strong></p>
          <p>We possess technical expertise and a comprehensive understanding of building codes, bylaws, and regulations. Our team consists of specialists in BIM who simulate, analyze, and optimize design and construction complexities upfront to ensure successful implementation.</p>
          <p>Real-time 3D visualization is crucial for understanding the spatial, qualitative, material, and aesthetic aspects of building designs. It aids our design process, allowing clients and teams to conduct upfront reviews and contribute to creating a final masterpiece.</p>
        </div>
      </div>
    </div>
  </div>

</div>


<!-- Contact Section -->
<div id="contact" class="contact-section">
  <div class="contact-grid">
    <!-- Left Column: Contact Info + Form -->
    <div class="contact-left">
      <h2>Connect with Us</h2>
      <p>MAH Architects Inc.<br>
         155 Desbourne Blvd.<br>
         Brampton, ON L6T 1K1
      </p>
      <p>mail: <a href="mailto:maharchitectsinc@outlook.com">maharchitectsinc@outlook.com</a></p>
      <form class="contact-form" action="https://formspree.io/f/mldbeyyj" method="POST">
        <input type="text" name="name" placeholder="FULL NAME" required>
        <input type="email" name="email" placeholder="EMAIL" required>
        <input type="tel" name="phone" placeholder="PHONE" required>
        <textarea name="message" placeholder="YOUR MESSAGE" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
    <!-- Middle Column: Social Icons -->
    <div class="contact-middle">
      <div class="social-links">
        <a href="https://www.linkedin.com/company/" target="_blank">
          <img src="https://s3-us-west-2.amazonaws.com/handel-architects/images/linkedin_170911_183711.svg" alt="LinkedIn">
          <img class="hover-icon" src="https://s3-us-west-2.amazonaws.com/handel-architects/images/linkedin-b.svg" alt="LinkedIn hover">
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="https://s3-us-west-2.amazonaws.com/handel-architects/images/instagram.png" alt="Instagram">
          <img class="hover-icon" src="https://s3-us-west-2.amazonaws.com/handel-architects/images/instagram-b.png" alt="Instagram hover">
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src="https://s3-us-west-2.amazonaws.com/handel-architects/images/facebook_170911_183733.svg" alt="Facebook">
          <img class="hover-icon" src="https://s3-us-west-2.amazonaws.com/handel-architects/images/facebook-b.svg" alt="Facebook hover">
        </a>
      </div>
    </div>
    <!-- Right Column: Map -->
    <div class="contact-right">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.6828932546!2d-79.6918444!3d43.71713869999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d33b2710b6f%3A0x3ffe1b6e9c4970fe!2sMAH%20Architects%20Inc.!5e0!3m2!1sen!2sbd!4v1745314083923!5m2!1sen!2sbd"
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</div>

