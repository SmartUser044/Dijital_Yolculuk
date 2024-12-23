// search.js
window.onload = function() {
    // URL'den "q" parametresini al
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q');
    
    // Arama yapılmadıysa hata mesajı göster
    if (!searchQuery) {
      document.getElementById('results').innerHTML = "Lütfen bir şeyler arayın.";
      return;
    }
  
    // Arama sonuçlarını burada simüle edeceğiz
    const allContent = [
      { title: "Portfolyo", description: "Web geliştirme ve tasarım projelerim." },
      { title: "Blog", description: "Teknoloji, yazılım ve yaşam üzerine yazılar." },
      { title: "To-Do List", description: "Yapılacaklar listesini oluştur." },
      { title: "Ana Sayfa", description: "Web sitesinin ana sayfası." }
    ];
  
    // Arama sonuçlarını filtrele
    const results = allContent.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Arama sonuçlarını göster
    const resultsContainer = document.getElementById('results');
    if (results.length > 0) {
      results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('result-item');
        resultElement.innerHTML = `<h3>${result.title}</h3><p>${result.description}</p>`;
        resultsContainer.appendChild(resultElement);
      });
    } else {
      resultsContainer.innerHTML = "Hiçbir sonuç bulunamadı.";
    }
  }
  