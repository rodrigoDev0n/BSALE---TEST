/* import { dataResult } from "./helpers/getApiData.js";
import { productCard } from "./productCard.js";
import { dataResult } from "./helpers/getApiData.js";

const cart = document.getElementById('cartCounter');
const myCart = document.getElementById('cart');
const cartData = [];

export const addFunction = (id) => {
    dataResult.find(e => {
        if (e.id == id) {
            cartData.push(e)
            localStorage.setItem('cart', JSON.stringify(cartData));
        }
    });
};

myCart.addEventListener('click', () => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  cart.map((name, url_image, price, id) => {
    productCard(name, url_image, price, id);
  });
}); */






