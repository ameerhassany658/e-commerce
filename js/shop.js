const products = [
    {id: 1, name: 'I-Phone', category: 'electronics', price: 600, rating: 4, image: './img/01-270x270.webp' },
    {id: 2, name: 'Smartphone', category: 'electronics', price: 150, rating: 4.5, image: './img/02-270x270.webp' },
    {id: 3, name: 'Smartphone', category: 'electronics', price: 200, rating: 3.5, image: './img/03-270x270.webp' },
    {id: 4, name: 'Smartphone', category: 'electronics', price: 200, rating: 4, image: './img/04-270x270.webp' },
    {id: 5, name: 'Laptop', category: 'electronics', price: 800, rating: 4.5, image: './img/05-270x270.webp' },
    {id: 6, name: 'blouse', category: 'fashion', price: 100, rating: 3.5, image: './img/33-270x270.webp' },
    {id: 7, name: 'Electrical device', category: 'electronics', price: 200, rating: 4.5, image: './img/07-270x270.webp' },
    {id: 8, name: 'T-Shirt', category: 'fashion', price: 100, rating: 4, image: './img/11-270x270.webp' },
    {id: 9, name: 'I-Phone', category: 'electronics', price: 800, rating: 3.5, image: './img/08.webp' },
    {id: 10, name: 'screen', category: 'electronics', price: 600, rating: 4.5, image: './img/2-270x270.webp' },
    {id: 11, name: 'Mixer', category: 'electronics', price: 100, rating: 4, image: './img/2.webp' },
    {id: 12, name: 'Laptop', category: 'electronics', price: 800, rating: 4.5, image: './img/3-270x270.webp' },
    {id: 13, name: 'Bag', category: 'fashion', price: 100, rating: 3.5, image: './img/44-270x270.webp' },
    {id: 14, name: 'Bacon tenderloin', category: 'electronics', price: 400, rating: 3.5, image: './img/4.webp' },
    {id: 15, name: 'I-Phone', category: 'electronics', price: 600, rating: 4.5, image: './img/6.webp' },
    {id: 16, name: 'Laptop', category: 'electronics', price: 800, rating: 4, image: './img/8.webp' },
    {id: 17, name: 'I-Phone', category: 'electronics', price: 600, rating: 3.5, image: './img/cate1.webp' },
    {id: 18, name: 'Laptop', category: 'electronics', price: 800, rating: 4.5, image: './img/cate2.webp' },
    {id: 19, name: 'Headphone', category: 'home', price: 10, rating: 4, image: './img/cate3.webp' },
    {id: 20, name: 'Cooking pot', category: 'electronics', price: 100, rating: 4.5, image: './img/cate4.webp' },
    {id: 21, name: 'playstation', category: 'electronics', price: 100, rating: 4, image: './img/cate5.webp' },
    {id: 22, name: 'Laptop', category: 'electronics', price: 800, rating: 4, image: './img/4-270x270.webp'},
    {id: 23, name: 'robot vacuum', category: 'electronics', price: 400, rating: 4, image: './img/cate7.webp' },
    {id: 24, name: 'Camera', category: 'home', price: 300, rating: 4.5, image: './img/cate8.webp' },
    {id: 25, name: 'Watch', category: 'electronics', price: 40, rating: 3.5, image: './img/cate9.webp' },
    {id: 26, name: 'Bag', category: 'fashion', price: 100, rating: 3.5, image: './img/22-270x270.webp' },
    {id: 27, name: 'Laptop', category: 'electronics', price: 800, rating: 4, image: './img/06-270x270.webp' },
    {id: 28, name: 'washing machine', category: 'electronics', price: 500, rating: 4.5, image: './img/cate6.webp' },
];

const cart = {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    
    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.price * existingItem.quantity;
        } else {
            this.items.push({
                ...product,
                quantity: 1,
                totalPrice: product.price
            });
        }
        this.updateCart();
    },

    updateQuantity(index, delta) {
        const item = this.items[index];
        const newQuantity = item.quantity + delta;
        
        if (newQuantity <= 0) {
            this.removeItem(index);
        } else {
            item.quantity = newQuantity;
            item.totalPrice = item.price * item.quantity;
            this.updateCart();
        }
        event.stopPropagation();
    },

    removeItem(index) {
        this.items.splice(index, 1);
        this.updateCart();
    },

    updateCart() {
        const cartCount = document.getElementById('cartCount');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        
        cartCount.textContent = this.items.reduce((sum, item) => sum + item.quantity, 0);
        
        cartItems.innerHTML = this.items.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="flex-grow-1">
                    <div>${item.name}</div>
                    <div class="quantity-controls">
                        <button class="btn btn-sm btn-outline-secondary" onclick="cart.updateQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-secondary" onclick="cart.updateQuantity(${index}, 1)">+</button>
                    </div>
                    <div>${item.totalPrice} $</div>
                </div>
                <button class="btn btn-sm btn-danger" onclick="cart.removeItem(${index})">×</button>
            </div>
        `).join('');
        
        localStorage.setItem('cartItems', JSON.stringify(this.items));
        const total = this.items.reduce((sum, item) => sum + item.totalPrice, 0);
        cartTotal.textContent = `${total} $`;
    }
};

function renderProducts(columns = 3) {
    const productContainer = document.getElementById('productContainer');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');

    productContainer.className = `row row-cols-1 row-cols-md-${columns}`;
    
    const filteredProducts = products.filter(product => {
        const categoryMatch = categoryFilter.value === 'all' || product.category === categoryFilter.value;
        const priceMatch = product.price <= parseInt(priceFilter.value);
        return categoryMatch && priceMatch;
    });

    productContainer.innerHTML = filteredProducts.map(product => `
        <div class="col mb-4 cardfather">
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="overlay">
                    <div class="mt-5 ms-2">
                        <button class="btn btn-light "><i class="fa-solid fa-basket-shopping"></i></button><br>
                        <button class="btn btn-light mt-4"><i class="fa fa-heart"></i></button><br>
                        <button class="btn btn-light mt-4"><i class="fa fa-random"></i></button>
                    </div>    
                    <button class="btn btn-light " onclick='cart.addItem(${JSON.stringify(product)})'>
                        Add to Cart
                    </button>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price} $</p>
                </div>
            </div>
        </div>
    `).join('');
}

document.getElementById('categoryFilter').addEventListener('change', () => renderProducts());
document.getElementById('priceFilter').addEventListener('input', (e) => {
    document.getElementById('priceValue').textContent = `0 - ${e.target.value} $`;
    renderProducts();
});
document.getElementById('grid2').addEventListener('click', () => renderProducts(2));
document.getElementById('grid3').addEventListener('click', () => renderProducts(3));
document.getElementById('grid4').addEventListener('click', () => renderProducts(4));
document.getElementById('grid5').addEventListener('click', () => renderProducts(5));

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});


  // start login
// Login popup handlers
document.getElementById('loginButton').addEventListener('click', function() {
    document.querySelector(".popup").style.display = "flex";
  });
  
  document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
  });
  
  document.querySelector(".popup").addEventListener("click", function(e) {
    if (e.target == this) {
        document.querySelector(".popup").style.display = "none";
    }
  });
  
  function loginUser() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    let users_arr = JSON.parse(localStorage.getItem("users")) || [];
  
    const currentUser = users_arr.find(user => 
        user.email === email && user.password === password
    );
  
    if (currentUser) {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        window.location.href = "../account.html";
    } else {
        alert("Invalid email or password");
    }
  }
  
        // end login
  