// Theme Toggle with Persistence
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        toggleButton.textContent = '☀️';
    } else {
        body.classList.remove('dark-mode');
        toggleButton.textContent = '🌙';
    }
}

const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'dark');

toggleButton.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    toggleButton.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Form Validation
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Basic validation
        if (form.checkValidity()) {
            alert('Message sent successfully!');
            form.reset();
        } else {
            alert('Please fill all fields correctly.');
        }
    });
}

// Chart in Blog (Revenue Example)
const chartCanvas = document.getElementById('revenue-chart');
if (chartCanvas) {
    const ctx = chartCanvas.getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Revenue Growth',
                data: [0, 50, 100, 1500, 2000, 2500],
                borderColor: '#007bff',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

// Animations (fade-in on load)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.feature-card, .product-card').forEach((el, idx) => {
        el.style.animation = `fadeIn 0.5s ease-in-out ${idx * 0.5}s forwards`;
    });
});
