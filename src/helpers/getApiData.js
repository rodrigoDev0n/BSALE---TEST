 
export const dataResult = [];
const url = 'http://localhost:3306/api/products/';
const categories = 'http://localhost:3306/api/category/';
const res = await fetch(url);
const data = await res.json();
data.map(e => dataResult.push(e));