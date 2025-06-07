// Optimizirana funkcionalnost za FAQ stranicu
document.addEventListener('DOMContentLoaded', function() {
  // Elementi
  const faqItems = document.querySelectorAll('.faq-item');
  
  // Funkcija za otvaranje/zatvaranje FAQ itema
  function toggleFaqItem() {
    const faqItem = this.closest('.faq-item');
    
    // Ako je već aktivan, zatvori ga
    if (faqItem.classList.contains('active')) {
      faqItem.classList.remove('active');
      return;
    }
    
    // Zatvori sve ostale
    faqItems.forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('active');
      }
    });
    
    // Otvori kliknuti
    faqItem.classList.add('active');
  }
  
  // Dodaj event listenere na pitanja
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', toggleFaqItem);
  });
  
  // Omogući otvaranje prvog pitanja pri učitavanju stranice
  if (faqItems.length > 0) {
    setTimeout(() => {
      faqItems[0].classList.add('active');
    }, 500);
  }
});
