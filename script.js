// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Dynamic Text for Hero Section
const phrases = [
    'here to build and create.',
    'a data-driven problem-solver.',
    'passionate about Data Science.',
    'an innovator in Machine Learning.'
];
let phraseIndex = 0;
const changingTextElement = document.getElementById('changing-text');

function changePhrase() {
    // Add a class to start the fade-out animation
    changingTextElement.classList.add('fade-out-text');

    setTimeout(() => {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        changingTextElement.textContent = phrases[phraseIndex];
        // Remove the fade-out class to allow the fade-in animation to run
        changingTextElement.classList.remove('fade-out-text');
    }, 500); // This duration should match the animation-duration in CSS
}

setInterval(changePhrase, 3000); // Interval set to 3s for a faster cycle.