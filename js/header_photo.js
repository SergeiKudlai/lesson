export function handlerHeaderPhoto(element) {
  const headerList = element
    .closest(".header__list")
    .querySelectorAll("[data-btn]");

  for (const elem of headerList) {
    elem.style.color = "";
  }

  element.style.color = "blue";
  updatePhoto(element.dataset.btn);
}

const updatePhoto = (num) => {
  const photos = document.querySelectorAll(".photo__item");

  for (const photo of photos) {
    photo.setAttribute("hidden", "");
    num === photo.dataset.img && photo.removeAttribute("hidden");
  }
};
