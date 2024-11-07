document.addEventListener('DOMContentLoaded', function () {
    lucide.createIcons();

    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', toggleContent);

    function toggleContent() {
        const hiddenContent = document.getElementById('hiddenContent');
        const buttonText = document.getElementById('buttonText');
        const buttonIcon = document.getElementById('buttonIcon');

        // Toggle visibility
        hiddenContent.classList.toggle('hidden');

        // Update button text and icon
        if (hiddenContent.classList.contains('hidden')) {
            buttonText.textContent = 'See More';
            buttonIcon.classList.remove('rotate-180');
        } else {
            buttonText.textContent = 'See Less';
            buttonIcon.classList.add('rotate-180');
        }

        // Smooth scroll to new content when expanding
        if (!hiddenContent.classList.contains('hidden')) {
            hiddenContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Add fade in/out animation
        if (!hiddenContent.classList.contains('hidden')) {
            hiddenContent.style.opacity = '0';
            setTimeout(() => {
                hiddenContent.style.opacity = '1';
            }, 50);
        }
    }
});
