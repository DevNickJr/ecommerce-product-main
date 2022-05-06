// lightbox product switch
current = 0
const products = ['./images/image-product-1.jpg', './images/image-product-2.jpg', './images/image-product-3.jpg', './images/image-product-4.jpg']
const productsThumbnail = ['./images/image-product-1-thumbnail.jpg', './images/image-product-2-thumbnail.jpg', './images/image-product-3-thumbnail.jpg', './images/image-product-4-thumbnail.jpg']

function nextProduct() {
    const img = document.querySelector('.product-img')
    current++
    if (current > products.length-1) {
        current = 0;
    }
    img.src = products[current]
}
function previousProduct() {
    const img = document.querySelector('.product-img')
    current--
    if (current < 0) {
        current = products.length-1;
    }
    img.src = products[current]
}

document.querySelector('#next-product').addEventListener('click', nextProduct)
document.querySelector('#previous-product').addEventListener('click', previousProduct)


// cart
// open/close cart
let number = 0
function cart() {
    const cart = document.getElementById('cart-div');
    if (cart.classList.value.includes('show')) {
        cart.classList.remove('show');
    } else {
        cart.classList.add('show');
    }
}
// add/remove from cart
function increaseQuantity() {
    number++
    const quantity = document.getElementById('quantity');
    quantity.innerHTML = number;
}
function decreaseQuantity() {
    if (!number == 0) {
        number--        
    }
    const quantity = document.getElementById('quantity');
    quantity.innerHTML = number;
}


function addToCart() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const quantity = parseInt(document.getElementById('quantity').innerHTML);
    const price = parseInt(document.getElementById('price').innerHTML.slice(1));

    const cartItems = document.createElement('div');
    cartItems.classList.add('cart-items');
    cartItems.id = 'cart-items';


    cartItems.innerHTML = `<img width="50px" src="${productsThumbnail[current]}" alt="product-image"></img>`

    const details = document.createElement('div');
    details.classList.add('card-items__details');
    details.innerHTML = `<h3>Autumn Limited Edition...</h3><span class="price-total">$${price}.00 x ${quantity} $${price*quantity}.00</span>`;
    
    // delete btn
    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = `<img src="./images/icon-delete.svg" alt=""></div>`
    

    console.log(cartItemsContainer)
    cartItems.appendChild(details)
    cartItems.appendChild(deleteBtn)
    cartItemsContainer.appendChild(cartItems);

}


document.getElementById('increase-quantity').addEventListener('click', increaseQuantity);
document.getElementById('decrease-quantity').addEventListener('click', decreaseQuantity);
document.getElementById('add-to-cart').addEventListener('click', addToCart);
document.getElementById('cart').addEventListener('click', cart);