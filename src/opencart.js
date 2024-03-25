// import { getElement } from "./utils.js";

// const cart = getElement('.cart-overlay');
// const cartbtn = getElement('.cart-btn');
// const closeBtn = getElement('.cart-close')


// const opencart = () => {
//     cartbtn.addEventListener('click', function () {
//         cart.classList.add('show');
//     })
//     closeBtn.addEventListener('click', function () {
//         cart.classList.remove('show');
//     })
// }


// const opencart = () => {
//     cart.classList.add('show');
// };

import { getElement } from "./utils.js";
const cartOverlay = getElement('.cart-overlay');
const closeCartBtn = getElement('.cart-close');
const toggleCartBtn = getElement('.cart-btn');

toggleCartBtn.addEventListener('click', () => {
    cartOverlay.classList.add('show');
});
closeCartBtn.addEventListener('click', () => {
    cartOverlay.classList.remove('show');
});

const opencart = () => {
    cartOverlay.classList.add('show');
};


export default opencart;