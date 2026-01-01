
// Service Modals
const serviceModals = document.querySelectorAll('.service-modal');
const closeServiceBtns = document.querySelectorAll('.close-service-modal');
const serviceBtns = document.querySelectorAll('.btn-service');

// Service modal ochish
serviceBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const modalId = this.getAttribute('href').substring(1);
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Service modal yopish
closeServiceBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const modal = this.closest('.service-modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

// Modal tashqarisiga click
window.addEventListener('click', function (e) {
    serviceModals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Consultation form
const consultationForms = document.querySelectorAll('.consultation-form');
consultationForms.forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        showNotification('So\'rovingiz qabul qilindi! Tez orada aloqaga chiqamiz. ✓', 3000);
        this.reset();

        // Modalni yopish
        const modal = this.closest('.service-modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

