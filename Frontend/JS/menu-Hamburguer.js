
document.addEventListener('DOMContentLoaded', () => {

    // ELEMENTOS DO MENU
    const btnHamburguer = document.getElementById('btnHamburguer');
    const painelMenu = document.getElementById('painelMenu');
    const iconeHamburguer = btnHamburguer?.querySelector('i');

    // VERIFICA SE OS ELEMENTOS EXISTEM
    if (!btnHamburguer || !painelMenu || !iconeHamburguer) {
        console.error('Elementos do menu hambúrguer não encontrados.');
        return;
    }

    // IDENTIFICA O TAMANHO DA TELA
    const telaMobile = window.matchMedia('(max-width: 900px)');

    // ABRIR MENU
    function abrirMenu() {

        painelMenu.classList.add('menu-aberto');

        btnHamburguer.setAttribute('aria-expanded', 'true');
        btnHamburguer.setAttribute('aria-label', 'Fechar menu');

        painelMenu.setAttribute('aria-hidden', 'false');
        painelMenu.removeAttribute('inert');

        iconeHamburguer.classList.remove('bx-menu');
        iconeHamburguer.classList.add('bx-x');

    }

    // FECHAR MENU
    function fecharMenu() {

        painelMenu.classList.remove('menu-aberto');

        btnHamburguer.setAttribute('aria-expanded', 'false');
        btnHamburguer.setAttribute('aria-label', 'Abrir menu');

        painelMenu.setAttribute('aria-hidden', 'true');
        painelMenu.setAttribute('inert', '');

        iconeHamburguer.classList.remove('bx-x');
        iconeHamburguer.classList.add('bx-menu');

    }

    // ALTERNAR MENU
    function alternarMenu() {

        const menuAberto = painelMenu.classList.contains('menu-aberto');

        if (menuAberto) {
            fecharMenu();
        } else {
            abrirMenu();
        }

    }

    // CLIQUE NO BOTÃO HAMBÚRGUER
    btnHamburguer.addEventListener('click', () => {

        if (!telaMobile.matches) return;

        alternarMenu();

    });

    // FECHAR AO CLICAR FORA DO MENU
    document.addEventListener('click', (event) => {

        if (!telaMobile.matches) return;

        const clicouNoMenu = painelMenu.contains(event.target);
        const clicouNoBotao = btnHamburguer.contains(event.target);

        if (!clicouNoMenu && !clicouNoBotao) {
            fecharMenu();
        }

    });

    // FECHAR AO CLICAR EM UM LINK
    painelMenu.querySelectorAll('a').forEach((link) => {

        link.addEventListener('click', () => {

            if (link.getAttribute('href') === '#') return;

            if (telaMobile.matches) {
                fecharMenu();
            }

        });

    });

    // FECHAR COM A TECLA ESC
    document.addEventListener('keydown', (event) => {

        if (event.key === 'Escape' && telaMobile.matches) {
            fecharMenu();
        }

    });

    // AJUSTAR O MENU QUANDO A TELA MUDAR DE TAMANHO
    function ajustarMenu() {

        if (telaMobile.matches) {

            fecharMenu();

        } else {

            painelMenu.classList.remove('menu-aberto');

            btnHamburguer.setAttribute('aria-expanded', 'false');
            btnHamburguer.setAttribute('aria-label', 'Abrir menu');

            painelMenu.setAttribute('aria-hidden', 'false');
            painelMenu.removeAttribute('inert');

            iconeHamburguer.classList.remove('bx-x');
            iconeHamburguer.classList.add('bx-menu');

        }

    }

    // OBSERVAR ALTERAÇÕES NO TAMANHO DA TELA
    telaMobile.addEventListener('change', ajustarMenu);

    // ESTADO INICIAL
    ajustarMenu();

});
