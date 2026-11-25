const modalPlano = document.querySelector('.plano-ModalCard:not(#modelpremium)');
const btnPremium = document.querySelector('.btn-premium');
const btnAssinar = document.querySelector('.btn-assinar');

const cancelar = document.getElementById('cancelar');
const confirmarAssina = document.getElementById('confirmarAssina');

const formaPagamento = modalPlano
    ? modalPlano.querySelectorAll('input[name="circulo"]')
    : [];

// MODAL GOLDEN
const modalPremium = document.getElementById('modelpremium');
const confirmargolden = document.getElementById('confirmargolden');
const cancelarpremium = document.getElementById('cancelarpremium');

const formaPagamentoGolden = modalPremium
    ? modalPremium.querySelectorAll('input[name="circuloGolden"]')
    : [];

// ABRIR MODAL COMUM
if (btnAssinar && modalPlano) {
    btnAssinar.addEventListener('click', () => {
        modalPlano.classList.add('ativo');
    });
}

// ABRIR MODAL GOLDEN
if (btnPremium && modalPremium) {
    btnPremium.addEventListener('click', () => {
        modalPremium.classList.add('ativo');
    });
}

// CANCELAR MODAL COMUM
if (cancelar && modalPlano) {
    cancelar.addEventListener('click', () => {
        modalPlano.classList.remove('ativo');
    });
}

// CANCELAR MODAL GOLDEN
if (cancelarpremium && modalPremium) {
    cancelarpremium.addEventListener('click', () => {
        modalPremium.classList.remove('ativo');
    });
}

// CONFIRMAR PLANO COMUM
if (confirmarAssina && modalPlano) {
    confirmarAssina.addEventListener('click', () => {
        const selecionado = Array.from(formaPagamento).some(radio => radio.checked);

        if (selecionado) {
            alert('Obrigado por confiar em nossa equipe. Assinatura confirmada!');
            modalPlano.classList.remove('ativo');
        } else {
            alert('Você precisa selecionar a forma de pagamento!');
        }
    });
}

// CONFIRMAR PLANO GOLDEN
if (confirmargolden && modalPremium) {
    confirmargolden.addEventListener('click', () => {
        const selecionadoGolden = Array.from(formaPagamentoGolden).some(radio => radio.checked);

        if (selecionadoGolden) {
            alert('Obrigado por confiar em nossa equipe. Assinatura Golden confirmada!');
            modalPremium.classList.remove('ativo');
        } else {
            alert('Você precisa selecionar a forma de pagamento!');
        }
    });
}

// FECHAR OS MODAIS COM A TECLA ESCAPE
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modalPlano?.classList.remove('ativo');
        modalPremium?.classList.remove('ativo');
    }
});