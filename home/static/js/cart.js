const updateBtns = document.querySelectorAll(".update-cart");

updateBtns.forEach((element) => {
  element.addEventListener("click", (event) => {
    var bookID = element.dataset.book;
    var action = element.dataset.action;
    console.log("bookID:", bookID, "action:", action);
  });
});

const subtotalElem = document.querySelector('.subtotal');
const shippingElem = document.querySelector('.shipping');
if(parseInt(subtotalElem.textContent) === 0) {
  shippingElem.textContent = 0;
}
const totalElem = document.querySelector('.total span');

const subtotal = parseInt(subtotalElem.textContent);
const shipping = parseInt(shippingElem.textContent);

const total = subtotal + shipping;

totalElem.textContent = total;
