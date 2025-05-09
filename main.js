// Atualizar saudação conforme horário
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;
    
    if (hour < 12) {
        greeting = "Bom dia";
    } else if (hour < 18) {
        greeting = "Boa tarde";
    } else {
        greeting = "Boa noite";
    }
    
    document.getElementById('greeting').textContent = greeting + ',';
}

// Modal de relatórios
const modal = document.getElementById('reportsModal');
const btn = document.getElementById('reportsBtn');
const span = document.getElementById('closeModal');

btn.onclick = function() {
    modal.style.display = 'flex';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Efeito de digitação no status
function typeWriter(text, element, speed) {
    let i = 0;
    element.textContent = '';
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    updateGreeting();
    
    // Simular status do sistema
    setTimeout(() => {
        typeWriter("Chamados Ativos", document.getElementById('statusText'), 100);
    }, 1000);
});

function toggleTheme() {
    document.body.classList.toggle('light-mode');
  }

  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.getElementById('novidade-card').style.display = 'block';
    }, 2000); // Aparece após 2 segundos
  });

  function fecharCard() {
    document.getElementById('novidade-card').style.display = 'none';
  }s
  
  document.addEventListener('DOMContentLoaded', function() {
    const notificacao = document.getElementById('notificacao-catolica');
    const botaoFechar = document.getElementById('fechar-notificacao-catolica');
    const tempoExibicao = 5000; // 5 segundos

    function mostrarNotificacao() {
      notificacao.classList.add('mostrar');
    }

    function esconderNotificacao() {
      notificacao.classList.remove('mostrar');
    }

    // Mostrar a notificação após um pequeno delay
    setTimeout(mostrarNotificacao, 1500);

    // Esconder automaticamente
    setTimeout(esconderNotificacao, tempoExibicao + 1500);

    // Esconder ao clicar no botão
    botaoFechar.addEventListener('click', esconderNotificacao);
  });