const cart = {
    items: JSON.parse(localStorage.getItem('cartItems') || '[]'),

    updateQuantity(index, delta) {
        const item = this.items[index];
        item.quantity = Math.max(1, item.quantity + delta);
        item.totalPrice = item.price * item.quantity;
        this.updateCart();
    },

    removeItem(index) {
        this.items.splice(index, 1);
        this.updateCart();
    },

    updateCart() {
        const checkoutItems = document.getElementById('checkoutItems');
        const totalPrice = document.getElementById('totalPrice');

        const savedItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
const checkoutmo = document.querySelector('.checkoutmo');

if(savedItems.length === 0) {
checkoutmo.innerHTML = `
    <div class=" d-flex flex-column justify-content-center" style="height: 200px;">
        <h1 class="text-center text-secondary">Shopping Cart</h1>

<h6 class="text-center text-secondary">Your shopping cart is empty!</h6>
<button class="btn btn-outline-secondary  " style="width: 150px; margin: 0 auto;" onclick="location.href='index.html'">Continue </button>
    </div>
`;
return;
}
        checkoutItems.innerHTML = this.items.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="flex-grow-1">
                    <h6>${item.name}</h6>
                    <div class="quantity-controls">
                        <button class="btn btn-sm btn-outline-secondary" onclick="cart.updateQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-secondary" onclick="cart.updateQuantity(${index}, 1)">+</button>
                    </div>
                    <div class="mt-2">${item.totalPrice} $</div>
                </div>
                <button class="btn btn-sm btn-danger ms-3" onclick="cart.removeItem(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');

        const total = this.items.reduce((sum, item) => sum + item.totalPrice, 0);
        totalPrice.textContent = `${total} $`;
        
        
        localStorage.setItem('cartItems', JSON.stringify(this.items));
    }        };

document.addEventListener('DOMContentLoaded', () => {
    const savedItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    cart.items = savedItems;
    cart.updateCart();
    renderProducts();
});
      ;