// Saudação dinâmica
// Atualizar saudação conforme horário
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    const greetingElement = document.getElementById('dynamic-greeting');
    
    if (hour >= 5 && hour < 12) {
      greetingElement.textContent = 'Bom dia, Ti';
    } else if (hour >= 12 && hour < 18) {
      greetingElement.textContent = 'Boa tarde, Ti';
    } else {
      greetingElement.textContent = 'Boa noite, Ti';
    }
  }
  
  // Chamar a função quando a página carregar
  document.addEventListener('DOMContentLoaded', function() {
    updateGreeting();
    
    // Verificar se o Font Awesome está carregado (para o ícone do foguete)
    if(typeof window.FontAwesome !== 'undefined') {
      document.getElementById('user-avatar').classList.add('fa-loaded');
    }
  });
  
  // Atualizar a cada minuto para garantir precisão
  setInterval(updateGreeting, 60000);
    
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
    
  
  
    window.onload = () => {
      const notificacao = document.querySelector('.notificacao-politica');
  
      if (!localStorage.getItem("politicaEstoqueLida")) {
        notificacao.style.display = 'flex';
        document.body.classList.add('tem-notificacao');
      } else {
        notificacao.style.display = 'none';
      }
    };
  
     function fecharNotificacao() {
      document.getElementById("notificacao-politica").style.display = "none";
    }
  
  
    const link = document.getElementById('desligamento-link');
    const modal = document.getElementById('confirmModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const confirmBtn = document.getElementById('confirmBtn');
  
    link.addEventListener('click', function(e) {
      e.preventDefault();
      modal.style.display = 'flex';
    });
  
    cancelBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    confirmBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      window.open(link.href, '_blank');
    });
  
    // Fecha modal ao clicar fora
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });