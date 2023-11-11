
document.addEventListener('DOMContentLoaded', function(){
    
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions_faq = document.querySelectorAll('[data-faq-question]');
   
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
    for (let i = 0; i < questions_faq.length; i++){
        questions_faq[i].addEventListener('click', abreOuFechaResposta);
        
    }
    function abreOuFechaResposta(elemento){
        const classe = 'faq__questions__item--open';
        const elelmentoPai = elemento.target.parentNode;
        elelmentoPai.classList.toggle(classe)
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