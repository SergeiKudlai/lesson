export function shop() {
  const btnMinus = 'shop__btn--minus';
  const btnPlus = 'shop__btn--plus';
  const shopBox = document.querySelector('.shop');
  const shopCart = shopBox.querySelector('.shop__cart');
  const shopPages = shopBox.querySelector('.shop__pages');


  let sum = 0;

  const cart = [
    { name: 'apple', amount: 0, price: 15 },
    { name: 'banan', amount: 0, price: 20 }
  ]

  const newObjResult = [...cart].reduce((acc, value) => {
    acc[value.name] = value;
    return acc;
  }, {});


  shopCart.innerHTML = sum;

  document.addEventListener('click', e => {
    const { target } = e;
    target.classList.contains(btnPlus) && setCartPLus(target.dataset.id);
    target.classList.contains(btnMinus) && setCartMinus(target.dataset.id);
  })

  function setCartPLus(valueData) {
    Object.keys(newObjResult).filter(value => {
      if (value === valueData) {
        newObjResult[value].amount++;
        setShopPages(newObjResult[value]);
        getSunCart();
      }
    })
  }

  function setCartMinus(valueData) {
    Object.keys(newObjResult).filter(value => {
      if (value === valueData) {
        if (newObjResult[value].amount === 0) return;
        newObjResult[value].amount--;
        setShopPages(newObjResult[value]);
        getSunCart(true);
      }
    })
  }

  function getSumPrices(data) {
  }


  function setShopPages(data) {
    console.log(data);
  }

  function getSunCart(data) {
    data ? shopCart.innerHTML = --sum : shopCart.innerHTML = ++sum;
  }











}

