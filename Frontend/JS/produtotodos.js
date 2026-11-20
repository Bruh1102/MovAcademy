
const comprarProduto = document.querySelectorAll('.comprar-produto');
const iconeX = document.querySelectorAll('.icone-x i');
const botaoComprar = document.querySelectorAll('.continuar-but button');

// =====================================
// ABRIR MODAL DE COMPRA
// =====================================

comprarProduto.forEach(botao => {

    botao.addEventListener('click', () => {

        // Localiza o card de compra dentro do produto clicado
        const produto = botao.closest('.produto');
        const card = produto.querySelector('.card-compra');

        // Fecha outros modais abertos
        document.querySelectorAll('.card-compra.ativo').forEach(modal => {
            modal.classList.remove('ativo');
        });

        // Abre o modal correspondente
        card.classList.add('ativo');

    });

});


// =====================================
// FECHAR MODAL PELO X
// =====================================

iconeX.forEach(icone => {

    icone.addEventListener('click', () => {

        // Encontra o card de compra correspondente
        const card = icone.closest('.card-compra');

        if (card) {
            card.classList.remove('ativo');
        }

    });

});


// =====================================
// CONTINUAR COMPRANDO
// =====================================

botaoComprar.forEach(botao => {

    botao.addEventListener('click', () => {

        const card = botao.closest('.card-compra');

        if (card) {
            card.classList.remove('ativo');
        }

        alert('Compra realizada com sucesso! Agradecemos pela preferência.');

    });

});


// =====================================
// FECHAR AO CLICAR FORA DO MODAL
// =====================================

document.addEventListener('click', event => {

    document.querySelectorAll('.card-compra.ativo').forEach(card => {

        // Não fecha se clicar dentro do modal
        if (card.contains(event.target)) {
            return;
        }

        // Não fecha se clicar no botão comprar
        if (event.target.closest('.comprar-produto')) {
            return;
        }

        card.classList.remove('ativo');

    });

});
