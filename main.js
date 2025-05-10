// Atualizar saudação conforme horário
function updateGreeting() {
    const hour = new Date().getHours();
    const greeting = document.getElementById('greeting');
    
    if (hour < 12) {
        greeting.textContent = 'Bom dia,';
    } else if (hour < 18) {
        greeting.textContent = 'Boa tarde,';
    } else {
        greeting.textContent = 'Boa noite,';
    }
}

// Modal functionality
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


document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.getElementById("shorti-intro").style.display = "none";
      
      const fusion = document.getElementById("fusion-transition");
      fusion.style.display = "flex";
      fusion.style.opacity = "1"; // mostra com fade-in
    }, 3000);
  
    setTimeout(() => {
      document.getElementById("fusion-transition").style.display = "none";
      document.getElementById("main-content").style.display = "block";
    }, 8000);
  });
  