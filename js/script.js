// script.js - Tech House Uy Jihozlari

// Global o'zgaruvchilar
let cart = [];
let cartTotal = 0;

// DOM elementlari
const cartIcon = document.querySelector('.cart-icon');
const cartCountSpan = document.querySelector('.cart-count');
const searchInput = document.getElementById('search');
const categoryBtns = document.querySelectorAll('.category-btn');
const addToCartBtns = document.querySelectorAll('.btn-add-cart');

// Sahifa yuklanganda
document.addEventListener('DOMContentLoaded', function () {
    initializeEventListeners();
    updateCartDisplay();
});

// Event listener'larni sozlash
function initializeEventListeners() {
    // Qidiruv
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Kategoriya filtrlash
    if (categoryBtns) {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', handleCategoryFilter);
        });
    }

    // Savatga qo'shish tugmalari
    if (addToCartBtns) {
        addToCartBtns.forEach(btn => {
            btn.addEventListener('click', handleAddToCart);
        });
    }

    // Yetkazib berish o'zgarishi
    const deliveryRadios = document.querySelectorAll('input[name="delivery"]');
    if (deliveryRadios) {
        deliveryRadios.forEach(radio => {
            radio.addEventListener('change', updateDeliveryCost);
        });
    }

    // Mobil menu toggle
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('bi-list');
                icon.classList.toggle('bi-x');
            }
        });

        // Link bosilganda menuni yopish
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('bi-list');
                    icon.classList.remove('bi-x');
                }
            });
        });
    }
}

// Savatga mahsulot qo'shish
function handleAddToCart(e) {
    const productCard = e.target.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    const priceText = productCard.querySelector('.price').textContent.replace(/[^\d]/g, '');
    const price = parseInt(priceText);
    const imgSrc = productCard.querySelector('img').src;

    let cartData = JSON.parse(localStorage.getItem('techhouse_cart')) || [];
    const existingProduct = cartData.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cartData.push({
            name: productName,
            price: price,
            quantity: 1,
            image: imgSrc
        });
    }

    localStorage.setItem('techhouse_cart', JSON.stringify(cartData));
    updateCartDisplay();
    showNotification('Mahsulot savatga qo\'shildi! ✓');
}

// Savat ko'rinishini yangilash (Header uchun)
function updateCartDisplay() {
    const cartData = JSON.parse(localStorage.getItem('techhouse_cart')) || [];
    const count = cartData.reduce((sum, item) => sum + item.quantity, 0);

    if (cartCountSpan) {
        cartCountSpan.textContent = count;
    }
}

// Narxni formatlash
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// Qidiruv funksiyasi
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        const productDesc = card.querySelector('.product-description').textContent.toLowerCase();

        if (productName.includes(searchTerm) || productDesc.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Kategoriya filtrlash
function handleCategoryFilter(e) {
    const category = e.target.dataset.category;
    const productCards = document.querySelectorAll('.product-card');

    // Barcha tugmalardan active classni olib tashlash
    categoryBtns.forEach(btn => btn.classList.remove('active'));

    // Bosilgan tugmaga active class qo'shish
    e.target.classList.add('active');

    // Mahsulotlarni filtrlash
    productCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Bildirishnoma ko'rsatish
function showNotification(message, duration = 2000) {
    // Eski bildirishnomani o'chirish
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Yangi bildirishnoma yaratish
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #2ecc71;
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
        font-weight: 600;
    `;

    document.body.appendChild(notification);

    // Animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Bildirishnomani o'chirish
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 300);
    }, duration);
}

// Silliq scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form submit
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        showNotification('Xabaringiz yuborildi! Tez orada javob beramiz. ✓', 3000);
        this.reset();
    });
}