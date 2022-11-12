
let url = `http://localhost:3306/api/products/`;
const res = await fetch(url);
export const data = await res.json();