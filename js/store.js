export function store() {
  // counter
  window.addEventListener('click', e => {
    const { target } = e;
    target.dataset.action === 'plus' && setFunctionPlus(target);
    target.dataset.action === 'minus' && setFunctionMinus(target);
  })

  function setFunctionPlus(data) {
    const currentWrapper = data.closest('.details__list');
    const current = currentWrapper.querySelector('.details__current');
    current.textContent++;
    getClickCart(data);
  }

  function setFunctionMinus(data) {
    const currentWrapper = data.closest('.details__list');
    const current = currentWrapper.querySelector('.details__current');
    if (current.textContent !== '0') {
      current.textContent--;
      getClickCart(data);
    }
    if (current.textContent < '1') setDeleteCart(data);
  }

  // проверка клико по кнопкам корзины
  function getClickCart(elem) {
    const cartWrapper = elem.closest('.cart__inner');
    cartWrapper && getTotalPriceCart();
  }


  function setDeleteCart(elem) {
    const cartWrapper = elem.closest('.cart__inner');

    if (cartWrapper) {

      const counters = cartWrapper.querySelectorAll('.details__current');

      counters.forEach(value => {
        if (value.textContent === '0') {
          value.closest('.cart__item').remove();
          getCartvisibility();
        }
      })
    }
  }


  // cart
  window.addEventListener('click', event => {
    const { target } = event;
    target.hasAttribute('data-cart') && setFunctionAddCart(target);
  })

  function setFunctionAddCart(data) {
    // находим родительскую обёртку
    const cartWrapper = data.closest('.card__box');

    // создаём объект 
    const productInfo = {
      id: cartWrapper.dataset.id,
      imgSrc: cartWrapper.querySelector('.card__images').getAttribute('src'),
      title: cartWrapper.querySelector('.card__title').textContent,
      weight: cartWrapper.querySelector('.details__price-weight').textContent.slice(0, -1),
      price: cartWrapper.querySelector('.details__price-currency').textContent.slice(0, -1),
      counter: cartWrapper.querySelector('[data-counter]').textContent
    }

    // проверка если счетчик 0 не добовляем в корзину
    if (productInfo.counter !== '0') {
      setElementCartHtml(productInfo);
      getCartvisibility();
    }

    // обнуление счетчика после добавления в корзину
    const currentRestart = cartWrapper.querySelector('.details__current');
    currentRestart.textContent = 0;
  }

  // обёртка всех элементов в корзине
  const cartWrapper = document.querySelector('.cart__inner');

  // добавление видимости корзины
  function getCartvisibility() {
    const cartActive = cartWrapper.closest('.cart');
    cartActive.classList.add('cart--active');
    if (cartWrapper.childElementCount === 0) {
      cartActive.classList.remove('cart--active');
    }
  }

  // добавление товара в HTML
  function setElementCartHtml(data) {

    const { id, title, price, counter, imgSrc, weight } = data;

    // Проверка наличия тавара в корзине
    const itemIncart = cartWrapper.querySelector(`[data-id="${id}"]`);
    //елси товар есть то прибовляем значение к счетчику 
    if (itemIncart) {
      const counterElement = itemIncart.querySelector('.details__current');
      counterElement.textContent = +counterElement.textContent + +counter;
      getTotalPriceCart();
      return;
    }

    // вставка элемента
    const cartHtml = `
      <div class="cart__item" data-id="${id}">
        <h3 class="cart__title">${title}</h3>

        <img class="cart__images" src="${imgSrc}" alt="${title}" width="400" height="200">


      <ul class="details__list">
        <li class="details__button">
          <button class="details__btn" type="button" data-action="minus">-</button>
        </li>

        <li class="details__current" data-counter>${counter}</li>

        <li class="details__button">
          <button class="details__btn" type="button" data-action="plus">+</button>
        </li>
      </ul>

        <span class="cart__price" data-price>${price}$</span>
        <span class="cart__weight">${weight}г.</span>
      </div>
    `
    cartWrapper.insertAdjacentHTML('beforeend', cartHtml);

    getTotalPriceCart();
  }

  // общая цена
  function getTotalPriceCart() {
    const priceAllItems = cartWrapper.querySelectorAll('[data-price]');
    const counterAllItems = cartWrapper.querySelectorAll('[data-counter]');
    let totalPrice = 0;

    for (let i = 0; i < priceAllItems.length; i++) {
      const prices = priceAllItems[i].textContent.slice(0, -1);
      const counters = counterAllItems[i].textContent;
      totalPrice += (+prices * +counters);
    }

    const cart = cartWrapper.closest('.cart');
    const cartTotalPrice = cart.querySelector('.cart__total-price');
    cartTotalPrice.textContent = `Итого:${totalPrice}`;

    getDelivery(totalPrice, cart);
  }

  // доставка бесплатно добавление класса
  function getDelivery(sum, wrapperElem) {
    const deliveryPaid = wrapperElem.querySelector('.cart__delivery-paid');
    const deliveryPrice = wrapperElem.querySelector('.cart__delivery-free');
    const priceFree = deliveryPrice.dataset.delivery;

    if (sum >= +priceFree) {
      deliveryPrice.removeAttribute('hidden');
      deliveryPaid.setAttribute('hidden', '');
    } else {
      deliveryPrice.setAttribute('hidden', '');
      deliveryPaid.removeAttribute('hidden');
    }
  }
























}