
document.addEventListener('DOMContentLoaded', () => {

    const btnHamburguer = document.querySelector('#btnHamburguer');
    const painelMenu = document.querySelector('#painelMenu');

    const mobile = window.matchMedia('(max-width: 900px)');

    if (!btnHamburguer || !painelMenu) return;

    function abrirMenu() {
        painelMenu.classList.add('menu-aberto');

        painelMenu.inert = false;
        painelMenu.setAttribute('aria-hidden', 'false');

        btnHamburguer.setAttribute('aria-expanded', 'true');
        btnHamburguer.setAttribute('aria-label', 'Fechar menu');

        btnHamburguer.innerHTML = "<i class='bx bx-x'></i>";
    }

    function fecharMenu() {
        painelMenu.classList.remove('menu-aberto');

        painelMenu.inert = mobile.matches;
        painelMenu.setAttribute(
            'aria-hidden',
            mobile.matches ? 'true' : 'false'
        );

        btnHamburguer.setAttribute('aria-expanded', 'false');
        btnHamburguer.setAttribute('aria-label', 'Abrir menu');

        btnHamburguer.innerHTML = "<i class='bx bx-menu'></i>";
    }

    function atualizarMenu() {
        if (mobile.matches) {
            fecharMenu();
        } else {
            painelMenu.classList.remove('menu-aberto');
            painelMenu.inert = false;
            painelMenu.setAttribute('aria-hidden', 'false');

            btnHamburguer.setAttribute('aria-expanded', 'false');
            btnHamburguer.setAttribute('aria-label', 'Abrir menu');

            btnHamburguer.innerHTML = "<i class='bx bx-menu'></i>";
        }
    }

    btnHamburguer.addEventListener('click', () => {
        const menuAberto = painelMenu.classList.contains('menu-aberto');

        if (menuAberto) {
            fecharMenu();
        } else {
            abrirMenu();
        }
    });

    // Fecha ao clicar fora do painel
    document.addEventListener('click', (event) => {
        if (!mobile.matches) return;

        const clicouNoPainel = painelMenu.contains(event.target);
        const clicouNoBotao = btnHamburguer.contains(event.target);

        if (!clicouNoPainel && !clicouNoBotao) {
            fecharMenu();
        }
    });

    // Fecha ao pressionar ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mobile.matches) {
            fecharMenu();
        }
    });

    // Fecha ao selecionar um link de navegação
    painelMenu.querySelectorAll('a[href]').forEach((link) => {
        link.addEventListener('click', () => {
            if (
                mobile.matches &&
                link.getAttribute('href') !== '#'
            ) {
                fecharMenu();
            }
        });
    });

    // Atualiza o comportamento ao mudar o tamanho da tela
    mobile.addEventListener('change', atualizarMenu);

    atualizarMenu();
});
