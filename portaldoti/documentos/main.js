// Toggle dark/light mode
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Filter functionality
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');
const docItems = document.querySelectorAll('.doc-item');
const cards = document.querySelectorAll('.card');

function filterDocs() {
    const selectedCategory = categoryFilter.value.toLowerCase();
    const searchTerm = searchInput.value.toLowerCase();

    docItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        const itemSearch = item.getAttribute('data-search').toLowerCase();
        
        const categoryMatch = !selectedCategory || itemCategory === selectedCategory;
        const searchMatch = !searchTerm || itemSearch.includes(searchTerm);
        
        if (categoryMatch && searchMatch) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });

    // Highlight cards when filtering
    cards.forEach(card => {
        if (!selectedCategory || card.getAttribute('data-category') === selectedCategory) {
            card.style.opacity = '1';
        } else {
            card.style.opacity = '0.5';
        }
    });
}

categoryFilter.addEventListener('change', filterDocs);
searchInput.addEventListener('input', filterDocs);

// Card click functionality
cards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        categoryFilter.value = category;
        filterDocs();
    });
});

// Simulate loading animation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.card, .doc-item').forEach(el => {
            el.style.opacity = '1';
        });
    }, 100);
});