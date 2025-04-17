// Burger Menu
document.getElementById("burger").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("active");
});

// Sticky Navbar Show/Hide on Scroll
let lastScroll = 0;
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.style.top = "0";
    navbar.classList.remove("scrolled-up");
    navbar.classList.remove("scrolled-down");
  } else if (currentScroll > lastScroll) {
    navbar.style.top = "-100px";
    navbar.classList.add("scrolled-down");
    navbar.classList.remove("scrolled-up");
  } else {
    navbar.style.top = "0";
    navbar.classList.add("scrolled-up");
    navbar.classList.remove("scrolled-down");
  }

  lastScroll = currentScroll;
});

// Hero Slider
const images = [
  'images/project_images/canada/220 ruggle render 11.jpg',
  'images/project_images/bangladesh/Apartment Building at Banani, Dhaka.jpg',
  'images/project_images/bangladesh/Apartment Building at Gulshan-2, Dhaka.jpg'
];

const texts = [
  {
    title: 'Architecture & Planning Excellence',
    subtitle: "Designing tomorrow's spaces where vision meets structure"
  },
  {
    title: 'Creating spaces that inspire communities.',
    subtitle: 'Project X: Modern Living in Downtown'
  },
  {
    title: 'Innovative designs for modern living.',
    subtitle: 'Project Y: Sustainable Architecture'
  }
];

let currentIndex = 0;

const heroImage = document.querySelector('.hero-image');
const mainTitle = document.querySelector('.main-title');
const subtitle = document.querySelector('.subtitle');
const counter = document.querySelector('.counter');



function updateContent() {
  heroImage.classList.remove('fade-in-zoom-out');
  heroImage.classList.add('fade-out-zoom-in');

  mainTitle.classList.remove('text-fade-in-slide-up');
  subtitle.classList.remove('text-fade-in-slide-up');
  mainTitle.classList.add('text-fade-out-slide-down');
  subtitle.classList.add('text-fade-out-slide-down');

  setTimeout(() => {
    heroImage.src = images[currentIndex];
    heroImage.classList.remove('fade-out-zoom-in');
    heroImage.classList.add('fade-in-zoom-out');

    mainTitle.textContent = texts[currentIndex].title;
    subtitle.textContent = texts[currentIndex].subtitle;

    mainTitle.classList.remove('text-fade-out-slide-down');
    subtitle.classList.remove('text-fade-out-slide-down');
    mainTitle.classList.add('text-fade-in-slide-up');
    subtitle.classList.add('text-fade-in-slide-up');

    counter.textContent = `0${currentIndex + 1} / 0${images.length}`;

    updateArrowStates();
  }, 500);
}

// Initial load
updateContent();

// Gallery section
const imageData = [
  { src: "images/sketches/image1.jpeg" },
  { src: "images/sketches/image2.jpeg" },
  { src: "images/sketches/image3.jpeg" },
  { src: "images/sketches/image4.jpeg" }
];

const gallery = document.getElementById("gallery");

let gallery_images = [];

imageData.forEach((data, index) => {
  const img = document.createElement("img");
  img.src = data.src;
  img.style.zIndex = imageData.length - index;
  img.style.opacity = `${1 - index * 0.2}`;
  img.style.setProperty('--rotation', `${Math.random() * 20 - 10}deg`);
  gallery.appendChild(img);
  gallery_images.push(img);
});

let currentTop = 0;

setInterval(() => {
  currentTop = (currentTop + 1) % gallery_images.length;

  gallery_images.forEach((img, i) => {
    const relativeIndex = (i - currentTop + gallery_images.length) % gallery_images.length;
    img.style.zIndex = gallery_images.length - relativeIndex;
    img.style.opacity = `${1 - relativeIndex * 0.2}`;
  });
}, 3000);

// About section
function toggleWhy() {
  const title = document.querySelector(".collapsible-title");
  const content = document.getElementById("whyContent");

  title.classList.toggle("active");
  content.classList.toggle("open");
}
