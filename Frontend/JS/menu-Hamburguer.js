
document.addEventListener("DOMContentLoaded", () => {
    const botaoMenu = document.getElementById("menuHamburguer");
    const menuPrincipal = document.querySelector(".menu-principal");
    const menuLateral = document.querySelector(".menu-lateral");
    const navBar = document.querySelector(".nav-bar");
    const busca = document.querySelector(".busca-Treino");

    if (!botaoMenu || !menuPrincipal || !menuLateral || !navBar) {
        return;
    }

    // Guarda as posições originais dos elementos
    const referenciaMenu = menuPrincipal.nextSibling;
    const referenciaBusca = busca ? busca.nextSibling : null;

    const telaMobile = window.matchMedia("(max-width: 900px)");

    function abrirMenu() {
        menuLateral.classList.add("menu-aberto");
        botaoMenu.classList.add("ativo");

        botaoMenu.setAttribute("aria-expanded", "true");
        botaoMenu.setAttribute("aria-label", "Fechar menu");

        const icone = botaoMenu.querySelector("i");

        if (icone) {
            icone.classList.replace("bx-menu", "bx-x");
        }
    }

    function fecharMenu() {
        menuLateral.classList.remove("menu-aberto");
        botaoMenu.classList.remove("ativo");

        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");

        const icone = botaoMenu.querySelector("i");

        if (icone) {
            icone.classList.replace("bx-x", "bx-menu");
        }
    }

    function adaptarMenu() {
        if (telaMobile.matches) {
            // Coloca o menu superior dentro do menu lateral
            menuLateral.insertBefore(
                menuPrincipal,
                menuLateral.firstChild
            );

            // Coloca a busca dentro do menu lateral
            if (busca) {
                menuLateral.appendChild(busca);
            }

        } else {
            // Devolve os elementos às posições originais
            navBar.insertBefore(menuPrincipal, referenciaMenu);

            if (busca) {
                navBar.insertBefore(busca, referenciaBusca);
            }

            fecharMenu();
        }
    }

    botaoMenu.addEventListener("click", () => {
        if (menuLateral.classList.contains("menu-aberto")) {
            fecharMenu();
        } else {
            abrirMenu();
        }
    });

    // Fecha o menu ao clicar em um link de navegação
    menuLateral.querySelectorAll("a[href]").forEach(link => {
        link.addEventListener("click", () => {
            if (
                telaMobile.matches &&
                link.getAttribute("href") !== "#"
            ) {
                fecharMenu();
            }
        });
    });

    // Fecha ao clicar fora do menu
    document.addEventListener("click", event => {
        if (
            telaMobile.matches &&
            menuLateral.classList.contains("menu-aberto") &&
            !menuLateral.contains(event.target) &&
            !botaoMenu.contains(event.target)
        ) {
            fecharMenu();
        }
    });

    // Adapta o menu quando a largura da tela muda
    telaMobile.addEventListener("change", adaptarMenu);

    adaptarMenu();
});
