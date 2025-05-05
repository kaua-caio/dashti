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