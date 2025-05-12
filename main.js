// Saudação dinâmica
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = "Bom dia,";
    if (hour >= 12 && hour < 18) greeting = "Boa tarde,";
    if (hour >= 18) greeting = "Boa noite,";
    
    document.getElementById('dynamic-greeting').textContent = greeting;
  }
  
  // Modal de Relatórios
  const reportsBtn = document.getElementById('reportsBtn');
  const reportsModal = document.getElementById('reportsModal');
  const closeModal = document.getElementById('closeModal');
  
  reportsBtn.addEventListener('click', () => {
    reportsModal.style.display = 'flex';
  });
  
  closeModal.addEventListener('click', () => {
    reportsModal.style.display = 'none';
  });
  
  // Fechar modal ao clicar fora
  window.addEventListener('click', (e) => {
    if (e.target === reportsModal) {
      reportsModal.style.display = 'none';
    }
  });
  
 