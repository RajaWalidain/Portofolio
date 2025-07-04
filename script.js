// SMOOTH SCROLLING UNTUK NAVIGASI
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // 1. Mencegah perilaku default (melompat)
        e.preventDefault();

        // 2. Ambil elemen tujuan berdasarkan href dari link
        const target = document.querySelector(this.getAttribute('href'));

        // 3. Jika elemen tujuan ada, scroll ke sana dengan mulus
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});