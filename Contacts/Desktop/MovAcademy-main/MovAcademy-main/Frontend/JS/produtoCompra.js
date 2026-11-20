
const comprarProduto1 = document.querySelector('.comprar-produto.prod1');
const comprarProduto2 = document.querySelector('.comprar-produto.prod2');
const comprarProduto3 = document.querySelector('.comprar-produto.prod3');
const comprarProduto4 = document.querySelector('.comprar-produto.prod4');

const produto1 = document.querySelector('.card-compra.prod1');
const produto2 = document.querySelector('.card-compra.prod2');
const produto3 = document.querySelector('.card-compra.prod3');
const produto4 = document.querySelector('.card-compra.prod4');

const botaoComprar = document.querySelectorAll('.continuar-but button');
const iconeX = document.querySelectorAll('.icone-x i');


// Abrir modal do produto 1
comprarProduto1.addEventListener('click', () => {
    produto1.classList.add('ativo');
});

// Abrir modal do produto 2
comprarProduto2.addEventListener('click', () => {
    produto2.classList.add('ativo');
});

// Abrir modal do produto 3
comprarProduto3.addEventListener('click', () => {
    produto3.classList.add('ativo');
});

// Abrir modal do produto 4
comprarProduto4.addEventListener('click', () => {
    produto4.classList.add('ativo');
});


// Fechar ao clicar fora do modal
document.addEventListener('click', (event) => {

    // Verifica se o clique foi em algum botão de abrir
    const botaoAbrir = event.target.closest('.comprar-produto');

    document.querySelectorAll('.card-compra.ativo').forEach(card => {

        if (card.contains(event.target)) {
            return;
        }

        // Não fecha imediatamente ao clicar para abrir outro modal
        if (botaoAbrir) {
            const classeProduto = [...botaoAbrir.classList]
                .find(classe => /^prod[1-4]$/.test(classe));

            if (classeProduto && card.classList.contains(classeProduto)) {
                return;
            }
        }

        card.classList.remove('ativo');

    });

});


// Fechar pelo botão continuar comprando
botaoComprar.forEach(botao => {

    botao.addEventListener('click', () => {

        alert('Compra realizada com sucesso! Agradecemos pela preferência.');

        const card = botao.closest('.card-compra');

        card.classList.remove('ativo');

    });

});


// Fechar pelo ícone X
iconeX.forEach(icone => {

    icone.addEventListener('click', () => {

        const card = icone.closest('.card-compra');

        card.classList.remove('ativo');

    });

});
