const menuDown = document.getElementById('menu-Down')
const roupasItens = document.querySelector('.roupas-itens')
const iconeDown = document.getElementById('icon-down')
const roupasMenu = document.querySelector('.roupas-menu')


menuDown.addEventListener('click', (e) => {
    e.preventDefault();
  roupasItens.classList.toggle('ativo')
  

if (roupasItens.classList.contains('ativo')) {
    iconeDown.style.transform = 'rotate(90deg)'
    
    menuDown.style.backgroundColor= '#E6FF00';
    menuDown.style.padding= '8px 12px';
    menuDown.style.color= '#000';
}else{
    iconeDown.style.transform = 'rotate(0deg)'
     menuDown.style.backgroundColor = 'transparent';
    menuDown.style.color= '#fff';
}

});

document.addEventListener('click', (e) => {
    if (!roupasMenu.contains(e.target)) {
        roupasItens.classList.remove('ativo')
        iconeDown.style.transform = 'rotate(0deg)'
     menuDown.style.backgroundColor = 'transparent';
    menuDown.style.color= '#fff';
    }
})