const coruselInner = document.querySelector(".corusel__inner");
const BTN_LEFT = document.querySelector(".btn__left");
const BTN_RIGHT = document.querySelector(".btn__right");
const ITEM_LEFT = document.querySelector(".corusel__box--left");
const ITEM_RIGHT = document.querySelector(".corusel__box--right");
let sliderIndex = 0;

document.addEventListener("click", ({ target }) => {
  target.hasAttribute("data-btn") && controlColorMenu(target);
  target.classList.contains("slider__button--next") && slidersActive(true);
  target.classList.contains("slider__button--prev") && slidersActive(false);
});

const controlColorMenu = (element) => {
  const headerList = element
    .closest(".header__list")
    .querySelectorAll("[data-btn]");

  for (const elem of headerList) {
    elem.style.color = "";
  }

  element.style.color = "blue";
  updatePhoto(element.dataset.btn);
};

const updatePhoto = (num) => {
  const photos = document.querySelectorAll(".photo__item");

  for (const photo of photos) {
    photo.setAttribute("hidden", "");
    num === photo.dataset.img && photo.removeAttribute("hidden");
  }
};

const slideNext = (elements, value) => {
  if (value === false) {
    if (sliderIndex === 0) {
      sliderIndex = elements.length - 1;
      elementsAdded(elements);
    } else {
      sliderIndex--;
      elementsAdded(elements);
    }
    return;
  }

  sliderIndex !== elements.length - 1 ? sliderIndex++ : (sliderIndex = 0);

  elementsAdded(elements);
};

const slidersActive = (value) => {
  const slides = document.querySelectorAll(".slider__item");

  for (const slide of slides) {
    slide.style.display = "none";
  }

  value ? slideNext(slides) : slideNext(slides, value);
};

const elementsAdded = (elements) =>
  (elements[sliderIndex].style.display = "block");

const coruselLeft = () => {
  coruselInner.classList.add("transition-left");
  BTN_RIGHT.removeEventListener("click", coruselRight);
};

const coruselRight = () => {
  coruselInner.classList.add("transition-right");
  BTN_LEFT.removeEventListener("click", coruselLeft);
};

coruselInner.addEventListener("animationend", (animationEvent) => {
  if (animationEvent.animationName === "move-left") {
    coruselInner.classList.remove("transition-left");
    BTN_RIGHT.addEventListener("click", coruselRight);

    const leftItems = ITEM_LEFT.innerHTML;
    const activeItems = document.querySelector(".corusel__box--active");

    activeItems.innerHTML = leftItems;
    ITEM_LEFT.innerHTML = "";

    for (let i = 0; i < 3; i++) {
      ITEM_LEFT.insertAdjacentHTML("beforeend", newElements());
    }
  } else {
    coruselInner.classList.remove("transition-right");
    BTN_LEFT.addEventListener("click", coruselLeft);

    const rightItems = ITEM_RIGHT.innerHTML;
    const activeItems = document.querySelector(".corusel__box--active");

    activeItems.innerHTML = rightItems;
    ITEM_RIGHT.innerHTML = "";

    for (let i = 0; i < 3; i++) {
      ITEM_RIGHT.insertAdjacentHTML("beforeend", newElements());
    }
  }
});

const newElements = () => `
  <div class="corusel__item">
    ${Math.floor(Math.random() * 8)}
  </div>`;

BTN_LEFT.addEventListener("click", coruselLeft);
BTN_RIGHT.addEventListener("click", coruselRight);
