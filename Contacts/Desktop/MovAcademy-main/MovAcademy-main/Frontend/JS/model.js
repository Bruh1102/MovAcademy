const matricule = document.getElementById('matricule')
const modal = document.querySelector('.modal')
const fecharModal = document.getElementById('fecharModal')


    matricule.addEventListener('click', () => {
    modal.classList.add('ativo');
    });

fecharModal.addEventListener('click', () =>{
    modal.classList.remove('ativo');
});

modal.addEventListener('click', () => {
    if (event.target === modal) {
        modal.classList.remove('ativo');
    }
});

document.getElementById('formMatricula').addEventListener('submit', (event) => {
    event.preventDefault();

    alert('Formulário enviado com sucesso!');
    
    formMatricula.reset();
    modal.classList.remove('ativo');

});