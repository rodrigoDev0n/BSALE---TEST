import { loadProductCard } from './pagination.js';
import { categories } from './helpers/getCategoriesData.js';
import { onSearch } from './searchProduct.js';

const categorias = document.getElementById('categorias');

loadProductCard();

const btn = document.getElementById('searchButton');
