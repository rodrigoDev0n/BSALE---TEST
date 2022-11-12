import { container } from "./pagination.js";
import { productCard } from "./productCard.js";

const searchBar = document.getElementById('searchbar');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', (event) => onSearch(event));

export const onSearch = async (event) => {
    event.preventDefault();
    let url = `http://localhost:3306/api/products/${searchBar.value}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    container.innerHTML = '';
    data.map(({ name, url_image, price, id }) => {
        productCard(name, url_image, price, id);
    });
}
