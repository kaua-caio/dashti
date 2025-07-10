// Loading Screen
document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.getElementById('loadingScreen');
  
  setTimeout(() => {
      loadingScreen.classList.add('active');
  }, 100);
  
  window.addEventListener('load', function() {
      setTimeout(() => {
          loadingScreen.classList.add('fade-out');
          setTimeout(() => {
              loadingScreen.style.display = 'none';
          }, 500);
      }, 1000);
  });
});

// Bottom Modal Control
const bottomModal = document.getElementById('bottomModal');
const modalHandle = document.getElementById('modalHandle');

let isModalExpanded = false;

if (modalHandle && bottomModal) {
  modalHandle.addEventListener('click', function() {
      isModalExpanded = !isModalExpanded;
      if (isModalExpanded) {
          bottomModal.classList.add('expanded');
      } else {
          bottomModal.classList.remove('expanded');
      }
  });
}

// Dynamic Greeting
function updateGreeting() {
  const greetingElement = document.getElementById('dynamic-greeting');
  const hour = new Date().getHours();
  let greeting;
  
  if (hour >= 5 && hour < 12) {
      greeting = 'Bom dia';
  } else if (hour >= 12 && hour < 18) {
      greeting = 'Boa tarde';
  } else {
      greeting = 'Boa noite';
  }
  
  if (greetingElement) {
      greetingElement.textContent = greeting;
  }
}

updateGreeting();

// Notes functionality
function setupNotes() {
  const desktopNotes = document.querySelector('.notes-textarea');
  const saveNotesBtn = document.getElementById('saveNotes');
  const clearNotesBtn = document.getElementById('clearNotes');
  
  // Load saved notes from localStorage
  const savedNotes = localStorage.getItem('dashdoti_notes');
  if (savedNotes && desktopNotes) {
      desktopNotes.value = savedNotes;
  }
  
  // Save notes
  function saveNotes() {
      const notes = desktopNotes ? desktopNotes.value : '';
      localStorage.setItem('dashdoti_notes', notes);
      showNotification('Anotações salvas com sucesso!', 'success');
  }
  
  // Clear notes
  function clearNotes() {
      if (confirm('Tem certeza que deseja limpar todas as anotações?')) {
          if (desktopNotes) desktopNotes.value = '';
          localStorage.removeItem('dashdoti_notes');
          showNotification('Anotações apagadas.', 'success');
      }
  }
  
  // Event listeners
  if (saveNotesBtn) saveNotesBtn.addEventListener('click', saveNotes);
  if (clearNotesBtn) clearNotesBtn.addEventListener('click', clearNotes);
}

setupNotes();

// Close update banner
const closeUpdateBanner = document.getElementById('closeUpdateBanner');
if (closeUpdateBanner) {
  closeUpdateBanner.addEventListener('click', function() {
      const updateBanner = document.getElementById('updateBanner');
      if (updateBanner) {
          updateBanner.style.display = 'none';
      }
  });
}

// Controle do modal de atalhos rápidos no desktop
document.addEventListener('DOMContentLoaded', function() {
  const quickActionsModal = document.getElementById('desktopQuickActions');
  const openQuickActions = document.getElementById('openQuickActions');
  const closeQuickActions = document.getElementById('closeQuickActions');
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';
  document.body.appendChild(modalOverlay);
  
  // Abrir modal
  if (openQuickActions) {
      openQuickActions.addEventListener('click', function() {
          quickActionsModal.classList.add('active');
          modalOverlay.classList.add('active');
          document.body.style.overflow = 'hidden';
      });
  }
  
  // Fechar modal
  function closeModal() {
      quickActionsModal.classList.remove('active');
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
  }
  
  if (closeQuickActions) {
      closeQuickActions.addEventListener('click', closeModal);
  }
  modalOverlay.addEventListener('click', closeModal);
  
  // Fechar ao pressionar ESC
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
          closeModal();
      }
  });
});

// Controle do Modal de Pastas
document.addEventListener('DOMContentLoaded', function () {
  const openFoldersModal = document.getElementById('openFoldersModal');
  const foldersModal = document.getElementById('foldersModal');
  const foldersModalOverlay = document.getElementById('foldersModalOverlay');
  const closeFoldersModal = document.getElementById('closeFoldersModal');

  // Abrir o modal
  if (openFoldersModal) {
      openFoldersModal.addEventListener('click', function (e) {
          e.preventDefault();
          foldersModal.classList.add('active');
          foldersModalOverlay.classList.add('active');
          document.body.style.overflow = 'hidden';
      });
  }

  // Fechar o modal
  function closeModal() {
      foldersModal.classList.remove('active');
      foldersModalOverlay.classList.remove('active');
      document.body.style.overflow = '';
  }

  if (closeFoldersModal) {
      closeFoldersModal.addEventListener('click', closeModal);
  }
  if (foldersModalOverlay) {
      foldersModalOverlay.addEventListener('click', closeModal);
  }

  // Fechar ao pressionar ESC
  document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
          closeModal();
      }
  });
});

// Controle do Modal de Estoque
document.addEventListener('DOMContentLoaded', function () {
  const openStockModal = document.getElementById('openStockModal');
  const stockModal = document.getElementById('stockModal');
  const stockModalOverlay = document.getElementById('stockModalOverlay');
  const closeStockModal = document.getElementById('closeStockModal');

  // Abrir o modal
  if (openStockModal) {
      openStockModal.addEventListener('click', function (e) {
          e.preventDefault();
          stockModal.classList.add('active');
          stockModalOverlay.classList.add('active');
          document.body.style.overflow = 'hidden';
      });
  }

  // Fechar o modal
  function closeModal() {
      stockModal.classList.remove('active');
      stockModalOverlay.classList.remove('active');
      document.body.style.overflow = '';
  }

  if (closeStockModal) {
      closeStockModal.addEventListener('click', closeModal);
  }
  if (stockModalOverlay) {
      stockModalOverlay.addEventListener('click', closeModal);
  }

  // Fechar ao pressionar ESC
  document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
          closeModal();
      }
  });
});

// Exibir Notificação Personalizada
function showNotification(message, type) {
  const notification = document.getElementById('notification');
  const notificationMessage = document.getElementById('notificationMessage');
  const notificationIcon = document.getElementById('notificationIcon');

  if (!notification || !notificationMessage || !notificationIcon) return;

  // Configurar ícone e cor com base no tipo
  if (type === 'success') {
      notification.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
      notificationIcon.className = 'fas fa-check-circle';
  } else if (type === 'warning') {
      notification.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
      notificationIcon.className = 'fas fa-exclamation-circle';
  } else if (type === 'error') {
      notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
      notificationIcon.className = 'fas fa-times-circle';
  }

  // Configurar mensagem
  notificationMessage.textContent = message;

  // Exibir notificação
  notification.classList.remove('hidden');
  notification.classList.add('visible');

  // Ocultar notificação após 3 segundos
  setTimeout(() => {
      notification.classList.remove('visible');
      notification.classList.add('hidden');
  }, 3000);
}

// Salvar Notas como Arquivo .txt
function saveNotesAsFile() {
  const desktopNotes = document.querySelector('.notes-textarea');
  const notes = desktopNotes ? desktopNotes.value : '';
  
  if (!notes.trim()) {
      showNotification('Não há nada para salvar.', 'warning');
      return;
  }

  const now = new Date();
  const formattedDate = now.toLocaleDateString('pt-BR').replace(/\//g, '-');
  const formattedTime = now.toLocaleTimeString('pt-BR').replace(/:/g, '-');
  const fileName = `anotacoes-${formattedDate}-${formattedTime}.txt`;

  const blob = new Blob([notes], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();

  showNotification('Sua anotação foi salva com sucesso!', 'success');
}

// Adicionar eventos aos botões
const saveNotesBtn = document.getElementById('saveNotes');
if (saveNotesBtn) {
  saveNotesBtn.addEventListener('click', saveNotesAsFile);
}

// Abrir o Modal de Estoque
document.getElementById('openStockModal').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('stockModal').classList.add('active');
  document.getElementById('stockModalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
});

// Fechar o Modal de Estoque
document.getElementById('closeStockModal').addEventListener('click', closeStockModal);
document.getElementById('stockModalOverlay').addEventListener('click', closeStockModal);

function closeStockModal() {
  document.getElementById('stockModal').classList.remove('active');
  document.getElementById('stockModalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Abrir o Modal de Meu Hub
document.getElementById('openHubModal').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('hubModal').classList.add('active');
  document.getElementById('hubModalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
});

// Fechar o Modal de Meu Hub
document.getElementById('closeHubModal').addEventListener('click', closeHubModal);
document.getElementById('hubModalOverlay').addEventListener('click', closeHubModal);

function closeHubModal() {
  document.getElementById('hubModal').classList.remove('active');
  document.getElementById('hubModalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function () {
  const newsTitle = document.getElementById('newsTitle');
  const newsDate = document.getElementById('newsDate');
  const newsImage = document.getElementById('newsImage');

  // Substitua 'YOUR_API_KEY' pela sua chave da NewsAPI
  const apiKey = '82b7c85bdf1c437b83ee1e1fb5a474a5';
  const url = `https://newsapi.org/v2/everything?q=tecnologia&language=pt&sortBy=publishedAt&apiKey=${apiKey}`;

  let currentNewsIndex = 0;
  let newsArticles = [];

  function updateNews() {
      if (newsArticles.length > 0) {
          const article = newsArticles[currentNewsIndex];
          newsTitle.textContent = article.title;
          newsTitle.href = article.url;
          newsDate.textContent = new Date(article.publishedAt).toLocaleDateString('pt-BR');
          newsImage.src = article.urlToImage || 'https://via.placeholder.com/64';

          // Alternar para a próxima notícia
          currentNewsIndex = (currentNewsIndex + 1) % newsArticles.length;
      }
  }

  fetch(url)
      .then(response => response.json())
      .then(data => {
          if (data.articles && data.articles.length > 0) {
              newsArticles = data.articles.slice(0, 5); // Limita a 5 notícias
              updateNews(); // Exibe a primeira notícia

              // Atualiza a notícia a cada 5 segundos
              setInterval(updateNews, 5000);
          } else {
              newsTitle.textContent = 'Não há notícias disponíveis no momento.';
              newsTitle.href = '#';
              newsDate.textContent = '';
              newsImage.src = 'https://via.placeholder.com/64';
          }
      })
      .catch(error => {
          console.error('Erro ao buscar notícias:', error);
          newsTitle.textContent = 'Erro ao carregar notícias.';
          newsTitle.href = '#';
          newsDate.textContent = '';
          newsImage.src = 'https://via.placeholder.com/64';
      });
});

document.addEventListener('DOMContentLoaded', function () {
    const migrationBanner = document.getElementById('migrationBanner');

    // Remover o banner após o fundo desaparecer
    setTimeout(() => {
        migrationBanner.style.display = 'none';
    }, 10000); // 10 segundos para desaparecer completamente
});

