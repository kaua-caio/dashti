document.addEventListener('DOMContentLoaded', function() {
    // Elementos principais
    const welcomeScreen = document.getElementById('welcomeScreen');
    const startBtn = document.getElementById('startBtn');
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const dashboardContainer = document.getElementById('dashboardContainer');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Tela de boas-vindas
    startBtn.addEventListener('click', function() {
        welcomeScreen.classList.add('hidden');
        showSection('dashboard');
        
        // Mostra o sidebar apenas em desktop
        if (window.innerWidth > 992) {
            sidebar.classList.add('active');
            dashboardContainer.classList.add('sidebar-active');
        }
    });
    
    // Controle do sidebar
    menuToggle.addEventListener('click', function() {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
    });
    
    closeSidebar.addEventListener('click', function() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    });
    
    sidebarOverlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    });
    
    // Navegação por seções
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            
            // Fecha o sidebar em dispositivos móveis
            if (window.innerWidth <= 992) {
                sidebar.classList.remove('active');
                sidebarOverlay.classList.remove('active');
            }
            
            // Ativa a seção correspondente
            showSection(sectionId);
            
            // Atualiza o link ativo
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // Função para mostrar uma seção específica
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.classList.add('active');
            
            // Rolagem suave para o topo
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
    
    // Inicializa os carrosséis
    const swipers = document.querySelectorAll('.swiper');
    swipers.forEach(swiperEl => {
        new Swiper(swiperEl, {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                }
            }
        });
    });
    
    // Verifica se deve mostrar a tela de boas-vindas
    const shouldShowWelcome = !sessionStorage.getItem('welcomeShown');
    
    if (!shouldShowWelcome) {
        welcomeScreen.classList.add('hidden');
        showSection('dashboard');
        
        // Mostra o sidebar apenas em desktop
        if (window.innerWidth > 992) {
            sidebar.classList.add('active');
            dashboardContainer.classList.add('sidebar-active');
        }
    } else {
        sessionStorage.setItem('welcomeShown', 'true');
    }
    
    // Ajusta o layout quando a janela é redimensionada
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            sidebarOverlay.classList.remove('active');
        }
    });
});