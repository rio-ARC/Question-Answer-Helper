/**
 * Oracle of Delphi — Interaction Logic
 */

// Demo response
const DEMO_RESPONSE = "The path unfolds in shadows and light, entwined with choice and chance. Persevere, and the threads of fate may align to your purpose...";

// DOM elements
const input = document.getElementById('input');
const submitBtn = document.getElementById('submitBtn');
const questionEl = document.getElementById('question');
const responseEl = document.getElementById('response');

// Consult the Oracle
function consult() {
    const text = input.value.trim();
    if (!text) {
        input.focus();
        return;
    }

    // Format question
    const question = text.endsWith('?') ? text : text + '?';
    questionEl.textContent = question;

    // Disable inputs
    input.disabled = true;
    submitBtn.disabled = true;
    responseEl.innerHTML = '<p>...</p>';
    responseEl.classList.remove('fade-in');

    // Simulate oracle thinking
    setTimeout(() => {
        responseEl.innerHTML = `<p>${DEMO_RESPONSE}</p>`;
        responseEl.classList.add('fade-in');
        input.value = '';
        input.disabled = false;
        submitBtn.disabled = false;
        input.focus();
    }, 1200);
}

// Event listeners
submitBtn.addEventListener('click', consult);
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') consult();
});

// Focus on load
window.addEventListener('load', () => input.focus());
