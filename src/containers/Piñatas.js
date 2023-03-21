
const initialProducts = [
  { name: "Piñata Blue", id: 0, price: 3200, stock: 5, img: "../img/blue.jpg"},
  { name: "Piñana Buzz Lightyear", id: 1, price: 3000, stock: 2, img:"../img/buzz.png" },
  { name: "Piñata Spiderman", id: 2, price: 3200, stock: 3, img:"../img/spider.png" },
  { name: "Piñata stich", id: 3, price: 2800, stock: 4, img:"../img/stich.png" },
];


export const getProducts = () => {
  return new Promise((res, rej) => {

    res(initialProducts);
    ;
  });
}

export default getProducts;