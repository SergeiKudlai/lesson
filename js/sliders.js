import { slides } from "./variables.js";

let sliderIndex = 0;

export function handlerSliders(value) {
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

  for (const slide of slides) {
    slide.style.display = "none";
  }

  value ? slideNext(slides) : slideNext(slides, value);
}

const elementsAdded = (elements) =>
  (elements[sliderIndex].style.display = "block");
