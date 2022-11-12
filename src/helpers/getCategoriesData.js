export const categories = [];
const url = 'http://localhost:3306/api/categories/';
const res = await fetch(url);
const data = await res.json();
data.map(e => categories.push(e));