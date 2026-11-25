
document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // ELEMENTOS DOS MODAIS
    // =========================================

    const botoesComprar = document.querySelectorAll('.comprar-produto');
    const cardsCompra = document.querySelectorAll('.card-compra');

    // =========================================
    // FUNÇÃO PARA FECHAR TODOS OS MODAIS
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

            // Identifica o produto pelo nome da classe:
            // prod1, prod2, prod3 ou prod4
            const classeProduto = [...botao.classList].find((classe) => {
                return /^prod[1-4]$/.test(classe);
            });

            if (!classeProduto) return;

            // Fecha qualquer modal que já esteja aberto
            fecharTodosModais();

            // Encontra o modal correspondente
            const modal = document.querySelector(
                `.card-compra.${classeProduto}`
            );

            // Abre o modal correspondente
            if (modal) {
                modal.classList.add('ativo');
            }

        });

    });

    // =========================================
    // FECHAR MODAL AO CLICAR FORA
    // =========================================

    document.addEventListener('click', (event) => {

        // Se o clique foi dentro de um modal, não fecha
        if (event.target.closest('.card-compra')) {
            return;
        }

        // Se o clique foi em um botão de compra, não fecha
        if (event.target.closest('.comprar-produto')) {
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

            alert('Você pode continuar navegando pela nossa loja!');

            const card = botao.closest('.card-compra');

            if (card) {
                card.classList.remove('ativo');
            }

        });

    });

    // =========================================
    // FECHAR PELO ÍCONE X
    // =========================================

    document.querySelectorAll('.icone-x i').forEach((icone) => {

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
