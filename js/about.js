var aboutButton = document.querySelector(".menu__link-about");
var galleryButton = document.querySelector(".menu__link-gallery")
var decor = document.querySelector(".menu__decor");

aboutButton.addEventListener("mouseover", (e) => {


   // if(decor.classList.contains("active-gallery")){
   //    decor.classList.remove("active-gallery");
   // }
})


document.addEventListener("mouseover", (e) => {
   if (e.target.closest(".menu__link-about") || e.target.closest(".menu__decor.active-about")) {
      aboutButton.classList.add("active");
      decor.classList.add("active-about");
   }
   if (e.target.closest(".menu__link-gallery") || e.target.closest(".menu__decor.active-gallery")) {
      galleryButton.classList.add("active");
      decor.classList.add("active-gallery");
   }
   if (!(e.target.closest(".menu__link-about") || e.target.closest(".menu__decor.active-about") || e.target.closest(".menu__link-gallery") || e.target.closest(".menu__decor.active-gallery"))) {
      galleryButton.classList.remove("active");
      decor.classList.remove("active-gallery");
      aboutButton.classList.remove("active");
      decor.classList.remove("active-about");
   }
})
document.addEventListener("mouseout", (e) => {
   if (e.target.closest(".menu__decor.active-about")) {
      aboutButton.classList.remove("active");
      decor.classList.remove("active-about");
   }
   if (e.target.closest(".menu__decor.active-gallery")) {
      galleryButton.classList.remove("active");
      decor.classList.remove("active-gallery");
   }
})


var preloadList = document.querySelectorAll(".preload")
window.addEventListener("load", (event) => {
   preloadList.forEach((item) => {
      item.classList.remove("preload")
   })
});