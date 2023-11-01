
var aboutButton = document.querySelector(".menu__link-about");
var priceButton = document.querySelector(".menu__link-price");
var galleryButton = document.querySelector(".menu__link-gallery");
var decor1 = document.querySelector(".menu__decor-1");
var decor2 = document.querySelector(".menu__decor-2");
var checkboxMark = document.querySelector(".checkbox-mark");

aboutButton.addEventListener("mouseover", (e) => {


   // if(decor.classList.contains("active-gallery")){
   //    decor.classList.remove("active-gallery");
   // }
})

document.addEventListener("click", (e) => {
   if (e.target.closest(".form__item-checkbox")) {
      checkboxMark.classList.toggle("active");
   }
})


document.addEventListener("mouseover", (e) => {
   if (e.target.closest(".menu__link-about") || e.target.closest(".menu__decor.active-about")) {
      aboutButton.classList.add("active");
      decor1.classList.add("active-about");
   }
   if (e.target.closest(".menu__link-gallery") || e.target.closest(".menu__decor.active-gallery")) {
      galleryButton.classList.add("active");
      decor2.classList.add("active-gallery");
   }
   if (e.target.closest(".menu__link-price") || e.target.closest(".menu__decor.active-gallery")) {
      priceButton.classList.add("active");
      decor1.classList.add("active-price");
      decor2.classList.add("active-price");
   }
   if (!(e.target.closest(".menu__link-about") || e.target.closest(".menu__decor.active-about") || e.target.closest(".menu__link-gallery") || e.target.closest(".menu__decor.active-gallery") || e.target.closest(".menu__link-price") || e.target.closest(".menu__decor.active-gallery"))) {
      galleryButton.classList.remove("active");
      decor2.classList.remove("active-gallery");
      aboutButton.classList.remove("active");
      decor1.classList.remove("active-about");
      priceButton.classList.remove("active");
      decor2.classList.remove("active-price");
      decor1.classList.remove("active-price");
   }
})
document.addEventListener("mouseout", (e) => {
   if (e.target.closest(".menu__decor.active-about")) {
      aboutButton.classList.remove("active");
      decor1.classList.remove("active-about");
   }
   if (e.target.closest(".menu__decor.active-gallery")) {
      galleryButton.classList.remove("active");
      decor2.classList.remove("active-gallery");
   }
   if (e.target.closest(".menu__decor.active-price")) {
      priceButton.classList.remove("active");
      decor2.classList.remove("active-price");
      decor1.classList.remove("active-price");
   }
})


var preloadList = document.querySelectorAll(".preload")
window.addEventListener("load", (event) => {
   preloadList.forEach((item) => {
      item.classList.remove("preload")
   })
});


function onEntry(entry) {
   entry.forEach(change => {
      if (change.isIntersecting) {
         change.target.classList.add('element-show');
      } else {
         change.target.classList.remove('element-show');
      }
   });
}

let options = {
   threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
   observer.observe(elm);
}

//function gallery=======================================================

const gallery = document.querySelector('.gallery__body');
if (gallery) {
   const galleryItems = document.querySelector('.gallery__items');
   const galleryColumn = document.querySelectorAll('.gallery__column');


   const speed = gallery.dataset.speed;
   let positionX = 0;
   let coordXprocent = 0;

   function setMouseGalleryStyle() {
      let galleryitemsWidth = 0;
      galleryColumn.forEach(element => {
         galleryitemsWidth += element.offsetWidth;
      });

      const galleryDifferent = galleryitemsWidth - gallery.offsetWidth;
      const distX = Math.floor(coordXprocent - positionX);
      positionX = positionX + (distX * speed);
      let position = galleryDifferent / 200 * positionX;

      galleryItems.style.cssText = `transform: translate3d(${-position}px,0,0); `;

      if (Math.abs(distX) > 0) {
         requestAnimationFrame(setMouseGalleryStyle);
      } else {
         gallery.classList.remove('_init');
      }
   }
   gallery.addEventListener("mousemove", function (e) {
      const galleryWidth = gallery.offsetWidth;

      const coordX = e.pageX - galleryWidth / 1.5;

      coordXprocent = coordX / galleryWidth * 100;

      if (!gallery.classList.contains("_init")) {
         requestAnimationFrame(setMouseGalleryStyle);
         gallery.classList.add("_init");
      }
   });

}