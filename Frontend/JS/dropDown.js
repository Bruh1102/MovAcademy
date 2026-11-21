
const menuDown = document.getElementById('menu-Down');
const roupasItens = menuDown.nextElementSibling;
const iconeDown = document.getElementById('icon-down');
const roupasMenu = document.querySelector('.roupas-menu');

// SELECIONA OS TRÊS SUBMENUS
const submenus = document.querySelectorAll('.submenu-toggle');

// MENU PRINCIPAL - ROUPAS
menuDown.addEventListener('click', (e) => {

    e.preventDefault();

    roupasItens.classList.toggle('ativo');

    if (roupasItens.classList.contains('ativo')) {

        iconeDown.style.transform = 'rotate(90deg)';
        menuDown.style.backgroundColor = '#E6FF00';
        menuDown.style.padding = '8px 12px';
        menuDown.style.color = '#000';

    } else {

        iconeDown.style.transform = 'rotate(0deg)';
        menuDown.style.backgroundColor = 'transparent';
        menuDown.style.padding = '';
        menuDown.style.color = '#fff';

        // FECHA OS SUBMENUS INTERNOS
        submenus.forEach((submenu) => {

            submenu.nextElementSibling.classList.remove('ativo');

            submenu.querySelector('i').style.transform = 'rotate(0deg)';
            submenu.style.backgroundColor = 'transparent';
            submenu.style.color = '#fff';

        });

    }

});

// SUBMENUS - CAMISETAS, SHORTS E CALÇAS
submenus.forEach((submenu) => {

    submenu.addEventListener('click', (e) => {

        e.preventDefault();

        const submenuItens = submenu.nextElementSibling;
        const icone = submenu.querySelector('i');

        // FECHA OS OUTROS SUBMENUS
        submenus.forEach((outroSubmenu) => {

            if (outroSubmenu !== submenu) {

                outroSubmenu.nextElementSibling.classList.remove('ativo');

                outroSubmenu.querySelector('i').style.transform = 'rotate(0deg)';
                outroSubmenu.style.backgroundColor = 'transparent';
                outroSubmenu.style.color = '#fff';

            }

        });

        // ABRE OU FECHA O SUBMENU CLICADO
        submenuItens.classList.toggle('ativo');

        if (submenuItens.classList.contains('ativo')) {

            icone.style.transform = 'rotate(90deg)';
            submenu.style.backgroundColor = '#E6FF00';
            submenu.style.color = '#000';

        } else {

            icone.style.transform = 'rotate(0deg)';
            submenu.style.backgroundColor = 'transparent';
            submenu.style.color = '#fff';

        }

    });

});

// FECHAR MENUS AO CLICAR FORA
document.addEventListener('click', (e) => {

    if (!roupasMenu.contains(e.target)) {

        // FECHA MENU PRINCIPAL
        roupasItens.classList.remove('ativo');

        iconeDown.style.transform = 'rotate(0deg)';
        menuDown.style.backgroundColor = 'transparent';
        menuDown.style.padding = '';
        menuDown.style.color = '#fff';

        // FECHA TODOS OS SUBMENUS
        submenus.forEach((submenu) => {

            submenu.nextElementSibling.classList.remove('ativo');

            submenu.querySelector('i').style.transform = 'rotate(0deg)';
            submenu.style.backgroundColor = 'transparent';
            submenu.style.color = '#fff';

        });

    }

});
