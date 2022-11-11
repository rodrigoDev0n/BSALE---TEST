import { dataResult } from './helpers/getApiData.js';
import { addFunction } from './addCart.js';

const container = document.getElementById('product');

export const productCard = (name, img, price, id) => {
    const productCard = document.createElement('div');
    const productHeader = document.createElement('header');
    const productImg = document.createElement('img');
    const productInfo = document.createElement('div');
    const productSection = document.createElement('section');
    const productTitle = document.createElement('h3');
    const productIcon = document.createElement('i');
    const productPriceContainer = document.createElement('div');
    const productPrice = document.createElement('h4');

    //Asignando clases:
    productCard.className = 'card-product';
    productHeader.className = 'card-header';
    productInfo.className = 'card-product-info';
    productIcon.className = 'fa-solid fa-cart-shopping'
    productPriceContainer.className = 'product-price-container';

    //ids:
    productIcon.id = id;

    productIcon.onclick = () => addFunction(id);

    //Asignando contenido:
    productImg.src = img;
    productTitle.textContent = name;
    productPrice.textContent = `$${price}`;

    productHeader.appendChild(productImg);
    productPriceContainer.appendChild(productPrice);
    productPriceContainer.appendChild(productIcon);
    productSection.appendChild(productTitle);
    productSection.appendChild(productPriceContainer);
    productInfo.appendChild(productSection);
    productCard.appendChild(productHeader);
    productCard.appendChild(productInfo);
    container.appendChild(productCard);
}

export const loadProductCard = () => {
    dataResult.map(({name, url_image, price, id}) => productCard(name, url_image, price, id));
}