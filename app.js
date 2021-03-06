var nav = document.getElementById("site-menu");
var header = document.getElementById("top");
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

// window.addEventListener('scroll', function() {
//   if (window.scrollY >=400) { // adjust this value based on site structure and header image height
//     nav.classList.add('nav-sticky');
//     header.classList.add('pt-scroll');
//   } else {
//     nav.classList.remove('nav-sticky');
//     header.classList.remove('pt-scroll');
//   }
// });

function navToggle() {
  var btn = document.getElementById("menuBtn");
  var nav = document.getElementById("menu");

  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
}

function scrollToTop() {
  // scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

//Light Gallery Code

lightGallery(document.getElementById("lightgallery"), {
  plugins: [lgZoom, lgThumbnail],
  licenseKey: "0000-0000-000-0000",
  speed: 500,
});

lightGallery(document.getElementById("animated-thumbnails-gallery"), {
  thumbnail: true,
});
