
document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // ELEMENTOS DOS MODAIS
    // =========================================

    const botoesComprar = document.querySelectorAll('.comprar-produto');
    const cardsCompra = document.querySelectorAll('.card-compra');

    // =========================================
    // FECHAR TODOS OS MODAIS
    // =========================================

    function fecharTodosModais() {
        cardsCompra.forEach((card) => {
            card.classList.remove('ativo');
        });
    }

    // =========================================
    // ABRIR MODAL DO PRODUTO
    // =========================================

    botoesComprar.forEach((botao) => {

        botao.addEventListener('click', (event) => {

            event.preventDefault();
            event.stopPropagation();

            const classeProduto = [...botao.classList].find((classe) => {
                return /^prod[1-4]$/.test(classe);
            });

            if (!classeProduto) return;

            fecharTodosModais();

            const modal = document.querySelector(
                `.card-compra.${classeProduto}`
            );

            if (modal) {
                modal.classList.add('ativo');
            }

        });

    });

    // =========================================
    // FECHAR MODAL AO CLICAR FORA
    // =========================================

    document.addEventListener('click', (event) => {

        const clicouDentroModal = event.target.closest('.card-compra');
        const clicouComprar = event.target.closest('.comprar-produto');

        if (clicouDentroModal || clicouComprar) {
            return;
        }

        fecharTodosModais();

    });

    // =========================================
    // CONTINUAR COMPRANDO
    // =========================================

    document.querySelectorAll('.continuar-but button').forEach((botao) => {

        botao.addEventListener('click', (event) => {

            event.preventDefault();
            event.stopPropagation();

            const card = botao.closest('.card-compra');

            if (card) {
                alert('Obrigado por escolher nossa loja! Volte Sempre!')
                card.classList.remove('ativo');
            }

        });

    });

    // =========================================
    // FECHAR PELO ÍCONE X
    // =========================================

    document.querySelectorAll('.icone-x').forEach((icone) => {

        icone.addEventListener('click', (event) => {

            event.preventDefault();
            event.stopPropagation();

            const card = icone.closest('.card-compra');

            if (card) {
                card.classList.remove('ativo');
            }

        });

    });

    // =========================================
    // FECHAR COM A TECLA ESC
    // =========================================

    document.addEventListener('keydown', (event) => {

        if (event.key === 'Escape') {
            fecharTodosModais();
        }

    });

});
