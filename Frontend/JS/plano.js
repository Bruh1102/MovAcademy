
const modalPlano = document.querySelector('.plano-ModalCard');
const btnPremium = document.querySelector('.btn-premium');
const btnAssinar = document.querySelector('.btn-assinar');

const cancelar = document.getElementById('cancelar');
const confirmarAssina = document.getElementById('confirmarAssina');

const formaPagamento = modalPlano.querySelectorAll('input[name="circulo"]');

// MODAL GOLDEN
const modalPremium = document.getElementById('modelpremium');
const confirmargolden = document.getElementById('confirmargolden');
const cancelarpremium = document.getElementById('cancelarpremium');

const formaPagamentoGolden = modalPremium.querySelectorAll('input[name="circuloGolden"]');


// ABRIR MODAL COMUM
btnAssinar.addEventListener('click', () => {
    modalPlano.classList.add('ativo');
});

// ABRIR MODAL GOLDEN
btnPremium.addEventListener('click', () => {
    modalPremium.classList.add('ativo');
});


// CANCELAR MODAL COMUM
cancelar.addEventListener('click', () => {
    modalPlano.classList.remove('ativo');
});

// CANCELAR MODAL GOLDEN
cancelarpremium.addEventListener('click', () => {
    modalPremium.classList.remove('ativo');
});


// CONFIRMAR PLANO COMUM
confirmarAssina.addEventListener('click', () => {

    let selecionado = false;

    formaPagamento.forEach(radio => {
        if (radio.checked) {
            selecionado = true;
        }
    });

    if (selecionado) {
        alert('Obrigado por confiar em nossa equipe. Assinatura confirmada!');
        modalPlano.classList.remove('ativo');
    } else {
        alert('Você precisa selecionar a forma de pagamento!');
    }

});


// CONFIRMAR PLANO GOLDEN
confirmargolden.addEventListener('click', () => {

    let selecionadoGolden = false;

    formaPagamentoGolden.forEach(radio => {
        if (radio.checked) {
            selecionadoGolden = true;
        }
    });

    if (selecionadoGolden) {
        alert('Obrigado por confiar em nossa equipe. Assinatura Golden confirmada!');
        modalPremium.classList.remove('ativo');
    } else {
        alert('Você precisa selecionar a forma de pagamento!');
    }

});
