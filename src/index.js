import { loadProductCard } from './pagination.js';
import { categories } from './helpers/getCategoriesData.js';
import { onSearch } from './searchProduct.js';
import { data } from './helpers/getApiData.js';

const categorias = document.getElementById('categorias');

loadProductCard(data);

const btn = document.getElementById('searchButton');
