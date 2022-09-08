class Gallery {
  constructor(gallery) {
    this.galleryContainer = gallery;
    this.className = this.galleryContainer.id;
    this.galleryContainer.className = `${this.className}`;
    this.ClassNameInner = `${this.className}__inner`;
    this.ClassNameLi = `${this.className}__item`;
    this.ClassNameImg = `${this.className}__images`;

    this.galleryChild = this.galleryContainer.childElementCount;
    this.galleryImg = this.galleryContainer.querySelectorAll('img');

    this.getElemSum = this.getElemSum.bind(this);
    this.getAddElementHtml = this.getAddElementHtml.bind(this);
    this.setParametersContainer = this.setParametersContainer.bind(this);
    this.getParametersImages = this.getParametersImages.bind(this);
    this.setAddStyleHTML = this.setAddStyleHTML.bind(this);
    this.setEvents = this.setEvents.bind(this);
    this.dragging = this.dragging.bind(this);
    this.stopDrag = this.stopDrag.bind(this);

    this.getAddElementHtml();
    this.getParametersImages();
    this.setParametersContainer();
    this.setAddStyleHTML();
    this.setEvents();
  }

  getElemSum() {
    let elemAmount = '';
    for (let i = 0; i < this.galleryChild; i++) {
      this.galleryImg[i].className = `${this.ClassNameImg}`;
      elemAmount +=
        `<li class=${this.ClassNameLi}>
          ${this.galleryImg[i].outerHTML}
        </li>\n`;
    }
    return elemAmount;
  }

  getAddElementHtml() {
    this.galleryContainer.innerHTML = `
      <ul class=${this.ClassNameInner}>
        ${this.getElemSum()}
      </ul>
    `;
  }

  setParametersContainer(widthImg) {
    this.galleryContainer.style.maxWidth = widthImg + 'px';
    this.galleryContainer.style.overflow = 'hidden';
    this.galleryContainer.style.margin = '0 auto';
  }

  getParametersImages() {
    const galleryImgagesActual = this.galleryContainer.querySelectorAll(`.${this.ClassNameImg}`);
    galleryImgagesActual.forEach(elem => {
      this.setParametersContainer(elem.width);
      this.setAddStyleHTML(elem.height);
      elem.style.position = 'absolute';
      elem.style.top = 0;
      elem.style.left = 0;
      elem.style.width = 100 + '%';
      elem.style.height = 100 + '%';
    })
  }

  setAddStyleHTML(height) {
    const galleryUll = this.galleryContainer.querySelector(`.${this.ClassNameInner}`);
    const galleryLi = this.galleryContainer.querySelectorAll(`.${this.ClassNameLi}`);
    galleryUll.style.display = 'flex';

    galleryLi.forEach(elem => {
      const stylesElements = elem.style;
      stylesElements.flex = '1 0 100%';
      stylesElements.position = 'relative';
      stylesElements.paddingTop = height / 5 + '%';
    })
  }

  setEvents() {
    const galleryLi = this.galleryContainer.querySelectorAll(`.${this.ClassNameLi}`);
    this.galleryContainer.addEventListener('pointerdown', this.startDrag);
    window.addEventListener('pointerup', this.stopDrag);
  }

  startDrag(evt) {
    this.clickX = evt.pageX;
    window.addEventListener('pointermove', this.dragging);
  }

  stopDrag() {
    window.removeEventListener('pointermove', this.dragging);
  }

  dragging(evt) {
  }

  setStylePosition() {
    const galleryLi = this.galleryContainer.querySelectorAll(`.${this.ClassNameLi}`);
  }
}

// const coordsContainer = this.galleryContainer.getBoundingClientRect();
export { Gallery };


