import { container } from "./pagination.js";
import { productCard } from "./productCard.js";
import { loadProductCard } from "./pagination.js";

const searchBar = document.getElementById('searchbar');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', (event) => onSearch(event));

export const onSearch = async (event) => {
    event.preventDefault();
    let url = `http://localhost:3306/api/products/${searchBar.value}`;
    const res = await fetch(url);
    const data = await res.json();
    container.innerHTML = '';
    console.log(data);
    data.length > 6
    ? loadProductCard(data)
    : data.map(({ name, url_image, price, id }) => {
        productCard(name, url_image, price, id);
    });
}
