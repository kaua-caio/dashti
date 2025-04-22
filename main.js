const greetingEl = document.getElementById('greeting');

function getGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) return "Olá, Bom dia!";
    if (hour < 18) return "Olá, Boa tarde!";
    return "Olá, Boa noite!";
}

greetingEl.textContent = getGreeting();
