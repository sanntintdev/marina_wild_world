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

        if (hiddenContent.classList.contains('hidden')) {
            buttonText.textContent = 'See More';
            buttonIcon.classList.remove('rotate-180');
        } else {
            buttonText.textContent = 'See Less';
            buttonIcon.classList.add('rotate-180');
        }

        if (!hiddenContent.classList.contains('hidden')) {
            hiddenContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        if (!hiddenContent.classList.contains('hidden')) {
            hiddenContent.style.opacity = '0';
            setTimeout(() => {
                hiddenContent.style.opacity = '1';
            }, 50);
        }
    }
});
