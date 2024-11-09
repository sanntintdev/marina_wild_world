document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.FAQ_button').forEach((button) => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            content.classList.toggle('hidden');
            const icon = button.querySelector('i');
            icon.classList.toggle('rotate-180');
        });
    });

    const alertHtml = `
        <div id="customAlert" class="hidden bg-[#CB6040] text-[#F2E5BF] p-4 rounded-lg shadow-lg">
            <div class="flex justify-between items-start mb-2">
                <h3 class="font-bold">Please fix these errors:</h3>
            </div>
            <ul id="errorList" class="list-disc pl-4 space-y-1">
            </ul>
        </div>
    `;

    document.querySelector('#customAlertSection').insertAdjacentHTML('afterend', alertHtml);

    // Get form and input elements
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const customAlert = document.getElementById('customAlert');
    const errorList = document.getElementById('errorList');

    // Form validation
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputs = [nameInput, emailInput, subjectInput, messageInput];
        inputs.forEach((input) => {
            input.style.borderColor = '#F2E5BF20';
        });

        let errors = [];

        if (nameInput.value.trim() === '') {
            nameInput.style.borderColor = '#FD8B51';
            errors.push('Please enter your name');
        }

        if (emailInput.value.trim() === '') {
            emailInput.style.borderColor = '#FD8B51';
            errors.push('Please enter your email');
        }

        if (subjectInput.value === '') {
            subjectInput.style.borderColor = '#FD8B51';
            errors.push('Please select a subject');
        }

        if (messageInput.value.trim() === '') {
            messageInput.style.borderColor = '#FD8B51';
            errors.push('Please enter your message');
        }

        if (errors.length > 0) {
            errorList.innerHTML = errors.map((error) => `<li>${error}</li>`).join('');
            customAlert.classList.remove('hidden');
        } else {
            customAlert.classList.add('hidden');

            Swal.fire({
                title: 'Submit Form?',
                showCancelButton: true,
                confirmButtonText: 'Submit',
                confirmButtonColor: '#257180',
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your form has been submitted',
                        icon: 'success',
                        confirmButtonText: 'Close',
                        confirmButtonColor: '#257180',
                    });
                    form.reset();
                }
            });
        }
    });
});
