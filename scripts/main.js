// Main Variables
let links = document.querySelector("header .links ul"),
  lis = document.querySelectorAll("header .links ul li"),
  skillsContainer = document.querySelector(".skills"),
  galleryImgs = document.querySelectorAll(".gallery .images img");
(gallery = document.querySelector(".box-gallery img")),
  (galleryAlt = document.querySelector(".box-gallery h3")),
  (scrollZero = document.querySelector(".scrollZero"));

// Appear And Hide The Links
document
  .querySelector(".showLinks")
  .addEventListener("click", () => links.classList.toggle("show-or-hide"));

// Add Class Active On lis
lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();
    // To Remove The Class Active On All Lis
    lis.forEach((remove) => {
      remove.classList.remove("active");
    });
    // To Add Class Active On Target Li
    li.classList.add("active");
  });
});

// Make Skills Animation
window.onscroll = () => {
  /*To Check If Window Scroll Arrive To Skills Container Offset Top 
    Make The Animation */
  if (window.scrollY > skillsContainer.offsetHeight - 30) {
    // Progresses
    document.querySelectorAll(".skills .box div span").forEach((skill) => {
      // Progress  Animation
      skill.style.width = skill.dataset.progress;
      // Progress Number
      skill.textContent = skill.dataset.progress;
    });
    //  Make Page Scroll Top Equal To 0
    windowScroll();
  }
};
// To Appear The Target Gallery
galleryImgs.forEach((el) => {
  el.addEventListener("click", (e) => {
    // Set The Source
    gallery.src = e.target.src;
    // Set The Alternate Text
    galleryAlt.textContent =
      e.target.alt != "" ? e.target.alt : "No Alternate Text";
    // Appear The Gallery Box
    gallery.parentElement.style.display = "inline-block";
    // Appear The Layout
    document.querySelector(".layout").style.display = "inline-block";
  });
});

// To Hide The Gallery Box On click On The Button
document.querySelector(".box-gallery span").addEventListener("click", () => {
  // Hide The Gallery Box
  gallery.parentElement.style.display = "none";
  // Hide The Layout
  document.querySelector(".layout").style.display = "none";
});

// Smooth Scroll To Sections
document.querySelectorAll("header .links ul li a").forEach((hash) => {
  hash.addEventListener("click", (e) => {
    window.scrollTo({
      top: document.querySelector(e.target.dataset.hash).offsetTop,
      behavior: "smooth",
    });
  });
});

//  Make Page Scroll Top Equal To 0
const windowScroll = function () {
  /*Check If The Window Scroll Top Equal To Skills Section Offset Top
      Appear The Button 
    Else 
      Hide It */
  if (window.scrollY <= 1200) scrollZero.style.display = "none";
  else scrollZero.style.display = "block";
};
//  Make Page Scroll Top Equal To 0 On Click On The Button
scrollZero.addEventListener("click", () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
);
