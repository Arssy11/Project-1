document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Cek mode yang disimpan di localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Toggle mode saat diklik
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'light');
        }
    });
});

// Efek muncul saat scroll untuk promo section
window.addEventListener('scroll', function() {
    const promo = document.getElementById('promo');
    if (promo) {
        const rect = promo.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            promo.classList.add('visible');
        }
    }
});

// Fungsi untuk FAQ (jika ada)
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});