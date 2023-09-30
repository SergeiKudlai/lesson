export class PageCart {
  constructor() {
    this.body = document.body;
  }

  addedElements() {
    const data = JSON.parse(localStorage.getItem("card"));

    if (data?.length === 0) {
      return `
        <span class="cart__void">Корзина пуста</span>
      `;
    }

    if (data) {
      return data
        .sort((a, b) => a.id - b.id)
        .map((value, index) => {
          const { title, amount, desscription, id, images, price } = value;
          return `
                <li class="cart__box" data-id=${id}>
                    <span>${++index}</span>

                    <h2 class="cart__title" data-title>${title}</h2>

                    <div class="product__box-img">
                        <img class="product__img" src=${images} alt=${title} data-img>
                    </div>

                    <span data-amount>${amount}</span>

                    <span class="sr-only" data-des>${desscription}</span>
                    <span class="sr-only" data-price>${price}</span>

                    <span class="cart__price">${(+price * +amount).toFixed(
                      2
                    )}$</span>
                    
                    <ul class="cart__box-buttons" data-buttons>
                        <li class="cart__button">
                            <button class="cart__btn" type="button" data-cart-plus>&gt</button>
                        </li>

                        <li class="cart__button">
                            <button class="cart__btn" type="button" data-cart-minus>&lt</button>
                        </li>
                    </ul>
                </li>
            `;
        })
        .join("");
    } else {
      return `
        <span class="cart__void">Корзина пуста</span>
      `;
    }
  }

  render = () => {
    const box = this.body.querySelector(".cart__inner");

    if (box) box.innerHTML = "";

    return `<div class="cart container hiden">
        <button class="cart__close" type="button" data-btn-close>X</button>

        <div class="cart__wrapper">
            <div class="cart__box-top">
                <h1 class="sr-only">Корзина</h1>
                <img class="cart__icon" src="../assets/icon/cart.png" alt="cart" width=40 height=40>
                <button class="cart__btn-remove" type="button" data-clear-cart>
                    Очистить корзину
                </button>
            </div>
          
            <ul class="cart__inner">
                ${
                  box
                    ? box.insertAdjacentHTML("afterbegin", this.addedElements())
                    : null
                }
            </ul>
        </div>
    </div>`;
  };
}
