document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleMode');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark');
        toggleButton.textContent = body.classList.contains('dark')
            ? '☀️ Light Mode'
            : '🌙 Dark Mode';
    });

    const form = document.getElementById('contactForm');
    const response = document.getElementById('response');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        response.textContent = "✅ Thanks! Your message has been sent.";
        form.reset();
    });
});