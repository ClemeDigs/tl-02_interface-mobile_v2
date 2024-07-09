
const forms = document.querySelectorAll('form');
const inputsEmail = document.querySelectorAll('.input-email');
const msgsError = document.querySelectorAll('.msg-error');
const dialogsForms = document.querySelectorAll('.dialog-form');

forms.forEach((form, index) => {
    const inputEmail = inputsEmail[index];
    const msgError = msgsError[index];
    const dialogForm = dialogsForms[index];
    
    form.addEventListener('submit', (e) => {
        if (!inputEmail.value.includes('@')) {
            e.preventDefault();
            msgError.textContent = 'Veuillez entrer une adresse courriel valide.';
        } else {
            e.preventDefault();
            msgError.textContent = '';
            dialogForm.classList.remove('hidden');
            dialogForm.classList.add('flex');
            setTimeout(() => {
                dialogForm.classList.remove('flex');
                dialogForm.classList.add('hidden');
                form.submit();
            }, 2000);
        }
    });
});



