
document.addEventListener('DOMContentLoaded', function(){
    
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
            
        })
    }
})

function escondeTodasAbas() {
    const tabContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabContainer.length; i++) {
        tabContainer[i].classList.remove('shows__list--is-active');
    }
}

function removeBotaoAtivo(){
    const botao_shows = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < botao_shows.length; i++) {
        botao_shows[i].classList.remove('shows__tabs__button--is-active');
    }
}