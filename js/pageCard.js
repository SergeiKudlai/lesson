import { PageCart } from "./pageCart.js";
import { GetPageCart } from "./getCartPage.js";

export class Product {
  constructor() {
    this.body = document.body;
    this.cartBox = new PageCart();
  }

  renderContainer = () => `
            ${this.cartBox.render()}    
            <div class="product container">
                <div class="product__input-box">
                    <button class="home__btn" type="button" data-home-btn>Home</button>
                    <input class="product__search" type="search" data-search>
                    <button class="product__cart" type="button" data-cart>Корзина</button>
                </div>
        
                <ul class="product__wrapper"></ul>
            </div>`;

  async getResponse() {
    try {
      const resposne = await fetch("https://fakestoreapi.com/products");
      if (!resposne.ok)
        throw new Error(`Ошибка сервера статус: ${resposne.status}`);
      this.getData(await resposne.json());
    } catch (error) {
      console.error("error", error);
    }
  }

  async getData(data) {
    this.body.insertAdjacentHTML("afterbegin", this.renderContainer());
    this.render(data);

    const search = this.body.querySelector("[data-search]");

    search.addEventListener("input", async ({ target }) => {
      const { value } = target;
      const result = data.filter((arr) => {
        if (arr.title.includes(value)) return arr;
      });

      this.render(result);
    });
  }

  async render(data) {
    const productWrapper = document.querySelector(".product__wrapper");
    productWrapper.innerHTML = "";

    data.map((value) => {
      const { category, description, id, image, price, rating, title } = value;

      const html = `
              <li class="product__inner" data-id=${id}>
                  <h2 class="product__title" title=${category} data-title>${title}</h2>
      
                  <div class="product__box-img">
                      <img class="product__img" src="${image}" data-img width=200 height=200 alt=${title}>
                  </div>
      
                  <p class="product__description" data-des>${description}</p>
      
                  <div class="product__box">
                      <span>Price:<span data-price>${price}</span>$</span>
                      <span>Рейтинг: ${rating.rate}</span>
                  </div>
      
                  <ul class="product__buttons" data-buttons>
                      <li class="product__buttons-box">
                          <button class="product__btn" type="button" data-minus=${id}>-</button>
                      </li>
      
                      <li data-amount>
                          ${0}
                      </li>
      
                      <li class="product__buttons-box">
                          <button class="product__btn" type="button" data-plus=${id}>+</button>
                      </li>
                  </ul>
      
                  <button class="product__btn-cart" type="button" data-btn-id=${id}>В корзину</button>
              </li>`;

      productWrapper.insertAdjacentHTML("beforeend", html);
    });
  }
}

class getCart extends Product {
  constructor() {
    super();
    this.pageCart = new GetPageCart();
  }

  getSearchElement() {
    this.body.addEventListener("click", ({ target }) => {
      target.hasAttribute("data-cart") && this.getShowPageCart();
      target.hasAttribute("data-btn-close") && this.getHidenPage();
      target.dataset.btnId && this.getAddedCart(target);
      target.dataset.minus && this.getAmount(target, false);
      target.dataset.plus && this.getAmount(target, true);
      target.hasAttribute("data-img") && this.getModalCard(target);
      target.hasAttribute("data-clear-cart") && this.pageCart.setClearCart();
      if (target.hasAttribute("data-cart-plus")) {
        this.getAmount(target, true);
        this.getAddedCart(target);
        this.cartBox.render();
      }

      if (target.hasAttribute("data-cart-minus")) {
        this.getAmount(target, false);
        this.getAddedCart(target);
        this.cartBox.render();
      }
    });
  }

  getModalCard(elem) {
    const cardBox = elem.closest("[data-id]");
    const imgBox = cardBox.querySelector(".product__box-img");
    const cardDescription = cardBox.querySelector("[data-des]");
    elem.classList.toggle("active");
    imgBox.classList.toggle("active");
    cardDescription.classList.toggle("active");
    this.body.classList.toggle("active");
  }

  getAmount(element, valid) {
    const parentElement = element.closest("[data-id]");
    const amount = parentElement.querySelector("[data-amount]");

    if (valid) {
      +amount.textContent++;
    } else {
      if (+amount.textContent === 0) return;

      +amount.textContent--;
    }
  }

  getAddedCart(element) {
    const parentElement = element.closest("[data-id]");

    const obj = {
      id: parentElement.dataset.id,
      title: parentElement.querySelector("[data-title]").textContent,
      images: parentElement.querySelector("[data-img]").getAttribute("src"),
      desscription: parentElement.querySelector("[data-des]").textContent,
      price: parentElement.querySelector("[data-price]").textContent,
      amount: parentElement.querySelector("[data-amount]").textContent,
    };

    if (obj.amount.trim() === "0") {
      if (element.hasAttribute("data-cart-minus")) {
        const validLocal = JSON.parse(localStorage.getItem("card"));

        validLocal.forEach((value, index, arr) => {
          if (value.id === obj.id) {
            arr.splice(index, 1);
            localStorage.setItem("card", JSON.stringify(arr));
          }
        });

        return;
      } else {
        return;
      }
    }

    this.setAddCardLocalStorage(obj);

    if (element.dataset.btnId) {
      parentElement.querySelector("[data-amount]").textContent = "0";
    }
  }

  setAddCardLocalStorage(data) {
    let result;

    const VALID_STORAGE = localStorage.getItem("card");

    VALID_STORAGE ? (result = JSON.parse(VALID_STORAGE)) : (result = []);

    result.forEach((value, index, arr) => {
      value.id === data.id && arr.splice(index, 1);
    });

    result.push(data);
    localStorage.setItem("card", JSON.stringify(result));
  }

  getElements() {
    return {
      product: this.body.querySelector(".product"),
      cart: this.body.querySelector(".cart"),
    };
  }

  getShowPageCart() {
    const { cart, product } = this.getElements();
    this.cartBox.render();
    product.classList.add("active");
    cart.classList.add("show");
    this.body.classList.add("active");

    product.addEventListener("animationend", ({ target }) => {
      target.classList.remove("active");
      target.classList.add("hiden");
      cart.classList.remove("active");
      cart.classList.remove("hiden");
      this.body.classList.remove("active");
    });

    cart.classList.add("active");
  }

  getHidenPage() {
    const { cart, product } = this.getElements();
    product.classList.add("show");
    cart.classList.add("animation-right");
    this.body.classList.add("active");

    product.addEventListener("animationend", ({ target }) => {
      target.classList.remove("hiden");
      target.classList.remove("show");
      cart.classList.add("hiden");
      cart.classList.remove("animation-right");
      cart.classList.remove("show");
      this.body.classList.remove("active");
    });
  }
}

new getCart().getSearchElement();
