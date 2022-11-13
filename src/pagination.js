import { productCard } from "./productCard.js";

export const container = document.getElementById('product');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let page = 0;

export const loadProductCard = (data) => {
    for (let i = 0; i < page + 6; i++) {
        const { name, url_image, price, id } = data[i];
        productCard(name, url_image, price, id);
    }
}

const nextPageCards = () => {
    page == data.length - 6
    ? (page = 0)
    : (page += 6)
    if (page > 42) {
        page += 3;
    }
    container.innerHTML = '';
    for (let i = page; i < page + 6; i++) {
        const { name, url_image, price, id } = data[i];
        productCard(name, url_image, price, id);
    }
}

const prevPageCards = () => {
    page == 0
    ? (data.length - 6)
    : (page -= 6)
    if (page > 42) {
        page -= 3;
    }
    container.innerHTML = '';
    for (let i = page; i < page + 6; i++) {
        const { name, url_image, price, id } = data[i];
        productCard(name, url_image, price, id);
    }
}

next.addEventListener('click', nextPageCards());
prev.addEventListener('click', prevPageCards());

