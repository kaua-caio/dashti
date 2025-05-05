document.addEventListener('DOMContentLoaded', function() {
    // Verificar horário de atendimento
    function checkServiceHours() {
        const now = new Date();
        const hour = now.getHours();
        const day = now.getDay(); // 0 = Domingo, 6 = Sábado
        
        // Verificar se é dia útil (segunda a sexta)
        const isWeekday = day >= 1 && day <= 5;
        
        // Verificar horário comercial (8h-11:30h e 13:30h-18h)
        const isServiceTime = 
            (hour >= 8 && hour < 11) || 
            (hour === 11 && now.getMinutes() <= 30) ||
            (hour >= 13 && hour < 18) ||
            (hour === 13 && now.getMinutes() >= 30);
        
        const statusElement = document.getElementById('statusText');
        const indicator = document.getElementById('statusIndicator');
        
        if (isWeekday && isServiceTime) {
            statusElement.textContent = "Chamados: ON ";
            indicator.className = "status-indicator status-on";
        } else {
            statusElement.textContent = "Chamados: OFF ";
            indicator.className = "status-indicator status-off";
        }
    }
    
    // Saudação personalizada
    function updateGreeting() {
        const hour = new Date().getHours();
        let greeting;
        
        if (hour >= 5 && hour < 12) {
            greeting = "Bom dia Ti";
        } else if (hour >= 12 && hour < 18) {
            greeting = "Boa tarde Ti";
        } else {
            greeting = "Boa noite Ti";
        }
        
        document.getElementById('greeting').textContent = greeting;
    }
    
    // Modal de relatórios
    const modal = document.getElementById('reportsModal');
    const btn = document.getElementById('reportsBtn');
    const closeBtn = document.getElementById('closeModal');
    
    btn.addEventListener('click', () => {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Inicialização
    checkServiceHours();
    updateGreeting();
    
    // Atualizar status a cada minuto
    setInterval(checkServiceHours, 60000);
});