const emailLoja = document.getElementById('envio')
const modalOverlay =document.querySelector('.modal-overlay')
const fecharModal = document.getElementById('fecharModal')


emailLoja.addEventListener('click', () =>{
    modalOverlay.classList.add('ativo')
});

fecharModal.addEventListener('click', () =>{
    modalOverlay.classList.remove('ativo')
});
