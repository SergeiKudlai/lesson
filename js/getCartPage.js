import { PageCart } from "./pageCart.js";

export class GetPageCart {
  constructor() {
    this.cartBox = new PageCart();
  }

  setClearCart() {
    localStorage.clear("card");
    this.cartBox.render();
  }
}
