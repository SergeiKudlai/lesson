import { handlerCorusel } from "./js/corusel.js";
import { handlerHeaderPhoto } from "./js/header_photo.js";
import { handlerSliders } from "./js/sliders.js";
import { handlerSwiperCouresel } from "./js/swiper-corusel.js";

document.addEventListener("click", ({ target }) => {
  target.hasAttribute("data-btn") && handlerHeaderPhoto(target);
  target.classList.contains("slider__button--next") && handlerSliders(true);
  target.classList.contains("slider__button--prev") && handlerSliders(false);
  target.classList.contains("left") && handlerSwiperCouresel(target);
  target.classList.contains("right") && handlerSwiperCouresel(target);
});

handlerCorusel();
