document.addEventListener("DOMContentLoaded", function () {
    // Hilangkan preloader setelah loading selesai
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 2000);

    // Efek muncul saat scroll
    let elements = document.querySelectorAll(".fade-in");
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));

    // Mode gelap & terang (toggle theme)
    document.getElementById("themeToggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Gambar Zoom Modal dengan Navigasi
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImg");
    let images = document.querySelectorAll(".gallery img");
    let currentIndex = 0;

    function openModal(index) {
        modal.classList.add("active");
        modalImg.src = images[index].src;
        currentIndex = index;
    }

    function closeModal() {
        modal.classList.remove("active");
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex].src;
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentIndex].src;
    }

    images.forEach((img, index) => img.addEventListener("click", () => openModal(index)));
    document.getElementById("closeModal").addEventListener("click", closeModal);
    document.getElementById("nextImg").addEventListener("click", nextImage);
    document.getElementById("prevImg").addEventListener("click", prevImage);
});
