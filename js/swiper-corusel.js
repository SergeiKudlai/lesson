const items = document.querySelectorAll(".item");
let currentItem = 0;
let isEnabled = true;

export function handlerSwiperCouresel(btn) {
  btn.classList.contains("left") && previosItem();
  btn.classList.contains("right") && nextItem();
}

function changeCurrentItem(n) {
  //   формула для расчета длины слайдов
  currentItem = (n + items.length) % items.length;
}

const previosItem = () => {
  if (isEnabled) {
    hideItem("to-right");
    changeCurrentItem(currentItem - 1);
    showItem("from-left");
  }
};

const nextItem = () => {
  if (isEnabled) {
    hideItem("to-left");
    changeCurrentItem(currentItem + 1);
    showItem("from-right");
  }
};

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener("animationend", function () {
    this.classList.remove("active", direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add("next", direction);
  items[currentItem].addEventListener("animationend", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isEnabled = true;
  });
}
