function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";

    let totalPrice = 0;
    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        cartContainer.innerHTML += `
                    <div class="cart-item flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
                        <div>
                            <p class="font-bold text-lg">${item.name}</p>
                            <p class="text-gray-500">Price: $${item.price}</p>
                            <p class="text-gray-500">Total: $${itemTotal.toFixed(2)}</p>
                        </div>
                        <div class="flex items-center space-x-4">
                            <button onclick="changeQuantity('${item.name}', -1)" class="bg-red-500 text-white px-3 py-1 rounded">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="changeQuantity('${item.name}', 1)" class="bg-green-500 text-white px-3 py-1 rounded">+</button>
                        </div>
                    </div>
                `;
    });

    document.getElementById("total-price").innerText = `$${totalPrice.toFixed(2)}`;
}

function changeQuantity(productName, change) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const product = cartItems.find(item => item.name === productName);

    if (product) {
        product.quantity += change;

        if (product.quantity < 1) {
            product.quantity = 1;
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        loadCart();
    }
}


function clearCart() {
    localStorage.removeItem('cartItems');
    loadCart();
}

window.onload = loadCart;