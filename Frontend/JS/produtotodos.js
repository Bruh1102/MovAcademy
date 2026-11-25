
document.addEventListener('DOMContentLoaded', () => {

    // =====================================
    // SELETORES
    // =====================================

    const comprarProduto = document.querySelectorAll('.comprar-produto');
    const iconeX = document.querySelectorAll('.icone-x i');
    const botaoContinuar = document.querySelectorAll('.continuar-but button');
    const botaoCarrinho = document.querySelectorAll('.carrinho-but button');

    // =====================================
    // FUNÇÃO PARA FECHAR OS MODAIS
    // =====================================

    function fecharModais() {

        document.querySelectorAll('.card-compra.ativo').forEach(modal => {
            modal.classList.remove('ativo');
        });

    }

    // =====================================
    // ABRIR MODAL DE COMPRA
    // =====================================

    comprarProduto.forEach(botao => {

        botao.addEventListener('click', event => {

            event.stopPropagation();

            // Localiza o produto
            const produto = botao.closest('.produto');

            if (!produto) return;

            // Localiza o modal correspondente
            const card = produto.querySelector('.card-compra');

            if (!card) return;

            // Fecha os outros modais
            fecharModais();

            // Abre o modal selecionado
            card.classList.add('ativo');

        });

    });

    // =====================================
    // FECHAR MODAL PELO BOTÃO X
    // =====================================

    iconeX.forEach(icone => {

        icone.addEventListener('click', event => {

            event.stopPropagation();

            const card = icone.closest('.card-compra');

            if (card) {
                card.classList.remove('ativo');
            }

        });

    });

    // =====================================
    // CONTINUAR COMPRANDO
    // =====================================

    botaoContinuar.forEach(botao => {

        botao.addEventListener('click', event => {

            event.stopPropagation();

            const card = botao.closest('.card-compra');

            if (card) {
                card.classList.remove('ativo');
            }

        });

    });

    // =====================================
    // ADICIONAR AO CARRINHO
    // =====================================

    botaoCarrinho.forEach(botao => {

        botao.addEventListener('click', event => {

            event.stopPropagation();

            const card = botao.closest('.card-compra');

            if (card) {
                card.classList.remove('ativo');
            }

            alert('Produto adicionado ao carrinho!');

        });

    });

    // =====================================
    // FECHAR AO CLICAR FORA DO MODAL
    // =====================================

    document.addEventListener('click', event => {

        const clicouDentroDoModal = event.target.closest('.card-compra');
        const clicouNoBotaoComprar = event.target.closest('.comprar-produto');

        if (clicouDentroDoModal || clicouNoBotaoComprar) {
            return;
        }

        fecharModais();

    });

    // =====================================
    // FECHAR MODAL COM A TECLA ESC
    // =====================================

    document.addEventListener('keydown', event => {

        if (event.key === 'Escape') {
            fecharModais();
        }

    });

});
