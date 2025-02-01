const menuButton = document.getElementById('menu');
    const closeButton = document.getElementById('close');
    const sign = document.getElementById('sign');

    // Show sidebar when hamburger menu is clicked
    menuButton.addEventListener('click', () => {
        sign.classList.remove('hidden');  // Show sidebar
        sign.style.transform = 'translateX(0)';  // Slide it in
    });

    // Close sidebar when close button is clicked
    closeButton.addEventListener('click', () => {
        sign.style.transform = 'translateX(-100%)';  // Slide it out
        setTimeout(() => {
            sign.classList.add('hidden');  // Hide sidebar after animation
        }, 300);  // Matches the duration of the transition
    });