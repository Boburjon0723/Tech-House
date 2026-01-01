// product-detail.js

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (!productId) {
        showError("Mahsulot topilmadi");
        return;
    }

    const product = products.find(p => p.id === productId);

    if (!product) {
        showError("Mahsulot topilmadi");
        return;
    }

    renderProductDetail(product);
});

function renderProductDetail(product) {
    const container = document.getElementById('product-detail-container');

    // Titleni o'zgartirish
    document.title = `${product.name} - Tech House`;

    const oldPriceHtml = product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)} so'm</span>` : '';
    const badgeHtml = product.badge ? `<div class="product-badge ${product.badge === 'sale' ? 'sale' : ''}">${product.badgeText || product.badge}</div>` : '';

    const featuresHtml = product.features.map(f => `<li><i class="bi bi-check-circle-fill"></i> ${f}</li>`).join('');

    container.innerHTML = `
        <section class="product-detail-section">
            <div class="container">
                <div class="product-detail-grid">
                    <div class="product-gallery">
                        ${badgeHtml}
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h1>${product.name}</h1>
                        <div class="price-box">
                            ${oldPriceHtml}
                            <span class="current-price">${formatPrice(product.price)} so'm</span>
                        </div>
                        <p class="description">${product.description}</p>
                        
                        <div class="features-list">
                            <h3>Asosiy xususiyatlari:</h3>
                            <ul>
                                ${featuresHtml}
                            </ul>
                        </div>

                        <div class="action-btns">
                            <button class="btn-buy" onclick="handleDetailPageAddToCart('${product.name}', ${product.price}, '${product.image}')">
                                <i class="bi bi-cart-plus"></i> Savatga qo'shish
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Headerdagi savat sonini yangilash
    updateCartDisplay();
}

function showError(message) {
    const container = document.getElementById('product-detail-container');
    container.innerHTML = `
        <div class="container py-5 text-center">
            <h2 class="text-danger">${message}</h2>
            <a href="./index.html" class="btn btn-primary mt-3">Bosh sahifaga qaytish</a>
        </div>
    `;
}

// Savatga qo'shish funksiyasi (Batafsil sahifa uchun maxsus)
function handleDetailPageAddToCart(name, price, image) {
    let cartData = JSON.parse(localStorage.getItem('techhouse_cart')) || [];
    const existingProduct = cartData.find(item => item.name === name);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cartData.push({
            name: name,
            price: price,
            quantity: 1,
            image: image
        });
    }

    localStorage.setItem('techhouse_cart', JSON.stringify(cartData));
    updateCartDisplay();
    showNotification('Mahsulot savatga qo\'shildi! ✓');
}
