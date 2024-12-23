// Butonu seç
const themeToggle = document.getElementById('theme-toggle');

// Varsayılan tema durumu
let isDarkMode = false;

// Tema değiştirme fonksiyonu
themeToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode; // Durumu değiştir

  if (isDarkMode) {
    document.body.classList.add('dark'); // Karanlık tema ekle
    themeToggle.textContent = '☀️ Aydınlık Mod'; // Buton yazısını değiştir
  } else {
    document.body.classList.remove('dark'); // Karanlık temayı kaldır
    themeToggle.textContent = '🌙 Karanlık Mod'; // Buton yazısını değiştir
  }
});






