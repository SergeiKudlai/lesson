import {
  coruselInner,
  BTN_LEFT,
  BTN_RIGHT,
  ITEM_LEFT,
  ITEM_RIGHT,
} from "./variables.js";

export const handlerCorusel = () => {
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
};
