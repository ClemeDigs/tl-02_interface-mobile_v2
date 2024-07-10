// Sélection de tous les éléments du DOM
const forms = document.querySelectorAll('form');
const inputsEmail = document.querySelectorAll('.input-email');
const msgsError = document.querySelectorAll('.msg-error');
const dialogsForms = document.querySelectorAll('.dialog-form');

// Ajout d'un écouteur d'événement sur chaque formulaire pour gérer la soumission, pour chaque formulaire en fonction de son index
/**
 * @param {HTMLElement} form
 * @param {number} index
 * @returns {void}
 */
forms.forEach((form, index) => {
    const inputEmail = inputsEmail[index];
    const msgError = msgsError[index];
    const dialogForm = dialogsForms[index];
    
    //À la soumission du formulaire, on empêche l'évènement par défaut de se produire (la soumisson), si la valeur de l'input ne contient pas de @, on ajoute un message d'erreur au p.
    /**
     * @param {Event} e
     */
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!inputEmail.value.includes('@')) {
            msgError.textContent = 'Veuillez entrer une adresse courriel valide.';
            //Sinon, on enlève le message, on affiche le dialogue qui contient le message de validation, on le cache au bout de 2 secondes, puis on soumet le formulair.
        } else {
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



