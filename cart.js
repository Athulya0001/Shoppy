function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const totalPriceElement = document.getElementById('totalPrice');
    const quantityElement = document.getElementById('quantity');
  const priceElement = document.getElementById('price');

    cartItemsContainer.innerHTML = ''; 

    if (cartItems.length === 0) {
        cartSummary.classList.add('hidden');
        emptyCartMessage.classList.remove('hidden');
        return;
    }

    emptyCartMessage.classList.add('hidden');
    cartSummary.classList.remove('hidden');

    let totalPrice = 0;
    let totalQuantity = 0;


    cartItems.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        totalQuantity += item.quantity;


        const cartItem = document.createElement('div');
        cartItem.classList.add('flex', 'justify-between', 'items-center', 'py-2', 'border-b', 'border-gray-200');

        cartItem.innerHTML = `
            <div class="flex flex-col">
            <div class="mb-2">
                <h3 class="text-lg font-medium text-gray-800">${item.name}</h3>
                <p class="text-sm text-gray-600">Price: $${item.price.toFixed(2)} | Total Price: $${itemTotal.toFixed(2)} | Quantity: 
                    <button class="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition" 
                        onclick="decreaseQuantity(${index})">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition" 
                        onclick="increaseQuantity(${index})">+</button>
                </p>
                
            </div>
            <div>
                <button class="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition"
                    onclick="removeItem(${index})">Remove</button>
                    <button id="checkoutButton"
                class="bg-blue-400 text-white px-2 py-1 rounded-lg hover:bg-blue-600 transition">Buy Now
                </button>
            </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    quantityElement.textContent = `${totalQuantity}`
    priceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

function removeItem(index) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCart();
}

function increaseQuantity(index) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    cartItems[index].quantity += 1;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCart();
}

function decreaseQuantity(index) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
    } else {
        cartItems.splice(index, 1); 
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCart();
}
window.addEventListener('DOMContentLoaded', loadCart);